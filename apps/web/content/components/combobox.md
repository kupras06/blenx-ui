---
navigation:
  group: components
  order: 15
---

## Overview

Combobox merges a text input with a selectable options list, combining the flexibility of free-text entry with the precision of constrained selection. Users can type to filter options, navigate with arrow keys, and select with Enter or click. Use Combobox when users need to select from a list but may also need to enter a custom value not in the list — think tag inputs, recipient selectors, or country pickers with typing support. Combobox differs from Autocomplete in that it is designed for option selection rather than suggestion-based input completion. Do not use Combobox when the option set is small and static; a standard Select provides a better experience. Combobox is also inappropriate when users should never enter custom values — use Select for strictly constrained choices.

## Usage

Pass `options` as an array of objects with `label` and `value` properties. The input filters options as the user types, and the filtered list is displayed in a popover. Use `allowCustomValue` to permit values not in the options array — when enabled, the current input value is treated as a valid selection. In multi-select mode (`multiple`), selected items render as removable chips inside the input. The popover opens on input focus or click, and closes on selection, blur, or Escape. Control the selected value with `value` and `onChange`, or use `defaultValue` for uncontrolled usage.

## Composition

Combobox is a form control and should be wrapped in `Field` for label, help text, and error state integration. Use it inside `Dialog` for form dialogs, inside `Card` for inline forms, and inside `Drawer` for slide-out selection panels. The popover uses the portal infrastructure consistent with other Blenx overlay components. For single-select with no custom values, prefer `Select` — Combobox is heavier and its filtering behavior may confuse users who expect a standard list. Combobox options can include `ColorSwatch` as leading visuals for color-related selections, or `Avatar` for user selection lists.

## Best Practices

Use `allowCustomValue` only when the data model supports arbitrary text entries. If you enable it, the combobox becomes a freeform input with suggestions, and you must validate the custom value on submission. Placeholder text should describe the expected input — "Search or add a tag" rather than "Type here". In multi-select mode, show selections as removable chips and keep the input active for continued typing. Filter options by case-insensitive substring matching for the most predictable user experience. Debounce async filtering on your side to avoid excessive renders.

## Common Mistakes

Enabling `allowCustomValue` without validation leads to data quality issues — users can enter anything. Another mistake is omitting a "No results" state when filtering produces zero matches. Using Combobox for a list of two or three options is unnecessarily complex; use a Radio group or small Select instead. Failing to announce option count changes to screen readers leaves blind users unaware of how many options are available after filtering.

## Design Guidelines

The input should clearly show when it has focus and when the popover is open, typically with a visible outline or ring. Filtered options should highlight the matching substring so users see why each option appeared. Selected items in multi-select mode should use the same chip styling as Badge with a dismiss button. The popover should match the input width for a seamless visual connection. The option list should be scrolled to keep the active option visible during keyboard navigation.

## Installation

<Installation registryName="combobox" />

## API Reference

<ApiReference />

## Limitations

Combobox does not support option grouping with headers. If you need categorized options, consider using a Select with optgroups or a custom grouped list. The popover uses virtual scrolling only when the number of options exceeds a threshold; extremely large lists may cause performance issues on initial render. The component does not provide built-in debouncing for async options filtering. When `allowCustomValue` is enabled, there is no built-in way to distinguish user-entered values from selected options after the fact.
