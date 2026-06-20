---
navigation:
  group: components
  order: 4
---

## Overview

Autocomplete provides an input field augmented with a popover suggestion list that filters options as the user types. It supports keyboard navigation, async data fetching, and single or multi-select modes. Use Autocomplete when the user must select from a known set of values but the list is too large for a standard Select or Combobox — think city names, product SKUs, or user tags. It excels in scenarios where the user knows roughly what they are looking for but benefits from narrowing results progressively. Do not use Autocomplete when the option set is small enough to display in a Select, or when the user must see all available options to make a decision. Autocomplete hides the full list by design, which can mislead users if they are unaware of the available range.

## Usage

The component accepts an `options` array for client-side filtering or an `onQueryChange` callback for async search. In client-side mode, pass the full dataset and Autocomplete filters internally using the input value. In async mode, debounce the query handler on your side and update the `options` prop with the results. The popover opens when the input receives focus or the user starts typing, and closes on selection or blur. Use `multiple` mode for tag-like selection, where each selected item renders as a removable chip inside the input. The input value can be controlled or uncontrolled via `value` and `defaultValue` respectively.

## Composition

Autocomplete pairs with `Field` for labeled form usage, inheriting the field's label, help text, and error state. Within a `Dialog` or `Drawer`, Autocomplete functions as a standard form control. The popover uses the same portal infrastructure as `Popover` and `Select`, so it renders correctly inside modals and constrained containers. Use Autocomplete inside `DataTable` filter bars for column-based search filters. For simple single-select lists with fewer than fifty items, prefer `Select` or `Combobox` instead, as Autocomplete's filtering abstraction adds unnecessary indirection.

## Best Practices

Always display a minimum of three characters before triggering async requests to reduce unnecessary network calls. Provide clear placeholder text that hints at the expected input format — "Search cities..." rather than "Type here". In multi-select mode, show selected items as removable chips inside the input and keep the input active for continued typing. Sort suggestion results by relevance, placing exact matches or prefix matches above substring matches. When the dataset changes externally, reset the internal state to avoid stale suggestions.

## Common Mistakes

Forgetting to handle the case where no options match the query. Display a clear "No results" message instead of showing an empty popover. Another mistake is using Autocomplete for options that users can freely type without constraint — if freeform input is valid, use a standard Input with suggestions rather than Autocomplete. Over-aggressive filtering that excludes partial matches also frustrates users; prefer substring matching over strict prefix matching unless the data demands otherwise.

## Design Guidelines

The popover should match the input width to create a seamless visual connection between the field and the suggestion list. Highlight the matching substring in each suggestion to give users visual feedback on why an option appeared. The loading state should show a subtle spinner or skeleton inside the popover rather than a full-page loader. Keep the suggestion list to a reasonable height — five to eight visible items — and scroll the rest to avoid overwhelming the user.

## Installation

<Installation registryName="autocomplete" />

## API Reference

<ApiReference />

## Limitations

Autocomplete does not support grouped options. If you need categorized suggestions, consider using Combobox instead. The virtualized list only activates when the option count exceeds a threshold, but extremely large datasets (tens of thousands) will still cause performance degradation on initial render. Async mode delegates debouncing to the consumer; the component does not provide a built-in debounce utility. Network errors during async search must be handled by the consumer — the component surfaces errors through the `onError` callback but does not retry automatically.
