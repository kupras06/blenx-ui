# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Select/select.css.ts`
  Problem: Select is robust, but the popup and row density are still a little tight for long lists, and the placeholder/focus language is easy to underemphasize.
  Why it matters: Select menus need fast scanability and unmistakable keyboard focus, especially in forms with many options.
  Recommended improvement: Increase row height slightly, keep the selected state more distinct, and make the placeholder styling clearer from the disabled state.
