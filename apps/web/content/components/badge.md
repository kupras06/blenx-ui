---
title: "Badge"
description: "Badge is a small visual indicator that communicates counts, status, or labels adjacent to an element."
navigation:
  group: components
  order: 6
---

## Overview

Badge is a small visual indicator that communicates counts, status, or labels adjacent to an element. It supports multiple intents (primary, neutral, success, warning, danger, info) and size variants. Use badges to display unread notification counts, tag content with metadata labels, or indicate system status.

## Demo

<DemoRenderer registryName="badge" />

## Installation

<Installation registryName="badge" />

## Source Code

<SourceCode registryName="badge" />

## Usage

Render a Badge with the `count` prop for numeric indicators or `children` for text labels. The `intent` prop controls color, and the `size` prop adjusts padding and font size. When used as an overlay on another element — like a bell icon for notifications — wrap both elements in a relative container and position the badge absolutely. For standalone badges, the component renders as an inline element that flows with surrounding content. The badge automatically truncates counts exceeding `maxCount` (default 99) to "99+" to prevent visual overflow. Use the `dot` variant to render a small presence indicator without a count value.

## Composition

Badge overlays naturally on `Button`, `Icon`, and `Avatar` for notification indicators. Use it inside `Card` footers for metadata labels and inside `DataTable` cells for status indicators. Badge composes with `Tooltip` to provide context for icon-only badges — a bell icon with a badge count should explain meaning on hover. For a tag-style layout, render multiple badges as children of a `Box` with flex wrapping. Avoid nesting badges inside other badges, as the size differential creates visual noise.

## Design Guidelines

Badge overlap should be intentional but not obstructive. The offset should preserve readability of the parent element's content. Text badges require more horizontal padding than count badges due to variable character widths. The border radius should be fully rounded for count badges (pill shape) but slightly less rounded for text badges to differentiate their purpose. Maintain consistent badge placement across the application — users should learn to look for badges in predictable locations.

## API Reference

<ApiReference />

## Limitations

Badge does not support animations for count changes. If you need animated transitions (e.g., a notification count incrementing), implement that through a separate animation wrapper. The overlay positioning assumes a single badge per parent element; multiple overlapped badges on the same element will conflict. Badge does not manage its own visibility — controlling when a badge appears or disappears is the consumer's responsibility.
