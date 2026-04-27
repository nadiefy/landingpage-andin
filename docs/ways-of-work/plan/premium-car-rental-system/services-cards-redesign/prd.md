# PRD: Services Section Card Redesign

## 1. Feature Name

**Services Card Redesign — Automotive Precision Overhaul**

Strip the SaaS-style glassmorphism from the Services section cards and replace it with a high-contrast, structurally precise aesthetic derived from BMW (luxury automotive) and Uber (mobility platform) design systems.

## 2. Epic

- **Parent Epic:** [Premium Car Rental Landing Page](file:///d:/landingpage-andin/docs/architecture.md)
- **Design Audit:** [Services Cards Design Audit & Implementation Plan](file:///C:/Users/nadief/.gemini/antigravity/brain/ae2700d1-000c-4de1-9d8f-d599842ed5fb/services_cards_plan.md)
- **Design References:** [BMW Design System](file:///d:/landingpage-andin/docs/design-md/bmw/README.md) · [Uber Design System](file:///d:/landingpage-andin/docs/design-md/uber/README.md)

## 3. Goal

### Problem
The three service cards inside `Services.tsx` currently use a soft glassmorphism aesthetic (`bg-white/5 backdrop-blur-xl`, pill-rounded corners, circular icon wrappers, bouncy spring-scale hover effects). This visual language is native to modern SaaS dashboards and AI tools — not to a premium chauffeured car rental service. The result is a tonal mismatch: the cards feel ephemeral and playful when they should feel solid, engineered, and authoritative. This undermines the brand's core promise of professional, reliable luxury transport.

### Solution
Redesign the card components by applying the **"Precise Automotive"** aesthetic, informed by two validated design systems from the project's `docs/design-md` reference library:
- **BMW:** Dark premium surfaces, precise German engineering aesthetic — solid matte backgrounds, razor-thin borders, sharp or minimal corner radii.
- **Uber:** Bold black and white, tight type, urban energy — high contrast, utilitarian structure, grounded interactions.

The cards will be rebuilt with solid matte surfaces, stripped iconography (no wrapper bubbles), grounded hover states (no bouncing), and tighter typography that mirrors high-end automotive brochures.

### Impact
- **Brand coherence:** The Services section will visually align with the chauffeured car rental identity, reinforcing trust and professionalism.
- **Perceived quality:** Eliminating soft, generic patterns raises the perceived production value of the entire landing page.
- **Scroll engagement:** Precise, grounded hover interactions replace distracting bouncy physics, keeping user focus on content rather than animation novelty.

## 4. User Personas

| Persona | Relevance |
|---------|-----------|
| **Prospective Client** | Their first visual impression of the service offerings shapes booking intent. Cards must communicate precision and reliability. |
| **Corporate / Executive Buyer** | Expects a caliber of visual polish consistent with the executive transport being offered. SaaS-style glass cards signal "startup," not "professional fleet." |
| **Business Owner** | Needs the landing page to accurately represent the premium positioning of the business. |
| **Frontend Developer** | Benefits from cleaner markup — removing `backdrop-blur`, inset shadows, and nested spring animations reduces complexity. |

## 5. User Stories

### US-1: Premium Visual Alignment
> As a **prospective client**, I want the service cards to look and feel like a premium automotive experience so that my first impression matches the quality of chauffeured service being offered.

### US-2: Grounded, Non-Distracting Interactions
> As a **prospective client browsing on desktop**, I want the cards to respond to my hover with a subtle, elegant effect so that I feel acknowledged without being distracted by bouncy animations.

### US-3: Accessibility-Compliant Icons
> As a **screen reader user**, I want decorative icons to remain hidden from my reading flow so that I only hear the service title and description.

### US-4: Consistent Design Language
> As the **business owner**, I want the service cards to match the sharp, high-contrast aesthetic established in the Hero section so that the page feels cohesive from top to bottom.

### US-5: Maintainable Component Code
> As a **frontend developer**, I want the card markup to use simple, explicit styles (no layered blur + inset shadow + spring physics) so that I can maintain and extend the component without reconciling conflicting visual effects.

## 6. Requirements

### Functional Requirements

#### FR-1: Card Surface Material
- Remove `bg-white/5` and `backdrop-blur-xl` from the card container.
- Replace with a solid matte dark background: `bg-zinc-950` or `bg-black`.
- Remove the inset shadow (`shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`).

#### FR-2: Card Shape / Corner Radius
- Replace `rounded-2xl` with `rounded-sm` (or explore `rounded-none` for maximum precision).

#### FR-3: Card Border
- Replace `border-white/10` with a razor-thin structural border: `border-zinc-800`.

#### FR-4: Hover Interaction
- Remove the `whileHover={{ scale: 0.98, backgroundColor: "rgba(255,255,255,0.08)" }}` spring effect from the card `motion.div`.
- Implement a grounded hover state using one of the following approaches (engineering discretion):
  - **Option A:** On hover, illuminate the card's top border from `border-zinc-800` to `border-white` via a CSS `transition-colors` (no Framer Motion needed).
  - **Option B:** On hover, apply a subtle `bg-zinc-900` background shift via CSS `transition-colors`.
- The hover transition must use explicit property targeting (`transition-colors` or `transition-border-color`), never `transition-all`.

#### FR-5: Icon Treatment
- Remove the circular icon wrapper element (`<motion.div className="shrink-0 w-12 h-12 rounded-full bg-accent-warm/15 ...">`) entirely.
- Render the `@phosphor-icons/react` icon directly, without a background container.
- Set icon color to stark white (`text-white`) or metallic silver (`text-zinc-300`).
- Remove the `whileHover={{ scale: 1.1 }}` spring animation from the icon wrapper (wrapper is being deleted).
- Retain `aria-hidden="true"` on the icon element.

#### FR-6: Typography Refinement
- Change the card description text from `text-primary/50` to `text-zinc-400` for sharper legibility against the new matte surface.
- Add `tracking-tighter` to the card `<h3>` headings to match the tight editorial automotive style.

### Non-Functional Requirements

#### NFR-1: Performance
- Removing `backdrop-blur-xl` eliminates a GPU-intensive compositing operation, improving scroll performance — especially on mobile devices.
- All remaining hover transitions must target only `transform`, `opacity`, `color`, `background-color`, or `border-color` (compositor-friendly properties).

#### NFR-2: Accessibility (WCAG 2.1 AA)
- All icons must retain `aria-hidden="true"`.
- Card heading text (`text-white` on `bg-zinc-950`) must maintain a minimum 4.5:1 contrast ratio. (White on zinc-950 ≈ 19.5:1 — passes.)
- Card description text (`text-zinc-400` on `bg-zinc-950`) must maintain a minimum 4.5:1 contrast ratio. (zinc-400 `#a1a1aa` on zinc-950 `#09090b` ≈ 7.2:1 — passes.)

#### NFR-3: Responsiveness
- Card padding remains responsive (`p-6 md:p-8`).
- The vertical card stack layout (`flex flex-col gap-8`) is preserved for all breakpoints.

#### NFR-4: Design System Consistency
- The card aesthetic must be consistent with the Hero section's approved direction (sharp, high-contrast, dark premium surfaces).
- Icon rendering must use `@phosphor-icons/react` exclusively (no `lucide-react`).

## 7. Acceptance Criteria

### AC-1: Card Surface (FR-1)
- [ ] No `backdrop-blur` class exists on any card element in `Services.tsx`.
- [ ] No `bg-white/5` class exists on any card element.
- [ ] No `shadow-[inset_*]` class exists on any card element.
- [ ] Cards render with a solid `bg-zinc-950` or `bg-black` background.

### AC-2: Card Shape (FR-2)
- [ ] No `rounded-2xl` class exists on any card element.
- [ ] Cards use `rounded-sm` or `rounded-none`.

### AC-3: Card Border (FR-3)
- [ ] Card borders use `border-zinc-800` (not `border-white/10`).

### AC-4: Hover Interaction (FR-4)
- [ ] **Given** a user hovers over a service card, **When** the cursor enters the card, **Then** a subtle border illumination or background shift occurs without any scaling effect.
- [ ] No `whileHover` prop with `scale` exists on the card `motion.div`.
- [ ] No `transition-all` class or equivalent exists. Only explicit properties are transitioned.

### AC-5: Icon Treatment (FR-5)
- [ ] No circular wrapper `div` with `rounded-full bg-accent-warm/15` exists around any icon.
- [ ] Icons render in `text-white` or `text-zinc-300` directly.
- [ ] No `whileHover={{ scale: 1.1 }}` animation exists on icon containers.
- [ ] All icons retain `aria-hidden="true"`.

### AC-6: Typography (FR-6)
- [ ] Card description text uses `text-zinc-400` (not `text-primary/50`).
- [ ] Card headings include `tracking-tighter`.

### AC-7: Performance (NFR-1)
- [ ] **Given** the Services section is rendered on a mobile device, **When** the user scrolls through the section, **Then** there is no visible jank or frame drops (verified via DevTools Performance tab at 60fps target).

## 8. Out of Scope

The following items are explicitly excluded from this feature:

- **Left column redesign** — The section header, pill badge ("Rental Services"), heading copy, and body paragraph on the left column are not being modified in this PRD.
- **Video background changes** — The parallax video background, overlay gradient, and scroll-linked motion are retained as-is.
- **Service content changes** — The three feature titles ("Flexible scheduling", "Chauffeur services", "Continuous support") and their descriptions are not being rewritten.
- **Layout restructuring** — The 2-column grid (`grid-cols-1 lg:grid-cols-2`) and vertical card stack remain unchanged.
- **Global icon library migration** — Only the icon rendering *style* within this section is addressed. A full codebase-wide `lucide-react` removal is tracked separately.
- **Entrance animation changes** — The `initial`/`whileInView` scroll-triggered fade-up animations on the cards are preserved as-is.
- **Section-level `prefers-reduced-motion` handling** — This is tracked under the Hero Section Redesign PRD and will be applied globally.
