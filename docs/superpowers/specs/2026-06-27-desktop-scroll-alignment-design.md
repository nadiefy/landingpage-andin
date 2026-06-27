# Design Specification: Multi-Section Desktop Scroll Alignment Redesign

**Project:** Andin Transport Landing Page
**Feature:** Desktop Scroll Alignment & Navbar Overlap Prevention
**Date:** 2026-06-27
**Status:** Under Review

---

## 1. Goal & Context

When navigating the landing page sections via the navbar links on desktop, the scroll alignment is currently imprecise. Specifically:
- Clicking "Services" leaves the bottom of the Hero section visible, breaking the transition from the animated Hero background to the dark editorial Services section.
- Section scroll offsets must be normalized to align perfectly at the top of the viewport (`y = 0`) on desktop to hide preceding sections cleanly.
- Section contents must remain fully visible and must not scroll under or overlap with the fixed floating navbar on both desktop and mobile viewports.

---

## 2. Layout & Scroll Offset Specifications

We will apply a responsive scroll-margin-top utility (`scroll-mt-20 lg:scroll-mt-0`) across all main layout sections:
1. **Services Section (`#services`)**
2. **Fleet Section (`#fleet`)**
3. **About Us Section (`#about`)**
4. **Contact Section (`#contact`)**

### 2.1 Desktop Viewports (Width >= 1024px)
- **Scroll Target Alignment:** Using `lg:scroll-mt-0` will align the top boundary of each section exactly with the top of the screen (`y = 0`).
- **Preceding Section Masking:** This ensures that preceding backgrounds (like the Hero video) are completely hidden from the viewport.
- **Navbar Overlap Prevention:** Since all sections have `lg:py-32` (128px) top padding and the fixed navbar is at most `96px` in height, there remains a guaranteed spacing buffer of `32px` before the section header content begins. Content will not scroll underneath or get covered by the navbar.

### 2.2 Mobile/Tablet Viewports (Width < 1024px)
- **Scroll Target Alignment:** Retains the `scroll-mt-20` (80px) offset class.
- **Navbar Overlap Prevention:** On smaller viewports, section top padding shrinks to `py-24` (96px). The `scroll-mt-20` offset ensures the top of the section stops 80px below the viewport top, preventing the mobile floating menu header from touching or overlapping the section subtitles ("Our Capabilities", "Our Collection", etc.).

---

## 3. Component Diffs

### 3.1 Services Section Component
*   **File:** [Services.tsx](file:///d:/landingpage-andin/components/Services.tsx) (line 101)
*   **Change:**
    ```html
    - <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-black text-white scroll-mt-20" id="services">
    + <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-black text-white scroll-mt-20 lg:scroll-mt-0" id="services">
    ```

### 3.2 Fleet Section Component
*   **File:** [Fleet.tsx](file:///d:/landingpage-andin/components/Fleet.tsx) (line 207)
*   **Change:**
    ```html
    - <section className="w-full bg-black py-24 lg:py-32 overflow-hidden relative" id="fleet">
    + <section className="w-full bg-black py-24 lg:py-32 overflow-hidden relative scroll-mt-20 lg:scroll-mt-0" id="fleet">
    ```

### 3.3 About Section Component
*   **File:** [About.tsx](file:///d:/landingpage-andin/components/About.tsx) (line 18)
*   **Change:**
    ```html
    - <section className="w-full bg-black py-24 lg:py-32" id="about">
    + <section className="w-full bg-black py-24 lg:py-32 scroll-mt-20 lg:scroll-mt-0" id="about">
    ```

### 3.4 Contact Section Component
*   **File:** [CTA.tsx](file:///d:/landingpage-andin/components/CTA.tsx) (line 17)
*   **Change:**
    ```html
    - <section className="w-full bg-black py-24 lg:py-32 px-7 md:px-12 lg:px-20" id="contact">
    + <section className="w-full bg-black py-24 lg:py-32 px-7 md:px-12 lg:px-20 scroll-mt-20 lg:scroll-mt-0" id="contact">
    ```

---

## 4. Verification Plan

### 4.1 Playwright Automated Verification
We will add browser scroll assertions to verify scroll-to-target correctness:
- Assert that scrolling to `#services`, `#fleet`, `#about`, and `#contact` on desktop places the element's top boundary exactly at `y = 0`.
- Assert that scrolling to these targets on mobile sizes places the top boundary at `y = 80px`.
- Verify section titles are not overlapped by the header element.

### 4.2 Manual Verification
- Resize the viewport to standard desktop (1280px) and mobile (390px) widths.
- Click each link in the navigation header and verify scroll behavior.
