import Link from 'next/link'
import { Facebook, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

interface FooterProps {
  officeName?: string
  address?: string
  email?: string
  phone?: string
  quickLinks?: { label?: string; href?: string }[]
  services?: string[]
}

export default function Footer({
  officeName = 'Coastal Dental Care',
  address = '145 Harbor View Blvd, Suite 210, Santa Monica, CA',
  email = 'hello@coastaldentalcare.com',
  phone = '(555) 214-8890',
  quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Patient Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
  ],
  services = ['Cleanings & Exams', 'Teeth Whitening', 'Dental Implants', 'Orthodontics'],
}: Partial<FooterProps>) {
  return (
    <footer className="border-t border-border/50 bg-[var(--muted)]">
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{officeName}</h3>
            <p className="text-sm text-muted-foreground">
              A calm, coastal approach to modern dentistry. Gentle care, advanced technology, and a team that
              listens.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--primary)]" />
                <span>{address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[var(--primary)]" />
                <span>{phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[var(--primary)]" />
                <span>{email}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href || '#'} className="hover:text-[var(--primary)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">Services</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-foreground">Newsletter</h4>
            <p className="text-sm text-muted-foreground">
              Monthly tips for a brighter, healthier smile.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Input placeholder="Email address" />
              <Button className="rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90">
                Subscribe
              </Button>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <Link href="#" aria-label="Facebook" className="hover:text-[var(--primary)]">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="Instagram" className="hover:text-[var(--primary)]">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-[var(--primary)]">
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs text-muted-foreground">
              <span className={cn('h-2 w-2 rounded-full bg-[var(--primary)]')} />
              ADA Compliant
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-start justify-between gap-3 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© 2024 Coastal Dental Care. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[var(--primary)]">
              Privacy Policy
            </Link>
            <Link href="/accessibility" className="hover:text-[var(--primary)]">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
