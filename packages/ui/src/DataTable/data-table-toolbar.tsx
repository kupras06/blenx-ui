import { Button, Input } from "@blenx-dev/ui/components";
import { spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";
import * as stylex from "@stylexjs/stylex";
import type { Table } from "@tanstack/react-table";
import { DataTableColumnToggle } from "./data-table-column-toggle";
import type { BulkAction, TableFeatures } from "./types";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  features?: TableFeatures;
  globalSearch?: string;
  onGlobalSearchChange?: (value: string) => void;
  customToolbar?: React.ReactNode;
  bulkActions?: BulkAction<TData>[];
  selectedRows: TData[];
}

/**
 * Toolbar for the DataTable.
 * Renders global search, column toggle, bulk actions, and custom toolbar slot.
 */
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
    <div {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.leftGroup)}>
        {features?.globalSearch && (
          <div {...stylex.props(styles.searchWrap)}>
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
      <div {...stylex.props(styles.rightGroup)}>
        {customToolbar}
        {features?.columnVisibility && <DataTableColumnToggle table={table} />}
      </div>
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: spacing.medium,
    paddingTop: spacing.small,
    paddingBottom: spacing.small,
  },
  leftGroup: {
    display: "flex",
    alignItems: "center",
    gap: spacing.small,
    flex: 1,
  },
  rightGroup: {
    display: "flex",
    alignItems: "center",
    gap: spacing.small,
  },
  searchWrap: {
    flex: 1,
    maxWidth: 320,
  },
});
