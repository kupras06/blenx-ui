## Overview

DataTable is a feature-rich table component built on @tanstack/react-table for sorting, filtering, pagination, column visibility toggle, row selection, infinite scroll, and server-side operations. It handles loading, empty, and error states natively. Use DataTable whenever you need to present tabular data that requires user interaction — sorting by columns, filtering rows, selecting items for batch operations, or paginating through large datasets. It is designed for data-dense interfaces like admin panels, reporting dashboards, and inventory management. Do not use DataTable for simple lists of fewer than ten items that do not require sorting or filtering; a plain Card or Stack layout is more appropriate. DataTable is also not suitable for complex tree data or nested row expansion without custom configuration.

## Usage

Define columns using the `columns` prop with accessor functions, header labels, and optional cell renderers. Pass data via the `data` prop. Sorting is enabled per-column by setting `enableSorting: true` in the column definition. Filtering works through column-level filter inputs or a global search control via `globalFilter`. For pagination, use the `pagination` prop with page size and page index state, or enable `infiniteScroll` for a load-more pattern. Row selection is exposed through `onRowSelectionChange` and the `rowSelection` prop. The table manages its internal state via @tanstack/react-table's state management, but you can control it externally through the `state` prop. Server-side mode passes sorting, filtering, and pagination state to your data fetching function via callbacks.

## Composition

DataTable fills the body of a `Card` or sits directly within a `Container`. The toolbar area above the table accepts `Button` components for batch actions, `Select` for page size control, and `Input` for global search. Columns can render any Blenx component as cell content — `Badge` for status indicators, `Icon` for actionable icons, `Button` for row-level actions, `Avatar` for user data, and `Checkbox` for row selection. The empty state renders a custom illustration or message passed via `emptyState` prop. Error state shows an `Alert` with a retry action.

## Best Practices

Define explicit column widths for critical columns and let non-critical columns flex. Key identifier columns (name, ID) and action columns should have fixed widths to remain readable. Use `enableSorting` selectively — not every column needs to be sortable, particularly columns with dates or complex formatted values. For server-side mode, debounce filter changes and preserve scroll position when data refreshes. Show loading skeletons that match the column structure rather than a generic spinner. For touch devices, ensure row actions are accessible through tap rather than hover-only menus.

## Common Mistakes

Putting too many columns in the table forces horizontal scrolling that obscures data relationships. Prioritize columns by user needs and consider a column visibility toggle for optional columns. Another mistake is implementing client-side pagination with server-side datasets — the entire dataset must be loaded into memory. Using complex cell renderers that re-render on every table state change causes performance issues. Memoize column definitions with `useMemo` or `useCallback`. Forgetting to handle the empty state with a meaningful message — a blank table is confusing.

## Design Guidelines

Table rows should have alternating or subtle hover backgrounds for readability. Column headers should be sticky when scrolling vertically. Sort indicators should clearly show the active sort direction with an arrow icon. Selected rows should have a distinct background color that is visible but not distracting. Pagination controls should show the total count and allow direct page input. The page size selector should offer options appropriate to the data density — 10, 25, 50, and 100 are standard. Loading states should preserve the table structure to prevent layout shift.

## Limitations

DataTable does not support column reordering via drag-and-drop out of the box. Editable cells require custom implementation using the cell renderer pattern. Tree or hierarchical data with expandable rows is not supported natively. The infinite scroll mode does not support reverse scrolling for chat-like interfaces. DataTable also does not provide built-in export to CSV or Excel — implement export logic separately using the current data and column definitions. The virtualization layer activates only after a configurable row threshold; extremely large datasets may need manual virtualizer configuration.
