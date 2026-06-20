---
title: "Command"
description: "Command implements a command palette — a search-driven interface for triggering actions, navigating pages, and discovering features."
navigation:
  group: components
  order: 16
---

## Overview

Command implements a command palette — a search-driven interface for triggering actions, navigating pages, and discovering features. Users invoke it with a keyboard shortcut (typically Cmd+K or Ctrl+K), type to filter commands, and select an action to execute. Command is organized into groups of related actions, each with an optional keyboard shortcut hint.

## Demo

<DemoRenderer registryName="command" />

## Installation

<Installation registryName="command" />

## Source Code

<SourceCode registryName="command" />

## Usage

Define command items as an array of objects with `id`, `label`, optional `shortcut`, optional `group`, and `onSelect` callback. Groups are defined separately and items reference them by key. The search input filters items across all groups using case-insensitive matching against the label. Selected items call the `onSelect` callback and close the palette. Use `pages` for nested command flows — a "Create" command could open a sub-page with specific creation options. The palette opens and closes via the exposed `open` and `onOpenChange` props, typically bound to a keyboard shortcut listener. Command handles focus trapping and Escape dismissal within the dialog overlay.

## Composition

Command renders as a modal dialog overlay and should not be nested inside other modals or drawers. It is typically invoked from the application shell — a `Button` in the header or a global keyboard listener. Inside the command dialog, items can trigger navigation via Next.js `useRouter`, open `Dialog` instances, or call any synchronous or asynchronous action. Command items can contain `Icon` components for visual identification and `Badge` for keyboard shortcut hints. Avoid placing interactive components inside the command item display area — items are selected, not interacted with in place.

## Design Guidelines

The command palette should be centered on screen with a backdrop that dims the underlying content. The search input should be auto-focused when the palette opens. Search results should scroll within a fixed height container — typically showing six to eight visible items before scrolling. Active item highlighting should use the primary intent color for clear visual feedback. Group headers should be visually distinct from items using uppercase, smaller, or lighter text. The keyboard shortcut display should be right-aligned within each item.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["ArrowDown", "ArrowUp", "Enter", "Escape"]} aria={["role", "combobox", "listbox", "option", "aria-selected", "aria-expanded", "aria-haspopup"]} />

## Limitations

Command does not support inline documentation or help text for items — the label and optional description must be self-explanatory. The component does not persist recently used or frequently used commands for ranking; items are always displayed in the defined order. Nested pages are limited to one level of depth — deeper hierarchies require custom implementation. Command also does not support async item loading; all items must be provided upfront.
