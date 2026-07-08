# Product Requirements Document (PRD): Services Glassmorphic Bento Cards Redesign

## 1. Feature Name
- Services Glassmorphic Bento Cards Redesign

## 2. Epic
- Parent Epic: [Services Redesign](file:///d:/landingpage-andin/docs/ways-of-work/plan/services-redesign/mobile-accordion/prd.md)

## 3. Goal
- **Problem:** The current services section uses a split-screen typographic list with photo showcases and detailed specification tables. The user feels it is not visual or clean enough, and wants a design that adopts the website's dark, premium glassmorphism style more directly. Furthermore, the background images and technical spec tables clutter the layout.
- **Solution:** Restructure the section into a clean horizontal Bento Grid of 3 rounded glass cards on desktop (stacked vertically on mobile). Each card will omit images and specifications tables, showing only a brand metadata tag, title, and description paragraph. The cards will feature frosted borders, backdrop blur, and mouse-tracking spotlight radial hover gradients.
- **Impact:** Aligns the Services section with the high-end glassmorphic theme of the rest of the site (floating Navbar, About cards), improves typography legibility, and simplifies navigation on both desktop and mobile viewports.

## 4. User Personas
- **Visitor (Desktop & Mobile):** Discerning customers or corporate clients browsing Andin Transport services who expect an editorial, visually stunning, and easy-to-read landing page experience.

## 5. User Stories
1. **As a** desktop visitor, **I want** to see all capabilities presented together in clean glassmorphic cards **so that** I can scan the entire offering at a single glance without clicking through tabs.
2. **As a** visitor, **I want** the cards to omit heavy images and technical specifications tables **so that** the design remains clean, uncluttered, and typographically elegant.
3. **As a** mobile visitor, **I want** the glassmorphic cards to stack vertically with rounded corners **so that** the layout is responsive and looks premium on small devices.
4. **As a** desktop user, **I want** the cards to respond to my mouse movement with a subtle border spotlight glow **so that** the interaction feels modern and tactile.

## 6. Requirements

### 6.1 Functional Requirements
- **FR-1: Horizontal Bento Grid (Desktop):**
  - Render all 3 service cards side-by-side using a horizontal grid (`grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8`).
- **FR-2: Vertical Card Stack (Mobile):**
  - Stack the cards vertically on viewports below `768px` (`grid-cols-1 gap-6`).
- **FR-3: Glassmorphic Cards Container:**
  - Round card corners with `rounded-2xl` (16px corner radius) to match the About Us cards.
  - Background styling: `bg-zinc-950/40` or `bg-white/[0.02]`.
  - Frosted borders: `border border-white/10`.
  - Backdrop blur: `backdrop-blur-xl`.
  - Inner glow shadow: `shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]` for physical depth.
- **FR-4: Clean Typographic Content:**
  - Remove all background showcase images and details panel overlays.
  - Remove all technical specifications tables.
  - Each card must display:
    - Uppercase index/category tag (e.g. `01 / RATES`, `02 / CHAUFFEUR`, `03 / SUPPORT`) at the top, styled in brand red `#ec3237`.
    - Service title in high-contrast display font.
    - Service description in body copy.
- **FR-5: Spotlight Mouse-Hover Physics:**
  - Integrate a mouse-tracking radial gradient spotlight hover overlay (similar to `SpotlightCard` in `components/Fleet.tsx`) so that moving the cursor over a card casts a subtle white glow under the text and highlights the frosted borders.

### 6.2 Non-Functional Requirements
- **NFR-1: Accessibility (Text Contrast):**
  - Verify that body copy and headings on the dark glass surfaces maintain a contrast ratio of at least 4.5:1 (WCAG AA).
- **NFR-2: Viewport Stability:**
  - Grid must be fully responsive down to `320px` width without horizontal overflow.
- **NFR-3: Motion & Physics Performance:**
  - The mouse-tracking spotlight gradient calculation must execute smoothly at 60fps on desktop devices.

---

## 7. Acceptance Criteria

| ID | Given | When | Then |
|:---|:---|:---|:---|
| **AC-1** | User views Services section on desktop (>= 768px) | Section renders | Displays a 3-column horizontal bento grid; all cards are visible simultaneously with rounded corners (`rounded-2xl`). |
| **AC-2** | User views Services section on mobile (< 768px) | Section renders | Cards stack vertically in a clean list; layout fits screen without horizontal scroll. |
| **AC-3** | Active rendering of cards | Cards are rendered | No background images or technical specifications tables are present in any card. |
| **AC-4** | User hovers cursor over a service card | Cursor moves within card bounds | A spotlight radial glow tracks the mouse position, highlighting borders and background. |
| **AC-5** | Screen reader reads the cards | Focused | Reading order flows logically from category tag -> title -> description. |

---

## 8. Out of Scope
- Adding click-to-expand details or accordion behaviors on desktop/mobile.
- Adjusting the typography or styling of other sections (Fleet, About, Hero).

---

## 9. Verification Plan

### 9.1 Automated visual browser testing (`webapp-testing`)
- Write or update `scripts/verify_services.py` to launch Playwright in headless Chromium.
- Run tests on both desktop (1280x800) and mobile (390x844) viewports.
- Assert that all 3 cards are visible at the same time on desktop, and stacked on mobile.
- Assert that card image containers are completely removed from the DOM.
- Verify that card borders have `rounded-2xl` styles.

### 9.2 Design compliance check (`web-design-guidelines`)
- Validate text accessibility contrast on the final glass cards against the dark background.
