---
title: "Tabs"
description: "Tabs organizes content into separate panels where only one panel is visible at a time, with navigation controls presented as a tab list."
navigation:
  group: components
  order: 45
---

## Overview

Tabs organizes content into separate panels where only one panel is visible at a time, with navigation controls presented as a tab list. It supports horizontal and vertical tab arrangements, keyboard navigation between tabs, and dynamic tab panel content. Use tabs to partition settings pages, split documentation views, separate data visualization modes, and organize form sections that are too long for a single scroll.

## Demo

<DemoRenderer registryName="tabs" />

## Installation

<Installation registryName="tabs" />

## Usage

Tabs is built on Base UI Tabs primitives, implementing the WAI-ARIA tabs pattern with `tablist`, `tab`, and `tabpanel` roles. The component consists of a Tab List containing Tab triggers and a set of Tab Panels that correspond by index or value. The `value` and `onValueChange` props manage the selected tab in controlled mode. Keyboard navigation follows the roving tabindex pattern: arrow keys switch between tabs, and Tab moves focus into the active panel. The `orientation` prop toggles between horizontal and vertical tab layouts.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["ArrowLeft", "ArrowRight", "Home", "End"]} aria={["role", "aria-orientation", "aria-selected", "aria-labelledby", "role"]} />

## Limitations

Tabs does not support draggable reordering of tabs. The component does not provide overflow behavior for overflowing tab lists — tabs scroll horizontally or wrap, both of which are non-standard patterns. Closable tabs are not supported; for tab-closing patterns, implement custom tab management with dynamic tab lists. Nested tabs beyond two levels create confusing visual hierarchies and should be avoided.
