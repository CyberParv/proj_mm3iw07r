import { NextResponse } from "next/server";
import { contactRequestSchema } from "@/lib/validators";
import { sendEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const parsed = contactRequestSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const officeSubject = `New Contact Form Message - ${data.name}`;
    const officeText = `New contact message received.

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Message: ${data.message}`;

    const senderSubject = "Thanks for contacting Coastal Dental Care";
    const senderText = `Hi ${data.name},

Thanks for reaching out. Our team will respond within 1 business day.

If this is urgent, call (555) 234-5678.

— Coastal Dental Care`;

    await Promise.all([
      sendEmail({
        to: process.env.CONTACT_RECEIVER_EMAIL || "",
        subject: officeSubject,
        text: officeText,
      }),
      sendEmail({
        to: data.email,
        subject: senderSubject,
        text: senderText,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact request error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
