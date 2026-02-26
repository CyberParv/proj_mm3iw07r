import './globals.css';
import type { Metadata } from 'next';
import { Poppins, Nunito } from 'next/font/google';
import NavbarSticky from '@/components/NavbarSticky';
import FooterMultiColumn from '@/components/FooterMultiColumn';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
});

export const metadata: Metadata = {
  title: 'Coastal Dental Care | Family & Cosmetic Dentistry in Coastal Bay, CA',
  description:
    'Experience gentle, modern dental care at Coastal Dental Care. We offer cleanings, whitening, implants, Invisalign & more. New patients welcome! Call (555) 234-5678.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${nunito.variable}`}>
      <body className="bg-white text-slate-800">
        <NavbarSticky
          logo="Coastal Dental Care"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'About Us', href: '/about' },
            { label: 'Patient Resources', href: '/patient-resources' },
            { label: 'Testimonials', href: '/testimonials' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Book Online"
          ctaHref="/contact#appointment"
        />
        {children}
        <FooterMultiColumn
          brand="Coastal Dental Care"
          description="Gentle, modern dentistry for the whole family in Coastal Bay. We combine advanced technology with compassionate care to help you smile with confidence."
          columns={[
            {
              title: 'Office',
              links: [
                { label: '2847 Ocean Blvd, Suite 200', href: '/contact' },
                { label: '(555) 234-5678', href: 'tel:+15552345678' },
                { label: 'smile@coastaldentalcare.com', href: 'mailto:smile@coastaldentalcare.com' },
              ],
            },
            {
              title: 'Services',
              links: [
                { label: 'Teeth Cleaning', href: '/services#cleanings' },
                { label: 'Whitening', href: '/services#whitening' },
                { label: 'Dental Implants', href: '/services#implants' },
                { label: 'Orthodontics', href: '/services#orthodontics' },
              ],
            },
            {
              title: 'Resources',
              links: [
                { label: 'Patient Resources', href: '/patient-resources' },
                { label: 'Insurance & Payment', href: '/patient-resources#insurance-info' },
                { label: 'Testimonials', href: '/testimonials' },
                { label: 'Contact', href: '/contact' },
              ],
            },
          ]}
          copyright="© 2024 Coastal Dental Care. All rights reserved."
        />
      </body>
    </html>
  );
}
