# Improvement Notes

- Severity: Suggestion
  Location: `packages/core/src/components/Grid/grid.css.ts`
  Problem: Grid provides span helpers, but it does not guide teams toward a small set of canonical responsive layouts.
  Why it matters: Layout APIs are easier to adopt when they hint at good defaults instead of only exposing raw composition power.
  Recommended improvement: Add a few grid recipes or examples that show common card, sidebar, and form layouts at the correct breakpoints.
