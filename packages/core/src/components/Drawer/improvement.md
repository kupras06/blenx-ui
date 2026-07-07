# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Drawer/drawer.tsx`
  Problem: Drawer is very capable, but the large surface area of positions, variants, bars, and embedded controls makes the visual language easy to fragment.
  Why it matters: Drawers should feel like one family even when their content changes, otherwise navigation and editing flows lose coherence.
  Recommended improvement: Reduce the number of competing variant combinations in docs/examples and emphasize one canonical spacing/motion pattern for each position.
