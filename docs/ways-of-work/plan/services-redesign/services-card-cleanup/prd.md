# Product Requirements Document (PRD): Services Card Cleanup & Glassmorphism Sync

## 1. Feature Name
- Services Card Cleanup & Glassmorphism Sync

## 2. Epic
- Parent Epic: [Services Redesign](file:///d:/landingpage-andin/docs/ways-of-work/plan/services-redesign/mobile-accordion/prd.md)

## 3. Goal
- **Problem:** The Services glassmorphic bento cards currently display red metadata tags (`01 / RATES`, etc.) and use a different glassmorphism specification (`bg-zinc-950/40`, `backdrop-blur-xl`, `border-white/10`) than the floating Navbar (`bg-black/40`, `backdrop-blur-[10px]`, `border-primary/10`). This creates visual inconsistency and compromises the minimalist, premium feel of the landing page.
- **Solution:** Remove the metadata tags entirely from the cards and synchronize the background, backdrop blur, and border style to match the Navbar's glassmorphism specifications exactly.
- **Impact:** Achieves complete design system consistency across key global elements (Navbar and Services cards) and refines the typography layout to be cleaner and more elegant.

## 4. User Personas
- **Visitor (Desktop & Mobile):** Discerning customers who appreciate a cohesive, well-crafted user interface with consistent visual treatment across components.

## 5. User Stories
1. **As a** visitor, **I want** the Services cards to match the glassmorphic styling of the Navbar **so that** the site's design feels cohesive and unified.
2. **As a** visitor, **I want** to read only the service titles and descriptions without metadata tags **so that** the layout is cleaner and easier to read.

## 6. Requirements

### 6.1 Functional Requirements
- **FR-1: Metadata Tag Removal:**
  - Completely remove the ID metadata tags (`01 / RATES`, `02 / CHAUFFEUR`, `03 / SUPPORT`) from the rendering of each card.
- **FR-2: Glassmorphism Sync with Navbar:**
  - Swap the background color from `bg-zinc-950/40` to `bg-black/40`.
  - Swap the backdrop blur from `backdrop-blur-xl` to `backdrop-blur-[10px]`.
  - Swap the border color from `border-white/10` to `border-primary/10`.
- **FR-3: Preserve Visual Behaviors:**
  - Maintain the inner shadow reflection (`shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]`).
  - Maintain the drop shadow (`shadow-2xl shadow-black/80`).
  - Maintain the spotlight mouse-hover radial gradient effect.
  - Maintain the `rounded-2xl` (16px) corner radius.

### 6.2 Non-Functional Requirements
- **NFR-1: Viewport Stability:**
  - Ensure the cards remain responsive down to `320px` width without overflow.
- **NFR-2: Performance:**
  - Maintain 60fps scrolling and hover performance.

---

## 7. Acceptance Criteria

| ID | Given | When | Then |
|:---|:---|:---|:---|
| **AC-1** | Services section is rendered | Renders cards | All 3 cards contain only the title and description; no category tag is displayed. |
| **AC-2** | Services section is inspected | Style check | Card background class is `bg-black/40`, border class is `border-primary/10`, and backdrop blur is `backdrop-blur-[10px]`. |
| **AC-3** | User hovers cursor over card | Hover active | Spotlight tracking effect works and border radius remains `rounded-2xl`. |

---

## 8. Out of Scope
- Changing the content copy of titles or descriptions.
- Altering the layout grid (3-column desktop, stacked mobile) or spacing values.

---

## 9. Verification Plan

### 9.1 Automated visual browser testing (`webapp-testing`)
- Run `python scripts/verify_services.py` to confirm that the services section is visible and contains no images.
- Add assertions to verify that no metadata text (`01 / RATES`, etc.) is present in the DOM within the Services cards.
- Add assertions to check that the correct glassmorphic Tailwind classes (`bg-black/40`, `backdrop-blur-[10px]`, `border-primary/10`) are present on the cards.

### 9.2 Design compliance check (`web-design-guidelines`)
- Validate visual harmony of cards and Navbar under dev environment inspection.
