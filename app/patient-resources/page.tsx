import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import PricingTable from '@/components/PricingTable';
import CTABanner from '@/components/CTABanner';

export default function PatientResourcesPage() {
  return (
    <main>
      <PageHero />

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                New Patient Information
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Your first appointment includes a comprehensive oral exam,
                digital X-rays, and a personalized treatment plan discussion.
                Please arrive 15 minutes early to complete paperwork, or save
                time by filling out forms online.
              </p>
              <ul className="mt-6 space-y-3 text-slate-600">
                <li>• Photo ID and insurance card</li>
                <li>• List of current medications</li>
                <li>• Dental records from previous dentist (if available)</li>
                <li>• Completed new patient forms</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">
                Download Forms
              </h3>
              <div className="mt-4 space-y-3 text-slate-600">
                <p>New Patient Registration Form</p>
                <p>Medical History Questionnaire</p>
                <p>HIPAA Privacy Notice</p>
                <p>Financial Policy Agreement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="insurance-info" className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">
                Insurance & Payment Information
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                We’re in-network with most major PPO plans and will file claims
                on your behalf. Our team will verify your benefits before your
                appointment so there are no surprises.
              </p>
              <ul className="mt-6 space-y-2 text-slate-600">
                <li>• Delta Dental PPO & Premier</li>
                <li>• Cigna DPPO</li>
                <li>• Aetna DMO & PPO</li>
                <li>• MetLife PDP</li>
                <li>• Blue Cross Blue Shield</li>
                <li>• United Healthcare</li>
                <li>• Guardian</li>
                <li>• Humana</li>
                <li>• Principal</li>
                <li>• Ameritas</li>
              </ul>
            </div>
            <div>
              <PricingTable
                headline="No Insurance? No Problem!"
                subheadline="Our Coastal Smile Plan offers affordable preventive care for uninsured patients."
                tiers={[
                  {
                    name: 'Individual Plan',
                    price: '$299/year',
                    description: 'Affordable care for one patient.',
                    features: [
                      '2 cleanings & exams',
                      'All necessary X-rays',
                      '20% off all treatments',
                      'No waiting periods',
                    ],
                    ctaLabel: 'Join the Plan',
                    ctaHref: '/contact#appointment',
                    highlighted: true,
                  },
                  {
                    name: 'Family Plan',
                    price: '$699/year',
                    description: 'Coverage for up to 4 family members.',
                    features: [
                      '2 cleanings & exams each',
                      'All necessary X-rays',
                      '20% off all treatments',
                      'Priority scheduling',
                    ],
                    ctaLabel: 'Join the Plan',
                    ctaHref: '/contact#appointment',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <FAQAccordion
            headline="Frequently Asked Questions"
            subheadline="Find answers to common questions about our practice and treatments."
            items={[
              {
                question: 'How often should I visit the dentist?',
                answer:
                  'We recommend a checkup and cleaning every 6 months for most patients. Regular visits help catch problems early.',
              },
              {
                question: 'Do you offer sedation for anxious patients?',
                answer:
                  'Yes! We offer nitrous oxide, oral sedation, and IV sedation depending on your comfort needs.',
              },
              {
                question: 'How long does teeth whitening last?',
                answer:
                  'Professional whitening typically lasts 1-3 years depending on diet and habits.',
              },
              {
                question: 'Are dental implants painful?',
                answer:
                  'Most patients report minimal discomfort. We use local anesthesia and sedation options.',
              },
              {
                question: 'What age should my child first see a dentist?',
                answer:
                  'We recommend a first visit by age 1 or within 6 months of the first tooth.',
              },
              {
                question: 'Do you handle dental emergencies?',
                answer:
                  'Yes, we reserve time each day for emergency appointments. Call (555) 234-5678.',
              },
              {
                question: 'How much does Invisalign cost?',
                answer:
                  'Invisalign ranges from $3,000 to $6,500 depending on complexity.',
              },
              {
                question: "What's included in a new patient exam?",
                answer:
                  'A full oral examination, digital X-rays, oral cancer screening, and a personalized treatment plan.',
              },
            ]}
          />
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
