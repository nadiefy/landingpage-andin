# PRD: Services Asymmetric Masonry Bento

## 1. Feature Name
Services Asymmetric Masonry Bento Layout

## 2. Epic
**Parent Epic:** Services Section Redesign
- Design Spec: [docs/superpowers/specs/2026-07-02-services-asymmetric-bento-design.md](file:///d:/landingpage-andin/docs/superpowers/specs/2026-07-02-services-asymmetric-bento-design.md)

## 3. Goal

- **Problem:** The current 3-column equal card grid feels templated and generic. A luxury transport brand needs a more curated, gallery-like layout.
- **Solution:** Replace with an asymmetric masonry bento where the first service gets visual dominance (2/3 width) while the other two stack on the right (1/3 width each). Remove metadata tags and sync glassmorphism to Navbar.
- **Impact:** Premium, editorial feel that elevates the brand above generic AI templates.

## 4. User Stories
- As a **site visitor**, I want to see services presented in a visually interesting layout so the brand feels premium and well-designed.

## 5. Requirements

### Functional Requirements
1. First service card spans 2 columns on desktop with larger text and padding
2. Second and third service cards span 1 column each on desktop, stacked vertically
3. All cards stack vertically on mobile (single column)
4. Remove metadata tags (`01 / RATES` etc.) from all cards
5. Remove `getTag()` function
6. Sync glassmorphism to Navbar: `bg-black/40 backdrop-blur-[10px] border-primary/10`
7. Keep spotlight hover effect on all cards
8. Keep shadows on all cards
9. Keep `rounded-2xl` border radius

### Non-Functional Requirements
1. No visual regression on mobile
2. No console errors
3. No new dependencies

## 6. Acceptance Criteria
- [ ] Left card spans `lg:col-span-2` with larger text sizes
- [ ] Right cards span `lg:col-span-1` with standard text sizes
- [ ] All cards stack on mobile
- [ ] Metadata tags removed from all cards
- [ ] `getTag()` function removed
- [ ] Glassmorphism matches Navbar exactly
- [ ] Spotlight hover works on all 3 cards
- [ ] Shadows intact
- [ ] No console errors

## 7. Out of Scope
- No changes to section header
- No changes to other sections
- No images added
- No specs tables added
- No new packages
