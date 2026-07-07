# Improvement Notes

- Severity: Major
  Location: `packages/core/src/components/Menu/menu.css.ts`
  Problem: Menu items are responsive and usable, but the overall density is high and the destructive treatment is easy to miss in long menus.
  Why it matters: Menus rely on quick recognition and error prevention; if dangerous actions blend into the list, the affordance is weaker.
  Recommended improvement: Give menu rows a touch more vertical space, strengthen destructive styling, and keep keyboard focus visibly distinct from hover.
