## Why

`Services.tsx` diverges from `docs/andin-design/design.md`: the document describes a video-background, two-column section, while the shipped component uses three image cards in a grid.

## What Changes

- Update the design document to describe the shipped three-card image layout and its current animation behavior.
- Mark the video-background concept as deferred rather than current behavior.
- Keep the existing visual layout, copy, assets, and user-visible interaction unchanged.
- Make no application-code changes.

## Capabilities

### New Capabilities

None. This change does not introduce new user-visible behavior.

### Modified Capabilities

None. The current Services behavior remains unchanged; this change aligns documentation and source organization only.

## Impact

- `docs/andin-design/design.md`: corrected Services description.
- No new dependencies, APIs, or breaking changes.
