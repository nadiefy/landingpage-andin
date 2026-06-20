# Design Specification: Services Mobile Accordion Redesign (Approach A)

**Project:** Andin Transport Landing Page
**Feature:** Services Section - Mobile Accordion Redesign
**Date:** 2026-06-20
**Status:** Under Review

---

## 1. Goal & Context

The current vertical accordion in the mobile Services section uses boxed structures with hard `border border-zinc-800 bg-zinc-950` containers and basic `+`/`−` text indicators. This design looks standard and "AI-generated," diverging from the premium, dark cinematic look of the desktop version.

This specification outlines the transition to **Approach A: Elevation + Surgical Glass**, a layout emphasizing borderless content, smooth luminance transitions, and glassmorphic depth on mobile viewports (< 1024px).

---

## 2. Mobile Layout Specifications (Width < 1024px)

### 2.1 Accordion Outer Structure
- **Border Removal:** Delete all outer border classes (`border`, `border-zinc-800`) and the default dark background (`bg-zinc-950`) from each item.
- **Vertical Spacing:** Separate accordion entries with a vertical gap (`space-y-4`).
- **Interactive State Signals:**
  - **Collapsed State:** Transparent background (`bg-transparent`) sitting directly on the pure black page canvas.
  - **Expanded State:** The active item receives a subtle, soft background tint (`bg-zinc-900/40`) to create a perception of visual lift (elevation).
  - **No Icons:** Remove the `+`/`−` text or icon signifier on the right side. Visual indicators are restricted solely to the active background shift and the physical expansion of the content panel.

### 2.2 Glassmorphic Content Panel
The expanded accordion panel will use surgical glassmorphism to establish micro-depth on mobile:
- **Base Layer:** A low-opacity frosted overlay (`bg-white/[0.02]` or `bg-zinc-900/30`) with background blur (`backdrop-blur-md`).
- **Inner Refraction (Edge Highlight):**
  - Faint border wrapping: `border border-white/[0.05]`
  - Top physical edge reflection: An inset shadow `shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]` to simulate light catching the upper border.
- **Elevation Shadow:** Soft drop shadow (`shadow-2xl shadow-black/60`) to separate the expanded card from the page background.

### 2.3 Image & Content Layout
- **Cinematic Accent Image:**
  - Crop the service image to a wide cinematic aspect ratio (`aspect-[5/2]` or `aspect-[21/9]`).
  - Fade the lower edge into the details panel using an absolute-overlay gradient: `bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent`.
- **Spacing-Based Content flow:**
  - Remove horizontal divider borders (`border-t border-zinc-900`) between the image, subtitle, and text content.
  - Rely on vertical spacing (`space-y-6`) and typographic hierarchy for readability.
- **Subtle Specifications Grid:**
  - Reorganize the specifications list using low-contrast dividers: `divide-y divide-zinc-800/10` (no explicit border-b per row).
  - Render labels in a muted gray (`text-zinc-500`) and values in crisp off-white (`text-zinc-200`).

---

## 3. Motion & Animation Parameters

- **Height Expand/Collapse:**
  - Animate height and opacity using `motion/react` (e.g. `animate={{ height: "auto", opacity: 1 }}`).
  - Use high-quality spring physics for expansion: `type: "spring", stiffness: 100, damping: 20` to eliminate visual lag.
- **RSC / Accessibility:**
  - Check `shouldReduceMotion` dynamically.
  - If enabled, bypass height and opacity transitions completely to prevent motion sickness and provide instant state toggling.

---

## 4. Verification Plan

### 4.1 Automated Testing
Execute the existing Playwright verification suite to confirm the mobile accordion functions as expected:
```bash
python scripts/verify_services.py
```

### 4.2 Manual Inspection Checklist
1. Verify no visible box outlines or borders exist on the mobile Services section.
2. Confirm the active item gains a visual background shift (`bg-zinc-900/40`), and that inactive items remain fully transparent.
3. Check that the `+`/`−` text controls are completely gone.
4. Verify the glassmorphic frosted overlay and top reflection border are visible on mobile viewports.
5. Validate accessibility by verifying transitions are disabled when system-level reduced motion is toggled.
