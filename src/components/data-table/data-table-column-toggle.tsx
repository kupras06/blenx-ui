import {
	Button,
	Menu,
	MenuItem,
	MenuPopup,
	MenuSeparator,
	MenuTrigger,
} from "@/components/ui";
import { theme } from "@/lib/theme/contract.stylex";
import { ListIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import type { Table } from "@tanstack/react-table";

interface DataTableColumnToggleProps<TData> {
	table: Table<TData>;
}

/**
 * Column visibility toggle menu.
 * Renders a dropdown menu with checkboxes for each column.
 */
export function DataTableColumnToggle<TData>({
	table,
}: DataTableColumnToggleProps<TData>) {
	const columns = table
		.getAllLeafColumns()
		.filter((column) => column.getCanHide());

	if (columns.length === 0) return null;

	const allVisible = columns.every((column) => column.getIsVisible());
	const someVisible = columns.some((column) => column.getIsVisible());

	return (
		<Menu>
			<MenuTrigger render={<Button variant="outline" size="small" />}>
				<ListIcon size={16} />
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
					<span {...stylex.props(styles.deselectLabel)}>
						{allVisible ? "Deselect all" : "Select all"}
					</span>
					<span
						{...stylex.props(
							styles.checkbox(allVisible ? "checked" : "unchecked"),
						)}
					>
						{allVisible && <CheckMark />}
						{!allVisible && someVisible && (
							<div {...stylex.props(styles.partial)} />
						)}
					</span>
				</MenuItem>
				<MenuSeparator />
				{columns.map((column) => {
					const label = column.columnDef.header?.toString() ?? column.id;
					const isVisible = column.getIsVisible();
					return (
						<MenuItem
							key={column.id}
							onClick={() => column.toggleVisibility(!isVisible)}
						>
							<span {...stylex.props(styles.itemLabel)}>{label}</span>
							<span
								{...stylex.props(
									styles.checkbox(isVisible ? "checked" : "unchecked"),
								)}
							>
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
	return (
		<svg
			width="12"
			height="12"
			viewBox="0 0 24 24"
			fill="none"
			stroke={theme.contentOnPrimary}
			strokeWidth="3"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<title>Visible</title>
			<polyline points="20 6 9 17 4 12" />
		</svg>
	);
}

const styles = stylex.create({
	itemLabel: {
		fontSize: 14,
	},
	deselectLabel: {
		color: theme.contentSecondary,
		fontSize: 13,
	},
	checkbox: (state: "checked" | "unchecked") => ({
		marginLeft: "auto",
		width: 16,
		height: 16,
		borderRadius: 3,
		borderWidth: 1.5,
		borderStyle: "solid",
		borderColor: state === "checked" ? theme.primary : theme.border,
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: state === "checked" ? theme.primary : "transparent",
	}),
	partial: {
		width: 8,
		height: 2,
		borderRadius: 1,
		backgroundColor: theme.contentSecondary,
	},
});
