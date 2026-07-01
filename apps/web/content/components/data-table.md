---
title: "Data Table"
description: "DataTable is a feature-rich table component built on @tanstack/react-table for sorting, filtering, pagination, column visibility toggle, row selection, infinite scroll, and server-side operations."
navigation:
  group: components
  order: 18
---

## Overview

DataTable is a feature-rich table component built on @tanstack/react-table for sorting, filtering, pagination, column visibility toggle, row selection, infinite scroll, and server-side operations. It handles loading, empty, and error states natively. Use DataTable whenever you need to present tabular data that requires user interaction — sorting by columns, filtering rows, selecting items for batch operations, or paginating through large datasets.

## Usage

Define columns using the `columns` prop with accessor functions, header labels, and optional cell renderers. Pass data via the `data` prop. Sorting is enabled per-column by setting `enableSorting: true` in the column definition. Filtering works through column-level filter inputs or a global search control via `globalFilter`. For pagination, use the `pagination` prop with page size and page index state, or enable `infiniteScroll` for a load-more pattern. Row selection is exposed through `onRowSelectionChange` and the `rowSelection` prop. The table manages its internal state via @tanstack/react-table's state management, but you can control it externally through the `state` prop. Server-side mode passes sorting, filtering, and pagination state to your data fetching function via callbacks.

## Installation

<Installation registryName="data-table" />

## API Reference

<ApiReference />

## Limitations

DataTable does not support column reordering via drag-and-drop out of the box. Editable cells require custom implementation using the cell renderer pattern. Tree or hierarchical data with expandable rows is not supported natively. The infinite scroll mode does not support reverse scrolling for chat-like interfaces. DataTable also does not provide built-in export to CSV or Excel — implement export logic separately using the current data and column definitions. The virtualization layer activates only after a configurable row threshold; extremely large datasets may need manual virtualizer configuration.
