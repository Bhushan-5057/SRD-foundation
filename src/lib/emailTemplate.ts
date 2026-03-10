export const userThankYouTemplate = ({
  name,
}: {
  name: string;
}) => `
<div style="background:#ffffff;padding:35px 18px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">

<div style="max-width:620px;margin:auto;background:#0F1510;border-radius:14px;padding:35px 30px;box-shadow:0 6px 20px rgba(0,0,0,0.05)">

<div style="text-align:center;margin-bottom:25px">
<img 
src="https://res.cloudinary.com/dmpknadzu/image/upload/v1773122429/srdlogo_oj3zw0.png"
alt="SRD Foundation"
style="height:55px"
/>
</div>

<h2 style="margin:0 0 12px 0;color:#e7efdf;font-weight:600;font-size:18px">
Thank You for Contacting Us 🌱
</h2>

<p style="font-size:13px;color:#e7efdf;margin:10px 0">
Hello <strong>${name}</strong>,
</p>

<p style="font-size:13px;color:#e7efdf;margin:10px 0">
We truly appreciate you reaching out to <strong>SRD Foundation</strong>.
Your message has been successfully received by our team.
</p>

<p style="font-size:13px;color:#e7efdf;margin:10px 0">
Our team will review your inquiry and get back to you as soon as possible.
We are grateful for your interest in supporting our mission.
</p>

<p style="font-size:13px;color:#e7efdf;margin:10px 0">
If your message is urgent, feel free to reply directly to this email.
</p>

<div style="text-align:center;margin:28px 0">

<a 
href="https://srd-foundation.vercel.app/"
style="
background:#2e7d32;
color:#ffffff;
padding:11px 22px;
text-decoration:none;
border-radius:6px;
font-size:13px;
font-weight:600;
display:inline-block;
"
>
Visit Our Website
</a>

</div>

<p style="margin-top:20px;color:#e7efdf;font-size:13px">
Warm regards,<br/>
<strong style="color:#e39054">SRD Foundation Team</strong>
</p>

<hr style="margin:28px 0;border:none;border-top:1px solid #2a322a"/>

<div style="text-align:center">

<p style="font-size:12px;color:#e7efdf;margin-bottom:12px">
Follow Us
</p>

<div style="text-align:center">

<a href="#" style="display:inline-block;margin:0 8px">
<img src="https://res.cloudinary.com/dmpknadzu/image/upload/v1773122664/facebook_goq3pa.svg" width="20"/>
</a>

<a href="#" style="display:inline-block;margin:0 8px">
<img src="https://res.cloudinary.com/dmpknadzu/image/upload/v1773122665/instagram_gmczco.svg" width="20"/>
</a>

<a href="#" style="display:inline-block;margin:0 8px">
<img src="https://res.cloudinary.com/dmpknadzu/image/upload/v1773122665/linkedin_vqadvj.svg" width="20"/>
</a>

<a href="https://wa.me/16472477735?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services" style="display:inline-block;margin:0 8px">
<img src="https://res.cloudinary.com/dmpknadzu/image/upload/v1773122665/whatsapp_kkmitf.svg" width="20"/>
</a>

</div>

</div>

<hr style="margin:28px 0;border:none;border-top:1px solid #2a322a"/>

<p style="font-size:11px;color:#E7EFDF;text-align:center">
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
<div style="background:#f4f7f4;padding:40px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">

<div style="max-width:620px;margin:auto;background:#0F1510;border-radius:14px;padding:40px 35px">

<div style="text-align:center;margin-bottom:25px">
<img 
src="https://res.cloudinary.com/dmpknadzu/image/upload/v1773122429/srdlogo_oj3zw0.png"
alt="SRD Foundation"
style="height:55px"
/>
</div>

<h2 style="margin-top:0;color:#e7efdf">
New Contact Form Submission
</h2>

<p style="color:#e7efdf;font-size:15px">
A new message has been submitted through the website contact form.
</p>

<div style="margin-top:25px;font-size:14px;color:#e7efdf">

<p><strong>Name:</strong> ${firstName} ${lastName}</p>

<p><strong>Email:</strong> ${email}</p>

<p><strong>Subject:</strong> ${subject}</p>

<p style="margin-top:15px"><strong>Message:</strong></p>

<div style="color:#e39054 background:#f6f8f6;padding:18px;border-radius:8px;border-left:4px solid #2e7d32">
${message}
</div>

</div>

<hr style="margin:35px 0;border:none;border-top:1px solid #eee"/>

<p style="font-size:12px;color:#e39054;text-align:center">
This message was submitted via the SRD Foundation website contact form.
</p>

</div>
</div>
`;