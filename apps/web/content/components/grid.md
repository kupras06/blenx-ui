---
title: "Grid"
description: "Grid is a CSS Grid layout primitive that enables complex two-dimensional layouts with rows and columns."
navigation:
  group: components
  order: 23
---

## Overview

Grid is a CSS Grid layout primitive that enables complex two-dimensional layouts with rows and columns. It provides a declarative API for defining grid templates, gaps, and item placement using theme tokens. Use Grid for page-level layouts with multiple regions, card grids, dashboard layouts, and any layout that requires simultaneous control over horizontal and vertical alignment.

## Installation

<Installation registryName="grid" />

## Usage

Define the grid structure with `columns` and `rows` props, accepting CSS grid template values or theme-based span tokens. The `gap` prop sets row and column gaps using theme spacing tokens. Items are placed automatically in source order or explicitly using `column` and `row` props on child elements. Use `alignItems`, `justifyContent`, and `placeItems` for alignment control. Responsive grids are achieved by passing object values keyed by breakpoint — for example, `columns={{ sm: 1, md: 2, lg: 3 }}`. The component renders as a `div` with `display: grid` and passes all specified CSS grid properties through vanilla-extract.

## API Reference

<ApiReference />

## Limitations

Grid does not support subgrid behavior — child grid items cannot inherit the parent grid's column tracks. If you need subgrid, apply a separate Grid definition to the child. The component does not support grid auto-flow with dense packing for masonry-style layouts — implement masonry patterns with a dedicated library. Grid also lacks support for named grid lines or areas as props; use CSS class overrides for advanced grid template areas. The component does not provide debugging tools for visualizing grid lines during development.
