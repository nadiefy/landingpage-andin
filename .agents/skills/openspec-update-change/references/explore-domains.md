# OpenSpec Domain Routing Reference

Quick classification table for `openspec-explore` router. Each domain lists Primary skills (loaded as main lens), Supporting skills (supplementary context), and Verify skills (used before completion).

All skill names below resolve to skills actually installed under `~/.claude/skills/`. Skills the router cannot invoke (e.g. `grill-me`, which has `disable-model-invocation: true` and is user-only) are deliberately not listed — `grilling` is used instead, since it carries the same round-based interview behavior and IS model-invocable.

## UI
**Keywords:** button, form, layout, component, page, screen, modal, dialog, styling, CSS, responsive, mobile, desktop, visual, appearance, color, typography, icon, animation, skeleton, loading state
**Primary** (pick one):
- `grilling` — round-based questioning to sharpen the idea (always-on)
- `frontend-design` — intentional visual direction
- `design-taste-frontend` — anti-template, audit-first
- `frontend-ui-ux-engineer` — interaction patterns, not just visuals
**Supporting:**
- `accessibility-audit` — inclusive by default
- `vercel-react-best-practices` — React/Next.js stack conventions
- `webapp-testing` — E2E coverage
- `better-ui` — polish details: radius, shadows, hit areas, micro-interactions
- `better-typography` — type scale, spacing, wrapping, truncation
- `better-colors` — color system, palette, measured contrast
- `better-layout` — grouping, alignment, reading order, breakpoints
**Verify:**
- `accessibility-audit` — a11y audit
- `webapp-testing` — visual/E2E regression
- `better-interface` — cross-discipline review across all `better-*` skills

**Routing examples:**
- "button too small on mobile" → `frontend-design` + `accessibility-audit`
- "modal not closing" → `frontend-ui-ux-engineer` + `vercel-react-best-practices`
- "page feels slow" → `vercel-react-best-practices` + `webapp-testing`
- "component feels off / needs polish" → `better-ui` + `better-interface`
- "typography looks wrong" → `better-typography` + `better-layout`
- "colors lack contrast" → `better-colors` + `accessibility-audit`

---

## UX
**Keywords:** user flow, journey, navigation, information architecture, usability, accessibility, WCAG, contrast, screen reader, keyboard navigation, interaction pattern, wireframe, user experience, confusion, friction, drop-off
**Primary** (pick one):
- `grilling` — round-based questioning (always-on)
- `frontend-ui-ux-engineer` — interaction and flow design
- `accessibility-audit` — inclusive by default
**Supporting:**
- `frontend-design` — visual direction for UX decisions
- `accessibility-audit` — WCAG compliance
- `webapp-testing` — user flow verification
- `better-writing` — UX copy: labels, errors, empty states, button text
- `better-accessibility` — Jakub's polish layer for keyboard, ARIA, focus, screen readers
**Verify:**
- `accessibility-audit` — accessibility audit
- `webapp-testing` — E2E flow testing

**Routing examples:**
- "users are confused by the navigation" → `frontend-ui-ux-engineer` + `accessibility-audit`
- "form is hard to fill out" → `frontend-ui-ux-engineer` + `frontend-design`
- "need WCAG compliance" → `accessibility-audit`
- "button labels are confusing" → `better-writing` + `better-accessibility`
- "copy feels robotic" → `better-writing` + `better-interface`

---

## DATABASE
**Keywords:** query, table, column, index, migration, schema, Supabase, PostgreSQL, RLS, row-level security, foreign key, constraint, performance, slow query, connection, pool, transaction
**Primary** (pick one):
- `grilling` — round-based questioning (always-on)
- `postgresql-optimization` — query/index tuning
- `sql-optimization` — general SQL performance
**Supporting:**
- `postgresql-code-review` — SQL/RLS review
- `sql-code-review` — schema/query review
- `domain-modeling` — entity modeling
**Verify:**
- `sql-code-review` — schema change safety

**Routing examples:**
- "query is slow" → `postgresql-optimization` + `postgresql-code-review`
- "RLS policy needed" → `postgresql-code-review` + `sql-code-review`
- "adding new table" → `domain-modeling` + `sql-code-review`

---

## CODEBASE
**Keywords:** architecture, refactor, structure, module, pattern, dependency, coupling, code quality, technical debt, naming, organization, directory, file structure, component hierarchy, separation of concerns
**Primary** (pick one):
- `grilling` — round-based questioning (always-on)
- `code-review` — structural quality
- `request-refactor-plan` — safe restructuring
**Supporting:**
- `architecture-blueprint-generator` — pattern selection
- `dependabot` — dependency health
- `codebase-design` — overall structure
**Verify:**
- `code-review` — final structural check

