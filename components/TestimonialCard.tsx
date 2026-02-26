import Image from 'next/image'
import { Card } from '@/components/ui/card'
import StarRating from '@/components/StarRating'
import { cn } from '@/lib/utils'

interface TestimonialCardProps {
  rating?: number
  quote?: string
  name?: string
  location?: string
  treatment?: string
  imageSrc?: string
}

export default function TestimonialCard({
  rating = 5,
  quote = 'The team made me feel calm from the moment I walked in. My whitening results are incredible.',
  name = 'Samantha P.',
  location = 'Santa Monica, CA',
  treatment = 'Teeth Whitening',
  imageSrc = '',
}: Partial<TestimonialCardProps>) {
  return (
    <Card className={cn('rounded-2xl border border-border/50 p-6 shadow-lg')}>
      <div className="flex items-center gap-4">
        {imageSrc ? (
          <div className="relative h-12 w-12 overflow-hidden rounded-full">
            <Image src={imageSrc} alt={name} width={48} height={48} unoptimized />
          </div>
        ) : (
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-sm font-semibold text-[var(--primary)]">
            {name.split(' ')[0][0]}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{location}</p>
        </div>
      </div>
      <div className="mt-4">
        <StarRating rating={rating} />
      </div>
      <p className="mt-4 text-sm text-muted-foreground">“{quote}”</p>
      <div className="mt-4 text-xs text-[var(--primary)]">{treatment}</div>
    </Card>
  )
}
