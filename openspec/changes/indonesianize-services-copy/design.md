## Context

The current Services section uses English copy throughout. The brand is a premium car rental service targeting Indonesian corporate and individual clients. The tone should be formal but not stiff — polite Bahasa Indonesia that works for both audiences.

## Goals / Non-Goals

**Goals:**

- Translate all Services copy into Bahasa Indonesia.
- Maintain a formal-but-approachable register.
- Apply copywriting constraints: short paragraphs, active voice, no filler.
- Apply typography guidance: ensure text-wrap properties match skill recommendations for the Indonesian text lengths.

**Non-Goals:**

- Do not change fonts, layout, animation, or other components.
- Do not translate the rest of the landing page (that is a future change).
- Do not alter image assets or visual design.

## Decisions

- **Register: formal-but-warm.** Use polite imperatives and formal vocabulary without corporate jargon. Avoid stiff constructions like "Diharapkan dapat" or "Sehubungan dengan".
- **Sentence structure: short, active voice.** Follow `stop-slop` rules — no passive voice, no em dashes, varied rhythm.
- **Card descriptions: ≤25 words.** Follow `copywriting` rule for body paragraphs. Trim English filler verbs like "seamless", "elevate", "empower".
- **Typography: add `text-wrap: pretty` to card descriptions.** At current word count, Indonesian text may produce widows; the skill recommends this property for wrapped paragraphs.
- **Heading `leading-none` retained.** User confirmed preference for current heading treatment. Recorded as accepted deviation.

## Risks / Trade-offs

- **[Risk] Translation may feel unnatural or stiff.** → Mitigation: read aloud test and `stop-slop` scoring during implementation.
- **[Risk] Shorter copy may lose detail the client values.** → Mitigation: preserve the three core benefits per card within the 25-word cap.

## Migration Plan

1. Update string values in `components/Services.tsx`.
2. Add `text-wrap: pretty` class to card description `<p>` if not already present.
3. Run lint/build to verify no regressions.

Rollback reverts the string changes; no persisted data is involved.
