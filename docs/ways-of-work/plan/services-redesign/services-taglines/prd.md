# Product Requirements Document (PRD): Services Casual Taglines Update

## 1. Feature Name
- Services Casual Taglines Update

## 2. Epic
- Parent Epic PRD: [Split-Screen Showcase PRD](file:///d:/landingpage-andin/docs/ways-of-work/plan/services-redesign/mobile-accordion/prd.md)

## 3. Goal
- **Problem:** The current taglines (subtitles) in the Services section ("RATES BY THE DAY, WEEK, OR MONTH", "PROFESSIONAL DISPATCH ON DEMAND", "24/7 ROADSIDE CONCIERGE & RESPONSE") sound overly clinical, formal, and corporate. They do not match the premium, modern, and casual tone of the rest of the landing page.
- **Solution:** Shorten the taglines to make them sound more casual and friendly while preserving their core informational value. Keep the current top-aligned desktop layout (Option D) untouched.
- **Impact:** Improves copy appeal, brand alignment, and content readability across all viewports.

## 4. User Personas
- **Visitor (Desktop/Mobile):** A customer browsing Andin Transport services who values a premium yet approachable tone.

## 5. User Stories
- **Story 1 (Approachability):** As a landing page visitor, I want to read clear, casual taglines in the Services section so that I feel the brand is friendly and easy to work with.

## 6. Requirements

### Functional Requirements
- **FR1 (Casual Copy Update):** The subtitles in `SERVICES_DATA` inside `components/Services.tsx` must be updated to:
  - "Flexible daily or monthly rates" (Flexible scheduling)
  - "Professional chauffeurs on call" (Chauffeur services)
  - "Roadside help around the clock" (Continuous support)
- **FR2 (Responsive Rendering):** The updated taglines must render correctly inside the desktop details card and the mobile accordion dropdowns.

### Non-Functional Requirements
- **NFR1 (Visual Layout Stability):** Changing the tagline text must not alter the layout positioning or vertical alignment of the columns. The desktop grid must remain top-aligned (`items-start`).

## 7. Acceptance Criteria

| User Story / Requirement | Given / When / Then |
| --- | --- |
| **Story 1 / FR1 (Copy update)** | **Given** a user navigates to the Services section<br>**When** they inspect the subheadings<br>**Then** they must see the updated casual taglines instead of the original formal taglines. |
| **FR2 (Visual Stability)** | **Given** any viewport size<br>**When** the page loads<br>**Then** the layout structure and vertical alignment must remain identical to the previous version. |

## 8. Out of Scope
- Layout alignment changes (e.g. centering, dynamic translation).
- Copy changes to other sections of the landing page.
