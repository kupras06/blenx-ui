## Overview

Command implements a command palette — a search-driven interface for triggering actions, navigating pages, and discovering features. Users invoke it with a keyboard shortcut (typically Cmd+K or Ctrl+K), type to filter commands, and select an action to execute. Command is organized into groups of related actions, each with an optional keyboard shortcut hint. Use Command to accelerate power users, reduce navigation friction, and expose features that might otherwise be buried in menus. It is most valuable in complex applications with many views and actions — project management tools, IDEs, admin dashboards, and design tools. Do not use Command as a replacement for primary navigation or as the only way to access critical functionality. Command is also inappropriate for simple applications with fewer than ten actions.

## Usage

Define command items as an array of objects with `id`, `label`, optional `shortcut`, optional `group`, and `onSelect` callback. Groups are defined separately and items reference them by key. The search input filters items across all groups using case-insensitive matching against the label. Selected items call the `onSelect` callback and close the palette. Use `pages` for nested command flows — a "Create" command could open a sub-page with specific creation options. The palette opens and closes via the exposed `open` and `onOpenChange` props, typically bound to a keyboard shortcut listener. Command handles focus trapping and Escape dismissal within the dialog overlay.

## Composition

Command renders as a modal dialog overlay and should not be nested inside other modals or drawers. It is typically invoked from the application shell — a `Button` in the header or a global keyboard listener. Inside the command dialog, items can trigger navigation via Next.js `useRouter`, open `Dialog` instances, or call any synchronous or asynchronous action. Command items can contain `Icon` components for visual identification and `Badge` for keyboard shortcut hints. Avoid placing interactive components inside the command item display area — items are selected, not interacted with in place.

## Best Practices

Register a global keyboard shortcut to open Command, and document it in the UI with a tooltip or visible hint in the header. Group commands thematically — navigation in one group, creation actions in another, settings shortcuts in a third. Limit the number of items per group to avoid overwhelming users; if a group exceeds ten items, consider reorganizing. Show keyboard shortcuts next to items for discoverability — a user who sees "New project (Cmd+N)" learns the shortcut for next time. Handle empty search results gracefully with a "No commands found" message and optionally a suggestion to try a different query.

## Common Mistakes

Overloading the command palette with every possible action creates noise and defeats its purpose. Curate the command set to the most useful twenty to thirty actions. Another mistake is omitting keyboard shortcut hints, which misses the opportunity to teach users faster workflows. Placing destructive actions (delete, archive) in the command palette without confirmation can lead to accidental data loss — always pair destructive commands with AlertDialog confirmation. Using generic icons for every item without distinctive labels makes scanning difficult.

## Design Guidelines

The command palette should be centered on screen with a backdrop that dims the underlying content. The search input should be auto-focused when the palette opens. Search results should scroll within a fixed height container — typically showing six to eight visible items before scrolling. Active item highlighting should use the primary intent color for clear visual feedback. Group headers should be visually distinct from items using uppercase, smaller, or lighter text. The keyboard shortcut display should be right-aligned within each item.

## Limitations

Command does not support inline documentation or help text for items — the label and optional description must be self-explanatory. The component does not persist recently used or frequently used commands for ranking; items are always displayed in the defined order. Nested pages are limited to one level of depth — deeper hierarchies require custom implementation. Command also does not support async item loading; all items must be provided upfront.
