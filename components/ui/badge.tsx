import * as React from 'react'
import { cn } from '@/lib/utils'

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp: React.ElementType = asChild ? 'span' : 'div'
    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full border border-transparent bg-[var(--primary)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--primary)]',
          className
        )}
        {...props}
      />
    )
  }
)
Badge.displayName = 'Badge'

export { Badge }
