# Improvement Notes

- Severity: Minor
  Location: `packages/core/src/components/Accordion/accordion.css.ts`
  Problem: The trigger and panel treatment is a little flat, so expanded sections do not read as a strong hierarchy change.
  Why it matters: Accordion is often used to organize dense content; weak state contrast makes that organization harder to scan.
  Recommended improvement: Add a slightly stronger active background, more vertical breathing room, and a clearer focus/pressed state language.
