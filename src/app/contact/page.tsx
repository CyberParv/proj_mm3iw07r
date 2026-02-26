import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import MapEmbed from '@/components/MapEmbed';
import OfficeHoursTable from '@/components/OfficeHoursTable';
import AppointmentForm from '@/components/AppointmentForm';
import EmergencyBanner from '@/components/EmergencyBanner';

export default function ContactPage() {
  return (
    <main>
      <PageHero imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771577276/site-images/healthcare/14558560.jpg" />

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
              imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771577284/site-images/healthcare/14996490.jpg"
            />
            <OfficeHoursTable imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771577303/site-images/healthcare/15277947.jpg" />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <MapEmbed mapUrl="https://res.cloudinary.com/dwc294mzm/image/upload/v1771577297/site-images/healthcare/14558557.jpg" address="2847 Ocean Boulevard, Suite 200, Coastal Bay, CA 92651" directionsUrl="https://www.google.com/maps/dir/?api=1&destination=2847%20Ocean%20Boulevard%2C%20Coastal%20Bay%2C%20CA%2092651" />
        </div>
      </section>

      <section id="appointment" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <AppointmentForm imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771577274/site-images/healthcare/16143351.jpg" />
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <EmergencyBanner imageSrc="https://res.cloudinary.com/dwc294mzm/image/upload/v1771577266/site-images/healthcare/16204310.jpg" />
        </div>
      </section>
    </main>
  );
}
