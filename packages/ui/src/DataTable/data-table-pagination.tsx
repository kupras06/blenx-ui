import { Button } from "../components";
import { CaretLeftIcon, CaretRightIcon } from "@phosphor-icons/react";
import type { Table } from "@tanstack/react-table";
import * as styles from "./data-table.css";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

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
    <nav aria-label="Pagination" className={styles.nav}>
      <span className={styles.info}>{totalRows} results</span>
      <div className={styles.controls}>
        <span className={styles.range}>
          {startRow}-{endRow} of {totalRows}
        </span>
        <div className={styles.buttonGroup}>
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
              const showGap = idx > 0 && page - filtered[idx - 1]! > 1;
              return (
                <div key={`page-${page.toString()}`} className={styles.pageWrap}>
                  {showGap && <span className={styles.ellipsis}>...</span>}
                  <Button
                    variant={isActive ? "solid" : "ghost"}
                    intent={isActive ? "primary" : undefined}
                    size="small"
                    disabled={isActive}
                    onClick={() => table.setPageIndex(pageIdx)}
                    aria-label={`Page ${page.toString()}`}
                    aria-current={isActive ? "page" : undefined}
                    className={styles.pageButton}
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
