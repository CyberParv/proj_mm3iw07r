import Image from 'next/image'
import { cn } from '@/lib/utils'

interface Insurance {
  name?: string
  logoSrc?: string
  planTypes?: string
}

interface InsuranceLogosProps {
  providers?: Insurance[]
}

export default function InsuranceLogos({
  providers = [
    { name: 'Delta Dental', logoSrc: '/images/gallery-1.jpg', planTypes: 'PPO, Premier' },
    { name: 'Cigna', logoSrc: '/images/about.jpg', planTypes: 'DPPO, DHMO' },
    { name: 'Aetna', logoSrc: '/images/team.jpg', planTypes: 'PPO, Discount' },
    { name: 'MetLife', logoSrc: '/images/hero.jpg', planTypes: 'PDP, PPO' },
  ],
}: Partial<InsuranceLogosProps>) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {providers.map((provider) => (
        <div
          key={provider.name}
          className={cn(
            'flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/50 bg-white p-6 shadow-lg'
          )}
          title={provider.planTypes}
        >
          <div className="relative h-16 w-32">
            <Image
              src={provider.logoSrc || '/images/about.jpg'}
              alt={provider.name || ''}
              width={128}
              height={64}
              className="object-contain"
              unoptimized
            />
          </div>
          <div className="text-sm font-medium">{provider.name}</div>
          <div className="text-xs text-muted-foreground">{provider.planTypes}</div>
        </div>
      ))}
    </div>
  )
}
