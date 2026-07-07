# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Slider/slider.css.ts`
  Problem: Slider controls often need a stronger affordance than this family currently suggests, especially around thumb size and track contrast.
  Why it matters: A slider is hard to parse if the thumb is too small or the track does not communicate the active range clearly.
  Recommended improvement: Make the thumb easier to acquire and ensure the active track has enough contrast in both light and dark themes.
