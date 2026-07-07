# Improvement Notes

- Severity: Minor
  Location: `packages/core/src/components/Avatar/avatar.css.ts`
  Problem: The fallback initials are very small and the component leans heavily on color rather than structure to read as a person indicator.
  Why it matters: Avatars often appear in lists and cards where rapid identity scanning matters; tiny fallback text reduces usefulness.
  Recommended improvement: Raise the fallback text size a bit and make sure the border or background contrast stays legible across light and dark themes.
