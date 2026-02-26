import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import TrustBadges from '@/components/TrustBadges'
import { cn } from '@/lib/utils'

interface HeroSectionProps {
  title?: string
  subtitle?: string
  primaryCta?: { label?: string; href?: string }
  secondaryCta?: { label?: string; href?: string }
  imageSrc?: string
}

export default function HeroSection({
  title = 'A calmer, brighter dental experience.',
  subtitle = 'Coastal Dental Care blends advanced dentistry with a warm, welcoming atmosphere for families across Santa Monica.',
  primaryCta = { label: 'Book Appointment', href: '/contact' },
  secondaryCta = { label: 'Explore Services', href: '/services' },
  imageSrc = '/images/hero.jpg',
}: Partial<HeroSectionProps>) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt="Coastal Dental Care hero"
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-2xl space-y-5">
          <h1 className="text-3xl font-semibold leading-tight text-foreground md:text-5xl">
            {title}
          </h1>
          <p className="text-base text-muted-foreground md:text-lg">{subtitle}</p>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              className={cn(
                'rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary)]/90'
              )}
            >
              <Link href={primaryCta.href || '#'}>{primaryCta.label}</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href={secondaryCta.href || '#'}>{secondaryCta.label}</Link>
            </Button>
          </div>
        </div>

        <TrustBadges />
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full" aria-hidden="true">
          <path
            fill="white"
            d="M0,64L80,80C160,96,320,128,480,112C640,96,800,32,960,21.3C1120,11,1280,53,1360,74.7L1440,96L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  )
}
