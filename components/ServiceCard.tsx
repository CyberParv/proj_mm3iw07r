import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Sparkles, Smile, Shield, Stethoscope } from 'lucide-react'

interface ServiceCardProps {
  icon?: string
  title?: string
  description?: string
  href?: string
}

const iconMap = {
  Sparkles,
  Smile,
  Shield,
  Stethoscope,
}

export default function ServiceCard({
  icon = 'Smile',
  title = 'Gentle Cleanings',
  description = 'Preventive care with a calming touch and advanced imaging.',
  href = '/services',
}: Partial<ServiceCardProps>) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Smile

  return (
    <Card
      className={cn(
        'group rounded-2xl border border-border/50 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)] hover:shadow-xl'
      )}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex text-sm font-semibold text-[var(--primary)]"
      >
        Learn more →
      </Link>
    </Card>
  )
}
