# Improvement Notes

- Severity: Suggestion
  Location: `packages/core/src/components/AspectRatio/aspect-ratio.tsx`
  Problem: The component is likely doing the right geometry work, but it lacks visible guidance on content fit and fallback behavior.
  Why it matters: Aspect-ratio wrappers are often used with images and media; without guidance, teams may get inconsistent cropping and letterboxing.
  Recommended improvement: Document the intended object-fit pattern and show a clear fallback state for unloaded or empty media.
