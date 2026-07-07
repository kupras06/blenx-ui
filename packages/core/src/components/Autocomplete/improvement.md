# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Autocomplete/autocomplete.css.ts`
  Problem: The input group and popup are visually dense, and the command-like items rely on fairly small type and padding.
  Why it matters: Autocomplete is one of the most interaction-heavy controls in the library, so density and state clarity have a big accessibility impact.
  Recommended improvement: Increase item height, make the active/highlighted state more obvious, and keep the clear/trigger affordances from competing with the text field.
