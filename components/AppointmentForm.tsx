'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { CheckCircle2 } from 'lucide-react'

interface AppointmentFormProps {
  services?: string[]
  timeSlots?: string[]
}

export default function AppointmentForm({
  services = ['Cleanings', 'Whitening', 'Implants', 'Orthodontics'],
  timeSlots = ['8:00 AM', '9:30 AM', '11:00 AM', '2:00 PM', '4:00 PM'],
}: Partial<AppointmentFormProps>) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setSuccess(false)
    setTimeout(() => {
      setLoading(false)
      setSuccess(true)
    }, 1200)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border/50 p-6 shadow-lg">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Full name</Label>
          <Input id="name" placeholder="Alex Morgan" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email address</Label>
          <Input id="email" type="email" placeholder="alex@email.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone number</Label>
          <Input id="phone" type="tel" placeholder="(555) 555-5555" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="date">Preferred date</Label>
          <Input id="date" type="date" required />
        </div>
        <div className="space-y-2">
          <Label>Time slot</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select a time" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((slot) => (
                <SelectItem key={slot} value={slot}>
                  {slot}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Service</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Choose a service" />
            </SelectTrigger>
            <SelectContent>
              {services.map((service) => (
                <SelectItem key={service} value={service}>
                  {service}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">How can we help?</Label>
        <Textarea id="message" placeholder="Tell us about your dental goals or concerns." rows={4} />
      </div>

      <Button
        type="submit"
        disabled={loading}
        className={cn('w-full rounded-full bg-[var(--primary)] text-white')}
      >
        {loading ? 'Submitting...' : 'Request Appointment'}
      </Button>

      {success ? (
        <div className="flex items-center gap-2 rounded-xl bg-[var(--primary)]/10 px-4 py-3 text-sm text-[var(--primary)]">
          <CheckCircle2 className="h-4 w-4" />
          We received your request and will confirm shortly.
        </div>
      ) : null}
    </form>
  )
}
