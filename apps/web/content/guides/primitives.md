---
title: "Primitives"
description: "Blenx is built from a small set of layout and typography primitives. Learn what they are, how to compose them, and when to reach for something else."
category: "Guides"
order: 4
keywords:
  - primitives
  - Box
  - Stack
  - Grid
  - Container
  - Surface
  - Text
  - composition
  - layout
status: "stable"
navigation:
  group: guides
  order: 4
---

## What Primitives Are

Primitives are the smallest meaningful UI building blocks in Blenx. They are not components you "use" in the traditional sense—they are components that _everything else uses_. Every button, dialog, card, and form in Blenx is composed from this shared vocabulary:

- **Box** — generic container
- **Stack** (HStack, VStack) — one-dimensional layout
- **Grid** — two-dimensional layout
- **Container** — content width constraint
- **Surface** — themed visual container
- **Text** — typographic element

A component library with hundreds of components but only six layout primitives is a component library you can keep in your head. No surprise. No guessing how spacing works in a third-party component.

## Composition-First Design

Blenx rejects the monolithic component model. A monolithic `Card` component ships with baked-in padding, background, border radius, shadow, heading style, and content area. It looks right out of the box. It is also impossible to adapt without overriding styles or wrapping it in yet another layer of abstraction.

Blenx `Card` is not a component—it is a _pattern_ composed from primitives:

```tsx
<Surface padding="lg" radius="md">
  <VStack gap="sm">
    <Text as="h3" size="lg">
      Title
    </Text>
    <Text as="p" size="sm">
      Content goes here.
    </Text>
  </VStack>
</Surface>
```

This is more code than `<Card title="..." body="..." />`. It is also more expressive. You control the padding, the gap, the heading level, the text size—every dimension is explicit. The pattern composes in ways a monolithic card never can: replace `Surface` with a `Box` for a flat look, wrap the content in a `Grid`, or nest stacks for complex layouts.

The tradeoff is verbosity at the call site. Blenx believes this is the right trade. A few extra lines per usage is negligible; a library that cannot be adapted to real-world designs is a blocker.

## Box

Box renders a `<div>` with StyleX props. It is the escape hatch and the foundation. Use Box when no semantic element fits—containers, wrappers, spacers. Box accepts `stylex.props()` directly, so you can pass any StyleX styles without intermediation.

Box has no built-in styles. It is a blank canvas.

## Stack (HStack, VStack)

Stack is a flex container with opinionated defaults: `display: flex`, `alignItems: center`, and a configurable `gap`. HStack arranges children horizontally. VStack arranges them vertically.

```tsx
<HStack gap="md" align="center" wrap>
  <Button>Save</Button>
  <Button variant="ghost">Cancel</Button>
</HStack>
```

Use Stack instead of manual `display: flex` on a Box. It encodes the most common flex patterns—gap, alignment, wrapping, direction—into named props. This makes layout intent readable without scanning a style definition.

Stack accepts responsive values. `gap={{ base: 'sm', md: 'lg' }}` compiles to different gap values at breakpoints using the same StyleX media query mechanism.

## Grid

Grid is a CSS Grid wrapper with props for `columns`, `rows`, `gap`, and `alignment`. It renders a `<div>` with `display: grid`.

```tsx
<Grid columns={{ base: 1, md: 2, lg: 3 }} gap="md">
  {items.map((item) => (
    <Card key={item.id}>{item.content}</Card>
  ))}
</Grid>
```

The `columns` prop accepts a number (auto-fill) or a track string (e.g., `"1fr 2fr"`). Responsive column definitions are common—most page layouts shift from single-column on mobile to multi-column on desktop, and Grid handles this without media query boilerplate.

Grid does not polyfill subgrid. If you need subgrid, use a nested Grid or fall back to manual CSS via Box.

## Container

Container constrains content width with optional horizontal centering. It accepts a `maxWidth` prop:

```tsx
<Container maxWidth="xl">
  <PageContent />
</Container>
```

Container applies `max-width` and `margin-inline: auto`. It does not add padding—use Box or Surface for that. Container is a single-responsibility component for content width boundaries.

## Surface

Surface is Box with theme-aware background and border. It applies `backgroundColor: themeContract.bgSurface`, `borderColor: themeContract.borderBase`, and `borderRadius: themeContract.radiusMd` by default.

Use Surface for cards, sidebars, dropdowns—any visual container that needs to sit on top of the page background. The theme system handles light/dark contrast automatically.

Surface accepts `elevation` prop for shadow tiers (`sm`, `md`, `lg`) that map to `themeContract.shadow*`.

## Text

Text is the typography primitive. It renders a semantic HTML element (`p`, `h1`–`h6`, `span`, `label`) with theme-aware font size, weight, line height, and color.

```tsx
<Text as="h2" size="xl" weight="bold">
  Section Title
</Text>
<Text as="p" size="sm" color="muted">
  Supporting description.
</Text>
```

Text maps `size` values to the contract's type scale. Use `color="muted"` for secondary text—it resolves to `themeContract.fgMuted` and adapts to both themes.

## When to Compose vs Build Custom

Compose from primitives when your layout follows standard web patterns: cards, lists, forms, headers, footers. These account for 90% of UI work. Primitives keep them consistent and maintainable.

Build a custom component when the layout is genuinely novel or performance-critical. A drag-and-drop grid, a virtualized list, a canvas-based visualization—primitives are not designed for these. Use Box as your foundation and opt into direct DOM and StyleX control.

The boundary is pragmatic: if you can express the layout with `HStack`, `VStack`, `Grid`, and `Container`, do it. If you are fighting primitives to achieve a layout they do not support, stop fighting—build a Box with custom styles.
