# Design Specification: Services Heading Typography Fix & Animated Red Highlight

**Project:** Andin Transport Landing Page
**Feature:** Services Section - Heading Typography Alignment & Animated Text Highlight
**Date:** 2026-07-08
**Status:** Approved

---

## 1. Goal & Context

Fix the services section heading to flow on one line (remove forced line break) and add an animated red left-to-right wipe highlight on "every journey" that stays permanently after playing once.

---

## 2. Change 1: Heading Typography

### Before
```tsx
Services built for<br />
<span className="text-zinc-500">every journey</span>
```
Forced two-line layout with `<br>`.

### After
- Remove the `<br>` entirely
- "Services built for" and "every journey" flow as one continuous heading
- On desktop: renders on one line
- On mobile: wraps naturally at smaller viewport

```tsx
<h2 className="text-4xl md:text-5xl lg:text-5xl font-display font-medium tracking-tighter leading-none text-white">
  Services built for <span className="text-zinc-500 relative inline-block">every journey</span>
</h2>
```

---

## 3. Change 2: Animated Red Highlight

### Visual
A red background block (`bg-[#ec3237]`) wipes from left to right behind "every journey", like a cursor selecting text. Once the animation plays, the highlight **stays permanently at full width**.

### Technical Approach
- "every journey" is wrapped in `<span className="relative inline-block">`
- Inside: a `<motion.span>` positioned absolutely behind the text
- Red block: `bg-[#ec3237] rounded-sm` (subtle rounding for polish)
- Starts at `scaleX(0)` with `origin-left`
- Animates to `scaleX(1)` via `whileInView`
- Text sits on top with `relative z-10 text-white`

### Animation Spec
- Duration: 1.2s
- Easing: `[0.16, 1, 0.3, 1]`
- Trigger: `whileInView` (scroll into view)
- Play count: **once** (never loops, never disappears)
- After animation: red block stays at full width permanently

### Reduced Motion
- `prefers-reduced-motion` users: red block appears instantly at full width (no animation)

### Final Class Stack
```tsx
<span className="relative inline-block">
  <motion.span
    className="absolute inset-0 bg-[#ec3237] rounded-sm origin-left"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
  />
  <span className="relative z-10 text-white">every journey</span>
</span>
```

---

## 4. Scope

- **File:** `components/Services.tsx` only
- **No changes** to cards, images, grid, mobile layout, or other sections
