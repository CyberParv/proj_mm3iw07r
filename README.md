# Coastal Dental Care

> Your smile is our passion — gentle, modern dentistry for the whole family

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

---

## About

Experience gentle, modern dental care at Coastal Dental Care. We offer cleanings, whitening, implants, Invisalign & more. New patients welcome! Call (555) 234-5678.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth animations and transitions
- SEO optimized with meta tags
- Hero section with call-to-action

## Tech Stack

| Technology | Description |
|-----------|-------------|
| Next.js | React framework with App Router & SSR |
| React | UI component library |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first CSS framework |
| shadcn/ui | Accessible UI components |

## Pages

- **Home** (`/`) — hero, services-grid, features, cta-banner, team-preview, testimonials-carousel, insurance-section, contact-preview
- **Services** (`/services`) — page-hero, service-detail, service-detail, service-detail, service-detail, cta-banner
- **About Us** (`/about`) — page-hero, content-with-image, team-grid, values-grid, cta-banner
- **Patient Resources** (`/patient-resources`) — page-hero, content-section, insurance-detail, faq-accordion, cta-banner
- **Testimonials** (`/testimonials`) — page-hero, testimonials-grid, video-section, review-badges, cta-banner
- **Contact** (`/contact`) — page-hero, contact-details, map-embed, appointment-form, emergency-info

## Project Structure

```
├── .env.example
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── api/
│   │   ├── appointment/
│   │   │   └── route.ts
│   │   └── contact/
│   │       └── route.ts
│   ├── contact/
│   │   └── page.tsx
│   ├── error.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── loading.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── patient-resources/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   └── testimonials/
│       └── page.tsx
├── components.json
├── components/
│   ├── AppointmentForm.tsx
│   ├── CTABanner.tsx
│   ├── CTAVortex.tsx
│   ├── ContactForm.tsx
│   ├── DoctorCard.tsx
│   ├── EmergencyBanner.tsx
│   ├── FAQAccordion.tsx
│   ├── FeatureGrid.tsx
│   ├── FeaturesGrid.tsx
│   ├── Footer.tsx
│   ├── FooterMultiColumn.tsx
│   ├── FormDownloadCard.tsx
│   ├── GalleryMasonry.tsx
│   ├── HeroAurora.tsx
│   ├── HeroSection.tsx
│   ├── InsuranceLogos.tsx
│   ├── MapEmbed.tsx
│   ├── Navbar.tsx
│   ├── NavbarSticky.tsx
│   ├── OfficeHoursTable.tsx
│   ├── PageHero.tsx
│   ├── PhoneBadge.tsx
│   ├── PricingCard.tsx
│   ├── PricingTable.tsx
│   ├── ServiceCard.tsx
│   ├── StarRating.tsx
│   ├── StatsCounter.tsx
│   ├── TeamGrid.tsx
│   ├── TestimonialCard.tsx
│   ├── TestimonialsAnimated.tsx
│   ├── TestimonialsCarousel.tsx
│   ├── TrustBadges.tsx
│   └── ui/
│       ├── aceternity-input.tsx
│       ├── aceternity-label.tsx
│       ├── animated-testimonials.tsx
│       ├── avatar.tsx
│       ├── backgrounds/
│       │   ├── aurora-background.tsx
│       │   └── vortex.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── skeleton.tsx
│       ├── text/
│       │   └── text-generate-effect.tsx
│       └── textarea.tsx
├── error.txt
├── lib/
│   ├── email.ts
│   ├── types.ts
│   ├── utils.ts
│   └── validators.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Color Palette

| Role | Color | Hex |
|------|-------|-----|
| Primary | ![#0077B6](https://via.placeholder.com/15/0077B6/000000?text=+) | `#0077B6` |
| Secondary | ![#48CAE4](https://via.placeholder.com/15/48CAE4/000000?text=+) | `#48CAE4` |
| Accent | ![#00B4D8](https://via.placeholder.com/15/00B4D8/000000?text=+) | `#00B4D8` |
| Background | ![#FFFFFF](https://via.placeholder.com/15/FFFFFF/000000?text=+) | `#FFFFFF` |

## Typography

- **Headings:** Poppins
- **Body:** Nunito

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/CyberParv/proj_mm3iw07r.git

# Navigate to the project
cd proj_mm3iw07r

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment

The easiest way to deploy is with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/CyberParv/proj_mm3iw07r)

Alternatively, you can build for production:

```bash
npm run build
npm run start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/CyberParv">Codex Studio</a>
</p>
