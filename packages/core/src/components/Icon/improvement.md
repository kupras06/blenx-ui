# Improvement Notes

- Severity: Suggestion
  Location: `packages/core/src/components/Icon/icon.css.ts`
  Problem: Icon is intentionally low-level, but its narrow defaults mean alignment and visual weight can drift between consumers.
  Why it matters: Icons are one of the easiest places for a design system to feel inconsistent if size and stroke rules are not clear.
  Recommended improvement: Document the canonical icon sizing and stroke expectations and show which components should prefer the shared icon wrapper.
