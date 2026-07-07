# Improvement Notes

- Severity: Suggestion
  Location: `packages/core/src/components/Stack/stack.tsx`
  Problem: Stack is a helpful abstraction, but the fixed gap default can hide spacing intent from consumers.
  Why it matters: Spacing primitives work best when the semantic choices are visible, not silently baked in.
  Recommended improvement: Consider documenting when to override the default gap and when to choose a more explicit layout recipe instead.
