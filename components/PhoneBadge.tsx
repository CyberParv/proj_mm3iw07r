import Link from 'next/link'
import { Phone } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface PhoneBadgeProps {
  phoneNumber?: string
  className?: string
}

export default function PhoneBadge({
  phoneNumber = '(555) 214-8890',
  className = '',
}: Partial<PhoneBadgeProps>) {
  return (
    <Badge
      className={cn(
        'flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-semibold text-foreground',
        className
      )}
      asChild
    >
      <Link href={'tel:' + phoneNumber.replace(/[^\d]/g, '')}>
        <Phone className="h-4 w-4 text-[var(--primary)]" />
        {phoneNumber}
      </Link>
    </Badge>
  )
}
