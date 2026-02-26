"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  highlighted?: boolean;
}

interface PricingTableProps {
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
}

const defaultTiers: PricingTier[] = [
  {
    name: "Essential Care",
    price: "$59",
    period: "month",
    description: "Primary care for individuals and families.",
    features: ["Annual wellness visit", "Same-day virtual visits", "Prescription refills", "Care coordinator access"],
    ctaLabel: "Start Essential",
    ctaHref: "/appointments",
  },
  {
    name: "Complete Care",
    price: "$89",
    period: "month",
    description: "Expanded support with diagnostics and specialty referrals.",
    features: ["Everything in Essential", "On-site lab testing", "Specialist referrals", "Priority scheduling"],
    ctaLabel: "Choose Complete",
    ctaHref: "/appointments",
    highlighted: true,
  },
  {
    name: "Family Plus",
    price: "$149",
    period: "month",
    description: "All-inclusive care for up to four family members.",
    features: ["Family primary care", "Pediatric services", "Telehealth visits", "Nutrition counseling"],
    ctaLabel: "Get Family Plus",
    ctaHref: "/appointments",
  },
];

export default function PricingTable({
  headline = "Simple, transparent membership plans",
  subheadline = "Select a plan that fits your needs and enjoy coordinated, proactive healthcare.",
  tiers = defaultTiers,
}: Partial<PricingTableProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50" id="insurance">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map(function (tier, i) {
            return (
              <Card
                key={i}
                className={cn(
                  "relative flex flex-col rounded-2xl border border-border/50 bg-background shadow-lg",
                  tier.highlighted && "border-primary ring-2 ring-primary/40 scale-105"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge>Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.period && <span className="text-muted-foreground">/{tier.period}</span>}
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {tier.features.map(function (feature, j) {
                      return (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <span className="mt-0.5 text-primary">✓</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full rounded-full" variant={tier.highlighted ? "default" : "outline"} asChild>
                    <a href={tier.ctaHref}>{tier.ctaLabel}</a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
