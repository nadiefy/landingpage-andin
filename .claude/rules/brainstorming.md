---
description: "Always active in landingpage-andin. Brainstorms goals, runs grill-me to stress-test the design, then generates a PRD using breakdown-feature-prd once outcomes are determined."
globs: ["**/*"]
---

# Brainstorming, Stress-Testing, and PRD Workflow Rule

This rule enforces a structured three-phase workflow for any brainstorming session initiated within the **landingpage-andin** workspace, adapting dynamically based on whether the topic is a UI/UX or Non-UI/UX task.

## 1. Trigger Conditions
This rule is active at all times in this workspace. Apply its guidelines when:
- A brainstorming session is initiated on any topic.
- A user asks to brainstorm, plan, design, create, or modify features, components, database structures, APIs, or user flows.

## 2. Phase 1: Brainstorming & Goal Definition
When this rule is triggered, you MUST load the core brainstorming instructions by invoking the `/brainstorming` skill and define the initial goals.

### A. Grounding & Research (Universal)
Prior to drafting the design spec:
1. Use the **`exa`** MCP (`web_search_exa`, `web_fetch_exa`) to research modern trends, design patterns, and engineering paradigms.
2. Use the **`context7`** MCP (`query-docs`) to verify official, up-to-date API syntax for any 3rd-party libraries.

### B. If the topic involves UI/UX, Layouts, or Component Styling:
Apply the following frontend design skills in concert to establish a premium aesthetic direction. Run all six sub-steps in parallel where possible.
1. **Layout & Motion Rhythm**: `/gpt-taste` (simulated python-driven layout randomization, AIDA framework, gapless bentos, section spacing of `py-32` to `py-48`, GSAP scroll triggering) and `/frontend-design` (bold aesthetic theme, distinctive typography pairings - Satoshi, Cabinet Grotesk, Outfit, Geist - NEVER Inter).
2. **Component Polish & Micro-Interactions**: `/emil-design-eng` (invisible polish details that make software feel premium: hover states, focus transitions, transition timing, elevation, spacing micro-decisions). Apply this *after* layout to layer micro-refinements onto the layout skeleton.
3. **Visual System & Interaction Patterns**: `/ui-ux-pro-max` (color systems, spacing scales, component hierarchy) and `/frontend-ui-ux-engineer` (stateful micro-interactions, component API design, visual feedback loops).
4. **Animation & Scroll Language**: `/find-animation-opportunities` (scan the layout for where motion adds meaning, not noise) and `/animation-vocabulary` (choose the right motion primitives: spring vs ease, stagger vs cascade, parallax vs scroll-lock).
5. **Performance & Viewport Stability**: `/design-taste-frontend` (CSS hardware acceleration, RSC leaf component boundaries, no emojis in code/markup, and `min-h-[100dvh]` viewport stability).
6. **Copy Direction**: Apply `/copywriting` to craft hero headlines (max 8 words), CTA copy (1-3 words, single intent per page), value proposition clarity, and tone-of-voice consistency across all page sections. Run the 10-word value prop test, the banned filler verb list, and the hero headline frameworks.
7. **Visual Workspace Sync**: If the Figma MCP is connected, create an isolated Figma file for the current topic to host initial mockups and design system components. Otherwise, proceed without visual workspace sync.

### C. If the topic involves Non-UI/UX Features (APIs, routing, database, logic):
Apply these architectural and optimization skills:
1. **Next.js Conventions**: `/next-best-practices` (RSC component boundaries, file conventions, async params/headers/cookies, route handlers).
2. **Performance Optimization**: `/vercel-react-best-practices` (eliminating waterfalls, server performance caching, client-side fetching limits, bundle size optimization).
3. **Security Review**: `/security-review` (validate input trust boundaries, auth flows, rate limiting, injection vectors) — run this whenever the feature touches APIs, server actions, or user input.

### D. Output:
Save the initial design specification to `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`.

## 3. Phase 2: Design Stress-Testing (Grill-Me)
Once the initial design spec is drafted, you MUST stress-test the design before generating the PRD.
1. Load the grill-me skill by invoking `/grill-me`.
2. Interview the user relentlessly about the drafted design spec, asking questions one at a time.
   - Use **`exa`** (web search) and **`context7`** (docs lookup) to resolve complex design questions, performance concerns, or API trade-offs raised during the session.
   - **For UI/UX**: Grill layout details, responsive breakpoints, and animations. Modify/refine the visual mockups dynamically in Figma (if connected) or update the spec file with precise layout decisions.
   - **For Non-UI/UX**: Grill error handling, race conditions, caching, data mutations, and security rules.
3. Update/refine the design spec file (`docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`) with the decisions and outcomes from this session.

## 4. Phase 3: Feature PRD Generation
Once the design spec has been stress-tested and approved, you MUST transition to creating a Product Requirements Document (PRD).
1. Load the feature PRD breakdown instructions by invoking `/breakdown-feature-prd`.
2. Create a detailed PRD using the finalized design spec and the outcomes of the grill-me phase as the primary source of truth.
3. Define the **Verification Plan** section in the PRD. Use **`exa`** and **`context7`** to research testing configurations (e.g. Playwright selectors, Lighthouse CLI parameters) for the plan:
   - **For UI/UX Features**: Require automated visual browser testing using `/webapp-testing` (Playwright screenshots and layout states) and design compliance checks using `/web-design-guidelines` (WCAG contrast and accessibility). Run a dedicated `/accessibility-audit` pass covering focus management, screen reader announcements, keyboard navigation, ARIA patterns, and motion accessibility (`prefers-reduced-motion`). Then run `/improve-animations` as a final polish pass to ensure all motion is performant, purposeful, and respects `prefers-reduced-motion`.
   - **For Non-UI/UX Features**: Require functional browser automation using `/webapp-testing` (Playwright integration scripts testing authentication redirects, cookie lifecycle, session storage, form mutations, console exceptions) and performance/SEO health audits using `npx lighthouse <url> --output json` (Lighthouse CLI checking speed, accessibility, best practices, and SEO scores).
4. Save the generated PRD to the project path: `docs/ways-of-work/plan/{epic-name}/{feature-name}/prd.md`.
