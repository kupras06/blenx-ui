# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Dialog/dialog.tsx`
  Problem: The dialog defaults are polished, but the mobile bottom-stick behavior and the always-present close button can make simple dialogs feel heavier than necessary.
  Why it matters: Dialogs are a core interruption pattern; if the default size and motion feel overly utilitarian, the whole library feels less refined.
  Recommended improvement: Tune the default width and footer spacing, and keep the close control visible without competing with the primary action area.
