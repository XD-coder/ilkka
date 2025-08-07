import { NextRequest, NextResponse } from 'next/server';
import { handleContactFormSubmission, validateEmail, validatePhone } from '@/lib/email-service';
import { ContactFormData } from '@/lib/email-templates';

// Rate limiting map (in production, use Redis or a proper rate limiting service)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 3; // Max 3 requests per window

function getRateLimitKey(ip: string, email: string): string {
  return `${ip}:${email}`;
}

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  record.count++;
  return false;
}

// Input validation
function validateContactFormData(data: unknown): { isValid: boolean; errors: string[] } {
  const errors: string[] = [];

  // Check if data is an object
  if (!data || typeof data !== 'object') {
    errors.push('Invalid data format');
    return { isValid: false, errors };
  }

  const formData = data as Record<string, unknown>;

  // Required fields
  if (!formData.name || typeof formData.name !== 'string' || formData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }

  if (!formData.email || typeof formData.email !== 'string' || !validateEmail(formData.email)) {
    errors.push('Valid email address is required');
  }

  if (!formData.subject || typeof formData.subject !== 'string' || formData.subject.trim().length < 5) {
    errors.push('Subject must be at least 5 characters long');
  }

  if (!formData.message || typeof formData.message !== 'string' || formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  // Optional fields validation
  if (formData.phone && (typeof formData.phone !== 'string' || !validatePhone(formData.phone))) {
    errors.push('Invalid phone number format');
  }

  if (formData.company && typeof formData.company !== 'string') {
    errors.push('Company name must be a string');
  }

  // Length limits
  if (formData.name && typeof formData.name === 'string' && formData.name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  if (formData.subject && typeof formData.subject === 'string' && formData.subject.length > 200) {
    errors.push('Subject must be less than 200 characters');
  }

  if (formData.message && typeof formData.message === 'string' && formData.message.length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }

  if (formData.company && typeof formData.company === 'string' && formData.company.length > 100) {
    errors.push('Company name must be less than 100 characters');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Parse request body
    const body = await request.json();
    
    // Validate input
    const validation = validateContactFormData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Validation failed', 
          details: validation.errors 
        },
        { status: 400 }
      );
    }

    // Check rate limiting
    const rateLimitKey = getRateLimitKey(ip, body.email);
    if (isRateLimited(rateLimitKey)) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please wait 15 minutes before submitting again.' 
        },
        { status: 429 }
      );
    }

    // Create contact form data
    const contactData: ContactFormData = {
      name: body.name.trim(),
      email: body.email.trim().toLowerCase(),
      phone: body.phone?.trim() || undefined,
      company: body.company?.trim() || undefined,
      subject: body.subject.trim(),
      message: body.message.trim(),
    };

    // Send emails
    const results = await handleContactFormSubmission(contactData);

    // Log results
    console.log('📧 Contact form processing results:', {
      notification: results.notificationResult.success,
      autoReply: results.autoReplyResult.success,
      email: contactData.email
    });

    // Check if both emails were sent successfully
    const bothSuccessful = results.notificationResult.success && results.autoReplyResult.success;
    
    if (bothSuccessful) {
      return NextResponse.json({
        success: true,
        message: 'Your message has been sent successfully! We\'ll get back to you within 24 hours.'
      });
    } else {
      // Partial failure - log for investigation
      console.error('⚠️ Partial email sending failure:', {
        notification: results.notificationResult,
        autoReply: results.autoReplyResult
      });

      // If notification failed but auto-reply succeeded, still return success to user
      if (!results.notificationResult.success && results.autoReplyResult.success) {
        return NextResponse.json({
          success: true,
          message: 'Your message has been sent! We\'ll get back to you soon.'
        });
      }

      // If auto-reply failed but notification succeeded, return success but mention email issues
      if (results.notificationResult.success && !results.autoReplyResult.success) {
        return NextResponse.json({
          success: true,
          message: 'Your message has been sent successfully!'
        });
      }

      // Both failed
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send your message. Please try again or contact us directly.' 
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('❌ Contact form API error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected error occurred. Please try again later.' 
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
