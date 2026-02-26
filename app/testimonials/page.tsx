import PageHero from '@/components/PageHero';
import TestimonialsAnimated from '@/components/TestimonialsAnimated';
import GalleryMasonry from '@/components/GalleryMasonry';
import StatsCounter from '@/components/StatsCounter';
import CTAVortex from '@/components/CTAVortex';

export default function TestimonialsPage() {
  return (
    <main>
      <PageHero />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <TestimonialsAnimated
            title="What Our Patients Are Saying"
            testimonials={[
              {
                quote:
                  'They took the time to understand my fears and made sure I was comfortable throughout. I actually look forward to appointments now.',
                name: 'Jennifer Martinez',
                designation: 'General Dentistry & Whitening',
                src: '/images/hero.jpg',
              },
              {
                quote:
                  'The implant process was incredibly precise with 3D imaging. I can’t even tell which tooth is the implant.',
                name: 'Robert Kim',
                designation: 'Dental Implant',
                src: '/images/team.jpg',
              },
              {
                quote:
                  'The whole family feels welcome. It’s rare to find a practice that truly cares for all ages.',
                name: 'The Thompson Family',
                designation: 'Family Dentistry',
                src: '/images/about.jpg',
              },
              {
                quote:
                  'Invisalign was smoother than I imagined, and the results are perfect. Dr. Chen is amazing.',
                name: 'Amanda Sullivan',
                designation: 'Invisalign',
                src: '/images/gallery-1.jpg',
              },
            ]}
            autoplay
          />
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <GalleryMasonry
            headline="Video Testimonials"
            subheadline="Watch real patients share their experiences."
            images={[
              {
                url: '/images/gallery-1.jpg',
                alt: "Sarah's Smile Makeover Journey",
                caption: 'Sarah’s Smile Makeover Journey — 2:34',
              },
              {
                url: '/images/about.jpg',
                alt: 'From Dental Anxiety to Confident Smiles',
                caption: 'From Dental Anxiety to Confident Smiles — 3:12',
              },
              {
                url: '/images/team.jpg',
                alt: "The Chen Family's Experience",
                caption: "The Chen Family's Experience — 2:48",
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <StatsCounter
            stats={[
              { value: '4.9', label: 'Google Rating' },
              { value: '4.8', label: 'Yelp Rating' },
              { value: '523', label: 'Google Reviews' },
              { value: '187', label: 'Yelp Reviews' },
            ]}
            bgColor="bg-slate-50"
          />
        </div>
      </section>

      <CTAVortex
        title="Ready to Join Our Family of Happy Patients?"
        subtitle="Experience the care that has earned us hundreds of 5-star reviews."
        ctaLabel="Book Your Appointment"
        ctaHref="/contact#appointment"
        secondaryCtaLabel="Leave a Review"
        secondaryCtaHref="#"
      />
    </main>
  );
}
