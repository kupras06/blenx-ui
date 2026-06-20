---
title: "Limitations"
description: "Blenx does not solve every problem. This guide covers what the library intentionally avoids, where other tools may serve you better, and the tradeoffs you accept by using StyleX and the registry model."
category: "Advanced"
order: 8
keywords:
  - limitations
  - tradeoffs
  - StyleX
  - animations
  - mobile
  - registry
  - pre-1.0
  - template literals
status: "stable"
navigation:
  group: guides
  order: 8
---

## What Blenx Intentionally Does Not Solve

Blenx is a UI component library styled with StyleX. It is not an animation framework, a routing library, a data-fetching client, or a state management solution. These boundaries are deliberate.

**Animations.** Blenx components ship with minimal transitions (opacity fades for overlays, height transitions for accordions). Complex, choreographed animations are outside the scope. Use `framer-motion`, `react-spring`, or CSS `@keyframes` for animation work. Blenx components accept `className` and `style` props—wire up animation libraries at the call site.

**Routing.** There is no Blenx `<Link>` component. Use your framework's router (Next.js `<Link>`, React Router `<Link>`, TanStack Router `<Link>`). Blenx `Button` accepts an `as` prop for polymorphic rendering—pass your router's link component to render a styled link.

**Data fetching.** Blenx does not provide `useQuery`, `useMutation`, or any data-layer abstraction. Use React Query, SWR, Apollo, or your framework's data fetching. Blenx components render the data you provide; they do not fetch it.

## When Another Solution May Be More Appropriate

**Fully custom, brand-first designs.** If your application requires pixel-perfect, art-directed layouts that do not follow standard interface patterns, Blenx primitives will feel constraining. You will spend energy overriding defaults rather than building from scratch. Consider a bespoke StyleX setup without registry components, or a different styling approach entirely.

**Heavily animated or interactive UIs.** Blenx's composition model and StyleX's build-time compilation are optimized for static and moderately dynamic UIs. If your application is a design tool, a game, or a data visualization with thousands of animated DOM elements, the component abstraction adds overhead that may not be justified. Use primitives (Box) directly or drop to raw DOM.

**Projects without StyleX build plugin support.** If your bundler, framework, or deployment platform does not support the StyleX plugin, Blenx components will not render styled output. This is a hard requirement. Check that your toolchain supports `@stylexjs/babel-plugin` or `@stylexjs/rollup-plugin` before adopting Blenx.

## StyleX Limitations

StyleX is not a general-purpose CSS engine. It makes deliberate tradeoffs that affect how you write styles.

**Build-time only, no runtime.** StyleX compiles all styles at build time. You cannot dynamically construct a style object from user input or API response and have it compile to a class. Dynamic values must use CSS custom properties (via `stylex.defineVars()`) or inline `style` props.

**No dynamic class generation.** StyleX does not support concatenating class names from strings (`className={condition ? 'flex' : 'grid'}`). All class names are determined at build time from static `stylex.create()` calls. Conditional styles must use the `stylex.props(styles.base, condition && styles.variant)` pattern.

**Learning curve.** Developers accustomed to Tailwind utility classes or styled-components template literals find StyleX's object syntax unfamiliar. Property names follow CSS-in-JS conventions (camelCase, commas instead of semicolons). New team members need ramp-up time.

**No `@apply` or style reuse directive.** StyleX encourages composition through merge, not inheritance. You cannot create a style "mixin" and apply it to multiple components. Share styles by extracting them into a shared `stylex.create()` object and importing it where needed.

## Registry Limitations

**Build step required.** Registry installation copies files into your project. Those files contain TypeScript and StyleX code that must be compiled. There is no pre-compiled CSS file to link in your HTML head. Every Blenx installation requires a build pipeline.

**No CDN delivery.** Because components are source files, there is no Blenx CDN URL to drop into a static HTML page. Blenx is designed for projects with build tooling, not for traditional server-rendered pages or static site generators that lack a build step.

**Monorepo required for development.** Contributing to Blenx or running the registry locally requires a monorepo setup with the registry server and the CLI. Single-package projects cannot develop components against the registry—they must install from a published registry URL.

**No automatic upgrades.** Registry installations are snapshots. Upstream fixes do not flow into your project unless you manually diff and merge. This is a feature for customization-minded teams and a burden for teams that prefer "set and forget" dependency management.

## Primitive-First Limitations

**More imports.** A page composed of Blenx primitives imports `Box`, `Stack`, `Grid`, `Text`, `Surface`, and `Container` across its component tree. Compare to a single `<Card>` import from a monolithic library. The import overhead is negligible for bundlers with tree-shaking, but the file-level verbosity is real.

**Verbose call sites.** Composing a `Card` from primitives takes 7–10 lines. A `<Card>` component from a monolithic library takes 1 line. The composition approach is more flexible and more explicit, and it is also more code in your source files.

**No short-form syntax.** Blenx does not provide `<HFlex>` as an alias for `<HStack>` or `<VFlex>` for `<VStack>>.` Every primitive uses its full name. This is intentional—abbreviations obscure meaning for new readers—but it adds characters to every usage.

## Versioning Maturity

Blenx is pre-1.0 software. Breaking changes are possible between minor versions as the API stabilizes. The registry model mitigates the impact (your installed copies do not auto-update), but the upstream API may shift in ways that require manual migration.

Key areas of potential change:

- Contract variable names and organization
- Component prop naming and type signatures
- Registry manifest schema
- CLI command naming

Each breaking change is documented in a migration guide and the registry supports version pinning. You are never forced to update, but staying current may require effort.

## Mobile Considerations

Blenx is not mobile-first. The default themes and components are designed for desktop-width viewports with responsive adjustments for mobile. The `Stack`, `Grid`, and `Container` primitives accept responsive values, but you must provide the breakpoint definitions.

If your primary audience is mobile users, or if you are building a mobile-first web application, evaluate whether Blenx's desktop-oriented defaults save you time or add overhead. The primitives are responsive—they do not prevent mobile-first design—but they are not optimized for it out of the box.

## Template Literal Restrictions

StyleX does not support template literals inside `stylex.create()` style values. The following does not work:

```tsx
// Does not work
const styles = stylex.create({
  root: { color: `rgb(${r}, ${g}, ${b})` },
});
```

Use `stylex.defineVars()` and CSS custom properties for values that must be dynamic, or compute the value statically when it is known at build time. This is a hard limitation of StyleX's build-time compilation model.

## Being Transparent

Every tool makes tradeoffs. Blenx optimizes for consistency, accessibility, performance, and maintainability. It trades automatic updates, runtime flexibility, and mobile-first defaults to achieve these goals. If those tradeoffs align with your project's constraints, Blenx will serve you well. If they do not, the honesty of this documentation should help you decide before you invest in the tooling.

Choose tools based on your actual constraints, not on what is popular or new. Blenx is unapologetically opinionated about its tradeoffs, and that opinion is not right for every project.
