## 1. Rewrite About Copy

- [x] 1.1 Translate the section label into formal-but-warm Bahasa Indonesia; verify it remains concise and suitable for corporate and individual clients.
- [x] 1.2 Rewrite the heading into a clear Indonesian benefit statement; verify `copywriting` limits it to roughly eight words and two desktop lines.
- [x] 1.3 Rewrite both About paragraphs in Bahasa Indonesia; verify active voice, concrete wording, no filler or AI-like phrases, and no em dashes.

## 2. Normalize Header

- [x] 2.1 Change About label margin from `mb-8` to `mb-6` and verify spacing matches Services/Fleet.
- [x] 2.2 Change About heading to `text-4xl md:text-5xl lg:text-5xl font-display font-medium tracking-tighter` while keeping `leading-tight`.
- [x] 2.3 Remove the `<br />` from the About heading and confirm the Indonesian phrase wraps cleanly on common viewports.

## 3. Add Highlight Animation

- [x] 3.1 Add `useState` and `useEffect` for the About highlight key, including the same `#about` link/hash interaction pattern used by Services and Fleet.
- [x] 3.2 Wrap the second heading phrase in the same highlight wrapper structure and animation timing, then verify replay works from anchor navigation.

## 4. Normalize Body Text

- [x] 4.1 Update About body text to `text-base md:text-lg leading-relaxed max-w-prose` instead of `text-lg md:text-xl`; verify Indonesian paragraphs stay above the 16px long-form body floor and within a readable measure.

## 5. Verify

- [x] 5.1 Read the Indonesian copy aloud and score it against `copywriting` and `stop-slop` criteria; verify it sounds formal, natural, and specific.
- [x] 5.2 Run available lint/build checks and verify no regressions.
- [x] 5.3 Run `openspec validate normalize-about-heading --strict --no-interactive` and confirm all planning artifacts are valid.
