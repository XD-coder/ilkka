// Email template interfaces
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export interface EmailTemplate {
  subject: string;
  html: string;
  text: string;
}

// Contact form notification email template (to admin)
export const createContactNotificationTemplate = (data: ContactFormData): EmailTemplate => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb, #1d4ed8); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 700; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; }
        .field { margin-bottom: 20px; padding: 15px; background: white; border-radius: 8px; border-left: 4px solid #2563eb; }
        .field-label { font-weight: 600; color: #475569; margin-bottom: 5px; }
        .field-value { color: #1e293b; }
        .message-box { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 20px; }
        .footer { text-align: center; padding: 20px; color: #64748b; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🩺 New Contact Form Submission</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">ILKKA Healthcare Website</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">👤 Full Name</div>
            <div class="field-value">${data.name}</div>
          </div>
          
          <div class="field">
            <div class="field-label">📧 Email Address</div>
            <div class="field-value"><a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a></div>
          </div>
          
          ${data.phone ? `
          <div class="field">
            <div class="field-label">📞 Phone Number</div>
            <div class="field-value"><a href="tel:${data.phone}" style="color: #2563eb; text-decoration: none;">${data.phone}</a></div>
          </div>
          ` : ''}
          
          ${data.company ? `
          <div class="field">
            <div class="field-label">🏢 Company</div>
            <div class="field-value">${data.company}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="field-label">📝 Subject</div>
            <div class="field-value"><strong>${data.subject}</strong></div>
          </div>
          
          <div class="message-box">
            <div class="field-label">💬 Message</div>
            <div class="field-value" style="white-space: pre-wrap; margin-top: 10px;">${data.message}</div>
          </div>
          
          <div style="margin-top: 30px; padding: 20px; background: #dbeafe; border-radius: 8px; text-align: center;">
            <p style="margin: 0; color: #1e40af; font-weight: 500;">
              📅 Submitted on ${new Date().toLocaleString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneName: 'short'
              })}
            </p>
          </div>
        </div>
        <div class="footer">
          <p>This email was generated automatically from the ILKKA Healthcare website contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
New Contact Form Submission - ILKKA Healthcare

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.company ? `Company: ${data.company}` : ''}
Subject: ${data.subject}

Message:
${data.message}

Submitted on: ${new Date().toLocaleString()}
  `.trim();

  return {
    subject: `🩺 New Contact: ${data.subject} - from ${data.name}`,
    html,
    text
  };
};

// Auto-reply email template (to user)
export const createContactAutoReplyTemplate = (data: ContactFormData): EmailTemplate => {
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting ILKKA Healthcare</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #2563eb, #1d4d8f); color: white; padding: 40px; border-radius: 12px 12px 0 0; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 700; }
        .header p { margin: 10px 0 0 0; opacity: 0.9; font-size: 16px; }
        .content { background: #f8fafc; padding: 40px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; }
        .message-box { background: white; padding: 25px; border-radius: 12px; border-left: 4px solid #10b981; margin: 20px 0; }
        .info-box { background: #dbeafe; padding: 20px; border-radius: 8px; margin: 25px 0; }
        .contact-info { background: white; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin: 20px 0; }
        .footer { text-align: center; padding: 30px; color: #64748b; font-size: 14px; }
        .button { display: inline-block; background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: 500; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🩺 Thank You, ${data.name}!</h1>
          <p>We've received your message and will get back to you soon</p>
        </div>
        <div class="content">
          <div class="message-box">
            <h3 style="margin-top: 0; color: #059669;">✅ Message Received Successfully</h3>
            <p>Thank you for reaching out to ILKKA Healthcare. We have received your inquiry about "<strong>${data.subject}</strong>" and our team will review it carefully.</p>
          </div>
          
          <div class="info-box">
            <h3 style="margin-top: 0; color: #1e40af;">📋 What happens next?</h3>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>Our healthcare specialists will review your inquiry within 24 hours</li>
              <li>We'll respond to your email address: <strong>${data.email}</strong></li>
              <li>For urgent matters, please call us directly at our contact number</li>
            </ul>
          </div>
          
          <div class="contact-info">
            <h3 style="margin-top: 0; color: #374151;">📞 Need immediate assistance?</h3>
            <p><strong>Email:</strong> contact@ilkka-healthcare.com</p>
            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
            <p><strong>Business Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM</p>
            <p><strong>Emergency:</strong> 24/7 support available for critical healthcare needs</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://ilkka-healthcare.com" class="button">Visit Our Website</a>
          </div>
          
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e;"><strong>💡 Tip:</strong> Add our email to your contacts to ensure you receive our response. Check your spam folder if you don't see our reply within 24 hours.</p>
          </div>
        </div>
        <div class="footer">
          <p><strong>ILKKA Healthcare</strong><br>
          Your trusted partner in healthcare solutions<br>
          <em>"Wellbeing at Every Step - WE CARE"</em></p>
          
          <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">
            This is an automated response. Please do not reply to this email.<br>
            If you need immediate assistance, please contact us directly.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  const text = `
Thank you for contacting ILKKA Healthcare!

Dear ${data.name},

We have received your message about "${data.subject}" and will get back to you within 24 hours.

Your message will be sent to: ${data.email}

What happens next?
- Our healthcare specialists will review your inquiry
- We'll respond within 24 hours during business hours
- For urgent matters, please call us directly

Contact Information:
Email: contact@ilkka-healthcare.com
Phone: +1 (555) 123-4567
Business Hours: Monday - Friday, 8:00 AM - 6:00 PM

ILKKA Healthcare
"Wellbeing at Every Step - WE CARE"

This is an automated response. Please do not reply to this email.
  `.trim();

  return {
    subject: `✅ Thank you for contacting ILKKA Healthcare - We'll be in touch soon!`,
    html,
    text
  };
};
