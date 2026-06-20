import * as stylex from "@stylexjs/stylex";
import { fontSize, theme } from "@blenx-dev/ui/lib/theme/theme.stylex";
import { Spinner } from "@blenx-dev/ui/components";
import type { TableSize } from "./types";

interface DataTableLoadingProps {
	/** Number of skeleton rows to render */
	rowCount?: number;
	/** Number of columns */
	columnCount?: number;
	size?: TableSize;
}

const ROW_HEIGHTS: Record<TableSize, number> = {
	sm: 36,
	md: 48,
	lg: 60,
};

/**
 * Skeleton loading state for the DataTable.
 * Renders a placeholder table with pulsing skeleton rows.
 */
export function DataTableLoading({
	rowCount = 5,
	columnCount = 4,
	size = "md",
}: DataTableLoadingProps) {
	const rowHeight = ROW_HEIGHTS[size];

	return (
		<output {...stylex.props(styles.wrapper)} aria-label="Loading table data">
			<table {...stylex.props(styles.table)}>
				<thead>
					<tr>
						{Array.from({ length: columnCount }).map((_, i) => (
							<th
								key={`skeleton-header-${i.toString()}`}
								{...stylex.props(styles.headerCell)}
							>
								<div
									{...stylex.props(
										styles.skeletonBar(14, `${60 + ((i * 10) % 40)}px`),
									)}
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
									{...stylex.props(styles.cell(rowHeight))}
								>
									<div
										{...stylex.props(
											styles.skeletonBar(
												12,
												`${80 + ((rowIdx * 7 + colIdx * 13) % 20)}%`,
											),
										)}
									/>
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<div {...stylex.props(styles.loadingFooter)}>
				<Spinner />
				<span {...stylex.props(styles.loadingText)}>Loading data...</span>
			</div>
		</output>
	);
}

const pulseKeyframes = stylex.keyframes({
	"0%, 100%": { opacity: 0.4 },
	"50%": { opacity: 0.8 },
});

const styles = stylex.create({
	wrapper: {
		width: "100%",
	},
	table: {
		width: "100%",
		borderCollapse: "collapse",
	},
	headerCell: {
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 16,
		paddingRight: 16,
		borderBottomColor: theme.border,
		borderBottomStyle: "solid",
		borderBottomWidth: 1,
	},
	skeletonBar: (height: number, width: string) => ({
		height,
		width,
		borderRadius: 4,
		backgroundColor: theme.surfaceRaised,
		animationName: pulseKeyframes,
		animationDuration: "1.5s",
		animationTimingFunction: "ease-in-out",
		animationIterationCount: "infinite",
	}),
	cell: (height: number) => ({
		paddingTop: 12,
		paddingBottom: 12,
		paddingLeft: 16,
		paddingRight: 16,
		borderBottomColor: theme.borderSubtle,
		borderBottomStyle: "solid",
		borderBottomWidth: 1,
		height,
	}),
	loadingFooter: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		gap: 8,
	},
	loadingText: {
		color: theme.contentSecondary,
		fontSize: fontSize.small,
	},
});
