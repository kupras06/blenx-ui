---
title: Data Table
group: tables
order: 1
default: true
---

## Overview

Data-table-01 is a feature-rich table block designed for displaying, sorting, filtering, and acting on structured data. It provides column definitions with sortable headers, row selection via checkboxes, pagination controls, a configurable toolbar with search and action buttons, and responsive handling that gracefully collapses columns on narrow viewports. The table receives data as a typed array and column definitions as a configuration array, keeping the block fully generic and reusable across any data domain — user lists, order history, inventory tables, audit logs, and so on. The block manages its own pagination and sort state internally, emitting changes via `onSortChange` and `onPageChange` callbacks, or you can opt for server-side pagination by providing `totalPages` and controlling the current page externally.

## When To Use

Data-table-01 is the right choice whenever you need to display a list of records that users need to browse, sort, filter, or take actions on. It works well for admin panels, dashboard data views, user management screens, order management, content management systems, and any other data-dense interface. Use it when the dataset has at least 5-10 rows and multiple columns of information to display. Do not use data-table-01 for simple lists of 3-5 items (use a list or card layout instead), for tree or hierarchical data (use a tree table instead), or for data that is primarily visual or graphical (use charts or cards instead).

## Customization

The `columns` prop accepts an array of column definition objects, each with `key`, `header`, `sortable`, `render` (custom cell renderer), `width`, and `hideable` properties. The `data` prop is a typed array of row objects. The `pageSize` prop configures how many rows display per page (defaults to 10). The `onRowClick` callback fires with the row data when a row is clicked. The `selectedRows` and `onSelectionChange` props enable controlled selection with checkboxes. The `toolbar` prop accepts a ReactNode for custom toolbar content above the table — commonly a search input, action buttons, and a column visibility toggle. The `emptyState` prop accepts a ReactNode to display when data is empty (falls back to empty-state-01 if not provided). The `variant` prop accepts `"bordered"`, `"striped"`, or `"minimal"` for visual styling.

## Accessibility Notes

The table uses native `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>` elements for proper semantics. Sortable column headers are `<button>` elements styled as headers with `aria-sort="ascending"`, `"descending"`, or `"none"`. Row checkboxes have `aria-label` set to "Select row {index}" or similar. The pagination controls use `<nav>` with `aria-label="Pagination"` and individual page buttons with `aria-current="page"`. The table container has `role="region"` and `aria-label` for screen reader navigation. When the table updates (sort, filter, page change), a live region announces the number of results. Column hiding maintains accessibility by removing hidden columns from the DOM rather than just visually hiding them.

## Composition

Data-table-01 composes a `Toolbar` (optional), a `Table` primitive, and a `Pagination` component. The `Table` primitive handles the HTML table structure with semantic headers and rows. Sorting is managed internally via a `useTableSort` hook that cycles through none → ascending → descending on header click. Pagination uses a `usePagination` hook with page state and navigation. The selection state is managed with a `useTableSelection` hook supporting select-all (header checkbox) and individual row selection. Column hiding on mobile uses a `useResponsiveColumns` hook that checks viewport width against column `minWidth` configurations. The entire block is wrapped in a `Card` container with appropriate surface background and border.

## Best Practices

Define column `width` values to create a predictable layout and avoid layout shift when data loads. Make the most important columns non-hideable so they always display even on small screens. Use custom `render` functions for cells that need formatting — dates, currencies, status badges, and action buttons. Enable sorting only on columns where the sort is meaningful (sorting an avatar column is not useful). Provide a toolbar with a search input and at least one action (edit, delete, export) so the table feels like an interactive tool rather than a static report. For large datasets, always use server-side pagination with a loading skeleton to avoid crashing the browser.

## Limitations

Data-table-01 does not support inline editing, column resizing via drag, or row reordering. For those features, a dedicated spreadsheet or editable grid component is needed. The table renders all data rows for the current page in the DOM — for pages with complex custom cell renderers or more than 100 rows per page, consider virtualizing the rows externally. Column filtering (value-based filters, date range pickers) is not built in — add those through the toolbar slot with custom filter components. The responsive column hiding strategy removes columns in order from right to left, which may not always produce the optimal mobile layout.
