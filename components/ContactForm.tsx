"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { AceternityInput } from "@/components/ui/aceternity-input";
import { AceternityLabel } from "@/components/ui/aceternity-label";
import { Mail, MapPin, PhoneCall, Clock, HelpCircle } from "lucide-react";
import React from "react";

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

interface ContactFormProps {
  headline: string;
  subheadline?: string;
  contactInfo?: ContactInfo[];
}

const iconMap: Record<string, React.ElementType> = {
  PhoneCall: PhoneCall,
  Mail: Mail,
  MapPin: MapPin,
  Clock: Clock,
};

const defaultContactInfo: ContactInfo[] = [
  { icon: "PhoneCall", label: "Phone", value: "(555) 483-2200" },
  { icon: "Mail", label: "Email", value: "care@harborviewhealth.com" },
  { icon: "MapPin", label: "Address", value: "210 Harborview Drive, Seattle, WA" },
  { icon: "Clock", label: "Hours", value: "Mon–Sat, 8:00am–7:00pm" },
];

export default function ContactForm({
  headline = "Get in touch with our care coordinators",
  subheadline = "We respond quickly to appointment requests, referrals, and insurance questions.",
  contactInfo = defaultContactInfo,
}: Partial<ContactFormProps>) {
  return (
    <section className="py-20 md:py-28 bg-muted/50" id="contact">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <Card className="border border-border/50 bg-background rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <AceternityLabel htmlFor="name">Name</AceternityLabel>
                    <AceternityInput id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <AceternityLabel htmlFor="email">Email</AceternityLabel>
                    <AceternityInput id="email" type="email" placeholder="you@email.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <AceternityLabel htmlFor="subject">Subject</AceternityLabel>
                  <AceternityInput id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <AceternityLabel htmlFor="message">Message</AceternityLabel>
                  <Textarea id="message" placeholder="Tell us more..." rows={5} />
                </div>
                <Button type="submit" className="w-full rounded-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          {contactInfo && contactInfo.length > 0 && (
            <div className="flex flex-col justify-center space-y-8">
              {contactInfo.map(function (info, i) {
                const Icon = iconMap[info.icon] || HelpCircle;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      {React.createElement(Icon, { className: "h-6 w-6" })}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
