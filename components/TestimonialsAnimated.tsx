"use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

interface TestimonialsAnimatedProps {
  headline: string;
  subheadline?: string;
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}

const defaultTestimonials: TestimonialItem[] = [
  {
    quote: "The care team listened to every concern and coordinated my specialist visit in days. I finally feel supported.",
    name: "Emily R.",
    designation: "Cardiology Patient",
    src: "/images/about.jpg",
  },
  {
    quote: "Telehealth appointments fit my schedule perfectly, and prescriptions were sent immediately. Highly recommend.",
    name: "Carlos M.",
    designation: "Primary Care Patient",
    src: "/images/gallery-1.jpg",
  },
  {
    quote: "Our pediatrician is wonderful with our kids, and the clinic feels warm and welcoming every visit.",
    name: "Sophia K.",
    designation: "Parent & Patient",
    src: "/images/hero.jpg",
  },
];

export default function TestimonialsAnimated({
  headline = "Stories from our patients",
  subheadline = "Real experiences from people who trust Harborview Health.",
  testimonials = defaultTestimonials,
  autoplay = true,
}: Partial<TestimonialsAnimatedProps>) {
  return (
    <section className="py-20 md:py-28" id="testimonials">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <AnimatedTestimonials testimonials={testimonials} autoplay={autoplay} />
      </div>
    </section>
  );
}
