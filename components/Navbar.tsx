'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import PhoneBadge from '@/components/PhoneBadge'

interface NavLink {
  label?: string
  href?: string
}

interface NavbarProps {
  logoText?: string
  links?: NavLink[]
  phoneNumber?: string
  bookUrl?: string
}

export default function Navbar({
  logoText = 'Coastal Dental Care',
  links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Patient Resources', href: '/resources' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Contact', href: '/contact' },
  ],
  phoneNumber = '(555) 214-8890',
  bookUrl = '/contact',
}: Partial<NavbarProps>) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-foreground">
          <span className="h-9 w-9 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center">
            <Phone className="h-4 w-4" />
          </span>
          <span className="font-semibold">{logoText}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href || '#'}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-[var(--primary)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <PhoneBadge phoneNumber={phoneNumber} />
          </div>
          <Button
            asChild
            className={cn(
              'rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90',
              'px-5 py-2 text-sm'
            )}
          >
            <Link href={bookUrl}>
              <Calendar className="mr-2 h-4 w-4" />
              Book Online
            </Link>
          </Button>
          <button
            className="inline-flex items-center justify-center rounded-full border border-border p-2 md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/40 transition-opacity md:hidden',
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setOpen(false)}
      />
      <div
        className={cn(
          'fixed right-0 top-0 z-50 h-full w-72 bg-white p-6 shadow-xl transition-transform md:hidden',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex items-center justify-between">
          <span className="text-base font-semibold">{logoText}</span>
          <button
            className="rounded-full border border-border p-2"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href || '#'}
              className="text-sm font-medium text-foreground/80 hover:text-[var(--primary)]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <PhoneBadge phoneNumber={phoneNumber} className="w-full justify-center" />
          <Button asChild className="w-full rounded-full bg-[var(--primary)] text-white">
            <Link href={bookUrl}>Book Online</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
