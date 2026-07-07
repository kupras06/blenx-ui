# Improvement Notes

- Severity: Minor
  Location: `packages/core/src/components/CloseButton/close-button.tsx`
  Problem: The close affordance is visually clear, but it inherits the icon-button compactness without a stronger semantic cue that this is a dismiss action.
  Why it matters: Close controls appear in high-pressure contexts like dialogs and drawers, so they should read as obvious and easy to acquire.
  Recommended improvement: Keep the icon size, but reinforce the button shape and labeling guidance so consumers do not under-size it in overlays.
