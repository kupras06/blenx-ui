# Improvement Notes

- Severity: Minor
  Location: `packages/core/src/components/Breadcrumbs/breadcrumbs.css.ts`
  Problem: Breadcrumbs are compact, but the spacing and font sizing make them feel slightly utility-like instead of navigational.
  Why it matters: Breadcrumbs should reinforce location and hierarchy at a glance, especially in dense product surfaces.
  Recommended improvement: Increase click target size a little and strengthen the current-page treatment so the trail reads more clearly.
