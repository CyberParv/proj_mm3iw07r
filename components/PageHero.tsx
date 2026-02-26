import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface PageHeroProps {
  title?: string
  subtitle?: string
  breadcrumbs?: { label?: string; href?: string }[]
}

export default function PageHero({
  title = 'Our Services',
  subtitle = 'Personalized care for every stage of your dental journey.',
  breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
  ],
}: Partial<PageHeroProps>) {
  return (
    <section className="bg-[var(--muted)] px-4 py-12 md:px-6">
      <div className="mx-auto max-w-7xl space-y-4">
        <nav className="flex items-center gap-2 text-xs text-muted-foreground">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label + index} className="flex items-center gap-2">
              <Link href={crumb.href || '#'} className="hover:text-[var(--primary)]">
                {crumb.label}
              </Link>
              {index < breadcrumbs.length - 1 ? <ChevronRight className="h-3 w-3" /> : null}
            </span>
          ))}
        </nav>
        <div>
          <h1 className="text-2xl font-semibold md:text-3xl">{title}</h1>
          {subtitle ? <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p> : null}
        </div>
      </div>
    </section>
  )
}
