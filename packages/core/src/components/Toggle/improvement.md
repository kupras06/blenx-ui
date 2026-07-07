# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Toggle/toggle.css.ts`
  Problem: Toggle has a solid base, but the pressed state and size variants still feel a bit like button derivatives rather than a distinct control family.
  Why it matters: Toggle controls should read as stateful and persistent, not just as a button with a different fill.
  Recommended improvement: Strengthen the active/pressed contrast and document the palette behavior so toggles do not visually collapse into buttons.
