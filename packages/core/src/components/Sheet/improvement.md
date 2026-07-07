# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Sheet/sheet.tsx`
  Problem: The sheet implementation is flexible, but the many sides and variants make it easy for consumers to produce inconsistent panel geometry.
  Why it matters: Sheets should feel like one movable surface family; too many equally valid treatments dilute that visual language.
  Recommended improvement: Document a canonical side/variant pairing for common use cases and keep the default motion and padding more tightly prescribed.
