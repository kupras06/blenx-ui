# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Surface/surface.css.ts`
  Problem: Surface has a nice base, but the interactive treatment is mostly hover-focused and can feel too subtle for selected or pressed states.
  Why it matters: Surfaces are used everywhere, so the interaction language needs to be extremely consistent and obvious.
  Recommended improvement: Add a stronger selected/pressed state and make the interactive focus ring more visible across variants.
