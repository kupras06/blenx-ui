---
navigation:
  group: components
  order: 7
---

## Overview

Box is the lowest-level layout primitive in Blenx. It renders a single DOM element with access to style props for padding, margin, display, and other common CSS properties through StyleX. Every other layout component — Grid, Container, Card — is composed on top of Box. Use Box when you need a generic container for spacing, alignment, or background styling without semantic meaning. It is the foundation for all custom layouts and the escape hatch when higher-level components do not fit your use case. Do not use Box when a semantic HTML element is more appropriate — prefer `section`, `nav`, `main`, or `article` for document structure. Box is intentionally generic and carries no semantic weight.

## Usage

Box renders a `div` by default but accepts an `as` prop to change the underlying element to any valid HTML tag. Style props are passed directly as props on the component — `padding="md"`, `marginBlockStart="lg"`, `display="flex"`, etc. The style prop system maps design tokens to CSS values, ensuring consistency with the theme. Box does not apply any default styles other than `box-sizing: border-box`. Use it for element-level adjustments like spacing a button group, centering content with `marginInline="auto"`, or applying a background color to a section. For responsive values, pass an object keyed by breakpoint.

## Composition

Box is the parent component for all layout structures. Use it inside `Grid` as grid items, inside `Container` as content sections, and inside `Card` as custom content areas. When building a new component, compose it from Box primitives rather than adding wrapper divs directly — this ensures theme token consistency. Box can serve as the outer wrapper for `Button`, `Badge`, and `Icon` combinations where you need precise spacing control. For form layouts, wrap `Field` components in a Box with `display="grid"` to create multi-column layouts without reaching for raw CSS.

## Best Practices

Prefer semantic replacements when applicable — use `Stack` or `Grid` for layout, `Container` for page-width constraints, and `Card` for surface containers. Reserve Box for one-off spacing adjustments that do not warrant a dedicated component. Define spacing values using theme tokens rather than arbitrary pixel values to maintain visual rhythm. When changing the `as` prop, ensure ARIA roles and accessibility attributes are managed appropriately, as Box does not automatically apply them.

## Common Mistakes

Wrapping every element in a Box creates a deeply nested DOM tree that harms performance and readability. Use Box judiciously — one or two layers are typically sufficient. Another mistake is using Box for layout when `Stack` or `Grid` would better express the relationship between children. Overriding Box styles with inline styles or raw CSS classes circumvents the theme system and leads to inconsistencies. Do not use Box as a styling catch-all; if you find yourself repeating the same combination of props, extract it into a named component.

## Design Guidelines

Box should not introduce any visual styles by default. It is a transparent wrapper that only applies what you explicitly define. When applying backgrounds, ensure contrast with foreground content meets WCAG standards. Responsive props should follow the same breakpoint order as the rest of the system — small, medium, large. Keep prop usage declarative and consistent; using `padding` instead of `paddingInline` when you mean horizontal padding introduces unnecessary specificity.

## Installation

<Installation registryName="box" />

## API Reference

<ApiReference />

## Limitations

Box provides no layout logic of its own. It does not handle overflow, scrolling, or content visibility. Complex layouts with conditional rendering, sticky positioning, or overflow behavior require additional configuration. Box does not enforce accessibility requirements — a `div` with `onClick` is not a button. For interactive containers, use the appropriate semantic component instead. Box also does not participate in any state management or lifecycle patterns.
