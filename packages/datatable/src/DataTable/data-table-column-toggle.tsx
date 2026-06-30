import type { Table } from "@tanstack/react-table";
import * as styles from "./data-table.css";
import { Button, Menu, MenuItem, MenuPopup, MenuSeparator, MenuTrigger } from "@blenx-dev/core";
import { SquareCheckIcon, ListIcon } from "@blenx-dev/core/icons";

interface DataTableColumnToggleProps<TData> {
  table: Table<TData>;
}

export function DataTableColumnToggle<TData>({ table }: DataTableColumnToggleProps<TData>) {
  const columns = table.getAllLeafColumns().filter((column) => column.getCanHide());

  if (columns.length === 0) return null;

  const allVisible = columns.every((column) => column.getIsVisible());
  const someVisible = columns.some((column) => column.getIsVisible());

  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline" size="sm" />}>
        <ListIcon />
        <span>Columns</span>
      </MenuTrigger>
      <MenuPopup align="end">
        <MenuItem
          onClick={() => {
            for (const column of columns) {
              column.toggleVisibility(allVisible);
            }
          }}
        >
          <span className={styles.deselectLabel}>{allVisible ? "Deselect all" : "Select all"}</span>
          <span className={allVisible ? styles.checkboxChecked : styles.checkboxUnchecked}>
            {allVisible && <CheckMark />}
            {!allVisible && someVisible && <div className={styles.partial} />}
          </span>
        </MenuItem>
        <MenuSeparator />
        {columns.map((column) => {
          const label = column.columnDef.header?.toString() ?? column.id;
          const isVisible = column.getIsVisible();
          return (
            <MenuItem key={column.id} onClick={() => column.toggleVisibility(!isVisible)}>
              <span className={styles.itemLabel}>{label}</span>
              <span className={isVisible ? styles.checkboxChecked : styles.checkboxUnchecked}>
                {isVisible && <CheckMark />}
              </span>
            </MenuItem>
          );
        })}
      </MenuPopup>
    </Menu>
  );
}

function CheckMark() {
  return <SquareCheckIcon />;
}
