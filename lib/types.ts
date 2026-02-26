export interface NavItem {
  label: string;
  href: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export interface PricingItem {
  name: string;
  price: string;
  description: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  image: string;
  bio?: string;
  specialties?: string[];
  education?: string;
  certifications?: string[];
}

export interface Testimonial {
  name: string;
  location?: string;
  rating: number;
  text: string;
  treatment?: string;
  date?: string;
  image?: string;
}

export interface OfficeHour {
  days: string;
  hours: string;
}

export interface AppointmentField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "select" | "textarea" | "date";
  required: boolean;
  options?: string[];
  placeholder?: string;
}
