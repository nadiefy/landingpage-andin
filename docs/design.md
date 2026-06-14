# Design Document: Andin Transport Landing Page

**Project:** Premium Car Rental Landing Page  
**Brand:** Andin Transport  
**Version:** 1.0  
**Last Updated:** 2026-06-12

---

## Overview

Andin Transport is a premium car rental service landing page showcasing a luxury fleet, professional driver services, and seamless booking via WhatsApp. The design emphasizes a dark, cinematic aesthetic with high contrast, glassmorphic elements, and smooth motion animations.

---

## Design Philosophy

### Visual Identity
- **Dark Cinematic Aesthetic:** Deep black backgrounds (#000000) with subtle glassmorphic effects (blur, transparency) convey luxury and premium quality.
- **High Contrast:** White/light gray primary text on dark backgrounds ensures readability and visual hierarchy.
- **Accent Color:** Warm red (#ec3237) used sparingly for CTAs and highlights to draw attention without overwhelming the design.

### Typography
- **Display Font:** Space Grotesk (variable `--font-display`) for headings — modern, geometric, and bold.
- **Body Font:** Geist (variable `--font-sans`) for body text — clean, readable, and neutral.
- **Hierarchy:** Large, bold display headings (up to 78px) paired with smaller, neutral body text (16-20px).

### Motion & Animation
- **Motion Library:** Motion (formerly Framer Motion) for React — used for scroll-based parallax, entrance animations, and micro-interactions.
- **Reduced Motion Support:** All animations respect `useReducedMotion` hook for accessibility.
- **Easing:** Custom easing curves `[0.16, 1, 0.3, 1]` for smooth, natural-feeling transitions.

---

## Architecture

### Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 with custom theme tokens
- **Animations:** Motion (framer-motion)
- **Icons:** Lucide React, Phosphor Icons
- **Fonts:** Google Fonts (Geist, Space Grotesk)

### Project Structure
```
landingpage-andin/
├── app/
│   ├── globals.css        # Tailwind config, CSS variables, global styles
│   ├── layout.tsx         # Root layout with fonts and metadata
│   └── page.tsx           # Main landing page composing all sections
├── components/
│   ├── Navbar.tsx         # Fixed navigation with mobile menu
│   ├── Hero.tsx           # Full-height video background hero
│   ├── Services.tsx       # Service features with video background
│   ├── Fleet.tsx          # Interactive car carousel with WhatsApp booking
│   ├── About.tsx          # Brand story with parallax images
│   ├── CTA.tsx            # Contact section with embedded Google Map
│   └── Footer.tsx         # Brand footer with links and copyright
├── public/
│   ├── assets/
│   │   ├── pic/           # Logo images
│   │   └── vids/          # Hero background video
├── docs/                  # Documentation (architecture, status, UX)
└── package.json           # Dependencies and scripts
```

### Component Design Principles
- **Component-Driven:** Modular, reusable components in `/components` directory.
- **Flat Structure:** Avoid deeply nested UI folders for content-heavy sections.
- **Server vs Client Components:** 
  - Client Components (`'use client'`): Interactive components with state/hooks/animations.
  - Server Components (default): Static sections for optimized bundle size.

---

## Design Tokens

### Colors (globals.css)
```css
--color-background: hsl(0, 0%, 0%);       /* Pure black */
--color-foreground: hsl(0, 0%, 12%);      /* Near black */
--color-primary: hsl(0, 0%, 95%);         /* Off-white */
--color-primary-foreground: hsl(0, 0%, 12%);
--color-accent-warm: #ec3237;             /* Warm red accent */
```

### Spacing
- **Container:** Max-width 1280px (`max-w-7xl`)
- **Section Padding:** `py-24 lg:py-32` (96px / 128px vertical)
- **Horizontal Padding:** `px-7 md:px-12 lg:px-20` (responsive)

### Typography Scale
- **Hero Heading:** `text-5xl md:text-6xl lg:text-[78px]` (responsive)
- **Section Headings:** `text-4xl md:text-5xl lg:text-6xl`
- **Body Text:** `text-base md:text-lg` (16px / 18px)
- **Small Text:** `text-sm` (14px)

---

## Page Sections

### 1. Navbar
**File:** `components/Navbar.tsx`

**Purpose:** Fixed navigation with brand logo, section links, and CTA.

**Features:**
- Fixed position with scroll-aware styling (transparent → blurred background)
- Desktop: horizontal nav links with hover effects
- Mobile: hamburger menu with full-screen overlay
- "Book Now" CTA button (scrolls to contact section)

**Interactions:**
- Scroll listener toggles `scrolled` state at 50px threshold
- Mobile menu animated with AnimatePresence (fade + slide)

### 2. Hero
**File:** `components/Hero.tsx`

**Purpose:** Full-height video background hero with headline and CTA.

**Features:**
- Local video background (`/assets/vids/hero-vids.mp4`)
- Gradient overlay (black gradient from top to bottom)
- Parallax effect on scroll (video moves at different speed)
- Large display heading: "Premium Fleet. Professional Drivers."
- CTA button: "Explore Our Fleet" (scrolls to fleet section)

**Motion:**
- `useScroll` and `useTransform` for parallax
- Fade + slide entrance animation on load
- `useReducedMotion` for accessibility

### 3. Services
**File:** `components/Services.tsx`

**Purpose:** Highlight key rental services with feature cards.

**Features:**
- Video background with dark overlay (sample video from Google Storage)
- Three feature cards with icons:
  1. Flexible scheduling (CalendarBlank icon)
  2. Chauffeur services (UserCircleCheck icon)
  3. Continuous support (Headset icon)
- Parallax effect on video background

**Layout:**
- Two-column grid on desktop (header left, cards right)
- Stacked on mobile

### 4. Fleet
**File:** `components/Fleet.tsx`

**Purpose:** Interactive car carousel showcasing available vehicles.

**Features:**
- Horizontal scrolling carousel with snap points
- SpotlightCard effect (mouse-following gradient highlight)
- Each card shows:
  - Image carousel with navigation arrows
  - Vehicle name, category, seats, amenities
  - WhatsApp booking button
- Navigation arrows (desktop only)
- Touch-friendly on mobile

**Vehicles:**
1. Toyota Alphard Executive Lounge 2025 (Premium MPV)
2. Toyota HiAce Premio 2025 (Group Transport)
3. Toyota Innova Zenix 2025 (Executive Sedan)
4. Toyota Innova Reborn 2025 (Family MPV)
5. Toyota Fortuner GR Legend 2025 (Luxury SUV)

**WhatsApp Integration:**
- Pre-filled message in Indonesian: "Halo, saya tertarik untuk menyewa [car name]. Bisa info lebih lanjut?"
- Number: 628123456789 (placeholder)

### 5. About
**File:** `components/About.tsx`

**Purpose:** Brand story and value proposition with visual imagery.

**Features:**
- Two-column layout (images left, text right)
- Parallax effect on images (scroll at different speeds)
- Three images with rounded corners and border
- Brand copy emphasizing premium service and convenience

**Motion:**
- Staggered entrance animations
- `useTransform` for parallax on image columns

### 6. CTA (Contact)
**File:** `components/CTA.tsx`

**Purpose:** Contact section with location map and contact details.

**Features:**
- Embedded Google Maps iframe (fully interactive)
- Contact information: address, phone, email
- "Book Now" CTA button
- Glassmorphic container with border

**Interactions:**
- Map is fully interactive (zoom, pan)
- Parallax effect on container

### 7. Footer
**File:** `components/Footer.tsx`

**Purpose:** Brand footer with navigation links and copyright.

**Features:**
- Three-column grid: Logo + description, Quick Links, Contact
- Social media links (placeholder icons)
- Dynamic copyright year with `suppressHydrationWarning`
- Background: black with top padding

---

## Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Mobile Adaptations
- Navbar: Hamburger menu with full-screen overlay
- Hero: Reduced heading size, maintained CTA
- Services: Stacked layout
- Fleet: Horizontal scroll carousel with touch
- About: Single-column stack
- CTA: Full-width map
- Footer: Stacked columns

### Known Issues (from responsive-test-report.md)
1. Fleet heading alignment slightly off on small mobile (390px, 360px)
2. Fixed navbar can overlap section headings during scroll
3. Mobile menu CTA points to missing `#get-started` anchor
4. 404 for missing favicon.ico

---

## Performance Optimizations

### Images
- All images use Next.js `<Image />` component
- Automatic WebP conversion
- Lazy loading with `loading="lazy"`
- Responsive `sizes` attribute

### Videos
- Local video for hero (reduced network latency)
- `autoPlay`, `loop`, `muted`, `playsInline` attributes
- Sample video for services (placeholder)

### Bundle Size
- Server Components by default (reduced client JS)
- Dynamic imports for heavy components (if needed)
- Tree-shaking with ES modules

---

## Accessibility

### Implemented
- Semantic HTML (`<main>`, `<section>`, `<nav>`, `<header>`, `<footer>`)
- ARIA labels on interactive elements
- `suppressHydrationWarning` for dynamic content
- Reduced motion support via `useReducedMotion`
- Focus-visible states on buttons and links

### Needs Attention
- Skip-to-main-content link (not implemented)
- Color contrast audit (needed for all text)
- Screen reader testing

---

## Future Enhancements

### Recommended
1. Add favicon and app icons
2. Implement booking form (currently WhatsApp-only)
3. Add vehicle availability calendar
4. SEO optimization (meta tags, structured data)
5. Analytics integration (Google Analytics, PostHog)
6. Multi-language support (Indonesian/English)
7. CMS integration for vehicle data (Sanity, Contentful)

### Nice to Have
- Testimonials section
- FAQ accordion
- Live chat widget
- Vehicle comparison tool
- Price calculator

---

## File References

- Main page: `app/page.tsx:1`
- Layout: `app/layout.tsx:1`
- Styles: `app/globals.css:1`
- Navbar: `components/Navbar.tsx:1`
- Hero: `components/Hero.tsx:1`
- Services: `components/Services.tsx:1`
- Fleet: `components/Fleet.tsx:1`
- About: `components/About.tsx:1`
- CTA: `components/CTA.tsx:1`
- Footer: `components/Footer.tsx:1`
- Architecture doc: `docs/architecture.md:1`
- Current status: `docs/current_status.md:1`
- UI/UX decisions: `docs/ui_ux_decisions.md:1`
- Responsive report: `responsive-test-report.md:1`

---

## Conclusion

This design document captures the current state and design philosophy of the Andin Transport landing page. The project follows a modern, component-driven architecture with a focus on visual impact, smooth interactions, and responsive design. Key areas for improvement include accessibility enhancements, performance audits, and feature expansion (booking system, CMS, analytics).
