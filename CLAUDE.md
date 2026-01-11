# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Amplixy is a marketing/visibility services website built with Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS. It's a single-page application with a landing page showcasing services, values, and a contact form. The site uses Framer Motion for animations and is deployed via Docker on Railway.

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
```

## Architecture

### App Structure

- **Next.js App Router**: Uses the `src/app/` directory structure
  - [layout.tsx](src/app/layout.tsx): Root layout with Google Fonts (Montserrat, Lato), Umami analytics script, and radial gradient background
  - [page.tsx](src/app/page.tsx): Main landing page (client component) with all sections
  - [globals.css](src/app/globals.css): Custom CSS with Tailwind utilities (`.section-shell`, `.card-shell`, `.eyebrow`)

### Component Library

Located in [src/components/](src/components/):

- **Navbar**: Fixed floating navbar with mobile menu (using Framer Motion AnimatePresence)
- **Footer**: Simple footer with contact info
- **Reveal**: Reusable scroll-reveal animation wrapper (Framer Motion `whileInView`)
- **ContactForm**: Contact form with client-side state (currently simulates API call)

### Styling System

Custom color palette defined in [tailwind.config.ts](tailwind.config.ts):
- `midnight`: #0a1128 (primary background)
- `abyss`: #172a3a (secondary background)
- `mist`: #e0e1dd (text color)
- `accent`: #4a7c99 (brand accent)
- `glow`: #9ae3ff (highlight color)

Typography:
- Display font: Montserrat (weights: 500, 600, 700)
- Body font: Lato (weights: 300, 400, 700)
- Accessible via CSS variables: `--font-montserrat`, `--font-lato`

Custom utility classes (see [globals.css](src/app/globals.css)):
- `.section-shell`: Consistent section padding
- `.card-shell`: Glassmorphic card styling
- `.eyebrow`: Small uppercase labels

### Key Features

1. **Responsive Design**: Mobile-first approach with distinct mobile/desktop layouts in hero section
2. **Scroll Animations**: Uses `Reveal` component throughout for fade-in effects on scroll
3. **Infinite Logo Carousel**: Partner logos with Framer Motion animation
4. **Analytics**: Umami self-hosted analytics (trafic.amplixy.cloud)
5. **SEO**: FAQ structured data (JSON-LD schema)

## Deployment

The project uses Docker for production deployment:
- Multi-stage build (deps → builder → runner)
- Optimized for Railway platform
- Exposes port 3000, binds to 0.0.0.0
- See [Dockerfile](Dockerfile) for details

## Important Notes

- **Language**: All content is in French
- **Client Components**: Most components use `"use client"` directive due to Framer Motion and hooks
- **No API Route**: The contact form currently simulates submission (see [ContactForm.tsx](src/components/ContactForm.tsx:14))
- **Images**: Logo images in `/public/img/partenaire/` are inverted (white) via Tailwind classes
