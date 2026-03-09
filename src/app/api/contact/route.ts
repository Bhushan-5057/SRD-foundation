import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";
import {
  userThankYouTemplate,
  adminNotificationTemplate,
} from "../../../lib/emailTemplate";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { firstName, lastName, email, subject, message } = body;

    const fullName = `${firstName} ${lastName}`;

    // Email to Admin
    await sendMail({
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: `New Contact Form Message - ${subject}`,
      html: adminNotificationTemplate({
        firstName,
        lastName,
        email,
        subject,
        message,
      }),
    });

    // Email to User
    await sendMail({
      to: email,
      subject: "Thank You for Contacting SRD Foundation",
      html: userThankYouTemplate({
        name: fullName,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}