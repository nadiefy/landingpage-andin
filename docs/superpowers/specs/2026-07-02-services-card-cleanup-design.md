# Design Specification: Services Card Cleanup & Glassmorphism Sync

**Project:** Andin Transport Landing Page
**Feature:** Services Card Cleanup — Remove Metadata Tags & Sync Glassmorphism to Navbar
**Date:** 2026-07-02
**Status:** Approved

---

## 1. Goal & Context

Refine the Services section glassmorphic bento cards to be more elegant and minimalist by:
1. Removing the metadata identification tags (`01 / RATES`, `02 / CHAUFFEUR`, `03 / SUPPORT`) from all cards
2. Synchronizing the glassmorphism effect to match the Navbar's locked-in specs exactly

---

## 2. Design Specification

### 2.1 Remove Metadata Tags

- Remove the `<span>` element displaying the tag (e.g. `01 / RATES`) from the `SpotlightCard` component
- Remove the `getTag()` helper function entirely
- Cards should contain only **title** and **description** — no identifier metadata

### 2.2 Glassmorphism Sync with Navbar

The Navbar uses these exact specs (locked-in):

```
bg-black/40 backdrop-blur-[10px] border border-primary/10
```

**CSS class changes on each SpotlightCard wrapper `<div>`:**

| Property | Before | After |
|----------|--------|-------|
| Background | `bg-zinc-950/40` | `bg-black/40` |
| Backdrop Blur | `backdrop-blur-xl` (24px) | `backdrop-blur-[10px]` |
| Border | `border-white/10` | `border-primary/10` |
| Inner Glow | `shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]` | **Keep** |
| Drop Shadow | `shadow-2xl shadow-black/80` | **Keep** |
| Spotlight Hover | Mouse-tracking radial gradient | **Keep** |
| Border Radius | `rounded-2xl` | **Keep** |

**Note:** `border-primary/10` and `border-white/10` are functionally identical since `--primary: 0 0% 95%` maps to near-white. Using `border-primary/10` maintains semantic consistency with the Navbar.

---

## 3. Technical Changes

### 3.1 Files Modified
- `components/Services.tsx` — only file changed

### 3.2 Changes

1. **Remove `getTag()` function** (lines ~54-61)
2. **Remove metadata tag `<span>`** (lines ~81-83)
3. **Update card wrapper classes** — swap 3 CSS classes as specified in §2.2

### 3.3 Scope & Boundaries
- No other sections affected
- No new dependencies
- Responsive behavior unchanged
- Mobile stacking unchanged
- Spotlight hover effect unchanged

---

## 4. Verification Plan

### 4.1 Manual Verification
- Desktop: Cards render clean with title + description only, no tags
- Desktop: Glassmorphism matches Navbar appearance when scrolled
- Desktop: Spotlight hover effect still works
- Mobile: Cards stack vertically and look clean
- No console errors
