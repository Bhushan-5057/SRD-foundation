import { NextResponse } from "next/server";
import { sendMail } from "../../../lib/mail";
import {
  userThankYouTemplate,
  adminNotificationTemplate,
} from "../../../lib/emailTemplate";

type MailError = Error & {
  code?: string;
  command?: string;
  response?: string;
  responseCode?: number;
};

const getMailErrorDetails = (error: unknown) => {
  const err = error as MailError;

  return {
    message: err?.message ?? "Unknown email error",
    code: err?.code,
    command: err?.command,
    responseCode: err?.responseCode,
    response: err?.response,
  };
};

const getEmailConfigStatus = () => ({
  smtpHost: process.env.SMTP_HOST,
  smtpPort: process.env.SMTP_PORT,
  smtpSecure: process.env.SMTP_SECURE,
  smtpUserExists: Boolean(process.env.SMTP_USER),
  smtpPassExists: Boolean(process.env.SMTP_PASS),
  mailFrom: process.env.MAIL_FROM,
  receiverExists: Boolean(process.env.CONTACT_RECEIVER_EMAIL),
});

export async function POST(req: Request) {
  let phase = "parse-request";

  try {
    const body = await req.json();

    const { firstName, lastName, email, subject, message, phone } = body;
    const resolvedSubject = subject?.trim() || "Volunteer Registration";

     if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;

    // Email to Admin
    phase = "send-admin-email";
    await sendMail({
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: `[SRD Foundation] ${resolvedSubject}`,
      replyTo: email,
      html: adminNotificationTemplate({
        firstName,
        lastName,
        email,
        subject: resolvedSubject,
        message,
        phone,
      }),
    });

    // Email to User
    phase = "send-user-email";
    await sendMail({
      to: email,
      subject: `We received your message about "${resolvedSubject}"`,
      replyTo: process.env.CONTACT_RECEIVER_EMAIL,
      html: userThankYouTemplate({
        name: fullName,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    const details = getMailErrorDetails(error);

    console.error("Contact form email failed:", {
      phase,
      ...details,
      emailConfig: getEmailConfigStatus(),
    });

    return NextResponse.json(
      {
        success: false,
        error: "Email sending failed",
        phase,
        details:
          process.env.NODE_ENV === "development"
            ? details
            : undefined,
      },
      { status: 500 }
    );
  }
}
