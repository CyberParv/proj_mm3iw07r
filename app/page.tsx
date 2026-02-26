import HeroSection from '@/components/HeroSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import CTABanner from '@/components/CTABanner';
import TeamGrid from '@/components/TeamGrid';
import TestimonialsAnimated from '@/components/TestimonialsAnimated';
import ContactForm from '@/components/ContactForm';
import StatsCounter from '@/components/StatsCounter';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FeaturesGrid
            badge="Our Services"
            headline="Comprehensive Dental Services"
            subheadline="From preventive care to advanced cosmetic procedures, we offer everything your smile needs under one roof."
            features={[
              {
                icon: 'Sparkles',
                title: 'Teeth Cleaning',
                description:
                  'Professional cleanings and preventive care to keep your smile healthy and bright.',
              },
              {
                icon: 'Sun',
                title: 'Teeth Whitening',
                description:
                  'Professional-grade whitening treatments for a dramatically brighter smile.',
              },
              {
                icon: 'Puzzle',
                title: 'Dental Implants',
                description:
                  'Permanent, natural-looking tooth replacement solutions that last a lifetime.',
              },
              {
                icon: 'AlignCenter',
                title: 'Orthodontics',
                description:
                  'Invisalign and traditional braces for beautifully aligned teeth at any age.',
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FeaturesGrid
            badge="Why Choose Us"
            headline="Why Families Choose Coastal Dental"
            subheadline="We combine advanced technology with a gentle, patient-first approach to make every visit comfortable."
            features={[
              {
                icon: 'Heart',
                title: 'Gentle & Compassionate Care',
                description:
                  'Anxiety-free dentistry with sedation options available for nervous patients.',
              },
              {
                icon: 'Clock',
                title: 'Flexible Scheduling',
                description:
                  'Early morning, evening, and Saturday appointments to fit your busy lifestyle.',
              },
              {
                icon: 'Shield',
                title: 'Advanced Technology',
                description:
                  'Digital X-rays, 3D imaging, and laser dentistry for faster, more comfortable treatments.',
              },
              {
                icon: 'CreditCard',
                title: 'Affordable Payment Options',
                description:
                  'We accept most insurance plans and offer flexible financing with 0% interest options.',
              },
              {
                icon: 'Users',
                title: 'Family-Friendly Environment',
                description:
                  'Kid-friendly waiting area with entertainment and rewards for our youngest patients.',
              },
              {
                icon: 'Award',
                title: 'Experienced Team',
                description:
                  'Over 45 combined years of experience and ongoing advanced training.',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <TeamGrid
            headline="Meet Your Dental Team"
            subheadline="Our experienced, caring professionals are dedicated to your comfort and oral health."
            members={[
              {
                name: 'Dr. Sarah Mitchell, DDS',
                title: 'Founder & Lead Dentist',
                imageUrl: '/images/team.jpg',
                bio: 'Specializes in general dentistry and cosmetic procedures with a gentle approach.',
              },
              {
                name: 'Dr. James Chen, DMD',
                title: 'Orthodontic Specialist',
                imageUrl: '/images/about.jpg',
                bio: 'Invisalign Diamond Provider with expertise in traditional braces and aligners.',
              },
              {
                name: 'Dr. Maria Rodriguez, DDS',
                title: 'Implant Specialist',
                imageUrl: '/images/gallery-1.jpg',
                bio: 'Placed over 2,000 implants with advanced 3D-guided precision.',
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <TestimonialsAnimated
            title="What Our Patients Say"
            subtitle="Join thousands of happy patients who trust Coastal Dental Care with their smiles."
            autoplay
            testimonials={[
              {
                quote:
                  'I was terrified of the dentist for years, but the team made me feel completely at ease. My teeth have never looked better!',
                name: 'Jennifer M.',
                designation: 'Teeth Whitening',
                src: '/images/hero.jpg',
              },
              {
                quote:
                  'The implant process was smooth, and the results are incredible. I can smile with confidence again.',
                name: 'Robert K.',
                designation: 'Dental Implants',
                src: '/images/team.jpg',
              },
              {
                quote:
                  'Our whole family comes here. The kids actually look forward to their visits now!',
                name: 'The Thompson Family',
                designation: 'Family Dentistry',
                src: '/images/about.jpg',
              },
              {
                quote:
                  'My Invisalign journey was fantastic. Clear communication and beautiful results.',
                name: 'Amanda S.',
                designation: 'Invisalign',
                src: '/images/gallery-1.jpg',
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <StatsCounter
            stats={[
              { value: '15+', label: 'Years of Excellence' },
              { value: '5,000+', label: 'Happy Patients' },
              { value: '4.9', label: 'Average Rating' },
              { value: 'Same-Day', label: 'Emergencies' },
            ]}
            bgColor="bg-slate-50"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <ContactForm
            headline="Visit Our Modern Office"
            subheadline="Conveniently located in downtown Coastal Bay with free parking available."
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
        </div>
      </section>
    </main>
  );
}
