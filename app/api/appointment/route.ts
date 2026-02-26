import { NextResponse } from "next/server";
import { appointmentRequestSchema } from "@/lib/validators";
import { sendEmail } from "@/lib/email";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const parsed = appointmentRequestSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const data = parsed.data;

    const officeSubject = `New Appointment Request - ${data.firstName} ${data.lastName}`;
    const officeText = `New appointment request received.

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Patient Type: ${data.patientType}
Appointment Type: ${data.appointmentType}
Preferred Date: ${data.preferredDate}
Preferred Time: ${data.preferredTime}
Insurance: ${data.insurance ?? "N/A"}
Message: ${data.message ?? "N/A"}
`;

    const patientSubject = "We received your appointment request";
    const patientText = `Hi ${data.firstName},

Thank you for contacting Coastal Dental Care. We received your appointment request and will reach out within 24 hours to confirm availability.

Preferred Date: ${data.preferredDate}
Preferred Time: ${data.preferredTime}

If you need immediate assistance, call us at (555) 234-5678.

— Coastal Dental Care`;

    await Promise.all([
      sendEmail({
        to: process.env.CONTACT_RECEIVER_EMAIL || "",
        subject: officeSubject,
        text: officeText,
      }),
      sendEmail({
        to: data.email,
        subject: patientSubject,
        text: patientText,
      }),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Appointment request error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
