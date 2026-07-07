# Improvement Notes

- Severity: Suggestion
  Location: `packages/core/src/components/Separator/separator.css.ts`
  Problem: The separator is clean, but the default strong tone can be visually heavier than necessary in dense layouts.
  Why it matters: Separators should support hierarchy, not compete with it; overly strong rules can make surfaces feel more divided than composed.
  Recommended improvement: Prefer the subtle tone in examples and reserve the strong tone for true section breaks or grouped controls.
