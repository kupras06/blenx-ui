# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Combobox/combobox.css.ts`
  Problem: The combobox stack is feature-rich, but the popup and item density are tuned very tightly, which makes large datasets feel compressed.
  Why it matters: Comboboxes need to support scanning, selection, and keyboard movement all at once; low spacing increases the chance of selection errors.
  Recommended improvement: Expand row height slightly, strengthen the highlighted/selected distinction, and keep the clear/trigger buttons from crowding the text field.
