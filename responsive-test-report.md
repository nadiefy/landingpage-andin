# Responsive Test Report

## Project

- Workspace: `C:\Users\nadief\.codex\worktrees\84b0\landingpage-andin`
- Test date: `2026-04-28`
- Target: landing page responsiveness from desktop to mobile

## Summary

The landing page is generally responsive across desktop, tablet, and mobile breakpoints.

- No page-level horizontal overflow was detected.
- Main hero content remains readable across tested screen sizes.
- Services cards and footer layout remain structurally stable on mobile.
- Mobile navigation opens and displays correctly.

Overall verdict: `Responsive, but not fully polished yet`

## Tested Viewports

1. `1440 x 900` desktop
2. `1024 x 768` laptop
3. `768 x 1024` tablet
4. `430 x 932` mobile
5. `390 x 844` mobile
6. `360 x 800` mobile

## Findings

### What works well

- The page adapts cleanly from desktop to small mobile screens.
- Hero section headline and CTA remain visible and readable.
- Service cards stack properly on mobile.
- Footer content stays usable on smaller screens.
- Mobile menu overlay opens successfully and remains readable.

### Issues found

1. `404 resource` appears during render on desktop.
   - Likely cause: missing `favicon.ico` or another public asset.
   - Impact: minor, but should be cleaned up.

2. Fleet section heading alignment is slightly off on smaller mobile widths.
   - Seen around `390px` and `360px`.
   - The heading appears slightly pushed to the left.
   - Impact: visual polish issue, not a layout-breaking issue.

3. Fixed navbar can overlap section content during scroll transitions.
   - Some section headings appear too close to the top when reached by scrolling.
   - Impact: anchor navigation and reading comfort can feel a bit cramped.

4. Mobile menu CTA points to a missing anchor.
   - File: [components/Navbar.tsx](C:\Users\nadief\.codex\worktrees\84b0\landingpage-andin\components\Navbar.tsx)
   - Current target: `#get-started`
   - Result: dead link because no matching section id exists in the project.

## Final Verdict

This project is already responsive in a functional sense.

It does **not** break across the tested desktop, tablet, and mobile sizes, but there are still a few visual and UX issues worth fixing before calling it fully polished.

## Test Artifacts

- JSON audit output: [report.json](C:\Users\nadief\.codex\worktrees\84b0\landingpage-andin\test-artifacts\responsive\report.json)
- Screenshot folder: [test-artifacts/responsive](C:\Users\nadief\.codex\worktrees\84b0\landingpage-andin\test-artifacts\responsive)

### Useful screenshots

- Desktop top view: [desktop-1440-top.png](C:\Users\nadief\.codex\worktrees\84b0\landingpage-andin\test-artifacts\responsive\desktop-1440-top.png)
- Desktop mid view: [desktop-1440-mid.png](C:\Users\nadief\.codex\worktrees\84b0\landingpage-andin\test-artifacts\responsive\desktop-1440-mid.png)
- Tablet mid view: [tablet-768-mid.png](C:\Users\nadief\.codex\worktrees\84b0\landingpage-andin\test-artifacts\responsive\tablet-768-mid.png)
- Mobile mid view: [mobile-390-mid.png](C:\Users\nadief\.codex\worktrees\84b0\landingpage-andin\test-artifacts\responsive\mobile-390-mid.png)
- Mobile menu: [mobile-390-menu.png](C:\Users\nadief\.codex\worktrees\84b0\landingpage-andin\test-artifacts\responsive\mobile-390-menu.png)
- Mobile footer: [mobile-390-footer.png](C:\Users\nadief\.codex\worktrees\84b0\landingpage-andin\test-artifacts\responsive\mobile-390-footer.png)
