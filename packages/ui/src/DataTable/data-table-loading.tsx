import { Spinner } from "../components";
import type { TableSize } from "./types";
import * as styles from "./data-table.css";

interface DataTableLoadingProps {
  rowCount?: number;
  columnCount?: number;
  size?: TableSize;
}

const ROW_HEIGHTS: Record<TableSize, number> = {
  sm: 36,
  md: 48,
  lg: 60,
};

export function DataTableLoading({
  rowCount = 5,
  columnCount = 4,
  size = "md",
}: DataTableLoadingProps) {
  const rowHeight = ROW_HEIGHTS[size];

  return (
    <output className={styles.loadingWrapper} aria-label="Loading table data">
      <table className={styles.loadingTable}>
        <thead>
          <tr>
            {Array.from({ length: columnCount }).map((_, i) => (
              <th key={`skeleton-header-${i.toString()}`} className={styles.headerCell}>
                <div
                  className={styles.skeletonBar}
                  style={{ height: 14, width: `${60 + ((i * 10) % 40)}px` }}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rowCount }).map((_unknown, rowIdx) => (
            <tr key={`skeleton-row-${rowIdx.toString()}`}>
              {Array.from({ length: columnCount }).map((_, colIdx) => (
                <td
                  key={`skeleton-cell-${rowIdx.toString()}-${colIdx.toString()}`}
                  className={styles.cell}
                  style={{ height: rowHeight }}
                >
                  <div
                    className={styles.skeletonBar}
                    style={{
                      height: 12,
                      width: `${80 + ((rowIdx * 7 + colIdx * 13) % 20)}%`,
                    }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.loadingFooter}>
        <Spinner />
        <span className={styles.loadingText}>Loading data...</span>
      </div>
    </output>
  );
}
