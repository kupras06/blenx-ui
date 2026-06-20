---
title: "Menu"
description: "Menu provides a dropdown list of actions or options triggered by a button, link, or other interactive element."
navigation:
  group: components
  order: 28
---

## Overview

Menu provides a dropdown list of actions or options triggered by a button, link, or other interactive element. It handles item selection, separators, disabled items, submenus, and full keyboard navigation. Use menus for contextual action lists, overflow menus in toolbars, profile dropdowns, and "more actions" patterns.

## Installation

<Installation registryName="menu" />

## Source Code

<SourceCode registryName="menu" />

## Usage

<Spinner name="menu-default" />

Menu is built on Base UI Menu primitives, inheriting WAI-ARIA menu pattern compliance. The trigger element receives the appropriate `aria-expanded`, `aria-haspopup`, and `aria-controls` attributes automatically. Items can be plain actions, links, or trigger nested submenus. Separators divide related groups of actions. Disabled items are rendered but excluded from keyboard navigation and receive reduced opacity. The menu positions itself relative to the trigger and flips when viewport space is insufficient.

## Composition

Menus pair with Icon Buttons for compact trigger patterns like row actions in a Table. They also appear as dropdown children of Select components and as navigation elements inside Sheets. The Menu's placement algorithm respects the Popover positioning system, ensuring consistent edge handling across the library. Use Menu Items that contain Text and Icon components for rich action labels.

## Design Guidelines

The menu surface uses elevated elevation tokens with a subtle shadow to indicate it sits above the page content. Item height matches the medium button height for consistency. Hover and focus states share the same visual treatment so mouse and keyboard users see the same feedback. The active state is a slightly darker shade of the hover background.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["ArrowUp", "ArrowDown", "Enter", "Escape"]} aria={["role", "aria-orientation"]} />

## Limitations

Menu does not support virtualized lists, so very long item lists may overflow the viewport. Submenu positioning can become problematic near viewport edges despite flip logic — placing menus that open submenus away from the screen edge is recommended. The component does not provide built-in search or filtering for long lists of items.
