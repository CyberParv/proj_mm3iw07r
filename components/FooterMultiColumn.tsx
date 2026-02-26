import Link from "next/link";
import { Separator } from "@/components/ui/separator";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

interface FooterMultiColumnProps {
  brand: string;
  description: string;
  columns: FooterColumn[];
  copyright?: string;
}

const defaultColumns: FooterColumn[] = [
  {
    title: "Services",
    links: [
      { label: "Primary Care", href: "#services" },
      { label: "Pediatrics", href: "#services" },
      { label: "Cardiology", href: "#services" },
      { label: "Telehealth", href: "#services" },
    ],
  },
  {
    title: "Patients",
    links: [
      { label: "Insurance Accepted", href: "#insurance" },
      { label: "Patient Portal", href: "/portal" },
      { label: "Forms & Records", href: "/forms" },
      { label: "Billing Support", href: "/billing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Doctors", href: "#doctors" },
      { label: "Care Team", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

export default function FooterMultiColumn({
  brand = "Harborview Health",
  description = "Compassionate, evidence-based care for families and communities. Visit our clinics or schedule a telehealth visit today.",
  columns = defaultColumns,
  copyright,
}: Partial<FooterMultiColumnProps>) {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold">{brand}</h3>
            <p className="mt-3 text-sm text-background/70">{description}</p>
          </div>
          {columns.map(function (col) {
            return (
              <div key={col.title}>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map(function (link) {
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-background/70 transition-colors hover:text-background"
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <Separator className="my-8 bg-background/20" />
        <p className="text-center text-sm text-background/50">
          {copyright || ("© " + new Date().getFullYear() + " " + brand + ". All rights reserved.")}
        </p>
      </div>
    </footer>
  );
}
