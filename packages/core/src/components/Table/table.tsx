import clsx from "clsx";
import type { ReactNode, ThHTMLAttributes, TdHTMLAttributes, TableHTMLAttributes } from "react";
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
  row,
} from "./table.css";
import { Box } from "../Box";

interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  color?: "secondary";
}

function Table({ className, color, ...props }: TableProps) {
  return (
    <Box className={clsx(wrapper, color && colorSecondary)}>
      <table className={clsx(root, color && colorSecondary, className)} {...props} />
    </Box>
  );
}

function TableHead({ className, ...props }: { className?: string; children?: ReactNode }) {
  return <thead className={clsx(head, className)} {...props} />;
}

function TableBody({ className, ...props }: { className?: string; children?: ReactNode }) {
  return <tbody className={className} {...props} />;
}

interface TableRowProps {
  className?: string;
  children?: ReactNode;
  [key: string]: unknown;
}

function TableRow({ className, ...props }: TableRowProps) {
  return <tr className={clsx(row, className)} {...props} />;
}

interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  align?: "left" | "center" | "right";
}

const headerCellAlignMap = {
  left: alignLeft,
  center: alignCenter,
  right: alignRight,
} as const;

function TableHeaderCell({ align, className, ...props }: TableHeaderCellProps) {
  return <th className={clsx(header, align && headerCellAlignMap[align], className)} {...props} />;
}

interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  align?: "left" | "center" | "right";
}

const cellAlignMap = {
  left: alignLeft,
  center: alignCenter,
  right: alignRight,
} as const;

function TableCell({ align, className, ...props }: TableCellProps) {
  return <td className={clsx(cell, align && cellAlignMap[align], className)} {...props} />;
}

export { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell };

export type { TableProps, TableHeaderCellProps, TableCellProps };
