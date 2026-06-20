// oxlint-disable max-statements
import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type PaginationState,
  type Row,
  type RowSelectionState,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from "@tanstack/react-table";
import { type UIEvent, useCallback, useMemo, useRef, useState } from "react";
import { DataTableEmpty } from "./data-table-empty";
import { DataTableError } from "./data-table-error";
import { DataTableInfiniteLoader } from "./data-table-infinite-loader";
import { DataTableLoading } from "./data-table-loading";
import { DataTablePagination } from "./data-table-pagination";
import { DataTableToolbar } from "./data-table-toolbar";
import type { DataTableProps, RowAction, TableFeatures } from "./types";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { fontSize, fontWeight, spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";
import { Button, Spinner } from "@blenx-dev/ui/components";

// ─── Size constants ──────────────────────────────────────────────────────────

const DEFAULT_FEATURES: TableFeatures = {
  sorting: true,
  globalSearch: true,
  pagination: true,
  columnVisibility: true,
  rowSelection: false,
  columnResizing: false,
  columnPinning: false,
  stickyHeader: false,
  rowActions: false,
  bulkActions: false,
};

// ─── Indeterminate checkbox ──────────────────────────────────────────────────

function IndeterminateCheckbox({
  checked,
  indeterminate,
  onChange,
  label,
}: {
  checked: boolean;
  indeterminate: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
}) {
  const ref = useRef<HTMLInputElement>(null);
  useMemo(() => {
    if (ref.current) {
      ref.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <input
      ref={ref}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      aria-label={label}
      {...stylex.props(styles.checkbox)}
    />
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
function useDataTableStates<TData extends Record<string, unknown>>(
  props: Partial<DataTableProps<TData>>,
) {
  const [sorting, setSorting] = useState<SortingState>(props.initialSorting ?? []);
  const [pagination, setPagination] = useState<PaginationState>(
    props.initialPagination ?? { pageIndex: 0, pageSize: 10 },
  );
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    props.initialColumnFilters ?? [],
  );
  const [globalFilter, setGlobalFilter] = useState(props.initialGlobalFilter ?? "");
  const [rowSelection, setRowSelection] = useState<RowSelectionState>(
    props.initialRowSelection ?? {},
  );

  const handlePaginationChange = useCallback(
    (v: PaginationState | ((old: PaginationState) => PaginationState)) => {
      const next = typeof v === "function" ? v(pagination) : v;
      setPagination(next);
      props.callbacks?.onPaginationChange?.(next);
    },
    [pagination, props.callbacks],
  );
  const handleSortingChange = useCallback(
    (v: SortingState | ((old: SortingState) => SortingState)) => {
      const next = typeof v === "function" ? v(sorting) : v;
      setSorting(next);
      props.callbacks?.onSortingChange?.(next);
      if (props.mode === "server") setPagination((p) => ({ ...p, pageIndex: 0 }));
    },
    [sorting, props.callbacks, props.mode],
  );

  const handleGlobalFilterChange = useCallback(
    (value: string) => {
      setGlobalFilter(value);
      props.callbacks?.onGlobalFilterChange?.(value);
      setPagination((p) => ({ ...p, pageIndex: 0 }));
    },
    [props.callbacks],
  );

  const handleColumnFiltersChange = useCallback(
    (v: ColumnFiltersState | ((old: ColumnFiltersState) => ColumnFiltersState)) => {
      const next = typeof v === "function" ? v(columnFilters) : v;
      setColumnFilters(next);
      props.callbacks?.onColumnFiltersChange?.(next);
    },
    [columnFilters, props.callbacks],
  );

  const handleRowSelectionChange = useCallback(
    (v: RowSelectionState | ((old: RowSelectionState) => RowSelectionState)) => {
      const next = typeof v === "function" ? v(rowSelection) : v;
      setRowSelection(next);
      props.callbacks?.onRowSelectionChange?.(next);
    },
    [rowSelection, props.callbacks],
  );
  return {
    sorting,
    handleSortingChange,
    columnFilters,
    handleColumnFiltersChange,
    pagination,
    handlePaginationChange,
    globalFilter,
    handleGlobalFilterChange,
    rowSelection,
    handleRowSelectionChange,
  };
}
export function DataTable<TData extends Record<string, unknown>>({
  columns,
  data,
  pageCount,
  mode = "client",
  isLoading,
  isFetching,
  isError,
  errorMessage,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  features: featuresProp,
  size = "md",
  infiniteScroll,
  columnPinning,
  slots,
  rowActions,
  initialSorting,
  initialPagination,
  initialColumnFilters,
  initialGlobalFilter,
  initialColumnVisibility,
  initialRowSelection,
  callbacks,
  tableOptions,
  className,
  style,
}: DataTableProps<TData>) {
  const features = useMemo(() => ({ ...DEFAULT_FEATURES, ...featuresProp }), [featuresProp]);

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(
    initialColumnVisibility ?? {},
  );
  const {
    sorting,
    handleSortingChange,
    pagination,
    handlePaginationChange,
    columnFilters,
    handleColumnFiltersChange,
    globalFilter,
    handleGlobalFilterChange,
    rowSelection,
    handleRowSelectionChange,
  } = useDataTableStates({
    initialPagination,
    initialSorting,
    initialColumnFilters,
    initialGlobalFilter,
    initialColumnVisibility,
    initialRowSelection,
    callbacks,
    mode,
  });

  const stableColumns = useMemo(() => {
    let result: ColumnDef<TData, unknown>[] = columns;

    if (features.rowSelection) {
      result = [
        {
          id: "select",
          header: ({ table }) => (
            <IndeterminateCheckbox
              checked={table.getIsAllPageRowsSelected()}
              indeterminate={table.getIsSomePageRowsSelected()}
              onChange={table.getToggleAllPageRowsSelectedHandler()}
              label="Select all rows"
            />
          ),
          cell: ({ row }) => (
            <IndeterminateCheckbox
              checked={row.getIsSelected()}
              indeterminate={row.getIsSomeSelected()}
              onChange={row.getToggleSelectedHandler()}
              label={`Select row ${row.id}`}
            />
          ),
          enableSorting: false,
          enableHiding: false,
          size: 40,
        } satisfies ColumnDef<TData, unknown>,
        ...result,
      ];
    }

    if (features.rowActions && rowActions && rowActions.length > 0) {
      result = [
        ...result,
        {
          id: "actions",
          header: "Actions",
          cell: ({ row }) => <RowActionsCell row={row} actions={rowActions} />,
          enableSorting: false,
          enableHiding: false,
          size: 80,
        } satisfies ColumnDef<TData, unknown>,
      ];
    }

    return result;
  }, [columns, features.rowSelection, features.rowActions, rowActions]);

  const displayedData = useMemo(() => data ?? [], [data]);
  const enablePagination = features.pagination && mode !== "infinite";

  const table = useReactTable<TData>({
    data: displayedData,
    columns: stableColumns,
    state: {
      sorting,
      pagination: enablePagination ? pagination : undefined,
      columnFilters,
      globalFilter,
      rowSelection,
      columnVisibility,
      columnPinning: {
        left: columnPinning?.left ?? [],
        right: columnPinning?.right ?? [],
      },
    },
    onSortingChange: handleSortingChange,
    onPaginationChange: handlePaginationChange,
    onColumnFiltersChange: handleColumnFiltersChange,
    onGlobalFilterChange: handleGlobalFilterChange,
    onRowSelectionChange: handleRowSelectionChange,
    onColumnVisibilityChange: setColumnVisibility,
    enableRowSelection: features.rowSelection,
    enableSorting: features.sorting,
    enableColumnResizing: features.columnResizing,
    enableColumnPinning: features.columnPinning,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: features.sorting ? getSortedRowModel() : undefined,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel:
      enablePagination && mode === "client" ? getPaginationRowModel() : undefined,
    getExpandedRowModel: getExpandedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    manualPagination: mode === "server",
    manualSorting: mode === "server",
    manualFiltering: mode === "server",
    pageCount: mode === "server" ? (pageCount ?? 0) : undefined,
    autoResetPageIndex: false,
    ...tableOptions,
  } as Parameters<typeof useReactTable<TData>>[0]);

  const selectedRowModel = table.getSelectedRowModel();
  const selectedRows = useMemo(
    () => selectedRowModel.rows.map((r) => r.original),
    [selectedRowModel.rows],
  );
  const { rows } = table.getRowModel();
  const headerGroups = table.getHeaderGroups();

  const showPagination = enablePagination && mode === "client" && rows.length > 0;
  const showInfiniteLoader = mode === "infinite" && fetchNextPage;
  const showToolbar =
    features.globalSearch ||
    features.columnVisibility ||
    slots?.toolbar ||
    (features.bulkActions && selectedRows.length > 0);

  const tableContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = useCallback((e: UIEvent<HTMLDivElement>) => {
    setIsScrolled((e.target as HTMLDivElement).scrollTop > 0);
  }, []);

  const emptyState = useMemo(() => slots?.empty ?? <DataTableEmpty />, [slots?.empty]);
  const loadingState = useMemo(
    () => slots?.loading ?? <DataTableLoading columnCount={stableColumns.length} size={size} />,
    [slots?.loading, stableColumns.length, size],
  );
  const errorState = useMemo(
    () => slots?.error ?? <DataTableError message={errorMessage} />,
    [slots?.error, errorMessage],
  );

  if (isError) return <div className={className}>{errorState}</div>;
  if (isLoading) return <div className={className}>{loadingState}</div>;

  return (
    <div className={className} style={style}>
      {showToolbar && (
        <DataTableToolbar
          table={table}
          features={features}
          globalSearch={globalFilter}
          onGlobalSearchChange={handleGlobalFilterChange}
          customToolbar={slots?.toolbar}
          bulkActions={
            features.bulkActions
              ? ((
                  tableOptions as {
                    bulkActions?: {
                      label: string;
                      onClick: (rows: TData[]) => void;
                    }[];
                  }
                )?.bulkActions ?? undefined)
              : undefined
          }
          selectedRows={selectedRows}
        />
      )}

      <div ref={tableContainerRef} onScroll={handleScroll} {...stylex.props(styles.tableContainer)}>
        <table {...stylex.props(styles.table)} aria-label="Data table">
          <thead
            {...stylex.props(
              features.stickyHeader
                ? isScrolled
                  ? styles.theadStickyScrolled
                  : styles.theadSticky
                : styles.theadStatic,
            )}
          >
            {headerGroups.map((hg) => (
              <tr key={hg.id} {...stylex.props(styles.headRow)}>
                {hg.headers.map((header) => {
                  const isSorted = header.column.getIsSorted();
                  const isSortable = header.column.getCanSort();
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      {...stylex.props(
                        styles.th,
                        size === "sm" && styles.thSm,
                        size === "lg" && styles.thLg,
                        isSortable && styles.thSortable,
                      )}
                      onClick={isSortable ? header.column.getToggleSortingHandler() : undefined}
                      aria-sort={
                        isSorted === "asc"
                          ? "ascending"
                          : isSorted === "desc"
                            ? "descending"
                            : undefined
                      }
                      aria-label={
                        isSortable
                          ? `Sort by ${header.column.columnDef.header?.toString() ?? header.id}`
                          : undefined
                      }
                    >
                      <div {...stylex.props(styles.thContent)}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                        {isSorted === "asc" && <CaretUpIcon size={10} aria-hidden="true" />}
                        {isSorted === "desc" && <CaretDownIcon size={10} aria-hidden="true" />}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={stableColumns.length} {...stylex.props(styles.emptyTd)}>
                  {emptyState}
                </td>
              </tr>
            ) : (
              rows.map((row) => {
                const selected = row.getIsSelected();
                return (
                  <tr
                    key={row.id}
                    onClick={() => callbacks?.onRowClick?.(row.original)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") callbacks?.onRowClick?.(row.original);
                    }}
                    tabIndex={callbacks?.onRowClick ? 0 : undefined}
                    role={callbacks?.onRowClick ? "button" : undefined}
                    {...stylex.props(
                      styles.tr,
                      size === "sm" && styles.trSm,
                      size === "lg" && styles.trLg,
                      selected && styles.trSelected,
                    )}
                    aria-selected={selected}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        {...stylex.props(
                          styles.td,
                          size === "sm" && styles.tdSm,
                          size === "lg" && styles.tdLg,
                        )}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {isFetching && !isFetchingNextPage && mode !== "client" && (
        <div {...stylex.props(styles.fetchingBar)}>
          <Spinner />
          <span {...stylex.props(styles.fetchingText)}>Updating...</span>
        </div>
      )}

      {showPagination && <DataTablePagination table={table} />}

      {showInfiniteLoader && (
        <DataTableInfiniteLoader
          fetchNextPage={fetchNextPage}
          hasNextPage={Boolean(hasNextPage)}
          isFetchingNextPage={Boolean(isFetchingNextPage)}
          isFetching={isFetching}
          config={infiniteScroll}
        />
      )}
    </div>
  );
}

// ─── Row actions cell ────────────────────────────────────────────────────────

interface RowActionsCellProps<TData> {
  row: Row<TData>;
  actions: RowAction<TData>[];
}

function RowActionsCell<TData>({ row, actions }: RowActionsCellProps<TData>) {
  return (
    <div {...stylex.props(styles.actionsCell)}>
      {actions.map((action, i) => {
        const isDisabled =
          typeof action.disabled === "function" ? action.disabled(row.original) : action.disabled;
        return (
          <Button
            key={`row-action-${i.toString()}`}
            variant="ghost"
            size="small"
            disabled={isDisabled}
            onClick={(e) => {
              e.stopPropagation();
              action.onClick(row.original);
            }}
            aria-label={action.label}
          >
            {action.icon && <span>{action.icon}</span>}
            {action.label}
          </Button>
        );
      })}
    </div>
  );
}

// ─── Stylex styles ───────────────────────────────────────────────────────────

const styles = stylex.create({
  tableContainer: {
    overflowX: "auto",
    overflowY: "auto",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.border,
    position: "relative",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    tableLayout: "auto",
  },
  theadStatic: {},
  theadSticky: {
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  theadStickyScrolled: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    boxShadow: theme.shadowSm,
  },
  headRow: {
    backgroundColor: theme.backgroundSubtle,
  },
  th: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: "12px",
    fontWeight: fontWeight.semibold,
    color: theme.contentSecondary,
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: theme.border,
    whiteSpace: "nowrap",
    userSelect: "none",
  },
  thSm: {
    fontSize: "11px",
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 8,
  },
  thLg: {
    fontSize: "13px",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 16,
    paddingRight: 16,
  },
  thSortable: {
    cursor: "pointer",
  },
  thContent: {
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  emptyTd: {
    padding: 0,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: theme.border,
  },
  tr: {
    transition: "background-color 0.15s ease",
  },
  trSm: { height: 36 },
  trLg: { height: 60 },
  trSelected: {
    backgroundColor: theme.backgroundSubtle,
  },
  td: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    fontSize: fontSize.small,
    color: theme.contentPrimary,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: theme.borderSubtle,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  tdSm: {
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 8,
    paddingRight: 8,
  },
  tdLg: {
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 16,
    paddingRight: 16,
  },
  fetchingBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.small,
    gap: spacing.small,
  },
  fetchingText: {
    color: theme.contentSecondary,
    fontSize: "13px",
  },
  checkbox: {
    cursor: "pointer",
  },
  actionsCell: {
    display: "flex",
    gap: 4,
  },
});
