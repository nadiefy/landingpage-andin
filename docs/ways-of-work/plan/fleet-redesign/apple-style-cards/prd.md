# PRD: Fleet Cards Apple-Style Redesign

## 1. Feature Name
Fleet Cards Apple-Style Dark Stage Layout

## 2. Epic
**Parent Epic:** Fleet Section Redesign
- Design Spec: [docs/superpowers/specs/2026-07-09-fleet-card-apple-style-redesign.md](file:///d:/landingpage-andin/docs/superpowers/specs/2026-07-09-fleet-card-apple-style-redesign.md)

## 3. Goal

- **Problem:** Current fleet cards use glassmorphism (shadows, borders, blur, spotlight hover) that feels heavy and templated — the opposite of premium editorial design.
- **Solution:** Apply Apple's "Dark Stage" card philosophy: no shadows, no borders, no glass. Card surface uses `#1d1d1f` contrasted against `#000000` background. Text lives below the card. Image fills the card with 28px rounded corners.
- **Impact:** Cleaner, more editorial, premium feel that matches luxury transport brand identity.

## 4. User Stories
- As a **site visitor**, I want to see clean car cards with generous photography so the fleet feels premium and well-presented.

## 5. Requirements

### Functional Requirements
1. Remove SpotlightCard component and all glassmorphism code
2. Remove motion mouse-tracking (useMotionValue, useMotionTemplate)
3. Cards use `bg-[#1d1d1f] rounded-[28px]`, no border, no shadow
4. Images use local files from `/assets/pic/fleet-section/`
5. Text (car name, category, seats, amenities, WhatsApp button) sits below the card image area
6. Mini-carousel with prev/next arrows + dot indicators remains on images
7. Section heading keeps the animated red highlight on "fleet"

### Non-Functional Requirements
1. No console errors
2. No new dependencies
3. All 6 images load without errors (check extensions .jpg vs .JPG)

## 6. Acceptance Criteria
- [ ] Cards render with `bg-[#1d1d1f] rounded-[28px]` — no border, no shadow
- [ ] Spotlight hover effect removed
- [ ] All 6 local images load correctly
- [ ] Text (name, category, amenities, CTA) sits below the card
- [ ] WhatsApp button still works
- [ ] Mini-carousel arrows and dot indicators work
- [ ] Section heading red highlight on "fleet" still plays
- [ ] Horizontal scroll-snap still works
- [ ] No console errors

## 7. Out of Scope
- No changes to heading or scroll-margin
- No changes to other sections
- No new packages
