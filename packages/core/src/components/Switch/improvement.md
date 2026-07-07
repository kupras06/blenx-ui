# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Switch/switch.css.ts`
  Problem: The switch is tidy, but the thumb and track are still compact enough that the control can read as small in dense forms.
  Why it matters: Switches are binary decisions; if they are too subtle, users may not realize they are interactive.
  Recommended improvement: Increase the effective hit area and make the checked state contrast a little stronger against the surrounding surface.
