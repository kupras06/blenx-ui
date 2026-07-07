# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/SegmentedControl/segmented-control.tsx`
  Problem: SegmentedControl sits between tabs and toggles, but the current composition can blur that distinction if the selected state is not strong enough.
  Why it matters: Segmented controls need a very clear active segment so users understand this is a single-choice filter, not navigation.
  Recommended improvement: Use stronger selected contrast and make sure the segments keep equal sizing and rhythm across breakpoints.
