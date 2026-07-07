# Improvement Notes

- Severity: Suggestion
  Location: `packages/core/src/components/Container/container.css.ts`
  Problem: Container exposes a wide range of widths, but the default centered behavior can make it hard to know which width is appropriate in a given view.
  Why it matters: Layout primitives work best when the defaults are obvious and the scale is easy to reason about.
  Recommended improvement: Document the intended breakpoints and common content widths more explicitly so teams choose consistent shells.
