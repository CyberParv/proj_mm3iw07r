import PageHero from '@/components/PageHero';
import PricingTable from '@/components/PricingTable';
import CTABanner from '@/components/CTABanner';

export default function ServicesPage() {
  return (
    <main>
      <PageHero />

      <section id="cleanings" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <PricingTable
            headline="Teeth Cleaning & Preventive Care"
            subheadline="Gentle cleanings and preventive care to keep your smile healthy and bright."
            tiers={[
              {
                name: 'Routine Cleaning',
                price: '$125',
                description: 'Standard prophylaxis cleaning for healthy gums.',
                features: [
                  'Comprehensive exam',
                  'Ultrasonic cleaning',
                  'Polish & fluoride',
                  'Personalized home-care tips',
                ],
                ctaLabel: 'Schedule Your Cleaning',
                ctaHref: '/contact#appointment',
                highlighted: true,
              },
              {
                name: 'Deep Cleaning',
                price: '$275 per quadrant',
                description: 'Scaling and root planing for gum disease treatment.',
                features: [
                  'Deep periodontal cleaning',
                  'Local anesthesia available',
                  'Follow-up evaluation',
                  'Gum health plan',
                ],
                ctaLabel: 'Request Consultation',
                ctaHref: '/contact#appointment',
              },
              {
                name: 'Fluoride Treatment',
                price: '$35',
                description: 'Extra protection against cavities.',
                features: [
                  'Quick in-office application',
                  'Safe for all ages',
                  'Helps remineralize enamel',
                  'Ideal for high-risk patients',
                ],
                ctaLabel: 'Add to Visit',
                ctaHref: '/contact#appointment',
              },
            ]}
          />
        </div>
      </section>

      <section id="whitening" className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <PricingTable
            headline="Professional Teeth Whitening"
            subheadline="Safe, effective whitening that can brighten your smile up to 8 shades."
            tiers={[
              {
                name: 'In-Office Whitening',
                price: '$450',
                description: 'Zoom whitening with dramatic results in 60 minutes.',
                features: [
                  'Chairside treatment',
                  'Immediate results',
                  'Comfort-focused care',
                  'Includes post-care kit',
                ],
                ctaLabel: 'Brighten Your Smile',
                ctaHref: '/contact#appointment',
                highlighted: true,
              },
              {
                name: 'Take-Home Kit',
                price: '$275',
                description: 'Custom trays with professional-grade gel.',
                features: [
                  'Custom-fit trays',
                  'Flexible schedule',
                  'Lower sensitivity',
                  'Whiten over 1-2 weeks',
                ],
                ctaLabel: 'Request Kit',
                ctaHref: '/contact#appointment',
              },
              {
                name: 'Touch-Up Kit',
                price: '$125',
                description: 'Maintenance gel refills for existing patients.',
                features: [
                  'Ideal for maintenance',
                  'Easy to use at home',
                  'Keeps results longer',
                  'Includes care guide',
                ],
                ctaLabel: 'Order Touch-Up',
                ctaHref: '/contact#appointment',
              },
            ]}
          />
        </div>
      </section>

      <section id="implants" className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <PricingTable
            headline="Dental Implants"
            subheadline="Permanent, natural-looking tooth replacement with precise 3D-guided planning."
            tiers={[
              {
                name: 'Single Tooth Implant',
                price: 'Starting at $3,500',
                description: 'Includes implant, abutment, and crown.',
                features: [
                  '3D imaging',
                  'Natural appearance',
                  'Long-lasting solution',
                  'Personalized care plan',
                ],
                ctaLabel: 'Free Implant Consultation',
                ctaHref: '/contact#appointment',
                highlighted: true,
              },
              {
                name: 'Implant-Supported Bridge',
                price: 'Starting at $8,500',
                description: 'Replace multiple teeth with 2-4 implants.',
                features: [
                  'Stable, secure fit',
                  'Restores bite function',
                  'Durable materials',
                  'Custom shade matching',
                ],
                ctaLabel: 'Talk to a Specialist',
                ctaHref: '/contact#appointment',
              },
              {
                name: 'All-on-4 Full Arch',
                price: 'Starting at $18,000',
                description: 'Complete arch restoration on 4 implants.',
                features: [
                  'Full smile transformation',
                  'Same-day provisional teeth',
                  'High-strength materials',
                  'Comprehensive aftercare',
                ],
                ctaLabel: 'Schedule Consultation',
                ctaHref: '/contact#appointment',
              },
            ]}
          />
        </div>
      </section>

      <section id="orthodontics" className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <PricingTable
            headline="Orthodontics & Invisalign"
            subheadline="Straighter teeth for all ages with clear aligners and traditional braces."
            tiers={[
              {
                name: 'Invisalign Full',
                price: '$4,500 - $6,500',
                description: 'Complete treatment for moderate to complex cases.',
                features: [
                  '3D smile preview',
                  'Removable clear aligners',
                  'Fewer office visits',
                  'Great for busy schedules',
                ],
                ctaLabel: 'Start Your Smile Journey',
                ctaHref: '/contact#appointment',
                highlighted: true,
              },
              {
                name: 'Invisalign Lite',
                price: '$3,000 - $4,000',
                description: 'Minor corrections in 6 months or less.',
                features: [
                  'Faster results',
                  'Ideal for mild cases',
                  'Comfortable fit',
                  'Includes retainers',
                ],
                ctaLabel: 'Book Consultation',
                ctaHref: '/contact#appointment',
              },
              {
                name: 'Traditional Braces',
                price: '$3,500 - $5,500',
                description: 'Metal or ceramic brackets for all ages.',
                features: [
                  'Effective for complex cases',
                  'Multiple style options',
                  'Regular progress visits',
                  'Retainer aftercare',
                ],
                ctaLabel: 'Talk to Orthodontics',
                ctaHref: '/contact#appointment',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
