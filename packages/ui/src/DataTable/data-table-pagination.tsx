import { Button } from "@blenx-dev/ui/components";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { fontSize, spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import type { Table } from "@tanstack/react-table";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

/**
 * Pagination controls for the DataTable.
 * Provides page navigation, page info, and smart page number display with ellipsis.
 */
export function DataTablePagination<TData>({ table }: DataTablePaginationProps<TData>) {
  const { pageIndex } = table.getState().pagination;
  const pageCount = table.getPageCount();
  const totalRows = table.getPrePaginationRowModel().rows.length;
  const { pageSize } = table.getState().pagination;
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, totalRows);
  const canPreviousPage = table.getCanPreviousPage();
  const canNextPage = table.getCanNextPage();

  return (
    <nav aria-label="Pagination" {...stylex.props(styles.nav)}>
      <span {...stylex.props(styles.info)}>{totalRows} results</span>
      <div {...stylex.props(styles.controls)}>
        <span {...stylex.props(styles.range)}>
          {startRow}-{endRow} of {totalRows}
        </span>
        <div {...stylex.props(styles.buttonGroup)}>
          <Button
            variant="outline"
            size="small"
            disabled={!canPreviousPage}
            onClick={() => table.previousPage()}
            aria-label="Previous page"
          >
            <CaretLeftIcon size={16} />
          </Button>
          {Array.from({ length: pageCount }, (_, i) => i + 1)
            .filter((page) => {
              const current = pageIndex + 1;
              if (pageCount <= 7) return true;
              if (page === 1 || page === pageCount) return true;
              if (Math.abs(page - current) <= 1) return true;
              return false;
            })
            .map((page, idx, filtered) => {
              const pageIdx = page - 1;
              const isActive = pageIdx === pageIndex;
              const showGap = idx > 0 && page - filtered[idx - 1] > 1;
              return (
                <div key={`page-${page.toString()}`} {...stylex.props(styles.pageWrap)}>
                  {showGap && <span {...stylex.props(styles.ellipsis)}>...</span>}
                  <Button
                    variant={isActive ? "solid" : "ghost"}
                    intent={isActive ? "primary" : undefined}
                    size="small"
                    disabled={isActive}
                    onClick={() => table.setPageIndex(pageIdx)}
                    aria-label={`Page ${page.toString()}`}
                    aria-current={isActive ? "page" : undefined}
                    {...stylex.props(styles.pageButton)}
                  >
                    {page.toString()}
                  </Button>
                </div>
              );
            })}
          <Button
            variant="outline"
            size="small"
            disabled={!canNextPage}
            onClick={() => table.nextPage()}
            aria-label="Next page"
          >
            <CaretRightIcon size={16} />
          </Button>
        </div>
      </div>
    </nav>
  );
}

const styles = stylex.create({
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: spacing.small,
    paddingBottom: spacing.small,
  },
  info: {
    color: theme.contentSecondary,
    fontSize: fontSize.small,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    gap: spacing.small,
  },
  range: {
    color: theme.contentSecondary,
    fontSize: fontSize.small,
    whiteSpace: "nowrap",
  },
  buttonGroup: {
    display: "flex",
    alignItems: "center",
    gap: spacing.xsmall,
  },
  pageWrap: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  ellipsis: {
    color: theme.contentDisabled,
    fontSize: fontSize.small,
    paddingLeft: spacing.xsmall,
    paddingRight: spacing.xsmall,
  },
  pageButton: {
    minWidth: 32,
    height: 32,
  },
});
