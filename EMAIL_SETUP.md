# Email Setup Guide for Contact Form

This guide will help you configure Gmail SMTP to enable email functionality for your portfolio contact form.

## Overview

Your contact form is already fully functional with validation and email sending capabilities. You just need to configure your Gmail credentials to start receiving contact form submissions at **mdfarokahmed2002@gmail.com**.

## Prerequisites

- A Gmail account (mdfarokahmed2002@gmail.com or any Gmail account you want to use for sending)
- 2-Step Verification enabled on your Google Account

## Step-by-Step Setup

### Step 1: Enable 2-Step Verification

1. Go to your [Google Account Security Settings](https://myaccount.google.com/security)
2. Under "How you sign in to Google", click on **2-Step Verification**
3. Follow the prompts to enable 2-Step Verification if not already enabled

### Step 2: Generate App Password

1. Go to your [Google Account](https://myaccount.google.com/)
2. Click on **Security** in the left sidebar
3. Under "How you sign in to Google", click on **2-Step Verification**
4. Scroll down to the bottom and click on **App passwords**
5. You may need to sign in again
6. In the "Select app" dropdown, choose **Mail**
7. In the "Select device" dropdown, choose **Other (Custom name)**
8. Enter a name like "Portfolio Contact Form"
9. Click **Generate**
10. **Copy the 16-character password** that appears (it will look like: `abcd efgh ijkl mnop`)
11. **Important**: Save this password somewhere safe - you won't be able to see it again!

### Step 3: Configure Environment Variables

1. In your project root directory, create a file named `.env.local`
2. Add the following content (replace with your actual values):

```env
EMAIL_USER=mdfarokahmed2002@gmail.com
EMAIL_PASS=your-16-character-app-password
```

**Example:**
```env
EMAIL_USER=mdfarokahmed2002@gmail.com
EMAIL_PASS=abcdefghijklmnop
```

> **Note**: Remove any spaces from the app password when pasting it into `.env.local`

### Step 4: Restart Your Development Server

1. Stop your Next.js development server (press `Ctrl+C` in the terminal)
2. Start it again with:
   ```bash
   npm run dev
   ```

### Step 5: Test the Contact Form

1. Navigate to your portfolio website (usually `http://localhost:3000`)
2. Scroll to the contact section
3. Fill out all fields:
   - Name
   - Email
   - Project Type
   - Budget Range
   - Message
4. Click "Send Message"
5. You should see a success message
6. Check your inbox at **mdfarokahmed2002@gmail.com** for the contact form submission

## What Happens When Someone Submits the Form?

When a visitor submits your contact form:

1. **Frontend Validation**: The form validates all fields before submission
   - Name, email, project type, budget, and message are all required
   - Email format is validated
   - Error messages appear for any invalid fields

2. **Backend Processing**: The form data is sent to your API route
   - Server validates the data again
   - Creates a professional HTML email
   - Sends the email via Gmail SMTP

3. **Email Delivery**: You receive an email at **mdfarokahmed2002@gmail.com** containing:
   - Sender's name
   - Sender's email (set as Reply-To, so you can reply directly)
   - Project type
   - Budget range
   - Message content

## Troubleshooting

### "Failed to send email" Error

**Possible causes:**

1. **Incorrect App Password**
   - Make sure you're using the App Password, not your regular Gmail password
   - Ensure there are no spaces in the password
   - Try generating a new App Password

2. **2-Step Verification Not Enabled**
   - App Passwords only work when 2-Step Verification is enabled
   - Follow Step 1 to enable it

3. **Environment Variables Not Loaded**
   - Make sure `.env.local` is in the project root directory
   - Restart your development server after creating/editing `.env.local`
   - Check for typos in variable names (`EMAIL_USER` and `EMAIL_PASS`)

4. **Gmail Security Block**
   - Check your Gmail inbox for security alerts
   - You may need to allow "less secure app access" (though App Passwords should avoid this)

### Email Not Received

1. **Check Spam Folder**: The email might be in your spam/junk folder
2. **Wait a Few Minutes**: Sometimes there's a delay in email delivery
3. **Check Console**: Look for errors in your browser console or terminal

### Form Validation Not Working

The validation is already implemented and should work automatically. If you're experiencing issues:

1. Make sure JavaScript is enabled in your browser
2. Clear your browser cache
3. Check the browser console for errors

## Security Best Practices

1. **Never commit `.env.local`**: This file is already in `.gitignore` - keep it that way!
2. **Use App Passwords**: Never use your actual Gmail password in the code
3. **Rotate Passwords**: If you suspect your App Password is compromised, revoke it and generate a new one
4. **Limit Access**: Only share your `.env.local` file with trusted team members

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add the environment variables in your hosting platform's dashboard
2. **For Vercel**:
   - Go to your project settings
   - Navigate to "Environment Variables"
   - Add `EMAIL_USER` and `EMAIL_PASS`
   - Redeploy your application

3. **For Netlify**:
   - Go to Site settings → Build & deploy → Environment
   - Add `EMAIL_USER` and `EMAIL_PASS`
   - Redeploy your site

## Alternative Email Services

While this setup uses Gmail, you can also use other email services:

- **SendGrid**: Professional email service with better deliverability
- **AWS SES**: Amazon's email service
- **Resend**: Modern email API (already installed in your project!)
- **Mailgun**: Popular transactional email service

To switch services, you'll need to update the `nodemailer` configuration in `app/api/contact/route.ts`.

## Need Help?

If you're still experiencing issues:

1. Check the [Nodemailer documentation](https://nodemailer.com/)
2. Review the [Gmail SMTP settings](https://support.google.com/mail/answer/7126229)
3. Ensure your Google Account security settings allow App Passwords

---

**Your contact form is ready to go! Just complete the setup steps above and you'll start receiving contact form submissions.** 🚀
