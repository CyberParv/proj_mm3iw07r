import nodemailer from "nodemailer";

const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
  console.warn(
    "Email environment variables are not fully configured. Email sending will fail."
  );
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT ? Number(SMTP_PORT) : 587,
  secure: SMTP_PORT === "465",
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

export type SendEmailParams = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

export async function sendEmail({ to, subject, text, html }: SendEmailParams) {
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    throw new Error("SMTP configuration is missing.");
  }

  if (!to) {
    throw new Error("Recipient email is missing.");
  }

  await transporter.sendMail({
    from: SMTP_FROM,
    to,
    subject,
    text,
    html,
  });
}
