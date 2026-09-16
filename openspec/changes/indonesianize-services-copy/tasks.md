## 1. Copy Translation

- [x] 1.1 Translate section label "Our Capabilities" to Bahasa Indonesia; verify ≤6 words and formal register.
- [x] 1.2 Translate section heading "Services built for every journey" to Bahasa Indonesia; verify ≤8 words and max 2 lines at desktop.
- [x] 1.3 Translate card titles ("Flexible scheduling", "Chauffeur services", "Continuous support") to Bahasa Indonesia; verify each ≤6 words and sub-header rules.
- [x] 1.4 Rewrite card descriptions in Bahasa Indonesia; verify each ≤25 words, active voice, zero slop phrases, zero em dashes.

## 2. Typography Check

- [x] 2.1 Add `text-wrap: pretty` to card description `<p>` class; verify no em-dash rendering issues.
- [x] 2.2 Verify heading `leading-none` remains as accepted deviation; record in audit notes if needed.

## 3. Verify

- [x] 3.1 Run lint/build and verify no regressions.
- [x] 3.2 Run `openspec validate indonesianize-services-copy --strict --no-interactive` and confirm all planning artifacts are valid.
