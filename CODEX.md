# One Fam Studio - Codex Guide

This file is the working guide for AI agents and developers contributing to this project. Keep changes aligned with the existing site: a premium, dark, cinematic agency website for **One Fam Media Hub**.

## Project Overview

- **Framework:** Next.js App Router
- **Runtime UI:** React
- **Styling:** Tailwind CSS v4 through `app/globals.css`
- **Animation:** Framer Motion
- **Accessible UI primitives:** Headless UI
- **Icons:** `lucide-react`
- **Database:** MongoDB through Mongoose
- **Images/media:** `next/image` plus static assets from `public/assets`

The homepage currently renders:

- `components/HeroSection.jsx` - full-screen video hero.
- `components/HomeComponents/AboutSection.jsx` - animated agency intro.
- `components/HomeComponents/ClientsSection.jsx` - animated client logo marquee.

Global layout is handled by `app/layout.js`, which wraps every page with:

- `components/Navbar.jsx`
- page content
- `components/Footer.jsx`

## Commands

Use npm, because this repo includes `package-lock.json`.

```bash
npm run dev
npm run build
npm run lint
```

Run `npm run lint` before handing off code changes. Run `npm run build` when touching routing, metadata, images, imports, or anything that could affect production output.

## Directory Map

```text
app/
  api/contact/route.js Contact form API endpoint
  globals.css          Global Tailwind import and theme tokens
  layout.js            Root metadata, fonts, navbar/footer shell
  page.js              Homepage composition
  contact/page.jsx     Contact page
  lookbook/page.jsx    Lookbook page
  services/page.jsx    Services page
  testimonials/page.jsx Testimonials page

components/
  Navbar.jsx
  HeroSection.jsx
  Footer.jsx
  ContactComponents/
    ContactPage.jsx
  HomeComponents/
    AboutSection.jsx
    ClientsSection.jsx

lib/
  mongodb.js           Cached Mongoose connection helper

models/
  ContactMessage.js    Contact form submission schema

public/assets/
  images/
    poster.png
    logos/
    clients/
  videos/
    ONE_FAM_MEDIA_HUB.webm
    ONE_FAM_MEDIA_HUB.mp4
```

## Styling Conventions

- Prefer Tailwind utility classes in JSX, matching the existing component style.
- Shared brand colors are defined in `app/globals.css`:
  - `primary`: `#c1440e`
  - `secondary`: `#d9b88c`
  - `midwhite`: `#f6ffff`
- The visual direction is mostly black backgrounds, warm brand accents, white/gray text, glass-like borders, and cinematic motion.
- Use responsive classes (`md:`, `lg:`) for every section that changes layout.
- Keep sections full-width with constrained inner containers such as `container mx-auto px-6`.
- Use `lucide-react` for icons instead of custom SVG when an icon exists.
- Use `next/image` for static images and logos wherever practical.

## Component Conventions

- Components that use browser APIs, hooks, `framer-motion`, `usePathname`, or Headless UI dialogs must start with `"use client"`.
- Page files under `app/` should compose sections and keep business/UI logic inside components where possible.
- Reuse local helper patterns already present in the codebase:
  - `TypingText` for letter-by-letter Framer Motion text.
  - `containerVariants` and `wordVariants` for heading reveal animations.
  - small local helper components such as `FooterLink`, `SocialLink`, `InputGroup`, and `ContactCard`.
- Keep imports using the configured alias: `@/*`.

## Media And Assets

- Public assets are referenced from the site root, for example:
  - `/assets/videos/ONE_FAM_MEDIA_HUB.webm`
  - `/assets/images/clients/DAY_CLEAN.png`
- Imported static assets are also used, for example the logo SVG and poster image.
- For video hero work, keep both `.webm` and `.mp4` sources when possible for browser compatibility.
- Always provide useful `alt` text for images.

## Current Routes

- `/` exists and renders the homepage.
- `/api/contact` accepts contact form submissions and saves them to MongoDB.
- `/services` exists and renders the services page.
- `/lookbook` exists and renders the lookbook page.
- `/contact` exists and renders the contact page.
- `/testimonials` exists and renders the testimonials page.
- Navbar currently links to routes that are not present yet:
  - `/process`

When adding these pages, create matching folders under `app/`, for example `app/services/page.jsx`.

## Known Issues To Watch

- Several text strings contain misencoded apostrophes in copy and metadata. Replace these with normal apostrophes, for example `brand's`, when editing nearby copy.
- `components/HeroSection.jsx` logs `scrollPosition` on every render. Remove debug logs before production polish.
- `Navbar.jsx` uses a `setTimeout` in `useEffect` without a dependency array or cleanup. This can schedule repeated timers; add a dependency array and cleanup if changing that behavior.
- The mobile menu has CTA labels like `Shop Now` and `View Lookbook`; confirm these match the agency brand before expanding navigation.
- The contact form is currently visual only. Add submit handling, validation, and backend/API integration before treating it as functional.
- Footer social links and several company links use `#`. Replace placeholders with real URLs or routes when available.

## Metadata And SEO

- Site metadata lives in `app/layout.js`.
- If adding production URLs, update:
  - `metadataBase`
  - Open Graph `url`
  - Open Graph images
  - canonical alternates
- Keep title and description focused on One Fam Media Hub's services: event documentation, digital marketing, multimedia production, photography, videography, drone coverage, and brand visibility.

## Accessibility Notes

- Keep `aria-label` on icon-only buttons such as menu open/close.
- Dialog/menu interactions should remain keyboard accessible through Headless UI.
- Use real links for navigation and real buttons for actions.
- Make sure animated content is still readable and does not depend only on motion to communicate meaning.
- Maintain sufficient contrast on black backgrounds, especially gray text and low-opacity borders.

## Development Guidelines

- Keep edits scoped. Do not refactor unrelated sections while implementing a single feature.
- Match the existing visual language before introducing new patterns.
- Prefer small, readable components over large mixed-purpose files when a section grows.
- Avoid adding new dependencies unless they solve a clear project need.
- Do not commit build output, `.next`, or generated assets unless explicitly requested.
- Preserve user-added assets in `public/assets`.

## Contact Form Backend

- The contact page UI lives in `components/ContactComponents/ContactPage.jsx`.
- Form submissions post to `app/api/contact/route.js`.
- MongoDB connection uses `lib/mongodb.js` and expects `MONGO_URI` in `.env`.
- Saved submissions use the `models/ContactMessage.js` Mongoose model.
- Validation is enforced on both client and server:
  - name: alphabets and spaces only
  - email: valid email format
  - phone: numbers only
  - subject: alphabets, numbers, and spaces only
  - message: optional; alphabets, numbers, and spaces only when provided

## Suggested Next Improvements

1. Fix mojibake copy in metadata and section text.
2. Remove production debug logging.
3. Harden `Navbar` timer behavior.
4. Build real pages for remaining navbar routes.
5. Wire the contact form to an API route or external service.
6. Replace placeholder footer/social links with real destinations.
