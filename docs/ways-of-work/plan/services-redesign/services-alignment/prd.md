# Product Requirements Document (PRD): Services Heading Size & Vertical Centering

## 1. Feature Name
- Services Heading Size & Vertical Centering

## 2. Epic
- Parent Epic PRD: [Split-Screen Showcase PRD](file:///d:/landingpage-andin/docs/ways-of-work/plan/services-redesign/mobile-accordion/prd.md)

## 3. Goal
- **Problem:** The Services showcase card on the right side of the list items is taller (~385px) than the 3 list items (~300px). In the current top-aligned (`items-start`) layout, the card extends far below the third tab, creating a visually unbalanced section at the bottom.
- **Solution:** Change the section layout on desktop to vertically center the right-hand card relative to the three tabs, while locking the tabs at their top position to prevent them from shifting down. Additionally, scale down the main heading size to `lg:text-5xl` for better typography hierarchy and adjust the spacer below it to avoid overlap.
- **Impact:** Balances the split-screen services block on desktop viewports, making the typography and showcase graphics align harmoniously.

## 4. User Personas
- **Visitor (Desktop):** A customer browsing Andin Transport services on a desktop computer who appreciates high-end design aesthetics and clean layouts.

## 5. User Stories
- **Story 1 (Visual Balance):** As a desktop visitor, I want the services showcase card to be centered relative to the options list so that the layout feels clean and balanced.

## 6. Requirements

### Functional Requirements
- **FR1 (Heading Size Update):** The heading in `components/Services.tsx` must be reduced from `lg:text-6xl` to `lg:text-5xl` on desktop viewports.
- **FR2 (Header Spacing Update):** The heading container's bottom margin must increase from `mb-16` to `lg:mb-24` on desktop viewports to prevent card overlap.
- **FR3 (Showcase Card Alignment Offset):** The showcase card container on the right column (`lg:col-span-7`) must use a negative margin offset `lg:-mt-10` to center it vertically relative to the tabs container on the left column (`lg:col-span-5`).

### Non-Functional Requirements
- **NFR1 (Visual Layout Stability):** The negative margin offset must only apply to desktop viewports (`lg:`) and must not affect the mobile stacked/accordion view. The three list items on the left must maintain their top position without shifting down.

## 7. Acceptance Criteria

| User Story / Requirement | Given / When / Then |
| --- | --- |
| **Story 1 / FR1 (Heading Size)** | **Given** a user is on a desktop viewport<br>**When** the Services section is rendered<br>**Then** the heading must be sized to `lg:text-5xl` (48px). |
| **FR2 & FR3 (Card Centering & Spacing)** | **Given** a user is on a desktop viewport<br>**When** they view the Services grid<br>**Then** the showcase card must be centered vertically relative to the list of tabs, and the spacing above the card must be at least 54px. |
| **NFR1 (Visual Stability)** | **Given** any viewport size<br>**When** the page is loaded<br>**Then** the three list items on the left must maintain their top position (i.e. top of grid row) and must not be pushed down. |

## 8. Out of Scope
- Changes to the mobile accordion styling or functionality.
- Changes to the image scaling or content specs within the card.
