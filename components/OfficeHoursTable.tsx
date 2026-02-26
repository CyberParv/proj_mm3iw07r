import { cn } from '@/lib/utils'

interface OfficeHours {
  day?: string
  hours?: string
}

interface OfficeHoursTableProps {
  hours?: OfficeHours[]
  holidayNotice?: string
}

export default function OfficeHoursTable({
  hours = [
    { day: 'Monday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 6:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 3:00 PM' },
    { day: 'Saturday', hours: 'By Appointment' },
    { day: 'Sunday', hours: 'Closed' },
  ],
  holidayNotice = 'Closed on major holidays. Emergency on-call dentist available.',
}: Partial<OfficeHoursTableProps>) {
  const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <div className="rounded-2xl border border-border/50 p-6 shadow-lg">
      <h3 className="text-lg font-semibold">Office Hours</h3>
      <div className="mt-4 space-y-2 text-sm">
        {hours.map((item) => (
          <div
            key={item.day}
            className={cn(
              'flex items-center justify-between rounded-lg px-3 py-2',
              item.day === currentDay ? 'bg-[var(--primary)]/10 text-[var(--primary)]' : 'text-muted-foreground'
            )}
          >
            <span>{item.day}</span>
            <span>{item.hours}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">{holidayNotice}</p>
    </div>
  )
}
