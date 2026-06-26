import { Button, Input } from "../components";
import type { Table } from "@tanstack/react-table";
import { DataTableColumnToggle } from "./data-table-column-toggle";
import type { BulkAction, TableFeatures } from "./types";
import * as styles from "./data-table.css";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  features?: TableFeatures;
  globalSearch?: string;
  onGlobalSearchChange?: (value: string) => void;
  customToolbar?: React.ReactNode;
  bulkActions?: BulkAction<TData>[];
  selectedRows: TData[];
}

export function DataTableToolbar<TData>({
  table,
  features,
  globalSearch,
  onGlobalSearchChange,
  customToolbar,
  bulkActions,
  selectedRows,
}: DataTableToolbarProps<TData>) {
  return (
    <div className={styles.toolbarContainer}>
      <div className={styles.leftGroup}>
        {features?.globalSearch && (
          <div className={styles.searchWrap}>
            <Input
              size="sm"
              placeholder="Search..."
              value={globalSearch ?? ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onGlobalSearchChange?.(e.target.value);
              }}
            />
          </div>
        )}
        {selectedRows.length > 0 &&
          bulkActions?.map((action, index) => (
            <Button
              key={`bulk-action-${index.toString()}`}
              variant={action.variant === "destructive" ? "solid" : "outline"}
              intent={action.variant === "destructive" ? "danger" : undefined}
              size="small"
              disabled={action.disabled}
              onClick={() => action.onClick(selectedRows)}
            >
              {action.icon && <span>{action.icon}</span>}
              {action.label}
            </Button>
          ))}
      </div>
      <div className={styles.rightGroup}>
        {customToolbar}
        {features?.columnVisibility && <DataTableColumnToggle table={table} />}
      </div>
    </div>
  );
}
