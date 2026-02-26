import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import OfficeHoursTable from '@/components/OfficeHoursTable';
import AppointmentForm from '@/components/AppointmentForm';
import EmergencyBanner from '@/components/EmergencyBanner';

export default function ContactPage() {
  return (
    <main>
      <PageHero />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <ContactForm
              headline="Get In Touch"
              subheadline="Reach out to schedule an appointment or ask any questions."
              contactInfo={[
                {
                  icon: 'MapPin',
                  label: 'Address',
                  value: '2847 Ocean Boulevard, Suite 200, Coastal Bay, CA 92651',
                },
                {
                  icon: 'Phone',
                  label: 'Phone',
                  value: '(555) 234-5678',
                },
                {
                  icon: 'Mail',
                  label: 'Email',
                  value: 'smile@coastaldentalcare.com',
                },
              ]}
            />
            <OfficeHoursTable />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <MapEmbed />
        </div>
      </section>

      <section id="appointment" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <AppointmentForm />
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <EmergencyBanner />
        </div>
      </section>
    </main>
  );
}
