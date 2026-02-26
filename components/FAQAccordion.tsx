"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  headline: string;
  subheadline?: string;
  items: FAQItem[];
}

const defaultItems: FAQItem[] = [
  {
    question: "Do you accept my insurance?",
    answer: "We work with most major insurance providers and offer transparent membership options. Contact our team to confirm coverage.",
  },
  {
    question: "Can I book a same-day appointment?",
    answer: "Yes. We reserve daily slots for urgent needs and offer extended evening hours for added convenience.",
  },
  {
    question: "Do you offer telehealth visits?",
    answer: "Absolutely. Virtual visits are available for routine check-ins, follow-ups, and prescription management.",
  },
  {
    question: "How do I access my medical records?",
    answer: "Patients can securely access records, lab results, and visit summaries through our online portal.",
  },
];

export default function FAQAccordion({
  headline = "Frequently asked questions",
  subheadline = "Get quick answers about appointments, insurance, and our care model.",
  items = defaultItems,
}: Partial<FAQAccordionProps>) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28" id="faq">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{headline}</h2>
          {subheadline && <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>}
        </div>
        <div className="mt-12 space-y-4">
          {items.map(function (item, i) {
            var isOpen = openIndex === i;
            return (
              <div key={i} className="rounded-2xl border border-border/50 bg-background shadow-sm">
                <button
                  className="flex w-full items-center justify-between p-5 text-left"
                  onClick={function () {
                    setOpenIndex(isOpen ? null : i);
                  }}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-foreground">{item.question}</span>
                  <span className={cn("text-muted-foreground transition-transform", isOpen && "rotate-180")}>
                    ▼
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
