# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Badge/badge.css.ts`
  Problem: Badge support is narrower than the rest of the semantic color system, so some statuses cannot be expressed consistently.
  Why it matters: A design system badge should cover the same semantic vocabulary as the library around it, otherwise teams invent one-off styles.
  Recommended improvement: Add the missing warning/info/mono variants or explicitly document why the badge vocabulary is intentionally smaller.
