# Improvement Notes

- Severity: Minor
  Location: `packages/core/src/components/InputGroup/input-group.css.ts`
  Problem: The group wrapper is clean, but the nested affordances can feel crowded when multiple adornments are present.
  Why it matters: Grouped inputs need clear boundaries so start/end actions do not read as part of the same hit target.
  Recommended improvement: Add guidance for spacing between adornments and the field content so teams do not overpack complex inputs.
