# PRD: Services Image Cards Redesign

## 1. Feature Name
Services Image Cards with Full-Bleed Photography

## 2. Epic
**Parent Epic:** Services Section Redesign
- Design Spec: [docs/superpowers/specs/2026-07-02-services-image-cards-design.md](file:///d:/landingpage-andin/docs/superpowers/specs/2026-07-02-services-image-cards-design.md)

## 3. Goal

- **Problem:** The current services section uses text-only glassmorphic cards that look flat, templated, and lack the cinematic premium feel a luxury car transport brand needs.
- **Solution:** Replace with tall photography-first image cards. Each card features a full-bleed car photo with a dark gradient overlay and minimal white text at the bottom. Simple, editorial, cinematic.
- **Impact:** Transforms the services section from generic to premium editorial feel, matching luxury automotive brand identity.

## 4. User Stories
- As a **site visitor**, I want to see cinematic car photography representing each service so I immediately understand the premium quality of the brand.

## 5. Requirements

### Functional Requirements
1. Replace glassmorphic text-only cards with full-bleed image cards
2. Each card uses `next/image` with `fill` + `object-cover` for the background photo
3. Cards use `aspect-[3/4]` for portrait tall ratio
4. Dark gradient overlay from bottom: `bg-gradient-to-t from-black/90 via-black/40 to-transparent`
5. Title at bottom-left: `text-xl md:text-2xl font-display font-medium text-white`
6. Description below title: `text-sm text-white/70`
7. Hover effect: image scales to `scale-105` with `duration-500` transition
8. Border radius: `rounded-2xl`
9. Grid: `grid grid-cols-1 md:grid-cols-3 gap-6`
10. Mobile: single column stack

### Non-Functional Requirements
1. No CLS (use `next/image` with `fill` + absolute positioning)
2. No console errors
3. No new dependencies

## 6. Acceptance Criteria
- [ ] 3 tall portrait image cards render on desktop
- [ ] Full-bleed car photos visible in each card
- [ ] Dark gradient overlay present at bottom of each card
- [ ] Title and description visible in white at bottom-left
- [ ] No metadata tags, no buttons, no specs tables
- [ ] Hover zoom effect works on desktop
- [ ] Cards stack vertically on mobile
- [ ] Rounded corners on all cards
- [ ] No CLS or image layout shift
- [ ] No console errors

## 7. Out of Scope
- No changes to section header
- No changes to other sections
- No new image sourcing (reuse existing Unsplash URLs)
- No new packages
