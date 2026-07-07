# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/TextField/text-field.tsx`
  Problem: TextField reuses the same compact helper and error stack as the rest of the field family, so the label, input, description, and error message can feel cramped in real forms.
  Why it matters: Text fields are one of the most common entry points in the system, and cramped guidance makes validation and helper text easier to miss.
  Recommended improvement: Give the field stack a little more vertical rhythm and slightly increase the prominence of helper and error copy so the control feels more comfortable to use.
