# CLAUDE.md

This file provides guidance when working with code in this repository.

Before Amplixy decisions or implementation, read the canonical rule at
`/Users/florianbrignoli/EDEN-Vault/amplixy/AGENTS.md` and its relevant sources.
The canonical offer and brand documents remain the authority; this file records
how their current decisions are implemented in the site.

## Project Overview

Amplixy is the French marketing site for an independent digital adviser to SMEs. It helps clients choose, connect and evolve their tools around real work. The accompaniment has three moments: diagnostic and client-owned reference dossier, implementation, then ongoing guidance within an agreed scope and cadence. The dossier is a documented deliverable, not a proprietary software platform. Sites, business tools, automation and AI are possible implementations, not separate commercial pillars.

Stack: Next.js 16.3 App Router, React 19.2, TypeScript, Tailwind CSS, and a small layer of global CSS. Production runs in Docker through Coolify.

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
  - [layout.tsx](src/app/layout.tsx): root layout, Geist font, metadata, schemas, and consent-controlled Umami analytics
  - [page.tsx](src/app/page.tsx): server-rendered homepage and all marketing sections
  - [globals.css](src/app/globals.css): responsive design system and component styles
  - [opengraph-image.tsx](src/app/opengraph-image.tsx): generated social image
- **Shared site constants**: [src/lib/site.ts](src/lib/site.ts), including the canonical Cal.eu booking URL
- **Shared business case facts**: [src/lib/business-cases.ts](src/lib/business-cases.ts), used by the homepage and portfolio
- **Structured data**: [src/lib/schema.ts](src/lib/schema.ts)

### Component Library

Located in [src/components/](src/components/):

- **Navbar**: sticky responsive navigation with direct booking CTA and accessible mobile menu
- **Footer**: contact, company details, legal routes, and analytics preferences
- **Reveal**: legacy reusable animation helper; it is not required by the current homepage

### Styling System

The site implements the canonical corporate Carmin palette with Papier, Encre and Pierre. Typography uses Geist through `next/font`. Read the canonical brand and visual charter in the Amplixy vault before changing design; product brands such as Firaxy retain their own identity.

The homepage is mobile-first. Keep explicit checks around 390 px, 768 px, and 1280 px. Preserve safe areas, touch targets, keyboard focus, and `prefers-reduced-motion` behavior.

### Key Features

1. **Homepage order**: hero and doctrine, approach, reference dossier, three moments of accompaniment, business cases, tools, separate Amplixy products, contact
2. **Real portfolio**: confidential Jira and business AI cases first, followed by local optimized WebP assets for Vion Couverture, Accord'Âme, and Corsicabrignoli. Do not invent results or imply ongoing guidance was already delivered in all these cases.
3. **Booking**: desktop and mobile navbar “Réserver 30 min” links open `CALENDAR_URL` directly in the same tab. Other “Parler de votre besoin” CTAs retain `/rendez-vous`. The external event displays its own Amplixy privacy notice before selection; do not embed or preload the calendar.
4. **Analytics**: self-hosted Umami at `trafic.amplixy.cloud`, blocked until explicit consent
5. **SEO**: canonical metadata, sitemap, robots, Open Graph image, and JSON-LD

## Deployment

The project uses a multi-stage Docker build and is deployed by Coolify on the Hostinger VPS. Production follows the GitHub `main` branch. The container exposes port 3000 and binds to `0.0.0.0`; see [Dockerfile](Dockerfile).

## Important Notes

- **Language**: all public content is in French
- **Homepage**: prefer a server component; keep client code limited to genuine interaction such as the mobile menu
- **Booking**: use `CALENDAR_URL` for both navbar CTAs and the booking information page; other CTAs keep `BOOKING_URL`. Keep provider and URL configurable for migration.
- **Images**: use local optimized assets with `next/image`
- **Quality gate**: run lint, typecheck, tests, and the production build before deployment

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
