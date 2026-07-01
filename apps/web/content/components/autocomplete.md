---
title: "Autocomplete"
description: "Autocomplete provides an input field augmented with a popover suggestion list that filters options as the user types."
navigation:
  group: components
  order: 4
---

## Overview

Autocomplete provides an input field augmented with a popover suggestion list that filters options as the user types. It supports keyboard navigation, async data fetching, and single or multi-select modes. Use Autocomplete when the user must select from a known set of values but the list is too large for a standard Select or Combobox — think city names, product SKUs, or user tags.

## Installation

<Installation registryName="autocomplete" />

## Usage

The component accepts an `options` array for client-side filtering or an `onQueryChange` callback for async search. In client-side mode, pass the full dataset and Autocomplete filters internally using the input value. In async mode, debounce the query handler on your side and update the `options` prop with the results. The popover opens when the input receives focus or the user starts typing, and closes on selection or blur. Use `multiple` mode for tag-like selection, where each selected item renders as a removable chip inside the input. The input value can be controlled or uncontrolled via `value` and `defaultValue` respectively.

## API Reference

<ApiReference />

## Limitations

Autocomplete does not support grouped options. If you need categorized suggestions, consider using Combobox instead. The virtualized list only activates when the option count exceeds a threshold, but extremely large datasets (tens of thousands) will still cause performance degradation on initial render. Async mode delegates debouncing to the consumer; the component does not provide a built-in debounce utility. Network errors during async search must be handled by the consumer — the component surfaces errors through the `onError` callback but does not retry automatically.
