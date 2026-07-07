# Improvement Notes

- Severity: Minor
  Location: `packages/core/src/components/Card/card.tsx`
  Problem: The card defaults are sensible, but every card inherits the same sunken surface and body padding, which can make higher-level sections feel visually repetitive.
  Why it matters: Cards often need to express nesting depth and importance; a single default can flatten the hierarchy across dashboards and content pages.
  Recommended improvement: Consider a slightly stronger distinction between passive and interactive cards, and document when to use each surface treatment.
