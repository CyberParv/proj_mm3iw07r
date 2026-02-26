'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GraduationCap } from 'lucide-react'

interface DoctorCardProps {
  name?: string
  title?: string
  specialties?: string[]
  bio?: string
  certifications?: string[]
  imageSrc?: string
}

export default function DoctorCard({
  name = 'Dr. Maya Lin',
  title = 'DDS, Family Dentistry',
  specialties = ['Preventive Care', 'Cosmetic Dentistry', 'Gentle Sedation'],
  bio = 'Dr. Lin blends modern techniques with a warm approach, ensuring every patient feels heard and at ease.',
  certifications = ['ADA Member', 'Invisalign Certified', 'CPR & ACLS'],
  imageSrc = '/images/team.jpg',
}: Partial<DoctorCardProps>) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card className="rounded-2xl border border-border/50 p-6 shadow-lg">
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="relative h-28 w-28 overflow-hidden rounded-2xl">
          <Image src={imageSrc} alt={name} width={112} height={112} unoptimized />
        </div>
        <div className="flex-1 space-y-3">
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-muted-foreground">{title}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {specialties.map((item) => (
              <span
                key={item}
                className="rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs text-[var(--primary)]"
              >
                {item}
              </span>
            ))}
          </div>
          <p className={cn('text-sm text-muted-foreground', expanded ? '' : 'line-clamp-2')}>
            {bio}
          </p>
          <Button
            variant="ghost"
            className="p-0 text-sm font-semibold text-[var(--primary)]"
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded ? 'Show less' : 'Read full bio'}
          </Button>
        </div>
      </div>
      <div className="mt-5 border-t border-border/40 pt-4">
        <h4 className="text-sm font-semibold">Certifications</h4>
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
          {certifications.map((cert) => (
            <li key={cert} className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-[var(--primary)]" />
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
