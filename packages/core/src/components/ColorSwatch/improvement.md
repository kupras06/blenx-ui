# Improvement Notes

- Severity: Suggestion
  Location: `packages/core/src/components/ColorSwatch/color-swatch.tsx`
  Problem: ColorSwatch is useful, but it is purely visual and can disappear on similarly colored backgrounds.
  Why it matters: Swatches are often used in theme pickers and status previews, where contrast and discoverability matter even if the element is decorative.
  Recommended improvement: Add a subtle border or checker edge for low-contrast colors, and document how to pair the swatch with a text label.
