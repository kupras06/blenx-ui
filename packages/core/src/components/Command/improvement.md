# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Command/command.css.ts`
  Problem: The command palette is compact and functional, but the item list feels more like a listbox than a true command surface.
  Why it matters: Command palettes are often used for high-frequency actions, so discoverability and state clarity matter more than raw density.
  Recommended improvement: Give the list a little more vertical rhythm, add a stronger active item state, and make the empty/status rows feel more distinct from commands.
