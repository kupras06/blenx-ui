# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/NumberField/number-field.tsx`
  Problem: NumberField inherits the same compact field treatment as text inputs, but numeric entry often benefits from a little more breathing room and clearer guidance.
  Why it matters: Numbers are easy to mistype; if the field looks cramped, users are more likely to overlook min/max/step constraints.
  Recommended improvement: Use the shared field stack, but make the numeric variant slightly roomier and document how to surface range constraints.
