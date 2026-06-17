import type { StyleXStyles } from "@stylexjs/stylex";
import * as stylex from "@stylexjs/stylex";
import type { ReactNode } from "react";
import { tableColorStyles, tableStyles } from "./table.styles";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface Column<TData> {
	/** Unique identifier for the column */
	key: keyof TData;
	/** Header label */
	header: ReactNode;
	/** Render function for the cell */
	cell?: (row: TData) => ReactNode;
	/** Optional custom width */
	width?: string;
	/** Optional text alignment */
	align?: "left" | "center" | "right";
	/** Extra props to spread onto each <td> for this column */
	cellProps?: Record<string, unknown>;
}

export interface TableProps<TData> {
	columnData: Column<TData>[];
	rowData: TData[];
	/** Optional stable row key (field name). Defaults to index. */
	rowKey?: keyof TData & string;
	/** Optional callback for per-row props (events, styles, attributes) */
	getRowProps?: (
		row: TData,
		index: number,
	) => {
		onMouseEnter?: () => void;
		onMouseLeave?: () => void;
		style?: React.CSSProperties;
		[key: string]: unknown;
	};
	/** Optional wrapper box style */
	style?: StyleXStyles;
	className?: string;
	color?: "secondary";
}

// ─── Internal styled sub-components ──────────────────────────────────────────

const cellAlignStyles = stylex.create({
	left: { textAlign: "left" },
	center: { textAlign: "center" },
	right: { textAlign: "right" },
});

/**
 * A simple styled Table component.
 *
 * Takes column definitions and row data and renders a styled HTML table.
 * No pagination, sorting, or filtering — just a styled presentation layer.
 *
 * @example
 * ```tsx
 * <Table
 *   columnData={[
 *     { key: 'name', header: 'Name', cell: (row) => row.name },
 *     { key: 'email', header: 'Email', cell: (row) => row.email },
 *   ]}
 *   rowData={users}
 *   rowKey="id"
 * />
 * ```
 */
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
		<div
			{...stylex.props(
				tableStyles.wrapper,
				color && tableColorStyles[color],
				style,
			)}
			className={className}
		>
			<table
				{...stylex.props(tableStyles.root, color && tableColorStyles[color])}
			>
				<thead {...stylex.props(tableStyles.head)}>
					<tr>
						{columnData.map((col) => (
							<th
								key={col.key.toString()}
								style={col.width ? { width: col.width } : undefined}
								{...stylex.props(
									tableStyles.header,
									col.align && cellAlignStyles[col.align],
								)}
							>
								{col.header}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{rowData.map((row, index) => {
						const key = rowKey ? (row[rowKey] as string) : index.toString();
						const rowProps = getRowProps?.(row, index);
						return (
							<tr key={key} {...rowProps} {...stylex.props(tableStyles.row)}>
								{columnData.map((col) => (
									<td
										key={col.key.toString()}
										{...col.cellProps}
										{...stylex.props(
											tableStyles.cell,
											col.align && cellAlignStyles[col.align],
										)}
									>
										{getCellValue(col, row)}
									</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
