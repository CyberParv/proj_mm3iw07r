import { AlertTriangle, Phone } from 'lucide-react'
import PhoneBadge from '@/components/PhoneBadge'

interface EmergencyBannerProps {
  phoneNumber?: string
  tips?: string[]
}

export default function EmergencyBanner({
  phoneNumber = '(555) 214-8890',
  tips = ['Severe tooth pain', 'Broken tooth', 'Swelling or bleeding'],
}: Partial<EmergencyBannerProps>) {
  return (
    <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-red-600">
            <AlertTriangle className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">Dental Emergency?</span>
          </div>
          <p className="mt-2 text-sm text-red-700">
            Call our on-call team immediately for urgent care.
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs text-red-700">
            {tips.map((tip) => (
              <span key={tip} className="rounded-full bg-red-100 px-3 py-1">
                {tip}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4 text-red-600" />
          <PhoneBadge phoneNumber={phoneNumber} className="bg-white text-red-700" />
        </div>
      </div>
    </div>
  )
}
