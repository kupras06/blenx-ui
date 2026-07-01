---
title: "Breadcrumbs"
description: "Breadcrumbs displays the page hierarchy as a navigational trail with separators between each level."
navigation:
  group: components
  order: 8
---

## Overview

Breadcrumbs displays the page hierarchy as a navigational trail with separators between each level. It helps users understand their current location within the application and provides quick access to ancestor pages. Use breadcrumbs in multi-level navigation structures — documentation sites, admin panels, SaaS dashboards, and e-commerce category trees.

## Installation

<Installation registryName="breadcrumbs" />

## Usage

Provide an array of `items` where each item contains a `label` and an `href`. The last item is rendered as plain text representing the current page — it is not a link — while all preceding items render as anchors. The `separator` prop customizes the divider between items, defaulting to a forward slash with appropriate spacing. Breadcrumbs are rendered as a `<nav>` element with `aria-label="Breadcrumbs"` for accessibility. The component truncates items that exceed the container width, showing as many ancestor links as space allows with a collapsed indicator for overflow.

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["aria-label", "aria-current"]} />

## Limitations

Breadcrumbs does not support multi-line wrapping. If the full breadcrumb trail overflows, items are truncated rather than wrapped to the next line. The component does not provide automatic path generation — the breadcrumb hierarchy must be constructed and passed explicitly. Breadcrumbs also do not support context menus on intermediate items for quick sibling navigation; that pattern requires a custom implementation.
