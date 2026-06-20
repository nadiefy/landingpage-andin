# Product Requirements Document (PRD): Services Mobile Accordion Redesign

## 1. Feature Name
- Services Mobile Accordion Redesign

## 2. Epic
- Parent Epic PRD: [Split-Screen Showcase PRD](file:///d:/landingpage-andin/docs/ways-of-work/plan/services-redesign/split-showcase/prd.md)

## 3. Goal
- **Problem:** The current mobile layout of the Services section uses standard boxed accordion containers with hard borders (`border border-zinc-800 bg-zinc-950`) and generic text buttons (`+`/`−`). This styling feels cookie-cutter and "AI-generated," clashing with the high-end, cinematic dark aesthetic of the desktop layout.
- **Solution:** Redesign the mobile view using **Approach A: Elevation + Surgical Glass**. This includes a borderless stacked menu with color elevation on active items, no text buttons/icons, wide aspect cinematic strip images with gradient fading, and surgical glassmorphism for expanded details.
- **Impact:** Improved brand perception and mobile visual quality, creating a premium feeling that matches the luxury car rental experience.

## 4. User Personas
- **High-End Travelers & Corporate Clients:** Discerning clients accessing Andin Transport's landing page on mobile devices who expect a polished, seamless, premium digital interaction.

## 5. User Stories
1. **As a** mobile visitor, **I want** to browse Andin Transport's capabilities without distracting grid boxes and standard borders **so that** the brand feels premium, exclusive, and tailored.
2. **As a** mobile visitor, **I want** to tap a service title and see a smooth reveal of its details, specs, and a cinematic image **so that** I can intuitively learn about Andin Transport's services.
3. **As a** user with reduced motion system preferences, **I want** the accordion to toggle open/closed instantly without animations **so that** I can browse comfortably without motion-induced discomfort.

## 6. Requirements

### 6.1 Functional Requirements
- **FR-1: Borderless Stacked Layout:**
  - Remove all outer borders (`border`, `border-zinc-800`) and backgrounds from the accordion list items.
- **FR-2: Elevation/Luminance Shift:**
  - Collapsed state must be fully transparent (`bg-transparent`).
  - Active/expanded state must receive a subtle background color boost (`bg-zinc-900/40`).
- **FR-3: Icon-less Toggles:**
  - Remove the `+`/`−` text or icon buttons on the right side. The header text and index identifier are the sole elements in the accordion header.
- **FR-4: Persistent Active Item:**
  - At least one service item must remain expanded on mobile at all times (Option A). Tapping the currently active item does not collapse it.
- **FR-5: Glassmorphic Expanded Content:**
  - The expanded card background must use `bg-white/[0.02]` or `bg-zinc-900/30` with `backdrop-blur-md`.
  - Apply an ultra-thin border overlay `border border-white/[0.05]`.
  - Include an inner refraction highlight on the top edge using `shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]`.
- **FR-6: Cinematic Image Accent:**
  - Service image cropped to aspect ratio `aspect-[5/2]` or `aspect-[21/9]`.
  - Fade the lower edge into the details panel using `bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent`.
  - The image must fade in smoothly (`opacity: 0` to `opacity: 1` over 300ms) inside the expanding container.
- **FR-7: Typography & Divider Removal:**
  - Remove horizontal border dividers (`border-t border-zinc-900`) between inner blocks (image, description, specs).
  - Use vertical spacing (`space-y-6`) for visual grouping.
  - Specifications table rows must use ultra-thin dividers: `divide-y divide-zinc-800/10` without individual bottom borders.

### 6.2 Non-Functional Requirements
- **NFR-1: Performance (60fps Animation):** Accordion height transitions must execute smoothly at >= 60fps on modern mobile viewports.
- **NFR-2: Viewport Stability:** The accordion must be fully responsive down to `320px` width without horizontal overflows.
- **NFR-3: Reduced Motion Support:** If `useReducedMotion` is active, skip all height and opacity transitions, instantly toggling between collapsed and expanded states.
- **NFR-4: Accessibility:** Maintain a clear visual focus state (`focus-visible:ring-1 focus-visible:ring-[#ec3237]`) on the accordion header buttons for keyboard navigation.

---

## 7. Acceptance Criteria

| ID | Given | When | Then |
|:---|:---|:---|:---|
| **AC-1** | User loads page on viewport < 1024px | Renders services list | No border boxes or outline boxes are visible; collapsed items are fully transparent. |
| **AC-2** | User taps an inactive service header | Active index changes | The previous active item collapses, the new item expands, and its background shifts to `bg-zinc-900/40`. |
| **AC-3** | User taps the currently active header | Header is tapped | The active item remains expanded (Option A). |
| **AC-4** | Active accordion item expands | Panel is visible | Shows glassmorphic details panel with white border overlay, top edge highlight, and fade-in cinematic aspect image strip. |
| **AC-5** | System preference "Reduce Motion" is enabled | User taps service header | The content collapses/expands instantly without sliding height or opacity transitions. |

---

## 8. Out of Scope
- Redesigning the desktop split-screen showcase layout (which is already approved).
- Adding call-to-action buttons (e.g., WhatsApp booking links) inside the Services section (this is handled in the Fleet cards section).
- Global styles changes or refactoring other landing page sections.

---

## 9. Verification Plan

### 9.1 Automated Layout Testing
We will verify that the layout and interactive states are correct using Playwright:
- Run `python scripts/verify_services.py` to run automated browser checks.
- Add assertions to verify that active background shifts and height changes work.
- Assert that no borders (`border-zinc-800` or similar border boundaries) exist on the mobile elements.

### 9.2 Accessibility & Contrast Validation
- Inspect color combinations against WCAG AA standards.
- Test keyboard tab navigation and verify focus indicators are present.
