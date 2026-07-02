# Design Specification: Services Glassmorphic Bento Cards Redesign

**Project:** Andin Transport Landing Page
**Feature:** Services Section Glassmorphic Redesign (Bento Layout)
**Date:** 2026-07-02
**Status:** Approved

---

## 1. Goal & Context

The goal is to redesign the Services section to adopt a premium, clean glassmorphic aesthetic matching the rest of the site (like the floating Navbar and About Us cards).
- Replace the split-screen typographic list and showcase card layout.
- Remove all background images from the services section.
- Remove the technical specifications tables.
- Restructure the layout into a clean, horizontal Bento Grid of 3 rounded glass cards on desktop, which stacks vertically on mobile.
- Use high-contrast, premium typography for the service titles and description paragraphs.

---

## 2. Design & Layout Specification

### 2.1 Grid Layout
- **Desktop**: A horizontal 3-column grid (`grid grid-cols-1 md:grid-cols-3 gap-8`).
- **Mobile**: A vertical 1-column stack of cards (`grid-cols-1 gap-6`).

### 2.2 Glassmorphic Card Styling (All 3 Cards)
- **Border Radius**: `rounded-2xl` (16px corner radius) for visual alignment with the About Us section image cards.
- **Glass Visuals**:
  - Background: Semi-transparent deep dark finish (`bg-zinc-950/40`).
  - Border: Sleek frosted boundary (`border border-white/10`).
  - Backdrop Blur: `backdrop-blur-xl` for physical depth.
  - Shadow: Inner reflection glow (`shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`) and a soft deep shadow (`shadow-2xl shadow-black/80`).
- **Interactive Spotlight**: Implement the mouse-tracking radial gradient spotlight background (identical to the `SpotlightCard` pattern in `components/Fleet.tsx`) to highlight the card borders on hover.

### 2.3 Typography & Content
Each card will contain:
- **Card Tag**: Small, uppercase identification metadata (e.g. `01 / RATES`, `02 / CHAUFFEUR`, `03 / SUPPORT`) positioned at the top left using Andin's brand accent warm-red (`text-[#ec3237]`).
- **Title**: Section headings (e.g. `Flexible scheduling`, `Chauffeur services`, `Continuous support`) using the display font.
- **Description**: Balanced, readable service description paragraph.

---

## 3. Technical Changes

### 3.1 Components
*   **File:** [Services.tsx](file:///d:/landingpage-andin/components/Services.tsx)
*   **Changes**:
    - Remove state variables like `activeIndex` and `detailsOpen` as all 3 cards are now static and display content simultaneously.
    - Replace the left/right column layout with a simple `grid grid-cols-1 md:grid-cols-3` layout.
    - Remove the `Image` references and details drawer elements.
    - Integrate the mouse-tracking `SpotlightCard` or duplicate its logic within the services cards.
    - Apply the glassmorphic Tailwind classes.

---

## 4. Verification Plan

### 4.1 Automated Verification
Run visual regression tests to verify:
- Layout is responsive (stacks on mobile, columns on desktop).
- No console errors.
- Hover spotlight effect works and follows mouse tracking.

### 4.2 Manual Verification
Inspect the Services section on desktop and mobile viewports to ensure:
- Cards render with a 16px corner radius (`rounded-2xl`).
- High-contrast typography is legible.
- Backdrop blur is functional against page-level gradients.
- Mobile stacked view is clean and readable.
