# PRD: Services Section Design Overhaul

## 1. Feature Name

**Services Section Design Overhaul** — Refactor the Services section cards, typography, iconography, motion, and copy to eliminate AI-generated signatures and meet the `design-taste-frontend` high-agency premium standard.

## 2. Epic

- **Parent Epic:** [Premium Car Rental Landing Page](file:///d:/landingpage-andin/docs/architecture.md)
- **Design Audit:** [Services Design Audit](file:///C:/Users/nadief/.gemini/antigravity/brain/ae2700d1-000c-4de1-9d8f-d599842ed5fb/services_design_audit.md)
- **UI/UX Decisions:** [UI/UX Decisions Log](file:///d:/landingpage-andin/docs/ui_ux_decisions.md)

## 3. Goal

### Problem
The current Services section (`Services.tsx`) passes functional review but fails visual scrutiny under the `design-taste-frontend` evaluation framework. It exhibits five critical "AI Tell" violations: generic `lucide-react` icons, banned neon outer glows (`drop-shadow`), the banned `Inter` font as the body stack, dead/orphaned CSS transition classes, and generic filler copywriting. These issues collectively make the section feel mass-produced rather than premium and bespoke.

### Solution
Systematically remediate all 13 identified audit findings across four priority tiers — from swapping the icon library and removing neon glows (P1), to upgrading card materiality and adding tactile hover physics (P2), to refining typography and rewriting copy (P3), to cleaning up dead code and improving key stability (P4). Each change is scoped to the Services section and its direct dependencies (`globals.css`, `layout.tsx` for font stack).

### Impact
- **Visual Quality:** Eliminate all "AI-generated" signatures from the Services section, moving it from generic to premium.
- **User Engagement:** Tactile hover physics and spring-based interaction feedback encourage exploration and dwell time.
- **Brand Perception:** Concrete, authoritative copy and a refined visual layer reinforce trusted premium positioning.
- **Code Health:** Removing dead transitions and orphaned classes improves maintainability and signals engineering rigor.

## 4. User Personas

| Persona | Description |
|---------|-------------|
| **Prospective Renter** | A visitor browsing the landing page to evaluate the car rental service. They scan the Services section to understand what differentiates this provider. Visual polish directly impacts their trust and willingness to book. |
| **Business Owner / Stakeholder** | The site owner who needs the landing page to project a premium, trustworthy brand image that matches the quality of their physical fleet. |
| **Frontend Developer** | The engineer maintaining the codebase. They benefit from clean code without orphaned transitions, stable component keys, and a consistent icon/font system. |

## 5. User Stories

### US-1: Premium Visual Impression
> As a **prospective renter**, I want the services section to feel visually refined and trustworthy so that I can confidently evaluate this provider as a premium option.

### US-2: Tactile Interaction Feedback
> As a **prospective renter**, I want the service cards to respond physically to my hover/touch so that the interface feels alive and intentional rather than static.

### US-3: Clear Service Differentiation
> As a **prospective renter**, I want the service descriptions to use concrete, specific language so that I can immediately understand what each offering includes without deciphering marketing jargon.

### US-4: Consistent Design System
> As a **frontend developer**, I want the Services section to use the same icon library and font stack as the rest of the application so that I can maintain and extend the UI without reconciling multiple systems.

### US-5: Clean, Maintainable Code
> As a **frontend developer**, I want all CSS transitions and Framer Motion props to be actively wired to interaction triggers so that there are no orphaned classes cluttering the component.

## 6. Requirements

### Functional Requirements

#### FR-1: Icon Library Migration
- Remove all `lucide-react` imports from `Services.tsx`.
- Install `@phosphor-icons/react` (verify via `package.json` before importing).
- Replace icons with visually equivalent Phosphor icons (e.g., `CalendarBlank`, `UserCircleCheck`, `Headset`).
- Standardize `weight` prop across all icons (e.g., `weight="light"` or `weight="regular"`).

#### FR-2: Neon Glow Removal
- Remove `drop-shadow-[0_0_8px_#ec3237]` from the icon element.
- Replace with either a solid `bg-accent-warm/15` on the icon container or a subtle inner shadow on the container ring.

#### FR-3: Card Materiality Upgrade
- Add `shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]` to the card class string to simulate Liquid Glass edge refraction.

#### FR-4: Tactile Hover Physics
- Add `whileHover={{ scale: 0.98, backgroundColor: "rgba(255,255,255,0.08)" }}` to the card `motion.div`.
- Use spring easing: `transition={{ type: "spring", stiffness: 400, damping: 25 }}` for the hover response.
- Wire the icon container's existing `transition-transform` to a visible `group-hover:scale-110` trigger, OR replace with a Framer Motion `whileHover` on the icon itself.

#### FR-5: Typography Refinement
- **Section header (`h2`):** Change to `text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-none`.
- **Card title (`h3`):** Add `tracking-tight` to existing classes.
- **Card description (`p`):** Reduce opacity from `text-primary/60` to `text-primary/50`.

#### FR-6: Font Stack Replacement (Cross-Component)
- In `layout.tsx`, replace `Inter` with `Geist` (or `Outfit` / `Satoshi`) as the `--font-sans` variable.
- Verify no other components depend on Inter-specific metrics.

#### FR-7: Copy Rewrite
- Replace all three feature descriptions with concrete, authoritative language.
- Remove clichés: "Tailored," "hassle-free," "premium," "around the clock."
- Example rewrites:
  - "Flexible scheduling" → "Rates by the day, week, or month — aligned to your exact itinerary."
  - "Chauffeur services" → "Vetted drivers and direct airport transfers, dispatched on request."
  - "24/7 premium support" → "Continuous roadside response and concierge ops, any hour."

#### FR-8: Card Spacing
- Increase card `gap` from `gap-6` to `gap-8` to match `VISUAL_DENSITY: 4` (Art Gallery / Airy mode).

#### FR-9: Code Cleanup
- Remove orphaned `transition-colors` from card if not wired to a hover trigger.
- Remove orphaned `transition-transform duration-500` from icon container if replaced by Framer Motion.
- Change `key={i}` to `key={feature.title}` for stable rendering.

### Non-Functional Requirements

#### NFR-1: Performance
- All hover animations must use `transform` and `opacity` exclusively — never animate `width`, `height`, `top`, or `left`.
- Spring physics must run outside the React render cycle (Framer Motion handles this natively via `whileHover`).

#### NFR-2: Accessibility
- New icons must retain meaningful `aria-label` or `aria-hidden="true"` with adjacent text labels.
- Hover effects must not remove or obscure content — scale changes should be subtle (0.98 min).

#### NFR-3: Responsiveness
- All changes must preserve the existing single-column mobile fallback (`grid-cols-1`).
- Typography scale must remain responsive across `sm`, `md`, `lg` breakpoints.

#### NFR-4: Bundle Size
- If `@phosphor-icons/react` is added, verify tree-shaking is active (import individual icons, not the barrel export).
- If `Inter` font is removed from `layout.tsx`, confirm it is also removed from the Next.js font optimization chain to avoid unused font downloads.

## 7. Acceptance Criteria

### AC-1: Icon Library (FR-1)
- [ ] `lucide-react` is not imported anywhere in `Services.tsx`.
- [ ] `@phosphor-icons/react` is listed in `package.json` dependencies.
- [ ] All three icons render correctly with consistent weight.

### AC-2: Neon Glow (FR-2)
- [ ] No `drop-shadow` class exists on any icon element in `Services.tsx`.
- [ ] The icon container uses a solid background or inner shadow for emphasis.

### AC-3: Liquid Glass (FR-3)
- [ ] Each card includes `shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]` in its class string.
- [ ] Visual inspection confirms a subtle bright edge along the top of each card.

### AC-4: Hover Physics (FR-4)
- [ ] Hovering a card produces a visible, spring-eased scale reduction (0.98).
- [ ] Hovering a card subtly brightens the background.
- [ ] The icon visually responds to card hover (scale or color shift).

### AC-5: Typography (FR-5)
- [ ] Section header uses `tracking-tighter leading-none` at all breakpoints.
- [ ] Card titles use `tracking-tight`.
- [ ] Card descriptions use `text-primary/50`.

### AC-6: Font Stack (FR-6)
- [ ] `Inter` is no longer imported in `layout.tsx`.
- [ ] A premium sans-serif (`Geist`, `Outfit`, or `Satoshi`) is set as `--font-sans`.
- [ ] All text across the site renders in the new font without fallback flicker.

### AC-7: Copy Quality (FR-7)
- [ ] None of the following words appear in the Services section: "tailored," "hassle-free," "seamless," "elevate," "unleash," "next-gen."
- [ ] Each description uses concrete nouns and specific verbs.

### AC-8: Spacing (FR-8)
- [ ] Card gap is `gap-8` in the rendered output.

### AC-9: Code Cleanliness (FR-9)
- [ ] No orphaned `transition-*` classes exist without corresponding hover triggers.
- [ ] All mapped elements use stable, content-derived keys (not array indices).

## 8. Out of Scope

The following items are explicitly excluded from this feature to prevent scope creep:

- **Full landing page font migration audit** — Only `layout.tsx` font swap is in scope. Auditing every component for font-dependent spacing is a separate task.
- **Video background replacement** — The parallax video background is out of scope; its implementation is acceptable per the audit.
- **New feature card content** — Adding new service cards or restructuring the data model is not part of this redesign.
- **Backend or API changes** — This is a purely frontend visual/interaction refactor.
- **Other section redesigns** — Hero, Fleet, CTA, Footer, and Navbar are not in scope.
- **Icon library migration across the entire codebase** — Only `Services.tsx` icons are migrated here. A full codebase icon migration should be tracked as a separate initiative.
