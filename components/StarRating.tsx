import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StarRatingProps {
  rating?: number
  max?: number
  className?: string
}

export default function StarRating({
  rating = 5,
  max = 5,
  className = '',
}: Partial<StarRatingProps>) {
  const normalized = Math.min(Math.max(rating, 0), max)
  const fullStars = Math.floor(normalized)

  return (
    <div className={cn('flex items-center gap-1 text-[var(--primary)]', className)}>
      {Array.from({ length: max }).map((_, index) => (
        <Star
          key={index}
          className={cn('h-4 w-4', index < fullStars ? 'fill-[var(--primary)]' : 'fill-transparent')}
        />
      ))}
      <span className="ml-2 text-xs text-muted-foreground">{normalized.toFixed(1)}</span>
    </div>
  )
}
