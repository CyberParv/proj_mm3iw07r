import { Award, HeartHandshake, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TrustBadge {
  icon?: string
  label?: string
  value?: string
}

interface TrustBadgesProps {
  badges?: TrustBadge[]
}

const iconMap = {
  Award,
  HeartHandshake,
  Users,
}

export default function TrustBadges({
  badges = [
    { icon: 'Award', label: 'Years in practice', value: '15+' },
    { icon: 'Users', label: 'Patients served', value: '8,000+' },
    { icon: 'HeartHandshake', label: 'Average rating', value: '4.9/5' },
  ],
}: Partial<TrustBadgesProps>) {
  return (
    <div className="flex flex-wrap gap-4">
      {badges.map((badge) => {
        const Icon = iconMap[badge.icon as keyof typeof iconMap] || Award
        return (
          <div
            key={badge.label}
            className={cn(
              'flex items-center gap-3 rounded-2xl border border-border/40 bg-white/80 px-4 py-3 shadow-sm'
            )}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-semibold">{badge.value}</div>
              <div className="text-xs text-muted-foreground">{badge.label}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
