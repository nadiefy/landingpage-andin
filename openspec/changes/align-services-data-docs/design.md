## Context

The current component renders three statically configured image cards and an animated heading highlight. The design document still describes an earlier video-background and two-column concept.

## Goals / Non-Goals

**Goals:**

- Make the design documentation describe the implementation that users see today.
- Keep the change dependency-free and easy to roll back.

**Non-Goals:**

- Do not add video assets, parallax, CMS integration, props, localization, or new animation behavior.
- Do not refactor service data or edit application code.
- Do not redesign the card layout or rewrite service copy.

## Decisions

- **Preserve the three-column image-card layout.** It is the current shipped behavior and requires no asset migration. Reintroducing video would expand scope and add performance, loading, and accessibility decisions.
- **Document video as deferred.** The existing video design remains useful as a future direction, but must not be presented as the current implementation.
- **Leave animation logic unchanged.** The heading replay behavior is already part of the current interaction and is outside this alignment change.

## Risks / Trade-offs

- **[Risk] Documentation may drift again after future visual changes.** → Mitigation: keep the design section focused on observable behavior and assets rather than speculative implementation.

## Migration Plan

1. Update the Services section in the design document.
2. Review the rendered section only if the user wants visual verification; no code verification is required.

Rollback reverts the documentation edit; no persisted data or API migration is involved.
