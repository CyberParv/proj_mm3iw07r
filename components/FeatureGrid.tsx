import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ShieldCheck, Sparkles, Clock } from 'lucide-react'

interface Feature {
  icon?: string
  title?: string
  description?: string
}

interface FeatureGridProps {
  features?: Feature[]
}

const iconMap = {
  ShieldCheck,
  Sparkles,
  Clock,
}

export default function FeatureGrid({
  features = [
    {
      icon: 'ShieldCheck',
      title: 'Comfort-first care',
      description: 'Gentle techniques, warm blankets, and noise-canceling headphones.',
    },
    {
      icon: 'Sparkles',
      title: 'Cosmetic expertise',
      description: 'Whitening, veneers, and smile design tailored to you.',
    },
    {
      icon: 'Clock',
      title: 'Flexible scheduling',
      description: 'Early and evening appointments with online booking.',
    },
  ],
}: Partial<FeatureGridProps>) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => {
        const Icon = iconMap[feature.icon as keyof typeof iconMap] || Sparkles
        return (
          <Card key={feature.title} className={cn('rounded-2xl border border-border/50 p-6 shadow-lg')}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
          </Card>
        )
      })}
    </div>
  )
}
