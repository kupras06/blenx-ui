---
navigation:
  group: components
  order: 17
---

## Overview

Container provides a responsive content width constraint and horizontal centering for page-level layouts. It caps the maximum width of its children at a configurable breakpoint and centers them within the viewport using auto margins. Use Container as the outermost wrapper for page content to ensure consistent reading widths across different screen sizes. It solves the common problem of content stretching across the full viewport on wide screens, which reduces readability and creates an unpolished appearance. Do not use Container for sidebar panels, modals, or card components — those have their own width constraints. Container is also inappropriate for full-bleed sections like hero banners or navigation bars that should span the entire viewport width.

## Usage

Wrap page content in Container with the `maxWidth` prop set to a theme breakpoint token — `sm`, `md`, `lg`, `xl`, or full width via `false`. The default is `lg` (typically 1024px). Container applies `max-width` and `margin-inline: auto` to center itself. It does not apply padding by default; add `padding` prop if you need horizontal padding between the container edge and its content. For nested layouts — such as a sidebar layout within a page — use Container for the main content area and a separate component for the sidebar. Container can be used without a max width for fluid layouts that still need centering.

## Composition

Container is the foundation for page-level composition. Inside Container, place `Grid` for multi-column layouts, `Stack` for vertical content sections, `Card` for surface-level groupings, and `Box` for spacing adjustments. Container does not affect child positioning beyond width constraint and centering — children flow naturally as block elements. Use Container inside `Box` when you need background colors that extend full width while content remains constrained — place the background on Box and the max width constraint on Container. Container should not be nested inside other containers except in rare cases where content sub-sections need tighter width constraints.

## Best Practices

Choose a max width that produces comfortable line lengths (60–75 characters) for the primary reading content. The default lg breakpoint is designed for this range. Use smaller max widths for content-heavy pages like documentation or articles, and larger widths for data-dense pages like dashboards. Apply consistent padding that matches the page header padding so content aligns vertically. Do not override the centering behavior — Container's auto margins are intentional. If you need left-aligned content with a max width, apply `marginInline: 0` and `marginRight: auto` explicitly.

## Common Mistakes

Applying background colors or borders to Container creates visual breakage because the container only spans the constrained width. Apply visual styles to a parent Box instead. Another mistake is using Container as a generic div wrapper for every section on the page — it should be used once per page or per major content region. Nesting containers with different max widths creates confusing layout behavior and unnecessary DOM depth. Using `maxWidth="false"` without understanding that it removes all width constraints can lead to unexpected full-width layouts.

## Design Guidelines

Container should not have visible styles of its own — no background, border, or shadow. It is purely a layout constraint tool. The space between the container edge and the viewport edge should be consistent on all pages, achieved through Container's own padding or a parent element's padding. On mobile viewports, Container should effectively have no max-width constraint, allowing content to use the full screen width minus padding. The transition from constrained to full-width should occur smoothly at the defined breakpoint.

## Installation

<Installation registryName="container" />

## API Reference

<ApiReference />

## Limitations

Container does not support negative margins or overflow behavior — it clips content that exceeds its bounds unless `overflow` is set separately. It also does not handle sticky positioning or z-index management. Container is not responsive in terms of switching between constrained and unconstrained modes — it always applies a max width. For sections that should be full-width on some breakpoints and constrained on others, implement custom logic or use the breakpoint props system.
