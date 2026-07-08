# PRD: Services Card Cleanup — Remove Metadata Tags & Sync Glassmorphism

## 1. Feature Name
Services Card Cleanup — Remove Metadata Tags & Sync Glassmorphism to Navbar

## 2. Epic
**Parent Epic:** Services Section Redesign
- Architecture: [docs/superpowers/specs/2026-07-02-services-glassmorphism-design.md](file:///d:/landingpage-andin/docs/superpowers/specs/2026-07-02-services-glassmorphism-design.md)
- Design Spec: [docs/superpowers/specs/2026-07-02-services-card-cleanup-design.md](file:///d:/landingpage-andin/docs/superpowers/specs/2026-07-02-services-card-cleanup-design.md)

## 3. Goal

- **Problem:** The Services section cards display metadata identification tags (e.g., `01 / RATES`) that add visual clutter and distract from a clean, minimalist presentation. Additionally, the glassmorphism CSS (`bg-zinc-950/40`, `backdrop-blur-xl`, `border-white/10`) differs from the rest of the site's locked-in Navbar style (`bg-black/40`, `backdrop-blur-[10px]`, `border-primary/10`), breaking visual consistency.
- **Solution:** Remove the metadata tags entirely for a cleaner look, and sync the glassmorphism CSS to match the Navbar's proven specs exactly.
- **Impact:** A more elegant, consistent, premium visual experience across the site sections.

## 4. User Personas
- **Site visitor:** Expects a cohesive, luxury-brand experience. Visual inconsistency and noisy metadata degrade trust and premium feel.

## 5. User Stories
- As a **site visitor**, I want the Services cards to display only the service name and description so that the layout feels clean and uncluttered.
- As a **site visitor**, I want the glassmorphism effect across sections to be visually consistent so the site feels polished and professionally designed.

## 6. Requirements

### Functional Requirements
1. Remove the metadata identification tag (`01 / RATES`, `02 / CHAUFFEUR`, `03 / SUPPORT`) from each Services card.
2. Remove the `getTag()` helper function from the component.
3. Update card wrapper CSS class to match Navbar glassmorphism:
   - `bg-zinc-950/40` → `bg-black/40`
   - `backdrop-blur-xl` → `backdrop-blur-[10px]`
   - `border-white/10` → `border-primary/10`
4. Keep existing shadows (`shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] shadow-2xl shadow-black/80`).
5. Keep existing spotlight mouse-tracking hover effect.
6. Keep existing `rounded-2xl` border radius.

### Non-Functional Requirements
1. Zero visual regression on desktop (1280px+).
2. Zero visual regression on mobile (390px+).
3. No new dependencies.
4. No console errors.

## 7. Acceptance Criteria
- [x] Services cards display only title + description — no metadata tags visible
- [x] Services card background is `bg-black/40` (matches Navbar)
- [x] Services card backdrop blur is `backdrop-blur-[10px]` (matches Navbar)
- [x] Services card border is `border-primary/10` (matches Navbar)
- [x] Inner glow and drop shadow remain intact
- [x] Spotlight hover effect still works on desktop
- [x] Cards stack vertically on mobile (no layout breakage)
- [x] `getTag()` function removed from codebase
- [x] No console errors

## 8. Out of Scope
- No changes to other sections (Fleet, About, CTA)
- No change to spotlight hover logic
- No change to `rounded-2xl`
- No change to layout grid or responsive behavior
- No new packages or dependencies
