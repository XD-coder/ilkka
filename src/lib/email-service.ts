import { createEmailTransporter, getEmailConfig } from './email-config';
import { ContactFormData, createContactNotificationTemplate, createContactAutoReplyTemplate } from './email-templates';

export interface EmailSendResult {
  success: boolean;
  messageId?: string;
  error?: string;
}

// Generic email sending function
export const sendEmail = async (
  to: string | string[],
  subject: string,
  html: string,
  text: string,
  from?: string
): Promise<EmailSendResult> => {
  try {
    const transporter = createEmailTransporter();
    const config = getEmailConfig();

    const mailOptions = {
      from: from || `"${config.fromName}" <${config.fromAddress}>`,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      html,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    
    console.log('✅ Email sent successfully:', info.messageId);
    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error('❌ Failed to send email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};

// Send contact form notification to admin
export const sendContactNotification = async (data: ContactFormData): Promise<EmailSendResult> => {
  const config = getEmailConfig();
  const template = createContactNotificationTemplate(data);
  
  if (!config.contactEmail) {
    return {
      success: false,
      error: 'Contact email not configured',
    };
  }

  return sendEmail(
    config.contactEmail,
    template.subject,
    template.html,
    template.text
  );
};

// Send auto-reply to user
export const sendContactAutoReply = async (data: ContactFormData): Promise<EmailSendResult> => {
  const template = createContactAutoReplyTemplate(data);
  
  return sendEmail(
    data.email,
    template.subject,
    template.html,
    template.text
  );
};

// Send both notification and auto-reply
export const handleContactFormSubmission = async (data: ContactFormData): Promise<{
  notificationResult: EmailSendResult;
  autoReplyResult: EmailSendResult;
}> => {
  console.log('📧 Processing contact form submission for:', data.email);
  
  // Send notification to admin
  const notificationResult = await sendContactNotification(data);
  
  // Send auto-reply to user
  const autoReplyResult = await sendContactAutoReply(data);
  
  return {
    notificationResult,
    autoReplyResult,
  };
};

// Email validation utility
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Phone validation utility
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};
