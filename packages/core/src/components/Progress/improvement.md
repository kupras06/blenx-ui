# Improvement Notes

- Severity: Minor
  Location: `packages/core/src/components/Progress/progress.css.ts`
  Problem: Progress is clean, but the track is quite thin and the value label is visually secondary to the bar itself.
  Why it matters: Progress indicators work best when the number and the bar reinforce each other, especially in status-heavy dashboards.
  Recommended improvement: Consider a slightly taller track or stronger label hierarchy for contexts where the exact value matters.
