import * as stylex from "@stylexjs/stylex";
import type React from "react";
import { Box } from "@blenx-dev/ui/components";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { borderRadius } from "@blenx-dev/ui/lib/theme/tokens.stylex";

const styles = stylex.create({
	scroll: {
		overflowX: "auto",
		WebkitOverflowScrolling: "touch",
	},
	table: {
		width: "100%",
		borderCollapse: "collapse",
		fontSize: 14,
	},
	header: {
		backgroundColor: theme.surfaceSubtle,
		borderBottom: `1px solid ${theme.border}`,
	},
	headerCell: {
		padding: "8px 16px",
		fontWeight: 600,
		textAlign: "left",
		whiteSpace: "nowrap",
		color: theme.contentPrimary,
	},
	cell: {
		padding: "8px 16px",
		borderBottom: `1px solid ${theme.borderSubtle}`,
		color: theme.contentSecondary,
		verticalAlign: "top",
	},
	code: {
		fontFamily: "ui-monospace, SFMono-Regular, monospace",
		fontSize: 13,
		backgroundColor: theme.surfaceSubtle,
		padding: "2px 6px",
		borderRadius: borderRadius.small,
	},
});

interface DocsTableProps {
	children: React.ReactNode;
}

function DocsTable({ children }: DocsTableProps) {
	return (
		<Box {...stylex.props(styles.scroll)} borderRadius="medium" withBorder>
			<table {...stylex.props(styles.table)}>{children}</table>
		</Box>
	);
}

export { DocsTable };
