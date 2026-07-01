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

## Usage

Define command items as an array of objects with `id`, `label`, optional `shortcut`, optional `group`, and `onSelect` callback. Groups are defined separately and items reference them by key. The search input filters items across all groups using case-insensitive matching against the label. Selected items call the `onSelect` callback and close the palette. Use `pages` for nested command flows — a "Create" command could open a sub-page with specific creation options. The palette opens and closes via the exposed `open` and `onOpenChange` props, typically bound to a keyboard shortcut listener. Command handles focus trapping and Escape dismissal within the dialog overlay.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["ArrowDown", "ArrowUp", "Enter", "Escape"]} aria={["role", "combobox", "listbox", "option", "aria-selected", "aria-expanded", "aria-haspopup"]} />

## Limitations

Command does not support inline documentation or help text for items — the label and optional description must be self-explanatory. The component does not persist recently used or frequently used commands for ranking; items are always displayed in the defined order. Nested pages are limited to one level of depth — deeper hierarchies require custom implementation. Command also does not support async item loading; all items must be provided upfront.
