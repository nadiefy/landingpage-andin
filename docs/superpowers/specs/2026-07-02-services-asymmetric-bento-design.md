# Design Specification: Services Asymmetric Masonry Bento

**Project:** Andin Transport Landing Page
**Feature:** Services Section - Asymmetric Masonry Bento Layout
**Date:** 2026-07-02
**Status:** Approved

---

## 1. Goal & Context

Replace the current 3-column equal card grid with an asymmetric masonry bento layout for a more premium, curated gallery feel. The first service gets visual dominance as the "anchor" card while the other two stack on the right side.

---

## 2. Grid Layout

### Desktop (lg: 1024px+)
```
+-----------------------------+------------------+
|                             |   Card 2         |
|      Large Anchor Card      |   (1/3 width)    |
|      (2/3 width)            +------------------+
|      Card 1                 |   Card 3         |
|                             |   (1/3 width)    |
+-----------------------------+------------------+
```

- Grid: `grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8`
- Left card: `lg:col-span-2` (takes 2 columns)
- Right cards: `lg:col-span-1` each (1 column each)

### Mobile (< 1024px)
- Single column stack: `grid-cols-1`
- All cards full width

---

## 3. Card Styling (All 3 Cards Identical Glassmorphism)

```
rounded-2xl
bg-black/40
backdrop-blur-[10px]
border border-primary/10
shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]
shadow-2xl shadow-black/80
```

- **Spotlight hover effect** stays on all 3 cards
- **No images, no metadata tags, no specs tables** on any card

---

## 4. Content Hierarchy

### Left Anchor Card (Card 1: Flexible Scheduling)
- Padding: `p-8 lg:p-10`
- Title: `text-2xl md:text-3xl font-display font-medium text-white`
- Description: `text-base text-zinc-400`

### Right Cards (Card 2: Chauffeur / Card 3: Support)
- Padding: `p-8`
- Title: `text-xl md:text-2xl font-display font-medium text-white`
- Description: `text-sm text-zinc-400`

---

## 5. Section Header (Unchanged)
- Eyebrow: "Our Capabilities"
- Heading: "Services built for every journey"
- Spacing: `mb-16 lg:mb-24`

---

## 6. Technical Changes

### File: `components/Services.tsx`

1. Update grid classes from `grid-cols-1 md:grid-cols-3` to `grid-cols-1 lg:grid-cols-3`
2. First card gets `lg:col-span-2` class and larger padding/font sizes
3. Second and third cards get `lg:col-span-1` and standard padding/font sizes
4. All cards keep existing glassmorphism (after sync), spotlight hover, no tags
5. Remove metadata tags and `getTag()` function
6. Sync glassmorphism to Navbar specs

---

## 7. Verification

- Desktop: Asymmetric layout renders with left card spanning 2 columns
- Desktop: Left card is visually larger (bigger text, more padding)
- Mobile: All 3 cards stack vertically in single column
- Glassmorphism matches Navbar
- Spotlight hover works on all cards
- No console errors
