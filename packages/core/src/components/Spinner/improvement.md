# Improvement Notes

- Severity: Minor
  Location: `packages/core/src/components/Spinner/spinner.css.ts`
  Problem: The spinner animation is smooth, but the component exposes only a single motion treatment without size or semantic guidance.
  Why it matters: Loading indicators should scale with the surrounding content and remain understandable when used alongside text.
  Recommended improvement: Add size variants and document how to pair the spinner with accessible loading text.
