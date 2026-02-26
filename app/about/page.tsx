import PageHero from '@/components/PageHero';
import TeamGrid from '@/components/TeamGrid';
import FeaturesGrid from '@/components/FeaturesGrid';
import StatsCounter from '@/components/StatsCounter';
import CTAVortex from '@/components/CTAVortex';

export default function AboutPage() {
  return (
    <main>
      <PageHero />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                Our Story
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Coastal Dental Care was founded in 2009 by Dr. Sarah Mitchell
                with a simple mission: to provide the highest quality dental care
                in a comfortable, anxiety-free environment. What started as a
                small practice has grown into a full-service dental center
                serving over 5,000 patients.
              </p>
              <p className="mt-4 text-lg text-slate-600">
                We’ve invested in the latest technology — from digital X-rays
                that reduce radiation by 90% to 3D imaging for precise implant
                placement. But technology is only part of the equation. Our team
                is trained in patient comfort techniques, and we take the time
                to listen to your concerns and explain every procedure.
              </p>
              <p className="mt-4 text-lg text-slate-600">
                Today, we’re proud to be a multi-generational practice, caring
                for grandparents, parents, and children in the same families.
                That trust is something we never take for granted.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <StatsCounter
                stats={[
                  { value: '15+', label: 'Years of Service' },
                  { value: '5,000+', label: 'Happy Patients' },
                  { value: '4.9', label: 'Average Rating' },
                ]}
                bgColor="bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <TeamGrid
            headline="Meet Our Dentists"
            subheadline="Experienced professionals dedicated to your comfort and care."
            members={[
              {
                name: 'Dr. Sarah Mitchell, DDS',
                title: 'Founder & Lead Dentist',
                imageUrl: '/images/team.jpg',
                bio: 'UCLA School of Dentistry graduate specializing in cosmetic dentistry and anxiety-free care.',
              },
              {
                name: 'Dr. James Chen, DMD',
                title: 'Orthodontic Specialist',
                imageUrl: '/images/about.jpg',
                bio: 'Board-certified orthodontist and Invisalign Diamond Provider with over 500 cases.',
              },
              {
                name: 'Dr. Maria Rodriguez, DDS',
                title: 'Implant & Oral Surgery Specialist',
                imageUrl: '/images/gallery-1.jpg',
                bio: 'Implant dentistry expert with advanced training and over 2,000 implants placed.',
              },
            ]}
          />
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FeaturesGrid
            headline="Our Core Values"
            subheadline="The principles that guide everything we do."
            features={[
              {
                icon: 'Heart',
                title: 'Patient-First Care',
                description:
                  'Your comfort and well-being always come first. We listen, explain, and never rush.',
              },
              {
                icon: 'Lightbulb',
                title: 'Continuous Learning',
                description:
                  'Our team completes over 100 hours of continuing education annually.',
              },
              {
                icon: 'Shield',
                title: 'Integrity & Transparency',
                description:
                  'We provide honest recommendations and clear pricing with no surprises.',
              },
              {
                icon: 'Users',
                title: 'Community Focus',
                description:
                  'We give back through free dental days and local education programs.',
              },
            ]}
          />
        </div>
      </section>

      <CTAVortex
        title="Ready to Experience the Coastal Dental Difference?"
        subtitle="Join our family of happy patients and discover dentistry the way it should be."
        ctaLabel="Schedule Your First Visit"
        ctaHref="/contact#appointment"
        secondaryCtaLabel="Take a Virtual Tour"
        secondaryCtaHref="#"
      />
    </main>
  );
}
