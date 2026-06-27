# Design Specification: Services Heading Size & Vertical Centering

**Project:** Andin Transport Landing Page
**Feature:** Services Section Desktop Layout Alignment (Option E)
**Date:** 2026-06-27
**Status:** Draft

---

## 1. Goal & Context

The goal is to resolve the vertical misalignment of the Services showcase card on desktop:
- Reduce the main section heading size from `lg:text-6xl` to `lg:text-5xl` for a cleaner visual weight.
- Vertically center the right-hand showcase card relative to the three list items on the left without shifting the list items downwards.
- Increase the heading's bottom margin on desktop to prevent the shifted showcase card from crowding the header.

---

## 2. Technical Solution

We will apply the following CSS adjustments inside `components/Services.tsx`:
1. **Reduce Heading Font Size:**
   - Change heading class from `lg:text-6xl` to `lg:text-5xl`.
2. **Increase Header Bottom Spacing:**
   - Change heading container margin class from `mb-16` to `mb-16 lg:mb-24` (increasing bottom margin to 96px on desktop).
3. **Offset Showcase Card:**
   - Add negative margin class `lg:-mt-10` (-40px) to the showcase card container. This shifts the card up to align its center with the center of the list items while the list items remain at the top of the grid row.

---

## 3. Component Diff

### Services Component
*   **File:** [Services.tsx](file:///d:/landingpage-andin/components/Services.tsx)
*   **Changes:**
    ```diff
    @@ -102,11 +102,11 @@
           <div className="relative z-10 max-w-7xl mx-auto px-7 md:px-12 lg:px-20">
             
             {/* Section Header */}
    -        <div className="mb-16">
    +        <div className="mb-16 lg:mb-24">
               <div className="flex items-center gap-4 mb-6">
                 <div className="h-px w-6 bg-white/40"></div>
                 <span className="text-sm font-medium uppercase tracking-widest text-zinc-400 font-sans">
                   Our Capabilities
                 </span>
               </div>
    -          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tighter leading-none text-white">
    +          <h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-medium tracking-tighter leading-none text-white">
                 Services built for<br />
                 <span className="text-zinc-500">every journey</span>
               </h2>
             </div>
     
             {/* Layout Grid: Desktop split-screen, Mobile stacked */}
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
    @@ -165,7 +165,7 @@
               })}
             </div>
     
             {/* Right Column (Desktop Glassmorphic Showcase card) - Hidden on Mobile */}
    -        <div className="hidden lg:block lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden border border-zinc-800 bg-zinc-950">
    +        <div className="hidden lg:block lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden border border-zinc-800 bg-zinc-950 lg:-mt-10">
               {/* Background Image Showcase */}
    ```

---

## 4. Verification Plan

### 4.1 Automated Verification
We will run `verify_services.py` to ensure all functionality works, and add assertions that check the relative coordinates of the active tab and the showcase card.

### 4.2 Manual Verification
Inspect the Services section on desktop viewports of different widths to ensure that:
- The card is centered relative to the three list items.
- The heading does not overlap the shifted card.
- List items are in the same starting position as before.
