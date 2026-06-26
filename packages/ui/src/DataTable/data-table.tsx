import { CaretDownIcon, CaretUpIcon } from "@phosphor-icons/react";
import clsx from "clsx";
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
import { Button, Spinner } from "../components";
import * as styles from "./data-table.css";

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
      className={styles.checkbox}
    />
  );
}

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

      <div ref={tableContainerRef} onScroll={handleScroll} className={styles.tableContainer}>
        <table className={styles.table} aria-label="Data table">
          <thead
            className={
              features.stickyHeader
                ? isScrolled
                  ? styles.theadStickyScrolled
                  : styles.theadSticky
                : styles.theadStatic
            }
          >
            {headerGroups.map((hg) => (
              <tr key={hg.id} className={styles.headRow}>
                {hg.headers.map((header) => {
                  const isSorted = header.column.getIsSorted();
                  const isSortable = header.column.getCanSort();
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className={clsx(
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
                      <div className={styles.thContent}>
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
                <td colSpan={stableColumns.length} className={styles.emptyTd}>
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
                    className={clsx(
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
                        className={clsx(
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
        <div className={styles.fetchingBar}>
          <Spinner />
          <span className={styles.fetchingText}>Updating...</span>
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

interface RowActionsCellProps<TData> {
  row: Row<TData>;
  actions: RowAction<TData>[];
}

function RowActionsCell<TData>({ row, actions }: RowActionsCellProps<TData>) {
  return (
    <div className={styles.actionsCell}>
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
