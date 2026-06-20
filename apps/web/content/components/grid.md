---
navigation:
  group: components
  order: 23
---

## Overview

Grid is a CSS Grid layout primitive that enables complex two-dimensional layouts with rows and columns. It provides a declarative API for defining grid templates, gaps, and item placement using theme tokens. Use Grid for page-level layouts with multiple regions, card grids, dashboard layouts, and any layout that requires simultaneous control over horizontal and vertical alignment. Grid excels at layouts where items need to align across both axes — such as a product grid with consistent row heights or a dashboard with widgets of varying sizes. Do not use Grid for one-dimensional layouts; use Stack for simple vertical or horizontal sequences. Grid is also overkill for layouts with only two or three items in a single row — a simple Box with `display="flex"` and `gap` is more straightforward.

## Usage

Define the grid structure with `columns` and `rows` props, accepting CSS grid template values or theme-based span tokens. The `gap` prop sets row and column gaps using theme spacing tokens. Items are placed automatically in source order or explicitly using `column` and `row` props on child elements. Use `alignItems`, `justifyContent`, and `placeItems` for alignment control. Responsive grids are achieved by passing object values keyed by breakpoint — for example, `columns={{ sm: 1, md: 2, lg: 3 }}`. The component renders as a `div` with `display: grid` and passes all specified CSS grid properties through StyleX.

## Composition

Grid is the primary layout container for page sections. Use it inside `Container` for page-level grids, inside `Card` for card-internal layouts, and as a parent for `Box`-based grid items, `Card` components, `Field` instances in form layouts, and any other Blenx component. Grid items can span multiple columns or rows using the `colSpan` and `rowSpan` props. Nested grids are supported — a grid item can contain another Grid for complex sub-layouts. Grid composes with `Container` for constrained-width layouts and with `Box` for individual cell styling.

## Best Practices

Define explicit column templates rather than relying on auto-fill or auto-fit with implicit tracks — explicit templates produce more predictable layouts. Use named grid areas for complex layouts with distinct regions (sidebar, header, main, footer) for readability. Keep the number of grid levels shallow — one Grid for the page layout and one Grid per section if needed. Nesting beyond two levels deep suggests the layout should be simplified. Use responsive column definitions that reduce column count on smaller screens rather than shrinking columns to illegible widths.

## Common Mistakes

Using Grid when Flexbox (Stack) would suffice for simple one-dimensional layouts adds unnecessary complexity. Another mistake is not accounting for grid item overflow — items with long content can break the grid layout unless `min-width: 0` or `overflow: hidden` is applied. Overusing explicit item placement with `grid-row` and `grid-column` creates rigid layouts that do not adapt well to content changes. Forgetting that grid gaps apply to all items equally — use padding on items if you need different spacing between specific items.

## Design Guidelines

Grid gaps should follow the theme's spacing scale for visual consistency with other layout components. Column counts should decrease predictably at breakpoints — a four-column grid becomes three, then two, then one, rather than jumping directly from four to one. Items in a grid should have consistent min-widths to prevent single-column items from becoming too wide on large screens. The grid should not introduce scrollbars unless explicitly configured — ensure items have appropriate overflow handling. Alignment properties should be used intentionally to create visual order, not as defaults for every grid.

## Installation

<Installation registryName="grid" />

## API Reference

<ApiReference />

## Limitations

Grid does not support subgrid behavior — child grid items cannot inherit the parent grid's column tracks. If you need subgrid, apply a separate Grid definition to the child. The component does not support grid auto-flow with dense packing for masonry-style layouts — implement masonry patterns with a dedicated library. Grid also lacks support for named grid lines or areas as props; use CSS class overrides for advanced grid template areas. The component does not provide debugging tools for visualizing grid lines during development.
