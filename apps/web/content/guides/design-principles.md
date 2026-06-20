---
title: "Design Principles"
description: "The five principles that guide every Blenx component: consistency, accessibility, composition, reusability, performance, and maintainability."
category: "Advanced"
order: 7
keywords:
  - design principles
  - consistency
  - accessibility
  - composition
  - reusability
  - performance
  - maintainability
  - tradeoffs
status: "stable"
---

## Consistency

Every Blenx component follows the same structural patterns. Props follow the same naming conventions. Styles use the same tokens. Layout uses the same primitives. A developer who understands `Button` can understand `Dialog`, `Input`, and `Select` without reading documentation.

This consistency is enforced at the code level. Components are not built in isolation—they reference shared primitives, shared tokens, and shared patterns. The `Text` primitive is used by every component that displays text. The `Surface` primitive is used by every component with a background. There is no special-casing for visual style.

The tradeoff: consistency can feel restrictive. If a specific page calls for a unique layout that deviates from the primitive model, the component system does not bend. You step outside the system and build custom. This is by design. The system is optimized for the 90% of UI that benefits from consistency. The 10% that does not should be custom, not force-fitted.

## Accessibility Built-In

Accessibility is not a feature branch or a post-launch audit. Every Blenx component ships with keyboard support, focus management, semantic HTML, and ARIA attributes appropriate to its role.

The dialog component traps focus. The tab component manages `aria-selected`. The button component renders a `<button>` element (not a `<div>` with `onClick`). These decisions are not configurable—they are the contract of the component.

What is configurable is the visual presentation, the content, and the behavior that is specific to your application. Blenx handles the mechanical accessibility work so you can focus on content accessibility: labels, descriptions, page structure, and language.

The tradeoff: components enforce certain accessibility patterns even when you do not want them. If you need a non-standard interaction pattern that conflicts with built-in keyboard handling, you may need to build from primitives rather than using the composite component. Blenx prioritizes correct defaults over flexible escape hatches.

## Composition Over Monoliths

Blenx builds small, focused components and composes them into larger ones. Primitives compose into patterns. Patterns compose into pages. Every level of composition is explicit and visible in the JSX.

This principle avoids the "one component to rule them all" problem. A monolithic `DataTable` component with fifty props for sorting, filtering, pagination, column visibility, row selection, and inline editing is impossible to maintain and impossible to customize. Blenx would represent this as `Grid` + `Select` + `Button` + `Input` + custom logic composed in your page component.

The tradeoff: more JSX at the usage site. Composing primitives into a data table means writing more code than mounting a monolithic data table component. You trade brevity for clarity and flexibility. In practice, the composition wins—your data table is not limited by what the monolithic component's props expose, and you never fight a component that insists on rendering thead/tbody in a way you cannot override.

## Reusability

Every Blenx component works in any context. A Button does not assume it lives inside a form. A Dialog does not assume it is the only overlay on the page. Components do not import global styles, do not depend on ambient CSS, and do not require a specific parent component to render correctly.

This is achieved through strict isolation: every component imports only its own dependencies (primitives, tokens, hooks) and renders with StyleX-scoped classes. There is no CSS cascade to rely on and no global style reset requirement.

The tradeoff: components include more explicit CSS than equivalent components in a traditional CSS framework. A Blenx Button sets `display`, `alignItems`, `justifyContent`, `gap`, `padding`, `borderRadius`, `fontSize`, `fontWeight`, `lineHeight`, `cursor`, `border`, `backgroundColor`, and `color`. A Bootstrap button sets two of these and inherits the rest from global styles. Blenx forgoes inheritance for reliability. Every component renders identically regardless of where it is placed.

## Performance

StyleX compiles styles to atomic CSS classes at build time. The runtime cost of a Blenx component is: function call overhead from `stylex.props()`, React reconciliation, and DOM mutation. There is no style injection, no CSS parsing at runtime, no dynamic class name generation.

Tree-shaking works because components are individual source files. Your bundler includes only the components you import—there is no barrel file that forces the entire library into your bundle. The registry model reinforces this: you install exactly the components you use.

The tradeoff: StyleX requires a build plugin. If your project uses a bundler without a StyleX plugin (or if you cannot configure one), you cannot use Blenx. There is no CDN build, no UMD bundle, no runtime-only option. The performance advantage is real but conditional on build tooling.

## Maintainability

Colocated styles, explicit dependencies, and small component surfaces make Blenx components maintainable over time. You can read a component file and understand its complete visual rendering without opening additional files. You can delete a component and know no hidden styles remain.

The registry model keeps component code in your repository, under your version control, alongside your application code. A `git log -- button.tsx` shows every change your team has made—there is no npm diff between versions to interpret.

The tradeoff: owning the source means maintaining the source. When Blenx upstream releases a security fix or a new feature for a component you use, you must manually diff and merge. There is no `npm update` shortcut. Teams that prefer automated dependency updates should use traditional npm packages for non-UI dependencies and reserve the registry model for visual components where customization matters more than convenience.
