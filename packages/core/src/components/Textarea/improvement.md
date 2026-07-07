# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Textarea/textarea.css.ts`
  Problem: Textarea looks polished, but the non-resizable shell and tight sizing make longer writing tasks feel constrained.
  Why it matters: Text areas are often used for the most verbose input in the system, so comfort matters more than compactness.
  Recommended improvement: Allow a visible resize affordance or add a stronger helper pattern so long-form entry feels less boxed in.
