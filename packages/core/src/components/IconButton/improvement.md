# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/IconButton/icon-button.css.ts`
  Problem: IconButton inherits the compact button model without a stronger minimum target size.
  Why it matters: Icon-only controls are often small, but they still need to be easy to tap and obvious on hover/focus.
  Recommended improvement: Set a more generous minimum square hit area and make sure the focus ring is as legible as the button variants that carry text.
