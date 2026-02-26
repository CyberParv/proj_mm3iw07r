import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  treatment?: string
  price?: string
  description?: string
  ctaLabel?: string
}

export default function PricingCard({
  treatment = 'Comprehensive Cleaning',
  price = '$149',
  description = 'Includes exam, digital X-rays, and gentle polish.',
  ctaLabel = 'Request Appointment',
}: Partial<PricingCardProps>) {
  return (
    <Card className={cn('rounded-2xl border border-border/50 p-6 shadow-lg')}>
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">{treatment}</h3>
        <span className="text-xl font-semibold text-[var(--primary)]">{price}</span>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
      <Button className="mt-6 w-full rounded-full bg-[var(--primary)] text-white">
        {ctaLabel}
      </Button>
    </Card>
  )
}
