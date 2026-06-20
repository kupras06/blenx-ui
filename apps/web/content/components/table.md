---
navigation:
  group: components
  order: 44
---

## Overview

Table renders structured data in a grid of rows and columns using styled native HTML table elements. It supports header groups, body rows, sorting indicators, and responsive overflow handling. Use tables for data comparison, financial reports, user lists, activity logs, and any dataset where users need to scan, compare, and reference values across multiple records. Avoid tables for presenting simple lists, card-style content, or data with very few columns that could be presented as a list. Tables excel at density but sacrifice readability for it — use them deliberately.

## Usage

<Spinner name="table-default" />

Table provides `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>` components that mirror the native HTML table structure with consistent styling. The `sortable` prop on header cells adds click-to-sort behavior with ascending and descending indicators. The `striped` variant alternates row background colors for improved scanability in dense datasets. The `stickyHeader` prop pins the header row to the top of the scrollable container when the table body overflows. The table is wrapped in a horizontal overflow container by default to prevent layout breakage on narrow viewports.

## Composition

Tables contain Text components in cells for consistent typography. Header cells use a higher-emphasis text variant to distinguish column labels from data. Sortable headers include Icon Button triggers for the sort direction indicator. Tables are placed inside Surface containers or Cards, and the Scroll Area component is often layered underneath for consistent scrollbar behavior. Action columns at the right edge of the table use Icon Button components for row-level operations. The Stack component arranges multiple tables vertically within a page section.

## Best Practices

Define explicit column widths based on content type — narrow columns for numeric values and statuses, wider columns for text and names. Use text alignment that matches the content: right-align numbers for comparability, left-align text for readability. Keep the number of visible columns to seven or fewer; use a detail panel or expandable row for additional data. Always scope `<th>` elements with `scope="col"` or `scope="row"` for accessibility.

## Common Mistakes

Placing interactive elements like buttons inside every table cell creates a noisy, overwhelming interface — reserve actions for the row level. A common oversight is failing to handle long text content, which breaks the table layout without explicit `max-width` and `text-overflow` rules. Using a table for layout purposes rather than data presentation violates HTML semantics and creates accessibility barriers.

## Design Guidelines

Row height should be consistent within the table, with sufficient padding for touch targeting in action columns. Horizontal borders between rows provide clear separation without the visual weight of vertical borders between columns. Header cells use a subtle background that distinguishes them from data rows without competing with the content. The sort indicator icon uses the system's low-emphasis color when inactive and the brand color when the column is actively sorted.

## Demo

<DemoRenderer registryName="table" />

## Installation

<Installation registryName="table" />

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["role", "aria-colcount"]} />

## Limitations

Table does not support virtualized rendering — very large datasets (thousands of rows) will impact performance. The component does not provide built-in column resizing, drag-to-reorder, or column visibility controls. Inline editing within table cells is not supported; editing should be handled through an external mechanism like a Sheet or Dialog. Responsive behavior is limited to horizontal scrolling; tables do not automatically reflow into card layouts on small screens.
