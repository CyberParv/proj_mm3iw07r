import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface MapEmbedProps {
  mapUrl?: string
  address?: string
  directionsUrl?: string
}

export default function MapEmbed({
  mapUrl = 'https://www.google.com/maps?q=Santa%20Monica%20CA&output=embed',
  address = '145 Harbor View Blvd, Suite 210, Santa Monica, CA',
  directionsUrl = 'https://www.google.com/maps/dir/?api=1&destination=Santa%20Monica%20CA',
}: Partial<MapEmbedProps>) {
  return (
    <div className={cn('overflow-hidden rounded-2xl border border-border/50 shadow-lg')}>
      <div className="relative h-72 w-full">
        <iframe
          src={mapUrl}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="flex flex-col gap-2 border-t border-border/40 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-[var(--primary)]" />
          {address}
        </div>
        <Link href={directionsUrl} className="text-sm font-semibold text-[var(--primary)]">
          Get Directions →
        </Link>
      </div>
    </div>
  )
}
