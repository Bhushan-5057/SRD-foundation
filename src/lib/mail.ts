import nodemailer from "nodemailer";

const requiredEmailEnv = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "CONTACT_RECEIVER_EMAIL",
] as const;

export function validateEmailEnv() {
  const missing = requiredEmailEnv.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required email environment variables: ${missing.join(", ")}`);
  }
}

const smtpPort = Number(process.env.SMTP_PORT ?? 465);
const smtpSecure = process.env.SMTP_SECURE
  ? process.env.SMTP_SECURE === "true"
  : smtpPort === 465;
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const fromEmail = process.env.MAIL_FROM ?? smtpUser;
const fromName = process.env.MAIL_FROM_NAME ?? "SRD Foundation";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpSecure,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

export async function verifyMailTransport() {
  validateEmailEnv();
  await transporter.verify();
}

export async function sendMail({
  to,
  subject,
  html,
  replyTo,
}: {
  to: string;
  subject: string;
  html: string;
  replyTo?: string;
}) {
  validateEmailEnv();

  await transporter.sendMail({
    from: `"${fromName}" <${fromEmail}>`,
    to,
    subject,
    html,
    replyTo,
  });
}
