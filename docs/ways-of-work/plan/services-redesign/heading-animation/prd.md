# PRD: Services Heading Typography & Animated Red Highlight

## 1. Feature Name
Services Heading Typography Fix & Animated Text Highlight

## 2. Epic
**Parent Epic:** Services Section Redesign
- Design Spec: [docs/superpowers/specs/2026-07-08-services-heading-animation-design.md](file:///d:/landingpage-andin/docs/superpowers/specs/2026-07-08-services-heading-animation-design.md)

## 3. Goal

- **Problem:** The heading is forced into two lines via `<br>`, looking templated. The "every journey" text is plain and lacks visual interest.
- **Solution:** Remove the line break so the heading flows naturally. Add an animated red highlight that wipes left-to-right behind "every journey" like a cursor selecting text. The highlight stays permanently after playing once.
- **Impact:** Premium editorial heading with a signature animated highlight that makes the section memorable.

## 4. User Stories
- As a **site visitor**, I want to see a smooth, premium heading animation so the brand feels dynamic and well-crafted.

## 5. Requirements

### Functional Requirements
1. Remove `<br>` from heading — text flows on one line (wraps naturally on mobile)
2. "every journey" gets a red highlight animation behind it
3. Highlight uses `bg-[#ec3237]` (brand red)
4. Animation: left-to-right wipe using `scaleX` from 0 to 1 with `origin-left`
5. Triggered by `whileInView` (scroll into view)
6. Plays once, then stays permanently at full width
7. Duration: 1.2s, easing: `[0.16, 1, 0.3, 1]`
8. `prefers-reduced-motion`: highlight appears instantly at full width
9. Text stays white on top of the red highlight

### Non-Functional Requirements
1. No CLS or layout shift when animation plays
2. No console errors
3. No new dependencies

## 6. Acceptance Criteria
- [ ] Heading renders on one line on desktop (no forced line break)
- [ ] Heading wraps naturally on mobile
- [ ] Red highlight animates left-to-right on scroll into view
- [ ] Highlight stays permanently after animation completes
- [ ] Text remains white and readable over the red highlight
- [ ] Reduced motion: red block appears instantly without animation
- [ ] No layout shift during animation
- [ ] No console errors

## 7. Out of Scope
- No changes to cards, images, grid, or mobile layout
- No changes to other sections
- No new packages
