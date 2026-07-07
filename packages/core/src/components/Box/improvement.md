# Improvement Notes

- Severity: Suggestion
  Location: `packages/core/src/components/Box/box.tsx`
  Problem: Box is intentionally minimal, but that also means it can be overused as a styling escape hatch.
  Why it matters: Primitive escape hatches are helpful, yet they tend to accumulate inconsistent spacing and layout decisions over time.
  Recommended improvement: Keep the API lean, but provide stronger examples that steer teams toward semantic layout components first.
