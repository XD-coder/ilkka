# 📧 ILKKA Healthcare Email System Setup

## Overview
This email system uses **Nodemailer** with **Gmail SMTP** and **Google App Passwords** to handle contact form submissions. The system sends both admin notifications and user auto-replies.

## 🚀 Features
- ✅ Contact form email notifications to admin
- ✅ Auto-reply emails to users
- ✅ Professional HTML email templates
- ✅ Rate limiting (3 requests per 15 minutes per IP/email)
- ✅ Input validation and sanitization
- ✅ TypeScript support
- ✅ Error handling and logging
- ✅ Development email testing endpoint

## 📋 Prerequisites

### 1. Gmail Account Setup
You need a Gmail account to send emails. Follow these steps:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification
   - App passwords → Generate a new app password
   - Select "Mail" and your device/app name
   - **Copy the 16-character password** (you'll need this)

### 2. Environment Variables
Create/update your `.env.local` file with:

```env
# Email Configuration
EMAIL_USER=your-gmail-address@gmail.com
EMAIL_APP_PASSWORD=your-16-character-app-password
EMAIL_FROM_NAME=ILKKA Healthcare
EMAIL_FROM_ADDRESS=noreply@ilkka-healthcare.com

# Contact Form Configuration
CONTACT_EMAIL_TO=contact@ilkka-healthcare.com
```

## 🔧 Configuration Details

### Required Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `EMAIL_USER` | Your Gmail address | `admin@gmail.com` |
| `EMAIL_APP_PASSWORD` | Gmail app password (16 chars) | `abcd efgh ijkl mnop` |
| `EMAIL_FROM_NAME` | Sender display name | `ILKKA Healthcare` |
| `EMAIL_FROM_ADDRESS` | From email address | `noreply@ilkka-healthcare.com` |
| `CONTACT_EMAIL_TO` | Where contact forms are sent | `contact@ilkka-healthcare.com` |

### Google App Password Setup (Detailed)

1. **Sign in to your Google Account**
2. **Go to Security settings**: https://myaccount.google.com/security
3. **Under "Signing in to Google"**, select **2-Step Verification**
4. **Enable 2-Step Verification** if not already enabled
5. **Go to App passwords**: https://myaccount.google.com/apppasswords
6. **Select "Mail"** and choose your device
7. **Generate** and **copy the 16-character password**
8. **Use this password** in your `EMAIL_APP_PASSWORD` environment variable

## 🧪 Testing the Email System

### 1. Test Email Configuration (Development Only)
```bash
# Check if email config is valid
curl http://localhost:3000/api/test-email

# Send a test email
curl -X POST http://localhost:3000/api/test-email \
  -H "Content-Type: application/json" \
  -d '{"testEmail": "your-test-email@example.com"}'
```

### 2. Test Contact Form
Navigate to your contact form and submit a test message. You should receive:
- Admin notification email (to `CONTACT_EMAIL_TO`)
- Auto-reply email (to the user's email)

## 📁 File Structure

```
src/
├── lib/
│   ├── email-config.ts      # Email configuration and transporter
│   ├── email-templates.ts   # HTML email templates
│   └── email-service.ts     # Email sending functions
├── app/
│   └── api/
│       ├── contact/
│       │   └── route.ts     # Contact form API endpoint
│       └── test-email/
│           └── route.ts     # Email testing endpoint (dev only)
└── components/
    └── contact.tsx          # Contact form component
```

## 🔒 Security Features

### Rate Limiting
- **3 requests per 15 minutes** per IP/email combination
- Prevents spam and abuse
- Returns 429 status code when exceeded

### Input Validation
- **Required fields**: name, email, subject, message
- **Email format validation**
- **Phone number format validation**
- **Length limits** on all fields
- **XSS protection** through input sanitization

### Error Handling
- **Graceful degradation**: If one email fails, the other still sends
- **Detailed logging** for debugging
- **User-friendly error messages**
- **No sensitive data exposure**

## 📧 Email Templates

### Admin Notification Email
- **Subject**: `🩺 New Contact: [Subject] - from [Name]`
- **Content**: Professional formatted contact details
- **Features**: Clickable email/phone links, timestamp, all form data

### User Auto-Reply Email
- **Subject**: `✅ Thank you for contacting ILKKA Healthcare - We'll be in touch soon!`
- **Content**: Professional thank you message with next steps
- **Features**: Contact information, expected response time, helpful tips

## 🚀 Deployment

### Environment Variables for Production
Make sure to set these in your production environment:

```env
EMAIL_USER=your-production-gmail@gmail.com
EMAIL_APP_PASSWORD=your-production-app-password
EMAIL_FROM_NAME=ILKKA Healthcare
EMAIL_FROM_ADDRESS=noreply@ilkka-healthcare.com
CONTACT_EMAIL_TO=contact@ilkka-healthcare.com
NODE_ENV=production
```

### Security Considerations
1. **Never commit** `.env.local` to version control
2. **Use different Gmail accounts** for development and production
3. **Regularly rotate** app passwords
4. **Monitor** email sending logs
5. **Set up alerts** for email delivery failures

## 🛠 Troubleshooting

### Common Issues

#### 1. "Invalid login" Error
- ✅ Check `EMAIL_USER` is correct
- ✅ Verify 2FA is enabled on Gmail
- ✅ Regenerate app password
- ✅ Ensure no spaces in app password

#### 2. Emails Not Sending
- ✅ Check internet connection
- ✅ Verify Gmail SMTP isn't blocked
- ✅ Check spam folder
- ✅ Verify environment variables are loaded

#### 3. Rate Limiting Issues
- ✅ Wait 15 minutes between tests
- ✅ Use different email addresses for testing
- ✅ Check server logs for rate limit details

### Debug Commands

```bash
# Check environment variables
npm run build && npm start

# View detailed logs
tail -f logs/email.log

# Test email configuration
curl http://localhost:3000/api/test-email
```

## 🔄 Future Enhancements

- [ ] **Email queue system** for high volume
- [ ] **Email templates in database** for easy editing
- [ ] **Attachment support** for contact forms
- [ ] **Email analytics** and delivery tracking
- [ ] **Multiple email providers** (SendGrid, AWS SES)
- [ ] **Email template preview** in admin dashboard

## 📞 Support

If you encounter issues:
1. Check the troubleshooting section above
2. Verify your Gmail app password setup
3. Test with the development email endpoint
4. Check server logs for detailed error messages

---

**Last Updated**: August 6, 2025  
**Version**: 1.0.0
