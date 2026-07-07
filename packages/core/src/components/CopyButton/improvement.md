# Improvement Notes

- Severity: Minor
  Location: `packages/core/src/components/CopyButton/copy-button.tsx`
  Problem: The copied state feedback is helpful, but the control still looks like a generic icon button with a transient color change.
  Why it matters: Copy actions are tiny but important; users need a clear confirmation that the clipboard action succeeded.
  Recommended improvement: Preserve the icon-button base, but consider a more explicit success state and make the tooltip/title copy more discoverable.
