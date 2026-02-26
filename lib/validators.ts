import { z } from "zod";

const phoneRegex = /^[+()\d\s-]{7,20}$/;

export const appointmentRequestSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().regex(phoneRegex, "Valid phone number is required"),
  patientType: z.enum(["New Patient", "Existing Patient"]),
  appointmentType: z.enum([
    "Cleaning & Exam",
    "Teeth Whitening",
    "Dental Implant Consultation",
    "Invisalign Consultation",
    "Emergency Visit",
    "Other",
  ]),
  preferredDate: z
    .string()
    .min(1, "Preferred date is required")
    .refine((value) => !Number.isNaN(Date.parse(value)), {
      message: "Preferred date must be a valid date",
    }),
  preferredTime: z.enum([
    "Morning (7AM-11AM)",
    "Midday (11AM-2PM)",
    "Afternoon (2PM-6PM)",
  ]),
  insurance: z.string().optional().nullable(),
  message: z.string().optional().nullable(),
});

export const contactRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().regex(phoneRegex, "Valid phone number is required"),
  message: z.string().min(1, "Message is required"),
});
