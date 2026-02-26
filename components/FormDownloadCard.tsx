import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText } from 'lucide-react'

interface FormDownloadCardProps {
  title?: string
  description?: string
  downloadUrl?: string
}

export default function FormDownloadCard({
  title = 'New Patient Forms',
  description = 'Complete your paperwork before your visit to save time.',
  downloadUrl = '/forms/new-patient.pdf',
}: Partial<FormDownloadCardProps>) {
  return (
    <Card className="rounded-2xl border border-border/50 p-6 shadow-lg">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)]/10 text-[var(--primary)]">
          <FileText className="h-5 w-5" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <Button className="mt-6 w-full rounded-full bg-[var(--primary)] text-white">
        Download Form
      </Button>
    </Card>
  )
}
