# Improvement Notes

- Severity: Minor
  Location: `packages/core/src/components/Popover/popover.css.ts`
  Problem: Popover is visually well-formed, but the popup is relatively dense and has limited visual separation between content and chrome.
  Why it matters: Popovers should feel lightweight and contextual; too much chrome makes them read like mini-dialogs.
  Recommended improvement: Slightly relax padding and make the arrow/edge treatment more discreet so the content remains the visual focus.
