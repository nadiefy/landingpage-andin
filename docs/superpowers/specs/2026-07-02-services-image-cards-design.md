# Design Specification: Services Image Cards Redesign

**Project:** Andin Transport Landing Page
**Feature:** Services Section - Full-Image Cards with Gradient Overlay
**Date:** 2026-07-02
**Status:** Approved

---

## 1. Goal & Context

Replace the current glassmorphic text-only bento cards with **photography-first tall image cards** inspired by the reference design. Each card features a full-bleed cinematic car photo with a dark gradient overlay and minimal white text at the bottom.

---

## 2. Grid Layout

- **Desktop:** `grid grid-cols-1 md:grid-cols-3 gap-6`
- **Mobile:** Single column stack

---

## 3. Card Structure

Each card is a full-bleed image container with gradient overlay and text at the bottom.

```
┌──────────────────┐
│                  │
│   Full-bleed     │
│   car photo      │
│                  │
│  ░░░░░░░░░░░░░░░ │  ← bg-gradient-to-t from-black/90 via-black/40 to-transparent
│  Title           │  ← white text
│  Description     │  ← white/70 text
└──────────────────┘
```

### 3.1 Card Container
- `relative overflow-hidden rounded-2xl aspect-[3/4]` — portrait tall cards
- Uses `next/image` with `fill` + `object-cover` for the background photo

### 3.2 Gradient Overlay
- `absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent`
- Sits between the image and the text content

### 3.3 Text Content (Bottom-Left)
- Position: `absolute bottom-0 left-0 p-6`
- Title: `text-xl md:text-2xl font-display font-medium text-white tracking-tight leading-tight`
- Description: `text-sm text-white/70 leading-relaxed mt-2`
- No metadata tags, no buttons, no specs

### 3.4 Hover Effect
- Image scales up on hover: `group-hover:scale-105` with `transition-transform duration-500 ease-out`
- Container needs `group` class, image needs `transition-transform duration-500 ease-out group-hover:scale-105`

---

## 4. Images

Reuse existing Unsplash URLs from SERVICES_DATA:
- Card 1 (Flexible scheduling): `photo-1618843479313-40f8afb4b4d8`
- Card 2 (Chauffeur services): `photo-1549317661-bd32c8ce0db2`
- Card 3 (Continuous support): `photo-1486006920555-c77dce18193b`

---

## 5. Section Header

No changes — keep existing eyebrow + heading as-is.

---

## 6. Responsive Behavior

- **Desktop (md+):** 3 equal-width columns, all cards same `aspect-[3/4]`
- **Mobile (<md):** Single column stack, full width, same aspect ratio

---

## 7. Technical Notes

### File: `components/Services.tsx`

1. Remove the `SpotlightCard` component entirely (no more glassmorphic cards)
2. Create a new `ImageCard` component using `next/image` with `fill` + `object-cover`
3. Keep `SERVICES_DATA` but only use `title`, `desc`, `image` (remove `id`, `subtitle`, `specs`)
4. Update grid classes to `grid-cols-1 md:grid-cols-3 gap-6`
5. Each card: `relative overflow-hidden rounded-2xl aspect-[3/4] group`

### Dependencies
- `next/image` — already available, no new installs

---

## 8. Verification

- Desktop: 3 tall portrait cards in a row with full-bleed car photos
- Desktop: Title and description visible at bottom-left of each card via gradient
- Desktop: Hover effect scales image smoothly
- Mobile: Cards stack vertically, full width, same aspect ratio
- No console errors, no image layout shift (CLP safe with fill + object-cover)
