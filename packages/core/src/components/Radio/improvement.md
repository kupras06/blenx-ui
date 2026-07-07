# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Radio/radio.css.ts`
  Problem: Radio controls are compact and crisp, but the hit area and breakpoint-dependent sizing are a bit tight for dense forms.
  Why it matters: Radio options need to be easy to distinguish and select, particularly when there are many adjacent choices.
  Recommended improvement: Keep the visual size, but enlarge the effective target and strengthen the selected ring so the state is easier to scan.
