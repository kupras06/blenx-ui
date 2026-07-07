# Improvement Notes

- Severity: Minor
  Location: `packages/core/src/components/Splitter/splitter.css.ts`
  Problem: The splitter is functional, but its handle affordance is easy to underestimate in the UI.
  Why it matters: Resizable panels depend on a handle that feels discoverable, otherwise the interaction is invisible until discovered by accident.
  Recommended improvement: Strengthen the hover/focus state and make the handle appear slightly more tactile.
