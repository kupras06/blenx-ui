# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Table/table.css.ts`
  Problem: The table is readable, but the uppercase-ish header treatment and compact rows make it feel more data-tool than product-ready table.
  Why it matters: Tables often carry the heaviest content density in the system; if the rhythm is too tight, scanning becomes tiring.
  Recommended improvement: Relax row spacing slightly, soften the header emphasis, and add guidance for when hover/selection states should be used.
