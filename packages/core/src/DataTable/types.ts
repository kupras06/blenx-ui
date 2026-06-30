import type {
  ColumnDef,
  ColumnFiltersState,
  OnChangeFn,
  PaginationState,
  RowSelectionState,
  SortingState,
  TableOptions,
  VisibilityState,
} from "@tanstack/react-table";
import type { ReactNode } from "react";

// ─── Data loading modes ──────────────────────────────────────────────────────

export type TableMode = "client" | "server" | "infinite";

// ─── Server-state metadata ───────────────────────────────────────────────────

export interface ServerTableState {
  pagination: PaginationState;
  sorting: SortingState;
  columnFilters: ColumnFiltersState;
  globalFilter: string;
}

export interface ServerTableResponse<TData> {
  rows: TData[];
  totalCount: number;
  pageCount: number;
}

// ─── Feature configuration ───────────────────────────────────────────────────

export interface TableFeatures {
  sorting?: boolean;
  globalSearch?: boolean;
  pagination?: boolean;
  columnVisibility?: boolean;
  rowSelection?: boolean;
  columnResizing?: boolean;
  columnPinning?: boolean;
  stickyHeader?: boolean;
  rowActions?: boolean;
  bulkActions?: boolean;
}

// ─── Infinite scroll configuration ───────────────────────────────────────────

export type InfiniteScrollMode = "auto" | "manual";

export interface InfiniteScrollConfig {
  mode: InfiniteScrollMode;
  /** Root margin for IntersectionObserver. Default: "200px" */
  rootMargin?: string;
  /** IntersectionObserver threshold. Default: 0 */
  threshold?: number;
  /** Load-more button text for manual mode. Default: "Load more" */
  loadMoreText?: string;
  /** Loading text. Default: "Loading..." */
  loadingText?: string;
  /** No more data text. Default: "No more results" */
  noMoreText?: string;
}

// ─── Column pinning configuration ────────────────────────────────────────────

export interface ColumnPinningOptions {
  left?: string[];
  right?: string[];
}

// ─── Row action ──────────────────────────────────────────────────────────────

export interface RowAction<TData> {
  label: string;
  icon?: ReactNode;
  onClick: (row: TData) => void;
  disabled?: boolean | ((row: TData) => boolean);
  variant?: "default" | "destructive";
}

// ─── Bulk action ─────────────────────────────────────────────────────────────

export interface BulkAction<TData> {
  label: string;
  icon?: ReactNode;
  onClick: (selectedRows: TData[]) => void;
  disabled?: boolean;
  variant?: "default" | "destructive";
}

// ─── Component slots ─────────────────────────────────────────────────────────

export interface TableSlots<TData> {
  toolbar?: ReactNode;
  pagination?: ReactNode;
  empty?: ReactNode;
  loading?: ReactNode;
  error?: ReactNode;
  rowActions?: (row: TData) => ReactNode;
  bulkActions?: (selectedRows: TData[]) => ReactNode;
}

// ─── State callbacks ─────────────────────────────────────────────────────────

export interface TableCallbacks<TData> {
  onSortingChange?: OnChangeFn<SortingState>;
  onPaginationChange?: OnChangeFn<PaginationState>;
  onGlobalFilterChange?: OnChangeFn<string>;
  onColumnFiltersChange?: OnChangeFn<ColumnFiltersState>;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
  onRowClick?: (row: TData) => void;
}

// ─── Table size ──────────────────────────────────────────────────────────────

export type TableSize = "sm" | "md" | "lg";

// ─── DataTable unified props ─────────────────────────────────────────────────

export interface DataTableProps<TData extends Record<string, unknown>> {
  // ── Data ──
  columns: ColumnDef<TData, unknown>[];
  data: TData[] | undefined;
  totalCount?: number;
  pageCount?: number;

  // ── Mode ──
  mode?: TableMode;

  // ── States ──
  isLoading?: boolean;
  isFetching?: boolean;
  isError?: boolean;
  errorMessage?: string;

  // ── TanStack Query integration (server + infinite) ──
  fetchNextPage?: () => void;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;

  // ── Configuration ──
  features?: TableFeatures;
  size?: TableSize;
  infiniteScroll?: InfiniteScrollConfig;
  columnPinning?: ColumnPinningOptions;

  // ── Slots ──
  slots?: TableSlots<TData>;
  rowActions?: RowAction<TData>[];

  // ── State ──
  initialSorting?: SortingState;
  initialPagination?: PaginationState;
  initialColumnFilters?: ColumnFiltersState;
  initialGlobalFilter?: string;
  initialColumnVisibility?: VisibilityState;
  initialRowSelection?: RowSelectionState;

  // ── Callbacks ──
  callbacks?: TableCallbacks<TData>;

  // ── Table options override ──
  tableOptions?: Partial<TableOptions<TData>>;

  // ── Styles ──
  className?: string;
  style?: React.CSSProperties;
}
