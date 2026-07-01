---
title: "Combobox"
description: "Combobox merges a text input with a selectable options list, combining the flexibility of free-text entry with the precision of constrained selection."
navigation:
  group: components
  order: 15
---

## Overview

Combobox merges a text input with a selectable options list, combining the flexibility of free-text entry with the precision of constrained selection. Users can type to filter options, navigate with arrow keys, and select with Enter or click. Use Combobox when users need to select from a list but may also need to enter a custom value not in the list — think tag inputs, recipient selectors, or country pickers with typing support.

## Installation

<Installation registryName="combobox" />

## Usage

Pass `options` as an array of objects with `label` and `value` properties. The input filters options as the user types, and the filtered list is displayed in a popover. Use `allowCustomValue` to permit values not in the options array — when enabled, the current input value is treated as a valid selection. In multi-select mode (`multiple`), selected items render as removable chips inside the input. The popover opens on input focus or click, and closes on selection, blur, or Escape. Control the selected value with `value` and `onChange`, or use `defaultValue` for uncontrolled usage.

## API Reference

<ApiReference />

## Limitations

Combobox does not support option grouping with headers. If you need categorized options, consider using a Select with optgroups or a custom grouped list. The popover uses virtual scrolling only when the number of options exceeds a threshold; extremely large lists may cause performance issues on initial render. The component does not provide built-in debouncing for async options filtering. When `allowCustomValue` is enabled, there is no built-in way to distinguish user-entered values from selected options after the fact.
