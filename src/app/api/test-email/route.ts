import { NextRequest, NextResponse } from 'next/server';
import { verifyEmailConfig, getEmailConfig } from '@/lib/email-config';
import { sendEmail } from '@/lib/email-service';

export async function GET(request: NextRequest) {
  try {
    // Only allow in development mode for security
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'Email testing is not available in production' },
        { status: 403 }
      );
    }

    // Verify email configuration
    const isConfigValid = await verifyEmailConfig();
    
    if (!isConfigValid) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email configuration verification failed',
          message: 'Please check your EMAIL_USER and EMAIL_APP_PASSWORD environment variables'
        },
        { status: 500 }
      );
    }

    // Get configuration details (without sensitive data)
    const config = getEmailConfig();
    const configSummary = {
      user: config.user.replace(/(.{2}).*(@.*)/, '$1***$2'), // Mask email
      fromName: config.fromName,
      fromAddress: config.fromAddress,
      contactEmail: config.contactEmail ? config.contactEmail.replace(/(.{2}).*(@.*)/, '$1***$2') : 'Not set',
    };

    return NextResponse.json({
      success: true,
      message: 'Email configuration is valid',
      config: configSummary,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('❌ Email test error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Email test failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Only allow in development mode for security
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { error: 'Email testing is not available in production' },
        { status: 403 }
      );
    }

    const body = await request.json();
    const { testEmail } = body;

    if (!testEmail || typeof testEmail !== 'string') {
      return NextResponse.json(
        { error: 'Test email address is required' },
        { status: 400 }
      );
    }

    // Send a test email
    const result = await sendEmail(
      testEmail,
      '🧪 ILKKA Healthcare - Email Test',
      `
        <h2>✅ Email Test Successful!</h2>
        <p>If you received this email, your ILKKA Healthcare email configuration is working correctly.</p>
        <p><strong>Test details:</strong></p>
        <ul>
          <li>Sent at: ${new Date().toLocaleString()}</li>
          <li>To: ${testEmail}</li>
          <li>Environment: ${process.env.NODE_ENV}</li>
        </ul>
        <p style="color: #666; font-size: 14px; margin-top: 20px;">
          This is a test email from the ILKKA Healthcare contact form system.
        </p>
      `,
      `
Email Test Successful!

If you received this email, your ILKKA Healthcare email configuration is working correctly.

Test details:
- Sent at: ${new Date().toLocaleString()}
- To: ${testEmail}
- Environment: ${process.env.NODE_ENV}

This is a test email from the ILKKA Healthcare contact form system.
      `.trim()
    );

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: `Test email sent successfully to ${testEmail}`,
        messageId: result.messageId
      });
    } else {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Failed to send test email',
          details: result.error
        },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('❌ Email test send error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Test email sending failed',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
