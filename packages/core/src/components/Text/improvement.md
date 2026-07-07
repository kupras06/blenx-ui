# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Text/text.css.ts`
  Problem: The typography scale is strong, but the smaller body and caption steps become very compact very quickly.
  Why it matters: A library-wide text scale needs to stay legible in forms, metadata, and dense UIs without losing hierarchy.
  Recommended improvement: Consider softening the smallest steps and document where each size should be used so teams do not over-compress copy.
