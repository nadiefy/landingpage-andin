---
trigger: model_decision
glob:
description: "Triggers when a brainstorming session begins in landingpage-andin. Brainstorms goals, runs grill-me to stress-test the design, then generates a PRD using breakdown-feature-prd once outcomes are determined."
---

# Brainstorming, Stress-Testing, and PRD Workflow Rule

This rule enforces a structured three-phase workflow for any brainstorming session initiated within the **landingpage-andin** workspace, adapting dynamically based on whether the topic is a UI/UX or Non-UI/UX task.

## 1. Trigger Conditions
This rule triggers when:
- A brainstorming session is initiated on any topic.
- A user asks to brainstorm, plan, design, create, or modify features, components, database structures, APIs, or user flows.

## 2. Phase 1: Brainstorming & Goal Definition
When this rule is triggered, you MUST load the core brainstorming instructions by reading [brainstorming SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/brainstorming/SKILL.md) and define the initial goals.

### A. Grounding & Research (Universal)
Prior to drafting the design spec:
1. Use the **`exa`** MCP (`web_search_exa`, `web_fetch_exa`) to research modern trends, design patterns, and engineering paradigms.
2. Use the **`context7`** MCP (`query-docs`) to verify official, up-to-date API syntax for any 3rd-party libraries.

### B. If the topic involves UI/UX, Layouts, or Component Styling:
Apply the following frontend design skills in concert to establish a premium aesthetic direction:
1. **Layout & Motion**: [gpt-taste SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/gpt-taste/SKILL.md) (simulated python-driven layout randomization, AIDA framework, gapless bentos, section spacing of `py-32` to `py-48`, GSAP scroll triggering) and [frontend-design SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/frontend-design/SKILL.md) (bold aesthetic theme, distinctive typography pairings - Satoshi, Cabinet Grotesk, Outfit, Geist - NEVER Inter).
2. **Visual & Interaction Patterns**: [ui-ux-pro-max SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/ui-ux-pro-max/SKILL.md) (standards, color schemes, and patterns) and [frontend-ui-ux-engineer SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/frontend-ui-ux-engineer/SKILL.md) (micro-interactions, states, visual polish).
3. **Performance & Viewport Stability**: [design-taste-frontend SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/design-taste-frontend/SKILL.md) (CSS hardware acceleration, RSC leaf component boundaries, no emojis in code/markup, and `min-h-[100dvh]` viewport stability).
4. **Visual Workspace Sync (Stitch)**: You MUST synchronize the drafted design spec with Stitch using this exact sequence:
   a. Call `stitch:list_projects` to check if a project named "landingpage-andin" exists. If not, call `stitch:create_project` with title "landingpage-andin". Retrieve the `projectId`.
   b. Convert the drafted design spec file's contents into a base64-encoded string.
   c. Call `stitch:upload_design_md` with the `projectId` and the base64 string. Retrieve the screen instance information (`id` and `sourceScreen`) from the response.
   d. Call `stitch:create_design_system_from_design_md` using the `projectId` and the returned `selectedScreenInstance`.
   e. Proactively call `stitch:list_screens` or `stitch:generate_variants` to sync and review layouts in the mockup workspace.
   *(Note: If you encounter parameter or API issues with Stitch, read the schema JSON files in `C:\Users\nadief\.gemini\antigravity\mcp\stitch\` to self-correct).*

### C. If the topic involves Non-UI/UX Features (APIs, routing, database, logic):
Apply these architectural and optimization skills:
1. **Next.js Conventions**: [next-best-practices SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/next-best-practices/SKILL.md) (RSC component boundaries, file conventions, async params/headers/cookies, route handlers).
2. **Performance Optimization**: [vercel-react-best-practices SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/vercel-react-best-practices/SKILL.md) (eliminating waterfalls, server performance caching, client-side fetching limits, bundle size optimization).

### D. Output:
Save the initial design specification to `docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`.

## 3. Phase 2: Design Stress-Testing (Grill-Me)
Once the initial design spec is drafted, you MUST stress-test the design before generating the PRD.
1. Load the grill-me skill instructions by reading [grill-me SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/grill-me/SKILL.md).
2. Interview the user relentlessly about the drafted design spec, asking questions one at a time.
   - Use **`exa`** (web search) and **`context7`** (docs lookup) to resolve complex design questions, performance concerns, or API trade-offs raised during the session.
   - **For UI/UX**: Grill layout details, responsive breakpoints, and animations. Modify/refine the visual mockups dynamically in Stitch using the **`stitch`** MCP (`edit_screens`, `generate_variants`) with the resolved `projectId`.
   - **For Non-UI/UX**: Grill error handling, race conditions, caching, data mutations, and security rules.
3. Update/refine the design spec file (`docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`) with the decisions and outcomes from this session.
4. **Final Sync**: For UI/UX designs, sync the final agreed-upon spec back to Stitch using `stitch:update_design_system` with the `projectId`.

## 4. Phase 3: Feature PRD Generation
Once the design spec has been stress-tested and approved, you MUST transition to creating a Product Requirements Document (PRD).
1. Load the feature PRD breakdown instructions by reading [breakdown-feature-prd SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/breakdown-feature-prd/SKILL.md).
2. Create a detailed PRD using the finalized design spec and the outcomes of the grill-me phase as the primary source of truth.
3. Define the **Verification Plan** section in the PRD. Use **`exa`** and **`context7`** to research testing configurations (e.g. Playwright selectors, squirrelscan cli parameters) for the plan:
   - **For UI/UX Features**: Require automated visual browser testing using [webapp-testing SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/webapp-testing/SKILL.md) (Playwright screenshots and layout states) and design compliance checks using [web-design-guidelines SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/web-design-guidelines/SKILL.md) (WCAG contrast and accessibility).
   - **For Non-UI/UX Features**: Require functional browser automation using [webapp-testing SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/webapp-testing/SKILL.md) (Playwright integration scripts testing authentication redirects, cookie lifecycle, session storage, form mutations, console exceptions) and performance/SEO health audits using [audit-website SKILL.md](file:///C:/Users/nadief/.gemini/config/skills/audit-website/SKILL.md) (squirrel CLI checking speed, redirects, caching, and link integrity).
4. Save the generated PRD to the project path: `docs/ways-of-work/plan/{epic-name}/{feature-name}/prd.md`.
