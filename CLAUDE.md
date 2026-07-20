# CLAUDE.md

This file provides guidance when working with code in this repository.

## Project Overview

Amplixy is a French single-page marketing site for an independent digital studio. Its three entry points are AI consulting, websites, and custom business tools. The experience is proof-led: real client work, a short method, and direct booking through Cal.eu.

Stack: Next.js 15 App Router, React 19, TypeScript, Tailwind CSS, and a small layer of global CSS. Production runs in Docker through Coolify.

## Development Commands

```bash
# Install dependencies
npm ci

# Development server (with hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint

# TypeScript validation
npm run typecheck

# Content regression tests
npm test
```

## Architecture

### App Structure

- **Next.js App Router**: uses the `src/app/` directory structure
  - [layout.tsx](src/app/layout.tsx): root layout, Archivo font, metadata, schemas, and Umami analytics
  - [page.tsx](src/app/page.tsx): server-rendered homepage and all marketing sections
  - [globals.css](src/app/globals.css): responsive design system and component styles
  - [opengraph-image.tsx](src/app/opengraph-image.tsx): generated social image
- **Shared site constants**: [src/lib/site.ts](src/lib/site.ts), including the canonical Cal.eu booking URL
- **Structured data**: [src/lib/schema.ts](src/lib/schema.ts)

### Component Library

Located in [src/components/](src/components/):

- **Navbar**: sticky responsive navigation with direct booking CTA and accessible mobile menu
- **Footer**: contact, company details, and legal route
- **Reveal**: legacy reusable animation helper; it is not required by the current homepage

### Styling System

The palette deliberately stays narrow: Amplixy blue and its nuances, complementary orange, ink, and white. Do not introduce additional brand colors. Typography uses Archivo through `next/font` for both display and body text.

The homepage is mobile-first. Keep explicit checks around 390 px, 768 px, and 1280 px. Preserve safe areas, touch targets, keyboard focus, and `prefers-reduced-motion` behavior.

### Key Features

1. **Responsive design**: three stacked project windows in the hero and fluid layouts at each breakpoint
2. **Real portfolio**: local optimized WebP assets for Vion Couverture, Accord'Âme, and Corsicabrignoli
3. **Direct conversion**: every “Parler/Cadrer un besoin” CTA opens `https://www.cal.eu/florianbrignoli/quick-chat`
4. **Analytics**: self-hosted Umami at `trafic.amplixy.cloud`
5. **SEO**: canonical metadata, sitemap, robots, Open Graph image, and JSON-LD

## Deployment

The project uses a multi-stage Docker build and is deployed by Coolify on the Hostinger VPS. Production follows the GitHub `main` branch. The container exposes port 3000 and binds to `0.0.0.0`; see [Dockerfile](Dockerfile).

## Important Notes

- **Language**: all public content is in French
- **Homepage**: prefer a server component; keep client code limited to genuine interaction such as the mobile menu
- **Booking**: reuse `CALENDAR_URL` instead of duplicating the URL
- **Images**: use local optimized assets with `next/image`
- **Quality gate**: run lint, typecheck, tests, and the production build before deployment
