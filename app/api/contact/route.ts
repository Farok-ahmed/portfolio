import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, projectType, budget, message } = await request.json();

    // Validate required fields
    if (!name || !email || !projectType || !budget || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // Use App Password, not your regular password
      },
    });

    // Email content with professional template
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "mdfarokahmed2002@gmail.com",
      replyTo: email,
      subject: `🚀 New Portfolio Contact: ${projectType} Project from ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 40px 0;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header with Gradient -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 40px 30px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                        📬 New Contact Request
                      </h1>
                      <p style="margin: 10px 0 0 0; color: #e0e7ff; font-size: 14px;">
                        Someone is interested in working with you!
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Contact Information Section -->
                  <tr>
                    <td style="padding: 40px 30px 20px 30px;">
                      <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; font-weight: 600;">
                        👤 Contact Information
                      </h2>
                      
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #3b82f6; margin-bottom: 10px;">
                            <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                            <p style="margin: 5px 0 0 0; font-size: 16px; color: #111827; font-weight: 600;">${name}</p>
                          </td>
                        </tr>
                        <tr><td style="height: 10px;"></td></tr>
                        <tr>
                          <td style="padding: 15px; background-color: #f9fafb; border-left: 4px solid #10b981;">
                            <p style="margin: 0; font-size: 12px; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                            <p style="margin: 5px 0 0 0; font-size: 16px; color: #111827; font-weight: 600;">
                              <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Project Details Section -->
                  <tr>
                    <td style="padding: 20px 30px;">
                      <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 20px; font-weight: 600;">
                        💼 Project Details
                      </h2>
                      
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="width: 50%; padding-right: 10px;">
                            <div style="padding: 20px; background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%); border-radius: 12px; text-align: center;">
                              <p style="margin: 0; font-size: 12px; color: #3b82f6; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Project Type</p>
                              <p style="margin: 8px 0 0 0; font-size: 18px; color: #1e40af; font-weight: 700;">${projectType}</p>
                            </div>
                          </td>
                          <td style="width: 50%; padding-left: 10px;">
                            <div style="padding: 20px; background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); border-radius: 12px; text-align: center;">
                              <p style="margin: 0; font-size: 12px; color: #10b981; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Budget Range</p>
                              <p style="margin: 8px 0 0 0; font-size: 18px; color: #065f46; font-weight: 700;">${budget}</p>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  
                  <!-- Message Section -->
                  <tr>
                    <td style="padding: 20px 30px 40px 30px;">
                      <h2 style="margin: 0 0 15px 0; color: #1f2937; font-size: 20px; font-weight: 600;">
                        💬 Message
                      </h2>
                      <div style="background-color: #fefce8; border-left: 4px solid #eab308; padding: 20px; border-radius: 8px;">
                        <p style="margin: 0; color: #713f12; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>
                  
                  <!-- Action Button -->
                  <tr>
                    <td style="padding: 0 30px 40px 30px; text-align: center;">
                      <a href="mailto:${email}?subject=Re: ${projectType} Project Inquiry" style="display: inline-block; padding: 16px 32px; background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; box-shadow: 0 4px 6px rgba(59, 130, 246, 0.3);">
                        📧 Reply to ${name}
                      </a>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">
                        📅 Received on ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                      <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">
                        🕐 ${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })}
                      </p>
                      <p style="margin: 15px 0 0 0; color: #9ca3af; font-size: 12px;">
                        This email was automatically generated from your portfolio contact form.
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Send notification email to you
    await transporter.sendMail(mailOptions);

    // Auto-reply thank you email to the user
    const thankYouEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `✨ Thank You for Reaching Out, ${name}!`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Your Message</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #fafafa; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 40px 20px;">
                <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);">
                  
                  <!-- Header with Purple Gradient -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%); padding: 50px 40px; text-align: center; position: relative;">
                      <div style="font-size: 60px; margin-bottom: 10px;">🎉</div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 800; letter-spacing: -1px;">
                        Thank You, ${name}!
                      </h1>
                      <p style="margin: 15px 0 0 0; color: #e0e7ff; font-size: 16px; line-height: 1.5;">
                        I've received your message and I'm excited to learn more about your project!
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Main Content -->
                  <tr>
                    <td style="padding: 50px 40px;">
                      <h2 style="margin: 0 0 20px 0; color: #1f2937; font-size: 24px; font-weight: 700;">
                        What Happens Next?
                      </h2>
                      
                      <div style="background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 16px; padding: 30px; margin-bottom: 30px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 15px 0; border-bottom: 1px solid #bae6fd;">
                              <div style="display: flex; align-items: start;">
                                <div style="font-size: 24px; margin-right: 15px;">📋</div>
                                <div>
                                  <h3 style="margin: 0 0 5px 0; color: #0c4a6e; font-size: 16px; font-weight: 600;">Review Your Request</h3>
                                  <p style="margin: 0; color: #075985; font-size: 14px; line-height: 1.5;">I'll carefully review your project details and requirements.</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 15px 0; border-bottom: 1px solid #bae6fd;">
                              <div style="display: flex; align-items: start;">
                                <div style="font-size: 24px; margin-right: 15px;">💭</div>
                                <div>
                                  <h3 style="margin: 0 0 5px 0; color: #0c4a6e; font-size: 16px; font-weight: 600;">Prepare a Response</h3>
                                  <p style="margin: 0; color: #075985; font-size: 14px; line-height: 1.5;">I'll think about the best approach for your ${projectType} project.</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 15px 0;">
                              <div style="display: flex; align-items: start;">
                                <div style="font-size: 24px; margin-right: 15px;">📧</div>
                                <div>
                                  <h3 style="margin: 0 0 5px 0; color: #0c4a6e; font-size: 16px; font-weight: 600;">Get Back to You</h3>
                                  <p style="margin: 0; color: #075985; font-size: 14px; line-height: 1.5;">Expect a personalized response within 24-48 hours.</p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </div>
                      
                      <!-- Project Summary -->
                      <div style="background-color: #faf5ff; border: 2px solid #e9d5ff; border-radius: 12px; padding: 25px; margin-bottom: 30px;">
                        <h3 style="margin: 0 0 15px 0; color: #6b21a8; font-size: 18px; font-weight: 600;">
                          📝 Your Submission Summary
                        </h3>
                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 8px 0; color: #7c3aed; font-weight: 600; font-size: 14px; width: 140px;">Project Type:</td>
                            <td style="padding: 8px 0; color: #581c87; font-size: 14px;">${projectType}</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #7c3aed; font-weight: 600; font-size: 14px;">Budget Range:</td>
                            <td style="padding: 8px 0; color: #581c87; font-size: 14px;">${budget}</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #7c3aed; font-weight: 600; font-size: 14px; vertical-align: top;">Your Message:</td>
                            <td style="padding: 8px 0; color: #581c87; font-size: 14px; line-height: 1.6;">${message.substring(0, 150)}${message.length > 150 ? '...' : ''}</td>
                          </tr>
                        </table>
                      </div>
                      
                      <!-- Call to Action -->
                      <div style="text-align: center; margin: 40px 0;">
                        <p style="margin: 0 0 20px 0; color: #4b5563; font-size: 15px; line-height: 1.6;">
                          In the meantime, feel free to check out my portfolio or connect with me on social media!
                        </p>
                      </div>
                      
                    </td>
                  </tr>
                  
                  <!-- Social Links Section -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #f9fafb 0%, #f3f4f6 100%); padding: 40px; text-align: center; border-top: 1px solid #e5e7eb;">
                      <h3 style="margin: 0 0 20px 0; color: #374151; font-size: 18px; font-weight: 600;">
                        Let's Connect
                      </h3>
                      <table role="presentation" style="margin: 0 auto; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 0 10px;">
                            <a href="https://github.com/farok-ahmed" style="display: inline-block; width: 44px; height: 44px; background-color: #ffffff; border-radius: 50%; text-decoration: none; line-height: 44px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
                              <span style="font-size: 20px;">💻</span>
                            </a>
                          </td>
                          <td style="padding: 0 10px;">
                            <a href="https://linkedin.com/in/farok-ahmed" style="display: inline-block; width: 44px; height: 44px; background-color: #ffffff; border-radius: 50%; text-decoration: none; line-height: 44px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
                              <span style="font-size: 20px;">💼</span>
                            </a>
                          </td>
                          <td style="padding: 0 10px;">
                            <a href="https://twitter.com/farok_ahmed" style="display: inline-block; width: 44px; height: 44px; background-color: #ffffff; border-radius: 50%; text-decoration: none; line-height: 44px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
                              <span style="font-size: 20px;">🐦</span>
                            </a>
                          </td>
                        </tr>
                      </table>
                      <p style="margin: 25px 0 0 0; color: #6b7280; font-size: 14px;">
                        📧 <a href="mailto:mdfarokahmed2002@gmail.com" style="color: #8b5cf6; text-decoration: none; font-weight: 600;">mdfarokahmed2002@gmail.com</a>
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #111827; padding: 30px 40px; text-align: center;">
                      <p style="margin: 0 0 10px 0; color: #9ca3af; font-size: 14px; line-height: 1.6;">
                        This is an automated confirmation email. Please do not reply to this message.
                      </p>
                      <p style="margin: 0; color: #6b7280; font-size: 12px;">
                        © ${new Date().getFullYear()} Farok Ahmed. All rights reserved.
                      </p>
                    </td>
                  </tr>
                  
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Send thank you email to the user
    await transporter.sendMail(thankYouEmail);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
