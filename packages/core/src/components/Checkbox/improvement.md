# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Checkbox/checkbox.css.ts`
  Problem: The checkbox visual is crisp, but the control is close to the lower edge of comfortable touch sizing and changes size between breakpoints.
  Why it matters: Checkboxes need to be easy to hit and consistent to scan; size shifts can feel jittery in dense forms.
  Recommended improvement: Normalize the hit area, keep the visual square consistent across breakpoints, and make the checked/indeterminate states a touch bolder.
