# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/ToggleGroup/toggle-group.tsx`
  Problem: ToggleGroup is expressive, but the combination of orientation, variant, and size can produce a lot of subtly different surfaces.
  Why it matters: Grouped toggles need a very consistent visual system or they start to feel like separate components stitched together.
  Recommended improvement: Reduce the visual variability between orientations and reinforce the selected state so the group reads as one control.
