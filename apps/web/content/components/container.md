---
title: "Container"
description: "Container provides a responsive content width constraint and horizontal centering for page-level layouts."
navigation:
  group: components
  order: 17
---

## Overview

Container provides a responsive content width constraint and horizontal centering for page-level layouts. It caps the maximum width of its children at a configurable breakpoint and centers them within the viewport using auto margins. Use Container as the outermost wrapper for page content to ensure consistent reading widths across different screen sizes.

## Installation

<Installation registryName="container" />

## Source Code

<SourceCode registryName="container" />

## Usage

Wrap page content in Container with the `maxWidth` prop set to a theme breakpoint token — `sm`, `md`, `lg`, `xl`, or full width via `false`. The default is `lg` (typically 1024px). Container applies `max-width` and `margin-inline: auto` to center itself. It does not apply padding by default; add `padding` prop if you need horizontal padding between the container edge and its content. For nested layouts — such as a sidebar layout within a page — use Container for the main content area and a separate component for the sidebar. Container can be used without a max width for fluid layouts that still need centering.

## Composition

Container is the foundation for page-level composition. Inside Container, place `Grid` for multi-column layouts, `Stack` for vertical content sections, `Card` for surface-level groupings, and `Box` for spacing adjustments. Container does not affect child positioning beyond width constraint and centering — children flow naturally as block elements. Use Container inside `Box` when you need background colors that extend full width while content remains constrained — place the background on Box and the max width constraint on Container. Container should not be nested inside other containers except in rare cases where content sub-sections need tighter width constraints.

## Design Guidelines

Container should not have visible styles of its own — no background, border, or shadow. It is purely a layout constraint tool. The space between the container edge and the viewport edge should be consistent on all pages, achieved through Container's own padding or a parent element's padding. On mobile viewports, Container should effectively have no max-width constraint, allowing content to use the full screen width minus padding. The transition from constrained to full-width should occur smoothly at the defined breakpoint.

## API Reference

<ApiReference />

## Limitations

Container does not support negative margins or overflow behavior — it clips content that exceeds its bounds unless `overflow` is set separately. It also does not handle sticky positioning or z-index management. Container is not responsive in terms of switching between constrained and unconstrained modes — it always applies a max width. For sections that should be full-width on some breakpoints and constrained on others, implement custom logic or use the breakpoint props system.
