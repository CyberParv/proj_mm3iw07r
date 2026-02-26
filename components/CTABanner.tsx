import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface CTABannerProps {
  title?: string
  subtitle?: string
  primaryCta?: { label?: string; href?: string }
  secondaryCta?: { label?: string; href?: string }
}

export default function CTABanner({
  title = 'Ready for a coastal-fresh smile?',
  subtitle = 'Schedule your visit today and experience dentistry with a gentle touch.',
  primaryCta = { label: 'Book Appointment', href: '/contact' },
  secondaryCta = { label: 'Call Us', href: 'tel:5552148890' },
}: Partial<CTABannerProps>) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0077B6] via-[#48CAE4] to-[#90E0EF] px-6 py-14 text-white shadow-xl">
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 600 200" className="h-full w-full" aria-hidden="true">
          <path
            fill="white"
            d="M0,96L40,80C80,64,160,32,240,42.7C320,53,400,107,480,133.3C560,160,640,160,720,144C800,128,880,96,960,96C1040,96,1120,128,1200,144C1280,160,1360,160,1400,160L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </div>
      <div className="relative mx-auto max-w-5xl text-center">
        <h2 className="text-2xl font-semibold md:text-3xl">{title}</h2>
        <p className="mt-3 text-sm text-white/90 md:text-base">{subtitle}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button asChild className={cn('rounded-full bg-white text-[#0077B6] hover:bg-white/90')}>
            <Link href={primaryCta.href || '#'}>{primaryCta.label}</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white text-white hover:bg-white/10"
          >
            <Link href={secondaryCta.href || '#'}>{secondaryCta.label}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
