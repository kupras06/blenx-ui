# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Input/input.css.ts`
  Problem: The input shell is polished, but the invalid focus treatment and overall small text scale make form states feel tighter than they should.
  Why it matters: Inputs are the most common form primitive; if their states are subtle, the rest of the form system inherits that weakness.
  Recommended improvement: Keep the current structure, but make the error/focus ring a bit more explicit and verify the small size variant still meets touch comfort.