**Routing examples:**
- "this file is too big" → `request-refactor-plan` + `code-review`
- "circular dependency" → `architecture-blueprint-generator` + `dependabot`
- "need to split components" → `request-refactor-plan` + `code-review`

---

## API
**Keywords:** endpoint, REST, GraphQL, request, response, status code, authentication, rate limiting, webhook, API design, OpenAPI, schema, validation, serialization, error handling, pagination
**Primary** (pick one):
- `grilling` — round-based questioning (always-on)
- `openapi-to-application-code` — RESTful/OpenAPI design
- `typespec-create-api-plugin` — API contract authoring
**Supporting:**
- `security-review` — auth patterns
- `webapp-testing` — endpoint verification
- `openapi-to-application-code` — contract conformance
**Verify:**
- `webapp-testing` — endpoint E2E
- `openapi-to-application-code` — contract check

**Routing examples:**
- "new endpoint for users" → `openapi-to-application-code` + `security-review`
- "endpoint is slow" → `openapi-to-application-code` + `webapp-testing`
- "breaking change needed" → `typespec-create-api-plugin` + `openapi-to-application-code`

---

## SECURITY
**Keywords:** vulnerability, XSS, CSRF, SQL injection, authentication, authorization, secrets, tokens, CORS, CSP, security headers, OWASP, penetration test, incident, breach, encryption
**Primary** (pick one):
- `grilling` — round-based questioning (always-on)
- `security-review` — vulnerability assessment
- `threat-model-analyst` — threat modeling
**Supporting:**
- `secret-scanning` — secrets detection
- `dependabot` — vulnerable dependencies
- `agent-owasp-compliance` — agent/AI security patterns
**Verify:**
- `security-review` — automated/manual security review
- `secret-scanning` — secrets check

**Routing examples:**
- "user can access other users' data" → `security-review` + `threat-model-analyst`
- "need to rotate secrets" → `secret-scanning` + `security-review`
- "XSS in comment field" → `security-review` + `secret-scanning`

---

## DEBUGGING
**Keywords:** bug, error, crash, exception, broken, not working, failing, issue, problem, debug, diagnose, investigate, trace, stack trace, console error, regression
**Primary** (pick one):
- `grilling` — round-based questioning (always-on)
- `diagnosing-bugs` — structured investigation
- `code-review` — for regressions
**Supporting:**
- `tdd` — write a failing test first to reproduce
- `webapp-testing` — automated reproduction
- `appinsights-instrumentation` — observability
- `better-interface` — cross-discipline finding review
**Verify:**
- `webapp-testing` — regression coverage
- `tdd` — test-first verification
- `better-interface` — consolidated verdict on the fix

**Routing examples:**
- "app crashing on login" → `diagnosing-bugs` + `appinsights-instrumentation`
- "bug appeared after deploy" → `code-review` + `webapp-testing`
- "need better error messages" → `appinsights-instrumentation` + `diagnosing-bugs`
- "ui layout breaks on error" → `diagnosing-bugs` + `better-interface`

---

## TESTING
**Keywords:** test, unit test, integration test, E2E, playwright, vitest, jest, coverage, mocking, stub, assertion, test suite, CI, test runner, flaky test, test environment
**Primary** (pick one):
- `grilling` — round-based questioning (always-on)
- `webapp-testing` — E2E testing
- `tdd` — test-first methodology
**Supporting:**
- `tdd` — test design and mocking
- `github-actions-hardening` — test automation in CI
**Verify:**
- `webapp-testing` — coverage gaps
- `tdd` — test-driven verification

**Routing examples:**
- "need E2E for checkout" → `webapp-testing` + `tdd`
- "tests are slow" → `github-actions-hardening` + `webapp-testing`
- "flaky test failing randomly" → `webapp-testing` + `tdd`

---

## INFRASTRUCTURE
**Keywords:** deploy, Docker, CI/CD, GitHub Actions, Vercel, Netlify, hosting, server, environment, configuration, env vars, build, pipeline, container, orchestration, scaling, monitoring
**Primary** (pick one):
- `grilling` — round-based questioning (always-on)
- `github-actions-hardening` — pipeline design
- `azure-devops-cli` — Azure DevOps workflows
**Supporting:**
- `multi-stage-dockerfile` — container build patterns
- `import-infrastructure-as-code` — IaC patterns
- `appinsights-instrumentation` — observability setup
**Verify:**
- `azure-deployment-preflight` — deployment validation
- `security-review` — infrastructure security

**Routing examples:**
- "set up GitHub Actions" → `github-actions-hardening` + `azure-deployment-preflight`
- "Docker build failing" → `multi-stage-dockerfile` + `github-actions-hardening`
- "need auto-scaling" → `import-infrastructure-as-code` + `appinsights-instrumentation`

---

