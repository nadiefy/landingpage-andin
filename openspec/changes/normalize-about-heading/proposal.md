## Why

About section uses different label spacing, heading treatment, and English copy while Services and Fleet already have consistent headings and Indonesian copy, creating inconsistency in both typography and tone.

## What Changes

- Translate and rewrite all About copy in `components/About.tsx` into polite, natural Bahasa Indonesia for corporate and individual clients.
- Normalize label margin, heading size, tracking, and highlight animation treatment in `components/About.tsx` to match Services and Fleet.
- Normalize About body text for readability: `text-base md:text-lg`, `leading-relaxed`, and `max-w-prose`.
- Remove the manual `<br />` in the About heading so the line break is responsive rather than forced.
- Preserve existing About layout, images, font, and entrance animation.

## Capabilities

### New Capabilities

None. This is a content and visual polish-only change.

### Modified Capabilities

None.

## Impact

- `components/About.tsx`: Indonesian label, heading, body copy, and typography classes.
- No font, asset, layout structure, or dependency changes.

## Skill Guidance for Implementation

- `better-typography`: governs heading scale, tracking, line-height, wrap behavior, and body text size/measure.
- `frontend-design`: governs visual consistency of section headers and highlight treatment across Services, Fleet, and About.
- `copywriting`: governs value clarity, benefit-led headings, concise body copy, and formal-but-approachable register.
- `stop-slop`: governs active voice, specific wording, varied rhythm, and removal of filler or AI-like phrasing.
