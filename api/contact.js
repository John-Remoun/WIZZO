// api/contact.js
import { Resend } from 'resend';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, message } = req.body || {};

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, and message are required.',
      });
    }

    if (!process.env.RESEND_API_KEY) {
      return res.status(500).json({
        success: false,
        error: 'Server configuration error: RESEND_API_KEY is not configured.',
      });
    }

    if (!process.env.CLIENT_EMAIL) {
      return res.status(500).json({
        success: false,
        error: 'Server configuration error: CLIENT_EMAIL is not configured.',
      });
    }

    // Send email using Resend
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: [process.env.CLIENT_EMAIL],
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.6;">
          <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0070f3; border-radius: 4px; white-space: pre-wrap;">${message}</div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return res.status(400).json({ success: false, error: error.message || 'Failed to send email via Resend' });
    }

    return res.status(200).json({ success: true, message: 'Email sent successfully', data });
  } catch (error) {
    console.error('API Contact Handler Error:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'An unexpected error occurred while sending the email.',
    });
  }
}