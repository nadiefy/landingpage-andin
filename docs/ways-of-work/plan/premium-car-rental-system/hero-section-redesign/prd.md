# PRD: Hero Section Redesign

## 1. Feature Name

**Hero Section Redesign** — Refactor the Hero section's viewport handling, accessibility, copywriting, iconography, motion physics, and CTA to align with the chauffeured car rental business model and meet premium frontend standards.

## 2. Epic

- **Parent Epic:** [Premium Car Rental Landing Page — Architecture](file:///d:/landingpage-andin/docs/architecture.md)
- **Design Decisions Log:** [UI/UX Decisions](file:///d:/landingpage-andin/docs/ui_ux_decisions.md)
- **Implementation Plan:** [Hero Section Redesign — Approved Plan](file:///C:/Users/nadief/.gemini/antigravity/brain/ae2700d1-000c-4de1-9d8f-d599842ed5fb/implementation_plan.md)

## 3. Goal

### Problem
The current Hero section (`Hero.tsx`) suffers from several compounding issues:

1. **Incorrect business messaging:** The headline ("Rent Your Dream Ride. Unlock Pure Luxury") uses generic AI-generated filler copy and incorrectly implies a self-drive experience. The actual business is a **chauffeured car rental service with professional drivers**, and the messaging must reflect this.
2. **Mobile viewport instability:** The section uses `h-screen`, which causes layout jumping on iOS Safari when the browser address bar expands/collapses.
3. **Zero accessibility compliance:** There is no `prefers-reduced-motion` handling, meaning users with motion sensitivity are forced through parallax and entrance animations. The decorative arrow icon also lacks `aria-hidden`, polluting screen reader output.
4. **CSS anti-patterns:** The CTA button uses the banned `transition-all` shorthand instead of explicit property transitions, violating Vercel Web Interface Guidelines.
5. **Generic icon library:** The component imports from `lucide-react` instead of the mandated premium icon set (`@phosphor-icons/react`).

### Solution
Systematically remediate all identified issues in a single scoped refactor of `Hero.tsx`:
- Replace the headline with the approved copy: **"Premium Fleet. Professional Drivers."**
- Fix the viewport container from `h-screen` to `min-h-[100dvh]`.
- Implement `useReducedMotion` to conditionally disable parallax and entrance animations.
- Swap the icon library and add proper `aria-hidden` attributes.
- Replace `transition-all` with explicit property transitions and add tactile `active:scale-[0.98]` feedback on the CTA.

### Impact
- **Conversion clarity:** Visitors immediately understand the core offering (chauffeured fleet rental), reducing bounce from mismatched expectations.
- **Mobile reliability:** Eliminating `h-screen` prevents layout shifting for the ~60% of users on mobile browsers.
- **Accessibility compliance:** Honoring `prefers-reduced-motion` serves users with vestibular disorders and aligns with WCAG 2.1 AA standards.
- **Code quality:** Removing CSS anti-patterns and aligning with Vercel Web Interface Guidelines improves maintainability and performance.

## 4. User Personas

| Persona | Description |
|---------|-------------|
| **Prospective Client** | A visitor evaluating the car rental service for personal travel, airport transfers, or event transportation. Their first impression of the Hero section directly shapes trust and booking intent. |
| **Corporate / Executive Buyer** | A business professional or executive assistant booking chauffeured transport for corporate travel. They expect clear, professional messaging that signals reliability. |
| **Business Owner / Stakeholder** | The site owner who needs the landing page to accurately represent their chauffeured rental service and convert visitors into inquiries. |
| **Frontend Developer** | The engineer maintaining the codebase. They benefit from clean, standards-compliant code without anti-patterns or orphaned attributes. |

## 5. User Stories

### US-1: Accurate First Impression
> As a **prospective client**, I want the Hero section to clearly tell me this is a chauffeured car rental service so that I can immediately evaluate whether this business meets my transport needs.

### US-2: Stable Mobile Experience
> As a **prospective client on a mobile device**, I want the Hero section to render at a stable full-screen height so that the layout doesn't jump or shift as I scroll.

### US-3: Reduced Motion Comfort
> As a **user with motion sensitivity**, I want the Hero section to respect my OS-level "Reduce Motion" preference so that I can browse the page without experiencing discomfort from parallax scrolling or swooping text animations.

### US-4: Clear Path to Inventory
> As a **prospective client**, I want a visible call-to-action in the Hero section so that I can quickly navigate to the vehicle fleet without guessing where to scroll.

### US-5: Screen Reader Clarity
> As a **screen reader user**, I want decorative icons to be hidden from my reading flow so that I only hear meaningful content and navigation labels.

### US-6: Standards-Compliant Code
> As a **frontend developer**, I want the Hero component to use explicit CSS transitions, proper aria attributes, and the project's mandated icon library so that I can maintain and extend the code without reconciling anti-patterns.

## 6. Requirements

### Functional Requirements

#### FR-1: Headline Update
- Replace the `<h1>` content from "Rent Your Dream Ride. Unlock Pure Luxury" to **"Premium Fleet. Professional Drivers."**
- Remove the `<span>` secondary line and any subtext. The headline stands alone.

#### FR-2: Viewport Container Fix
- Replace `h-screen` with `min-h-[100dvh]` on the root `<section>` element.

#### FR-3: Reduced Motion Handling
- Import `useReducedMotion` from `motion/react`.
- When `shouldReduceMotion` is `true`:
  - The `y` parallax transform on the video background must resolve to `"0%"` (no movement).
  - The `opacity` scroll transform on the video must resolve to `1` (no fade).
  - The text entrance animation (`initial={{ opacity: 0, y: 40 }}`) must be skipped — the element mounts in its final state (`opacity: 1, y: 0`).

#### FR-4: Icon Library Migration
- Remove the `ArrowRight` import from `lucide-react`.
- Import `ArrowRight` from `@phosphor-icons/react` (verify package exists in `package.json` first; install if missing).
- Add `aria-hidden="true"` to the arrow icon element since it is decorative.

#### FR-5: CTA Button Upgrade
- Change the label from "View Fleet" to **"Explore Our Fleet"**.
- Preserve the `href="#fleet"` anchor destination.
- Replace `transition-all duration-300` with explicit `transition-transform transition-colors duration-300`.
- Add `active:scale-[0.98]` for tactile press feedback.
- Preserve `group-hover:translate-x-1` on the arrow icon with explicit `transition-transform`.

#### FR-6: Typography Refinement
- Add `tracking-tighter` to the `<h1>` class string (upgrade from `tracking-tight`).
- Add `text-balance` to the `<h1>` to prevent typographic widows.

### Non-Functional Requirements

#### NFR-1: Performance
- All animations must target `transform` and `opacity` exclusively — never `width`, `height`, `top`, or `left`.
- The `useReducedMotion` hook must not cause additional re-renders beyond the initial mount.

#### NFR-2: Accessibility (WCAG 2.1 AA)
- The component must honor `prefers-reduced-motion: reduce` at the OS level.
- All decorative icons must carry `aria-hidden="true"`.
- The CTA `<Link>` must have sufficient color contrast against the video overlay (minimum 4.5:1 ratio).

#### NFR-3: Responsiveness
- The `min-h-[100dvh]` container must render correctly on iOS Safari, Chrome Android, and desktop browsers.
- Typography must scale responsively across `sm`, `md`, `lg` breakpoints (existing responsive classes preserved).

#### NFR-4: Bundle Size
- If `@phosphor-icons/react` is newly installed, import individual icons (not the barrel export) to ensure tree-shaking.
- If `lucide-react` is no longer used anywhere after this migration, flag it for removal from `package.json` in a follow-up task.

## 7. Acceptance Criteria

### AC-1: Headline (FR-1)
- [ ] The rendered `<h1>` text reads exactly "Premium Fleet. Professional Drivers."
- [ ] No subtext or secondary `<span>` exists below the headline.

### AC-2: Viewport (FR-2)
- [ ] The root `<section>` uses `min-h-[100dvh]`, not `h-screen`.
- [ ] On iOS Safari (simulated or real), scrolling does not cause the Hero section to jump or resize.

### AC-3: Reduced Motion (FR-3)
- [ ] **Given** a user with `prefers-reduced-motion: reduce` enabled, **When** the Hero section loads, **Then** the headline appears instantly without a swoop-in animation.
- [ ] **Given** a user with `prefers-reduced-motion: reduce` enabled, **When** the user scrolls, **Then** the video background does not move via parallax.
- [ ] **Given** a user without reduced motion preferences, **When** the Hero section loads, **Then** the full cinematic parallax and entrance animation plays as designed.

### AC-4: Icon Library (FR-4)
- [ ] `lucide-react` is not imported in `Hero.tsx`.
- [ ] `@phosphor-icons/react` is listed in `package.json` dependencies.
- [ ] The arrow icon renders correctly and carries `aria-hidden="true"`.

### AC-5: CTA Button (FR-5)
- [ ] The button label reads "Explore Our Fleet".
- [ ] The button links to `#fleet`.
- [ ] No `transition-all` class exists on the button element.
- [ ] Pressing (`:active`) the button produces a visible scale reduction (0.98).
- [ ] Hovering the button shifts the arrow icon to the right.

### AC-6: Typography (FR-6)
- [ ] The `<h1>` class string includes both `tracking-tighter` and `text-balance`.
- [ ] On narrow viewports, the headline does not produce a single orphaned word on its last line.

## 8. Out of Scope

The following items are explicitly excluded from this feature to prevent scope creep:

- **Video background replacement** — The current video source (`/assets/vids/hero-vids.mp4`) is not being changed.
- **Navbar changes** — The Navbar is a separate component and is not part of this Hero refactor.
- **Full icon library migration** — Only the `Hero.tsx` arrow icon is migrated. A codebase-wide `lucide-react` → `@phosphor-icons/react` migration is a separate initiative.
- **Full font stack replacement** — The `Inter` → premium font swap in `layout.tsx` is tracked separately in the Services Section PRD.
- **Video overlay gradient changes** — The `bg-gradient-to-b from-black/80 via-black/40 to-black` overlay is retained as-is.
- **Other section redesigns** — Services, Fleet, CTA, Footer, and other sections are out of scope.
- **SEO metadata changes** — Page-level `<title>` and `<meta>` updates in `layout.tsx` are not included here.
