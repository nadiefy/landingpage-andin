## Context

Services and Fleet already share the same section header pattern: label `mb-6`, heading `text-4xl md:text-5xl lg:text-5xl font-display font-medium tracking-tighter leading-none`. About currently uses `mb-8`, `lg:text-6xl`, `leading-tight`, no tracking, a forced `<br />`, and English copy.

## Goals / Non-Goals

**Goals:**

- Make About heading scale and rhythm visually consistent with Services/Fleet.
- Add the same highlight background treatment around a chosen heading phrase.
- Translate and rewrite the label, heading, and two body paragraphs in natural Bahasa Indonesia.
- Keep the change minimal and confined to About content and header typography.

**Non-Goals:**

- Do not rework About layout, images, or scroll behavior.
- Do not import the Services header into a shared component in this change.
- Do not change fonts, colors, or global type scale tokens.

## Decisions

- **Use formal-but-warm Indonesian.** The copy must suit corporate and individual clients without sounding stiff, promotional, or generic.
- **Lead with the client benefit.** Keep each body paragraph under 25 words where practical, use active voice, and remove vague filler phrases.
- **Keep heading concise.** Rewrite the heading to a clear Indonesian benefit statement, ideally within eight words and two desktop lines. The highlighted phrase must remain short enough to wrap cleanly.
- **Match heading size and tracking exactly.** Use `text-4xl md:text-5xl lg:text-5xl` plus `tracking-tighter`.
- **Keep `leading-tight` instead of `leading-none`.** About heading remains a two-part phrase; `leading-tight` preserves readability while still aligning the scale.
- **Add highlight animation only to the second phrase.** This mirrors how Services and Fleet emphasize a short concluding phrase, without duplicating their full layout.
- **Remove the hardcoded `<br />`.** Let responsive wrapping decide the break point so the heading does not break awkwardly across viewports.
- **Use `text-base md:text-lg` for About body text.** Services card copy is `text-sm`, but that is a compact overlay context. About paragraphs are primary long-form text, so the `better-typography` 16px body floor applies. `max-w-prose` keeps the measure within the recommended 60–75 character range.

## Implementation Skill Guidance

- Apply `better-typography` for the heading/body type treatment, including `tracking-tighter`, `leading-tight`, and `max-w-prose`.
- Apply `frontend-design` for visual consistency of the Services/Fleet-style section header and highlight animation.
- Apply `copywriting` for the Indonesian value proposition, benefit-first wording, concise paragraphs, and tone.
- Apply `stop-slop` for active voice, specificity, rhythm, and removal of filler or AI-like phrasing.

## Risks / Trade-offs

- **[Risk] About heading line break shifts at some viewports.** → Mitigation: keep the phrase short enough to wrap cleanly in two responsive lines.
- **[Risk] Highlight treatment changes brand tone slightly.** → Mitigation: scope the highlight to one phrase and keep the rest unchanged.

## Migration Plan

1. Rewrite the About copy in Bahasa Indonesia.
2. Update `About.tsx` label, heading, and body text classes.
3. Add `useState` + `useEffect` highlight replay logic matching Services/Fleet anchor pattern.
4. Review the rendered section in preview at mobile and desktop widths.

Rollback removes the new classes/logic and restores the previous heading markup.
