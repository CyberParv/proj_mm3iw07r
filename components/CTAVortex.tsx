"use client";
import { Vortex } from "@/components/ui/backgrounds/vortex";
import { Button } from "@/components/ui/button";

interface CTAVortexProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function CTAVortex({
  headline = "Ready to feel confident in your care?",
  description = "Schedule an appointment in minutes and connect with a dedicated care coordinator.",
  ctaLabel = "Book an Appointment",
  ctaHref = "/appointments",
  secondaryCtaLabel = "Call Us",
  secondaryCtaHref = "tel:+15554832200",
}: Partial<CTAVortexProps>) {
  return (
    <section className="w-full mx-auto rounded-2xl h-[30rem] overflow-hidden" id="appointment-cta">
      <Vortex
        backgroundColor="black"
        baseHue={150}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          {headline}
        </h2>
        {description && (
          <p className="text-white/70 text-sm md:text-xl max-w-xl mt-6 text-center">
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <Button size="lg" className="px-8 py-6 text-lg bg-white text-black hover:bg-white/90 rounded-full" asChild>
            <a href={ctaHref}>{ctaLabel}</a>
          </Button>
          {secondaryCtaLabel && secondaryCtaHref && (
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg border-white/30 text-white hover:bg-white/10 rounded-full"
              asChild
            >
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          )}
        </div>
      </Vortex>
    </section>
  );
}
