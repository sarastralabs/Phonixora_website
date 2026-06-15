import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

function getNotificationHtml(name: string, email: string, company: string, message: string) {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="margin:0; padding:0; background:#f4f6f8; font-family:Arial, Helvetica, sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8; padding:40px 0;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden; border:1px solid #e5e7eb;">
        <!-- Header -->
        <tr>
          <td style="background:#2E7D32; color:#ffffff; padding:30px; text-align:center;">
            <h1 style="margin:0; font-size:28px;">📩 New Contact Form Submission</h1>
            <p style="margin:10px 0 0; font-size:15px;">
              A new inquiry has been received from your website.
            </p>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:35px;">
            <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse:collapse;">
              <tr>
                <td width="160" style="font-weight:bold; color:#2E7D32; border-bottom:1px solid #eeeeee;">
                  👤 Name
                </td>
                <td style="border-bottom:1px solid #eeeeee;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="font-weight:bold; color:#2E7D32; border-bottom:1px solid #eeeeee;">
                  📧 Email
                </td>
                <td style="border-bottom:1px solid #eeeeee;">
                  ${email}
                </td>
              </tr>
              <tr>
                <td style="font-weight:bold; color:#2E7D32; border-bottom:1px solid #eeeeee;">
                  🏢 Company
                </td>
                <td style="border-bottom:1px solid #eeeeee;">
                  ${company || 'Not provided'}
                </td>
              </tr>
            </table>
            <br>
            <h3 style="margin-bottom:10px; color:#2E7D32;">
              💬 Message
            </h3>
            <div style="background:#f8f9fa; border-left:4px solid #2E7D32; padding:18px; border-radius:6px; line-height:1.7;">
              ${message}
            </div>
            <br><br>
            <a href="mailto:${email}"
              style="display:inline-block; background:#2E7D32; color:#ffffff; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:bold;">
              Reply to ${name}
            </a>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#f8f9fa; padding:20px; text-align:center; color:#777777; font-size:13px; border-top:1px solid #eeeeee;">
            <strong>Phonixora</strong><br><br>
            This email was automatically generated from the
            <strong>Phonixora Contact Form</strong>.
            <br><br>
            Please do not reply directly to this notification email.
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`
}

function getAutoReplyHtml(name: string, email: string, company: string, message: string) {
  return `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thank You</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" bgcolor="#f4f4f4">
<tr>
<td align="center" style="padding:20px;">
<table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;">
<!-- Header -->
<tr>
<td align="center" bgcolor="#2E7D32" style="padding:35px;color:#ffffff;">
<h1 style="margin:0;">Thank You!</h1>
<p style="margin-top:10px;font-size:16px;">
We've received your message.
</p>
</td>
</tr>
<!-- Body -->
<tr>
<td style="padding:35px;">
<p style="font-size:16px;color:#444;line-height:28px;">
Hello <strong>${name}</strong>,
</p>
<p style="font-size:15px;color:#555;line-height:28px;">
Thank you for contacting <strong>Phonixora</strong>. We appreciate your interest and have successfully received your inquiry.
</p>
<p style="font-size:15px;color:#555;line-height:28px;">
Our team will review your message and get back to you as soon as possible, typically within <strong>1–2 business days</strong>.
</p>
<table width="100%" cellpadding="10" cellspacing="0" style="margin-top:25px;background:#f8f8f8;border-left:4px solid #2E7D32;">
<tr>
<td>
<strong>Your Submission</strong>
<br><br>
<b>Name:</b> ${name}<br>
<b>Email:</b> ${email}<br>
<b>Company:</b> ${company || 'Not provided'}<br><br>
<b>Message:</b>
<p style="margin-top:10px;color:#555;">
${message}
</p>
</td>
</tr>
</table>
<p style="margin-top:30px;font-size:15px;color:#555;line-height:28px;">
If your inquiry is urgent, simply reply to this email, and we'll prioritize your request.
</p>
<p style="margin-top:35px;">
Best Regards,<br>
<strong>Phonixora Team</strong>
</p>
</td>
</tr>
<!-- Footer -->
<tr>
<td align="center" bgcolor="#fafafa" style="padding:25px;font-size:13px;color:#777;border-top:1px solid #eee;line-height:22px;">
<strong style="color:#2E7D32;">Phonixora</strong>
<br><br>
This is an automated confirmation email. Please do not reply unless you have additional information regarding your inquiry.
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`
}

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Send notification email to Phonixora
    const notifResult = await resend.emails.send({
      from: 'Phonixora Website <noreply@phonixora.com>',
      to: [process.env.CONTACT_EMAIL || 'info@phonixora.com'],
      replyTo: email,
      subject: `New Inquiry from ${name} — Phonixora Contact Form`,
      html: getNotificationHtml(name, email, company, message),
    })

    if (notifResult.error) {
      console.error('Resend notification error:', notifResult.error)
      return NextResponse.json({ error: notifResult.error.message }, { status: 500 })
    }

    // Send auto-reply to the user (best-effort, don't block success)
    resend.emails.send({
      from: 'Phonixora <noreply@phonixora.com>',
      to: [email],
      replyTo: process.env.CONTACT_EMAIL || 'info@phonixora.com',
      subject: `Thank you for contacting Phonixora, ${name}!`,
      html: getAutoReplyHtml(name, email, company, message),
    }).catch((err) => {
      console.error('Auto-reply failed (non-critical):', err)
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('API route error:', err)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}
