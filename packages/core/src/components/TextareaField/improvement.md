# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/TextareaField/textarea-field.tsx`
  Problem: TextareaField inherits the same small helper and error hierarchy as the rest of the field stack, which makes long-form input guidance feel understated.
  Why it matters: Textarea fields usually carry the most explanatory copy, so the support text needs a little more presence than a single-line field.
  Recommended improvement: Increase vertical rhythm around the label, textarea, and helper/error copy so the group reads as one comfortable writing surface.
