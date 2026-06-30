import clsx from "clsx";
import type { ReactNode } from "react";
import {
  root,
  head,
  header,
  cell,
  wrapper,
  alignLeft,
  alignCenter,
  alignRight,
  colorSecondary,
} from "./table.css";
import * as tableCss from "./table.css";
import { Box } from "../Box";

export interface Column<TData> {
  key: keyof TData;
  header: ReactNode;
  cell?: (row: TData) => ReactNode;
  width?: string;
  align?: "left" | "center" | "right";
  cellProps?: Record<string, unknown>;
}

export interface TableProps<TData> {
  columnData: Column<TData>[];
  rowData: TData[];
  rowKey?: keyof TData & string;
  getRowProps?: (
    row: TData,
    index: number,
  ) => {
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    style?: React.CSSProperties;
    [key: string]: unknown;
  };
  style?: React.CSSProperties;
  className?: string;
  color?: "secondary";
}

const cellAlignMap = {
  left: alignLeft,
  center: alignCenter,
  right: alignRight,
} as const;

function getCellValue<TData>(col: Column<TData>, row: TData): React.ReactNode {
  if (col?.cell) {
    return col.cell(row);
  }
  return row[col.key] as React.ReactNode;
}

export function Table<TData>({
  columnData,
  rowData,
  rowKey,
  getRowProps,
  style,
  className,
  color,
}: TableProps<TData>) {
  return (
    <Box className={clsx(wrapper, color && colorSecondary, className)} style={style}>
      <table className={clsx(root, color && colorSecondary)}>
        <thead className={head}>
          <tr>
            {columnData.map((col) => (
              <th
                key={col.key.toString()}
                style={col.width ? { width: col.width } : undefined}
                className={clsx(header, col.align && cellAlignMap[col.align])}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rowData.map((dataRow, index) => {
            const key = rowKey ? (dataRow[rowKey] as string) : index.toString();
            const rowProps = getRowProps?.(dataRow, index);
            return (
              <tr
                key={key}
                {...rowProps}
                className={clsx(
                  tableCss.row,
                  (rowProps as Record<string, unknown> | undefined)?.className as
                    | string
                    | undefined,
                )}
              >
                {columnData.map((col) => (
                  <td
                    key={col.key.toString()}
                    {...col.cellProps}
                    className={clsx(
                      cell,
                      col.align && cellAlignMap[col.align],
                      (col.cellProps?.className as string | undefined) || undefined,
                    )}
                  >
                    {getCellValue(col, dataRow)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Box>
  );
}
