# Product Requirements Document (PRD): Services Section Redesign

**Feature Name:** Services Section Split-Screen Interactive Showcase  
**Epic:** [Andin Transport Landing Page Spec](file:///d:/landingpage-andin/docs/andin-design/design.md)  
**Author:** Antigravity  
**Status:** Draft  

---

## 1. Goal

- **Problem:** The current services section uses a generic card-grid with static icons and a basic video background. This layout creates an "AI-generated template" vibe, fails to communicate luxury, and does not capture the premium brand value of Andin Transport.
- **Solution:** Implement a split-screen layout on desktop where hovering over service tabs dynamically transitions high-fidelity luxury automotive photography on the right side along with specifications. On mobile, transition this layout into a clean vertical accordion with smooth height expansions.
- **Impact:** Improve average session time by 15-20% through interactive hover states.

---

## 2. User Personas

1. **Luxury Traveler (Andi):** Wants to quickly rent a premium car (e.g. Toyota Alphard) for family or business trips. Expects visual reassurance of vehicle luxury and transparent scheduling details.
2. **Corporate Event Coordinator (Sarah):** Needs professional chauffeur services for VIP transport. Needs clear specifications on driver certifications, languages spoken, and availability.

---

## 3. User Stories

- **US1 (Desktop Showcase):** As a luxury traveler, I want to hover over the service tabs on desktop so that I can instantly see the corresponding service image, detailed descriptions, and specific service parameters without leaving the fold.
- **US2 (Desktop Toggle):** As a desktop user, I want to click on the currently active service tab so that I can toggle the detailed specs panel open or closed, allowing me to view the clean cinematic image in full bleed.
- **US3 (Mobile Accordion):** As a mobile user, I want to tap on a service row so that I can expand its details and image inline and read the information easily on a portrait screen.
- **US4 (Accessibility):** As a user with motion sensitivity, I want all showcase switches and accordion expansions to occur instantly when I have `prefers-reduced-motion` enabled on my device.

---

## 4. Requirements

### Functional Requirements
- **F1 (Split Screen):** On viewports `>= 1024px`, render a split layout. The left column holds typographic tabs (`01 / Flexible scheduling`, `02 / Chauffeur services`, `03 / Continuous support`). The right column holds a glassmorphic card presenting details and specs.
- **F2 (Tab States):** Active tab has full opacity, bold text, and a warm-red (`#ec3237`) active indicator. Inactive tabs are dimmed to 35% opacity and scaled down (`scale-95`).
- **F3 (Hover-to-Showcase):** Hovering over any tab updates the active showcase index, changing the image and text on the right side.
- **F4 (Click-to-Toggle):** Clicking the active tab toggles the right-side details panel (sliding it out or fading it out, leaving the background image in full bleed).
- **F5 (Mobile Stacking):** On viewports `< 1024px`, render a vertical list of accordions. Tapping an item expands its content inline (height transition) and collapses any previously expanded item.
- **F6 (Service Specifications):** Display a structured table of specs for each service:
  - *Scheduling*: Min booking (1 Day), Pricing models, Self-Drive/Chauffeur.
  - *Chauffeur*: Driver level, Languages, Coverage area.
  - *Support*: Response time (<30 mins), Availability (24/7), Support channels.

### Non-Functional Requirements
- **NF1 (Performance):** Showcase images must use Next.js `<Image />` with optimized widths and lazy loading.
- **NF2 (Typography):** Heading typography must match Space Grotesk (`var(--font-display)`); body typography must match Geist (`var(--font-sans)`).
- **NF3 (Touch Targets):** Mobile accordion headers must satisfy WCAG AA (minimum `48px` clickable height).
- **NF4 (Motion Control):** Respect user's `prefers-reduced-motion` system settings. Set transition duration to `0s` if enabled.

---

## 5. Acceptance Criteria

- **Desktop Showcase View:**
  - Given the user is on a desktop viewport (`>= 1024px`),
  - When the user hovers over "Chauffeur services",
  - Then the right-side showcase instantly transitions (cross-dissolve) to the chauffeur image, shows "PROFESSIONAL DISPATCH ON DEMAND" with its specific description, and updates the specifications table (showing "Languages: English & Indonesian").
  - When the user clicks the active "Chauffeur services" tab,
  - Then the specifications details block toggles closed, revealing the background image in full. Clicking it again toggles it open.

- **Mobile Accordion View:**
  - Given the user is on a mobile viewport (`< 1024px`),
  - When the user taps "01 / FLEXIBLE SCHEDULING",
  - Then it expands downward smoothly to show the cabin image and scheduling details.
  - When the user then taps "02 / CHAUFFEUR SERVICES",
  - Then the scheduling details accordion collapses and the chauffeur services accordion expands.

---

## 6. Out of Scope

- Integrating a backend booking database or scheduling calendar.
- Adding WhatsApp booking CTAs or pre-filled message links in this section.
- Live chat agent integrations.

---

## 7. Verification Plan

### Automated Verification
Run automated regression testing on the local site via Playwright:
```bash
python C:\Users\nadief\.gemini\config\skills\webapp-testing\scripts\with_server.py --server "npm run dev" --port 3000 -- python scripts/verify_services.py
```
- Write a Playwright script `scripts/verify_services.py` that:
  1. Opens `http://localhost:3000/#services`.
  2. Asserts visibility of split-screen sections on desktop.
  3. Hovers over tabs and validates the specifications text changes.
  4. Clicks the active tab and asserts that the details panel closes.
  5. Sets viewport to `390x844` (mobile).
  6. Taps accordion headers and asserts that they expand/collapse correctly.

### Design Audit
Audit the page styling for compliance with Vercel Web Interface Guidelines:
- Run a web fetch for guidelines and audit `components/Services.tsx`:
```bash
# Verify contrast ratios and HTML semantics manually, or use auditing CLI tools
```
