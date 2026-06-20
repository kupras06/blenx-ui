---
navigation:
  group: components
  order: 6
---

## Overview

Badge is a small visual indicator that communicates counts, status, or labels adjacent to an element. It supports multiple intents (primary, neutral, success, warning, danger, info) and size variants. Use badges to display unread notification counts, tag content with metadata labels, or indicate system status. They are purely presentational and do not capture interactions on their own. Do not use badges as primary navigation or action targets — users should not click a badge to trigger behavior. If the element needs to be interactive, pair it with a Button or a clickable container. Badges are also inappropriate for conveying critical information that users might miss due to their small size.

## Usage

Render a Badge with the `count` prop for numeric indicators or `children` for text labels. The `intent` prop controls color, and the `size` prop adjusts padding and font size. When used as an overlay on another element — like a bell icon for notifications — wrap both elements in a relative container and position the badge absolutely. For standalone badges, the component renders as an inline element that flows with surrounding content. The badge automatically truncates counts exceeding `maxCount` (default 99) to "99+" to prevent visual overflow. Use the `dot` variant to render a small presence indicator without a count value.

## Composition

Badge overlays naturally on `Button`, `Icon`, and `Avatar` for notification indicators. Use it inside `Card` footers for metadata labels and inside `DataTable` cells for status indicators. Badge composes with `Tooltip` to provide context for icon-only badges — a bell icon with a badge count should explain meaning on hover. For a tag-style layout, render multiple badges as children of a `Box` with flex wrapping. Avoid nesting badges inside other badges, as the size differential creates visual noise.

## Best Practices

Keep badge text concise — one to three characters maximum for count badges, short labels for text badges. Choose intent colors that map to meaning: danger for errors or deletions, warning for pending states, success for completed states, neutral for general metadata. When using the overlay pattern, position the badge so it overlaps the top-right corner of the parent element with a slight offset that does not obscure the parent's content. Use the `dot` variant when the exact count is unimportant and only presence matters, reducing visual clutter.

## Common Mistakes

Displaying a zero count is misleading. If the count is zero, conditionally render nothing. Another mistake is placing badges too far from the element they reference, creating ambiguity about what the badge applies to. Using badges as the sole indicator of system health or error state is also problematic — users with visual impairments may not notice a small badge in the periphery. Always pair critical status information with visible text.

## Design Guidelines

Badge overlap should be intentional but not obstructive. The offset should preserve readability of the parent element's content. Text badges require more horizontal padding than count badges due to variable character widths. The border radius should be fully rounded for count badges (pill shape) but slightly less rounded for text badges to differentiate their purpose. Maintain consistent badge placement across the application — users should learn to look for badges in predictable locations.

## Limitations

Badge does not support animations for count changes. If you need animated transitions (e.g., a notification count incrementing), implement that through a separate animation wrapper. The overlay positioning assumes a single badge per parent element; multiple overlapped badges on the same element will conflict. Badge does not manage its own visibility — controlling when a badge appears or disappears is the consumer's responsibility.
