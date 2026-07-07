# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/AlertDialog/alert-dialog.tsx`
  Problem: The dialog pattern is solid, but the default mobile bottom-stick behavior and close affordance make the surface feel more utility-driven than confirmational.
  Why it matters: Alert dialogs should feel unmistakably modal and high-stakes; any ambiguity weakens the decision moment.
  Recommended improvement: Tighten the width/height defaults, make the confirm/cancel footer more prominent, and ensure the destructive action is visually dominant.