## DOCUMENTATION
**Keywords:** docs, README, API documentation, JSDoc, typedoc, storybook, changelog, contribution guide, onboarding, wiki, comments, documentation site, Docusaurus, VitePress
**Primary** (pick one):
- `grilling` — round-based questioning (always-on)
- `documentation-writer` — technical writing
- `create-readme` — README authoring
**Supporting:**
- `openapi-to-application-code` — API reference
- `conventional-commit` — changelog/release notes
- `create-llms` — LLM-friendly docs
**Verify:**
- `create-readme` — README quality
- `documentation-writer` — style check

**Routing examples:**
- "need API docs" → `openapi-to-application-code` + `documentation-writer`
- "README is outdated" → `create-readme` + `documentation-writer`
- "set up changelog" → `conventional-commit` + `documentation-writer`

---

## MOTION
**Keywords:** animation, transition, micro-interaction, gesture, scroll, parallax, hover, focus, keyframe, spring, easing, motion design, GSAP, framer-motion, CSS animation
**Primary** (pick one):
- `grilling` — round-based questioning (always-on)
- `gsap-framer-scroll-animation` — scroll/motion with GSAP/Framer
- `animation-vocabulary` — motion vocabulary and patterns
**Supporting:**
- `find-animation-opportunities` — where motion earns its place
- `improve-animations` — refine existing motion
- `review-animations` — motion review
- `better-ui` — visual polish and micro-interaction values
**Verify:**
- `improve-animations` — performance audit
- `accessibility-audit` — prefers-reduced-motion check

**Routing examples:**
- "page transition animation" → `gsap-framer-scroll-animation` + `accessibility-audit`
- "hover effect on button" → `animation-vocabulary` + `gsap-framer-scroll-animation`
- "scroll-triggered reveal" → `gsap-framer-scroll-animation` + `improve-animations`
- "hover state feels cheap" → `better-ui` + `animation-vocabulary`

---

## AGENT
**Keywords:** AI, LLM, Claude, GPT, prompt, completion, chatbot, agent, tool use, function calling, RAG, embedding, vector, semantic search, inference, streaming, token
**Primary** (pick one):
- `grilling` — round-based questioning (always-on)
- `agent-skill-stack` — agent architecture
- `agent-governance` — agent policy/guardrails
**Supporting:**
- `prompt-optimizer` — prompt tuning
- `pinecone-rag` — RAG pipeline
- `claude-api` — Claude integration
**Verify:**
- `agentic-eval` — agent quality testing
- `boost-prompt` — prompt validation

**Routing examples:**
- "build a chatbot" → `agent-skill-stack` + `prompt-optimizer`
- "RAG pipeline slow" → `pinecone-rag` + `claude-api`
- "agent giving wrong answers" → `agentic-eval` + `boost-prompt`

---

## Quick Reference: Skill Loading Rules

1. **Max 4 skills** loaded per invocation
2. **Primary** skills are loaded first (pick one unless multi-domain)
3. **Supporting** skills add context (pick 1-2 as needed)
4. **Verify** skills run before completion (pick one for quality gate)
5. **Always include** `security-review` when auth, permissions, secrets, or user data is involved
6. **Always include** `accessibility-audit` when WCAG or inclusive design is mentioned

## Multi-Domain Requests

When a request spans multiple domains:
1. Identify the **primary domain** (where the core problem lives)
2. Load that domain's Primary skill as main lens
3. Load 1-2 Supporting skills from secondary domains
4. Example: "login form is slow and inaccessible" → DATABASE (primary: `postgresql-optimization`) + UX (supporting: `accessibility-audit`)

## Phase-Specific Specialist Roles

Each opsx workflow uses specialist skills differently:
- **Explore**: Lens/thinking partner (challenge assumptions, explore alternatives)
- **Propose**: Content source (inform design.md and specs/)
- **Apply**: Execution constraint (enforce conventions during implementation)
- **Update**: Reconciliation guide (keep artifacts consistent)
- **Sync**: Domain language guide (align terminology and scenarios)
- **Archive**: Sign-off reviewer (verify domain requirements captured)

## Note on Jakub's interactive skills

`interface-review`, `variant`, `break`, and `explain-interface` all have `disable-model-invocation: true` in their frontmatter — the router cannot invoke them; the user triggers them directly via `/interface-review`, `/variant`, `/break`, `/explain-interface`. For automatic routing these are excluded from the tables above. `better-interface` is the model-invocable entry that runs the same cross-discipline review as `interface-review` under the hood.

## Note on `grill-me` vs `grilling`

`grill-me` has `disable-model-invocation: true` in its frontmatter — only the user can trigger it directly via `/grill-me`. For automatic routing, `grilling` is used: same round-based interview behavior, but the model can invoke it through the router. When the user types `/grill-me` directly, the wrapper still calls `grilling` under the hood, so behavior is identical.
