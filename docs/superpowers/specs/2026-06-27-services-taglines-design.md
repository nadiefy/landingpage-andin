# Design Specification: Services Casual Taglines Update

**Project:** Andin Transport Landing Page
**Feature:** Services Section Taglines Refinement (Option D)
**Date:** 2026-06-27
**Status:** Approved

---

## 1. Goal & Context

The goal is to refine the Services section subtitles (taglines) on the landing page:
- Make them sound shorter, more casual, and less formal/clinical.
- Retain the current top-aligned desktop layout (Option D) without changing column vertical positioning.

---

## 2. Tagline Specifications

We will replace the uppercase, formal taglines inside `SERVICES_DATA` in `Services.tsx` with more relaxed, casual equivalents:

1. **Service 01 (Flexible Scheduling)**
   - **Old Subtitle:** `RATES BY THE DAY, WEEK, OR MONTH`
   - **New Subtitle:** `Flexible daily or monthly rates`

2. **Service 02 (Chauffeur Services)**
   - **Old Subtitle:** `PROFESSIONAL DISPATCH ON DEMAND`
   - **New Subtitle:** `Professional chauffeurs on call`

3. **Service 03 (Continuous Support)**
   - **Old Subtitle:** `24/7 ROADSIDE CONCIERGE & RESPONSE`
   - **New Subtitle:** `Roadside help around the clock`

*Note: The existing CSS uppercase text transformation will display these subtitles in uppercase on screen (`uppercase` utility class), but the text content itself will be casual.*

---

## 3. Component Diff

### Services Component
*   **File:** [Services.tsx](file:///d:/landingpage-andin/components/Services.tsx) (lines 11, 23, 35)
*   **Changes:**
    ```diff
      const SERVICES_DATA = [
        {
          id: "01",
          title: "Flexible scheduling",
    -     subtitle: "RATES BY THE DAY, WEEK, OR MONTH",
    +     subtitle: "Flexible daily or monthly rates",
          ...
        },
        {
          id: "02",
          title: "Chauffeur services",
    -     subtitle: "PROFESSIONAL DISPATCH ON DEMAND",
    +     subtitle: "Professional chauffeurs on call",
          ...
        },
        {
          id: "03",
          title: "Continuous support",
    -     subtitle: "24/7 ROADSIDE CONCIERGE & RESPONSE",
    +     subtitle: "Roadside help around the clock",
          ...
        }
      ];
    ```

---

## 4. Verification Plan

### 4.1 Automated Verification
We will run our existing Playwright test script `verify_services.py` to ensure all functionality works, and add verification checks for the updated tagline texts.

### 4.2 Manual Verification
Inspect the Services section on both desktop and mobile viewports to ensure taglines render correctly in the details card and mobile accordion dropdowns.
