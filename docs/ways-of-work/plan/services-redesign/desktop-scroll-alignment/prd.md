# Product Requirements Document (PRD): Desktop Scroll Alignment & Navbar Overlap Prevention

## 1. Feature Name
- Desktop Scroll Alignment & Navbar Overlap Prevention

## 2. Epic
- Parent Epic PRD: [Split-Screen Showcase PRD](file:///d:/landingpage-andin/docs/ways-of-work/plan/services-redesign/mobile-accordion/prd.md)

## 3. Goal
- **Problem:** When navigating to the landing page sections (`#services`, `#fleet`, `#about`, `#contact`) via the header navigation links on desktop viewports, the scroll alignment is offset by 80px (`scroll-mt-20`). This offset leaves the bottom of the Hero section's video/background visible at the top of the viewport, which breaks the clean visual boundaries between sections and feels unpolished. However, removing this offset completely on mobile viewports would cause the floating navbar to overlap and cover the section headings/subtitles since mobile padding is reduced.
- **Solution:** Apply a responsive scroll margin top utility (`scroll-mt-20 lg:scroll-mt-0`) across all main sections. This aligns sections exactly to `y = 0` (top of the viewport) on desktop (hiding preceding content completely), while keeping the safe 80px offset (`scroll-mt-20`) on mobile/tablet viewports.
- **Impact:** Ensures 100% visual isolation of sections during anchor link navigation on desktop, creating a premium, polished cinematic flow without breaking mobile header alignment.

## 4. User Personas
- **Visitor (Desktop):** A customer browsing Andin Transport services on a laptop or desktop monitor, expecting a flawless cinematic scroll flow.
- **Visitor (Mobile):** A customer browsing on a mobile phone, expecting sections to scroll down far enough to be readable below the sticky navbar.

## 5. User Stories
- **Story 1 (Desktop Anchor Link Navigation):** As a desktop visitor, I want the page to scroll exactly to the top of the Services, Fleet, About, and Contact sections when clicking the navbar links, so that I do not see the preceding section's background elements bleeding into view.
- **Story 2 (Mobile Overlap Prevention):** As a mobile visitor, I want the page to scroll to a safe offset below the navbar when clicking nav links, so that the floating header does not overlap the section title.

## 6. Requirements

### Functional Requirements
- **FR1 (Responsive Scroll Target):** The section elements for Services (`#services`), Fleet (`#fleet`), About Us (`#about`), and Contact (`#contact`) must use a responsive scroll margin:
  - On viewports >= 1024px, the scroll margin top must be 0px (`lg:scroll-mt-0`).
  - On viewports < 1024px, the scroll margin top must be 80px (`scroll-mt-20`).
- **FR2 (Navbar Visibility Buffer):** The section titles and contents must remain fully visible and must not scroll underneath or get covered by the fixed navigation bar on both desktop and mobile viewports.

### Non-Functional Requirements
- **NFR1 (Zero JS Overhead):** The scroll alignment behavior must be handled natively via CSS/Tailwind (no extra scroll event handlers or layout listeners).
- **NFR2 (Smooth Scrolling):** Transition/scrolling to target elements must remain smooth on supporting browsers/configurations, obeying reduced motion system preferences.

## 7. Acceptance Criteria

| User Story / Requirement | Given / When / Then |
| --- | --- |
| **Story 1 / FR1 (Desktop Scroll)** | **Given** a desktop viewport width of 1280px<br>**When** I click the "Services", "Fleet", "About Us", or "Contact" links in the navbar<br>**Then** the page must scroll to the target section such that the section's top edge is aligned exactly with the top of the viewport (`y = 0`). |
| **Story 2 / FR1 (Mobile Scroll)** | **Given** a mobile viewport width of 390px<br>**When** I tap any navigation link in the menu overlay<br>**Then** the page must scroll to the target section such that the section's top edge is offset by 80px below the viewport (`y = 80px`). |
| **FR2 (Header Visibility)** | **Given** any viewport size<br>**When** anchor navigation completes<br>**Then** the section's header text must be fully visible below the fixed navbar and not covered or cut off. |

## 8. Out of Scope
- Custom JavaScript smooth-scrolling polyfills.
- Redesigning the navbar component or logo sizes.
- Section layout or color adjustments (outside of scroll margin class modifications).
