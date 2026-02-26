import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Activity, Clock, HeartPulse, Microscope, ShieldCheck, Stethoscope, HelpCircle, Sparkles, Sun, CreditCard, Users, Award, Lightbulb } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeaturesGridProps {
  badge?: string;
  headline: string;
  subheadline?: string;
  features: Feature[];
}

const iconMap: Record<string, React.ElementType> = { Sparkles, Sun, CreditCard, Users, Award, Lightbulb, 
  Stethoscope: Stethoscope,
  HeartPulse: HeartPulse,
  ShieldCheck: ShieldCheck,
  Microscope: Microscope,
  Clock: Clock,
  Activity: Activity,
};

const defaultFeatures: Feature[] = [
  {
    icon: "Stethoscope",
    title: "Primary Care",
    description: "Personalized wellness visits, annual exams, and chronic condition management.",
  },
  {
    icon: "HeartPulse",
    title: "Cardiology",
    description: "Advanced cardiac screenings and treatment plans guided by specialists.",
  },
  {
    icon: "ShieldCheck",
    title: "Preventive Care",
    description: "Vaccinations, screenings, and lifestyle guidance to keep you healthy.",
  },
  {
    icon: "Microscope",
    title: "Diagnostics",
    description: "On-site lab testing and imaging with fast, accurate results.",
  },
  {
    icon: "Clock",
    title: "Same-Day Visits",
    description: "Extended hours and urgent appointments for when care can't wait.",
  },
  {
    icon: "Activity",
    title: "Rehabilitation",
    description: "Physical therapy and recovery plans tailored to your goals.",
  },
];

export default function FeaturesGrid({
  badge = "Our Services",
  headline = "Comprehensive care for every stage of life",
  subheadline = "From primary care to specialty services, our team delivers coordinated treatment with empathy and expertise.",
  features = defaultFeatures,
}: Partial<FeaturesGridProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50" id="services">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          {badge && (
            <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
              {badge}
            </span>
          )}
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map(function (feature, index) {
            const Icon = iconMap[feature.icon] || HelpCircle;
            return (
              <Card
                key={index}
                className="border border-border/50 bg-background shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {React.createElement(Icon, { className: "h-6 w-6" })}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-2 text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
