---
title: "Table"
description: "Table renders structured data in a grid of rows and columns using styled native HTML table elements."
navigation:
  group: components
  order: 44
---

## Overview

Table renders structured data in a grid of rows and columns using styled native HTML table elements. It supports header groups, body rows, sorting indicators, and responsive overflow handling. Use tables for data comparison, financial reports, user lists, activity logs, and any dataset where users need to scan, compare, and reference values across multiple records.

## Demo

<DemoRenderer registryName="table" />

## Installation

<Installation registryName="table" />

## Usage

Table provides `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>` components that mirror the native HTML table structure with consistent styling. The `sortable` prop on header cells adds click-to-sort behavior with ascending and descending indicators. The `striped` variant alternates row background colors for improved scanability in dense datasets. The `stickyHeader` prop pins the header row to the top of the scrollable container when the table body overflows. The table is wrapped in a horizontal overflow container by default to prevent layout breakage on narrow viewports.

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["role", "aria-colcount"]} />

## Limitations

Table does not support virtualized rendering — very large datasets (thousands of rows) will impact performance. The component does not provide built-in column resizing, drag-to-reorder, or column visibility controls. Inline editing within table cells is not supported; editing should be handled through an external mechanism like a Sheet or Dialog. Responsive behavior is limited to horizontal scrolling; tables do not automatically reflow into card layouts on small screens.
