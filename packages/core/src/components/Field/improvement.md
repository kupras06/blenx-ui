# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Field/field.css.ts`
  Problem: Field labels, descriptions, and errors are readable, but the text scale is small enough that guidance can get lost in complex forms.
  Why it matters: Form copy carries intent and error recovery; if it is too visually light, users will miss the help they need.
  Recommended improvement: Increase description/error prominence slightly and document when to use Field versus a lighter inline helper pattern.
