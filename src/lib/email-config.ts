import nodemailer from 'nodemailer';

// Email configuration interface
export interface EmailConfig {
  user: string;
  appPassword: string;
  fromName: string;
  fromAddress: string;
  contactEmail: string;
}

// Get email configuration from environment variables
export const getEmailConfig = (): EmailConfig => {
  const config = {
    user: process.env.EMAIL_USER || '',
    appPassword: process.env.EMAIL_APP_PASSWORD || '',
    fromName: process.env.EMAIL_FROM_NAME || 'ILKKA Healthcare',
    fromAddress: process.env.EMAIL_FROM_ADDRESS || 'noreply@ilkka-healthcare.com',
    contactEmail: process.env.CONTACT_EMAIL_TO || '',
  };

  // Validate required fields
  if (!config.user || !config.appPassword) {
    throw new Error('Email configuration is incomplete. Please set EMAIL_USER and EMAIL_APP_PASSWORD environment variables.');
  }

  return config;
};

// Create nodemailer transporter
export const createEmailTransporter = () => {
  const config = getEmailConfig();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.user,
      pass: config.appPassword,
    },
    secure: true,
  });

  return transporter;
};

// Verify email configuration
export const verifyEmailConfig = async (): Promise<boolean> => {
  try {
    const transporter = createEmailTransporter();
    await transporter.verify();
    console.log('✅ Email configuration verified successfully');
    return true;
  } catch (error) {
    console.error('❌ Email configuration verification failed:', error);
    return false;
  }
};
