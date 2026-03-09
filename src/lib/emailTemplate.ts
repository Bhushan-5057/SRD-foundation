export const userThankYouTemplate = ({
  name,
}: {
  name: string;
}) => `
<div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#333;background:#f7f7f7;padding:40px 20px">

<div style="max-width:600px;margin:auto;background:#ffffff;border-radius:10px;padding:40px">

<h2 style="margin-top:0;color:#2e7d32">Thank You for Contacting Us 🌱</h2>

<p>Hello <strong>${name}</strong>,</p>

<p>
We truly appreciate you reaching out to <strong>SRD Foundation</strong>.
Your message has been successfully received by our team.
</p>

<p>
Our team will review your inquiry and get back to you as soon as possible.
We are grateful for your interest in supporting our mission.
</p>

<p>
If your message is urgent, feel free to reply directly to this email.
</p>

<p style="margin-top:30px">
Warm regards,<br/>
<strong>SRD Foundation Team</strong>
</p>

<hr style="margin:30px 0;border:none;border-top:1px solid #eee"/>

<p style="font-size:12px;color:#888">
SRD Foundation • Building a better community through compassion and action.
</p>

</div>
</div>
`; 

export const adminNotificationTemplate = ({
  firstName,
  lastName,
  email,
  subject,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}) => `
<div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#333;background:#f7f7f7;padding:40px 20px">

<div style="max-width:600px;margin:auto;background:#ffffff;border-radius:10px;padding:40px">

<h2 style="margin-top:0;color:#2e7d32">New Contact Form Submission</h2>

<p>A new message has been submitted through the website contact form.</p>

<div style="margin-top:20px">

<p><strong>Name:</strong> ${firstName} ${lastName}</p>

<p><strong>Email:</strong> ${email}</p>

<p><strong>Subject:</strong> ${subject}</p>

<p><strong>Message:</strong></p>

<p style="background:#f6f6f6;padding:15px;border-radius:6px">
${message}
</p>

</div>

<hr style="margin:30px 0;border:none;border-top:1px solid #eee"/>

<p style="font-size:12px;color:#888">
This message was submitted via the SRD Foundation website contact form.
</p>

</div>
</div>
`;