# Design Specification: Services Section Redesign

**Project:** Andin Transport Landing Page
**Feature:** Services Section (Split-Screen Interactive Showcase)
**Date:** 2026-06-19
**Status:** Approved

---

## 1. Goal & Context

The current `components/Services.tsx` section utilizes a generic icon-grid layout with video background parallax, which creates a template-like "AI vibe". This specification outlines the transition to a high-end, editorial, and interactive showcase system that reflects the premium luxury car rental brand identity of Andin Transport.

---

## 2. Aesthetic Direction & Design System Sync

- **Color Palette**: 
  - Section Background: Pure Black (`#000000`)
  - Accent Color: Warm Red (`#ec3237`)
  - Typography Colors: Off-White (`#f5f5f7` / primary), Muted Gray (`#86868b` / secondary), Dark Gray (`#2d2d2f` / inactive tabs)
- **Typography**: 
  - Headers & Tabs: Space Grotesk (`var(--font-display)`)
  - Body & Specs: Geist (`var(--font-sans)`)
- **Visual Vocabulary**: 
  - Glassmorphic card styling on showcase details (subtle border, backdrop blur, deep black overlays).
  - Cinematic photography highlighting the physical details of luxury travel.

---

## 3. Desktop Layout (Width >= 1024px)

A 50/50 two-column split layout (`grid grid-cols-1 lg:grid-cols-2`):

### Left Column: Typographic Navigation
A vertical menu list of the three premium services. 
- Each item displays a large numeric indicator (e.g. `01 /`) and the service title.
- **Active State**: In Space Grotesk, bright white, preceded by an active warm-red indicator pill.
- **Inactive State**: Dimmed to 35% opacity, slightly scaled down (`scale-95`), shifting to full opacity and scaling on hover.
- Interaction triggers state update for the active service index (via mouse hover and click).

### Right Column: Showcase Card
A glassmorphic preview container containing:
- A full-bleed background image with a dark linear gradient fade overlay (for text legibility).
- **Showcase Image transition**: Smooth fade cross-dissolve when the active index changes.
- **Content Overlay**:
  - Service title and description text.
  - A structured specs grid highlighting features (e.g., Minimum Booking, Support response times).
  - A direct "Book via WhatsApp" CTA button, styled as a flat premium pill.

---

## 4. Mobile Layout (Width < 1024px)

On tablet and mobile screens, the split-screen transitions to a **Vertical Accordion Stacking** layout:
- The three services stack vertically.
- Each accordion header acts as a large tap target with its numeric prefix and border.
- Tapping an inactive service collapses the current active card and expands the selected card downward.
- Framer Motion manages height expansions (`initial={{ height: 0, opacity: 0 }}` to `animate={{ height: "auto", opacity: 1 }}`) with `overflow-hidden` container clipping.
- Expanded states expose the service's cinematic photo, description, specs table, and WhatsApp CTA button inline.

---

## 5. Service Items & Data Definition

```typescript
export const SERVICES_DATA = [
  {
    id: "01",
    title: "Flexible scheduling",
    subtitle: "RATES BY THE DAY, WEEK, OR MONTH",
    desc: "Rates by the day, week, or month — aligned to your exact itinerary. Keep full control of your transport logistics with options tailored for executive transfers, production shoots, and luxury tour schedules.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop",
    specs: [
      { label: "Minimum Rental", value: "1 Day" },
      { label: "Pricing Model", value: "Daily / Weekly / Monthly" },
      { label: "Vehicle Control", value: "Self-Drive or Chauffeur" }
    ],
    whatsappMsg: "Halo, saya tertarik dengan layanan Flexible Scheduling di Andin Transport. Bisa bantu jelaskan detailnya?"
  },
  {
    id: "02",
    title: "Chauffeur services",
    subtitle: "PROFESSIONAL DISPATCH ON DEMAND",
    desc: "Professional, vetted drivers and direct airport transfers, dispatched on request. Experience flawless hospitality, absolute discretion, and route optimization from our English-speaking, fully uniformed chauffeurs.",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop",
    specs: [
      { label: "Driver Level", value: "Certified Professional" },
      { label: "Languages", value: "English & Indonesian" },
      { label: "Service Area", value: "National Coverage" }
    ],
    whatsappMsg: "Halo, saya tertarik dengan layanan Chauffeur Services di Andin Transport. Bisa bantu jelaskan detailnya?"
  },
  {
    id: "03",
    title: "Continuous support",
    subtitle: "24/7 ROADSIDE CONCIERGE & RESPONSE",
    desc: "Roadside response and concierge operations, active at any hour. A dedicated dispatch team is constantly monitoring our fleet to handle vehicle swaps, route alterations, or roadside support instantly.",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1000&auto=format&fit=crop",
    specs: [
      { label: "Response Time", value: "< 30 Minutes" },
      { label: "Availability", value: "24 Hours / 7 Days" },
      { label: "Support Channels", value: "Direct Phone & WhatsApp" }
    ],
    whatsappMsg: "Halo, saya tertarik dengan layanan Continuous Support di Andin Transport. Bagaimana cara kerjanya jika ada keadaan darurat?"
  }
];
```

---

## 6. Motion & Transition Design

- **Tab Indicators**: Framer Motion `layoutId="activeTabIndicator"` spring animation for smooth sliding between typographic nav headers on desktop.
- **Image Transitions**: CSS/Framer Motion opacity cross-dissolve (`duration: 0.4, ease: "easeInOut"`).
- **Accordion Height**: CSS hardware-accelerated height transitions or Framer Motion layout transitions.
- **Accessibility / Reduced Motion**: If `useReducedMotion` is active, disable slide and height transitions and use instant toggle displays instead.

---

## 7. Verification Plan

### Manual Verification
1. Verify tab hover and click states on desktop (width >= 1024px).
2. Verify image and specs update instantly with cross-dissolve on active index change.
3. Test layout response by resizing viewport from desktop to mobile:
   - Verify layout wraps to single vertical stack.
   - Verify accordions collapse/expand cleanly when tapped.
4. Verify WhatsApp button links load the correct Indonesian pre-filled message.
5. Verify contrast levels of text over the dark gradients overlaying the images.
