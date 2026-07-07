# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Button/button.css.ts`
  Problem: The button recipe has good variant coverage, but it lacks a standardized focus-visible treatment and uses a broad transition on the whole element.
  Why it matters: Buttons are the primary affordance in the system; if focus and pressed states are not unmistakable, accessibility and polish both suffer.
  Recommended improvement: Add a consistent focus ring, narrow the transition properties, and ensure the primary/secondary/ghost states all share one interaction grammar.
