# Design Specification: Fleet Cards Apple-Style Redesign

**Project:** Andin Transport Landing Page
**Feature:** Fleet Section - Apple-Style Card Layout
**Date:** 2026-07-09
**Status:** Approved

---

## 1. Goal & Context

Redesign the Fleet section carousel cards to follow Apple's "Dark Stage" card pattern (from NIKE-DESIGN.md). Zero shadows, zero borders, zero glassmorphism — depth comes purely from surface contrast between `#000000` (background) and `#1d1d1f` (card). Text sits below the card instead of overlaid inside it.

---

## 2. Card Visual Treatment

### Current (To Remove)
- `bg-zinc-950` + `border border-zinc-800`
- Spotlight mouse-tracking hover
- `shadow-2xl shadow-black/80` + `shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`
- Text overlaid inside card via gradient

### After (Apple Dark Stage)
- Card background: `bg-[#1d1d1f]`
- Border radius: `rounded-[28px]`
- **No border**, **no shadow**, **no glassmorphism**
- No spotlight hover effect
- Text sits **below** the card as separate content

---

## 3. Card Structure

```
┌──────────────────────────────┐  ← bg-[#1d1d1f] rounded-[28px]
│                              │
│   Car photo (full-bleed)     │  ← next/image fill object-cover
│   28px rounded corners       │
│                              │
│   [Prev] [Next] arrows       │  ← on hover, centered
│                              │
└──────────────────────────────┘
                              ← text BELOW the card
  Toyota Alphard               ← bold white, text-xl font-display
  Premium MPV · 7 Seats        ← muted gray, text-sm
  ✓ Reclining seats            ← amenity chips, text-zinc-400
  ✓ Privacy curtains

  [ Reserve via WhatsApp ]     ← white button, full-width
```

---

## 4. Card Content Details

### Image Area
- Aspect ratio: `aspect-[4/3]` or current `aspect-[16/10]` (keep current)
- `rounded-[28px]` on the card container (image inherits via overflow-hidden)
- Mini-carousel with left/right arrows (hover-visible)
- Image dots indicator at bottom

### Text Area (Below Card)
- Car name: `text-xl sm:text-2xl font-display font-medium text-white tracking-tighter`
- Category + seats: `text-sm text-zinc-400` (e.g. "Premium MPV · 7 Seats")
- Amenities: `text-sm text-zinc-400` with CheckCircle icons
- Spacing: `mt-4` between card and text

### CTA Button
- WhatsApp button: same white solid button as current
- Full width below the text content
- `rounded-none` or small radius to match Apple style

---

## 5. Carousel Container

- Horizontal scroll-snap container (same as current)
- Arrow navigation buttons outside the cards (bottom-right area)
- Left/right CaretLeft/CaretRight from Phosphor
- Arrow buttons: circular, no background, subtle border or ghost style

---

## 6. Local Images

Replace Unsplash URLs with local images:
- Alphard: `/assets/pic/fleet-section/alphard-1.jpg`, `alphard-2.JPG`
- HiAce: `/assets/pic/fleet-section/hiace-1.jpg`, `hiace-2.jpg`
- Innova: `/assets/pic/fleet-section/innova-1.jpg`, `innova-2.jpg`

---

## 7. Responsive Behavior

- **Desktop (md+):** Cards scroll horizontally, ~3 visible
- **Mobile (<md):** Single card visible, swipe/scroll

---

## 8. Card Width

- Card width: `sm:w-[360px]` (upsized from 340px to match Apple reference scale)
- Mobile: `w-[78vw]` (unchanged)

---

## 9. Scope

- File: `components/Fleet.tsx` only
- Remove SpotlightCard component entirely
- Remove mouse-tracking logic (useMotionValue, useMotionTemplate)
- No changes to other sections
