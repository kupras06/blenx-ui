import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, fontSize, mediaQueries } from "@/lib/theme/tokens.stylex";

export const errorStateStyles = stylex.create({
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		gap: spacing.medium,
		padding: spacing.xxlarge,
	},
	page: {
		minHeight: "60vh",
	},
	toast: {
		padding: spacing.medium,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: theme.sentimentNegativeSubtle,
		borderRadius: theme.borderRadius,
	},
	iconWrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: 64,
		height: 64,
		borderRadius: "50%",
		backgroundColor: theme.sentimentNegativeSubtle,
		color: theme.sentimentNegative,
		fontSize: fontSize.xxlarge,
		flexShrink: 0,
	},
	title: {
		maxWidth: 400,
		color: theme.sentimentNegative,
	},
	description: {
		maxWidth: 480,
		color: theme.contentSecondary,
	},
	actions: {
		display: "flex",
		flexDirection: {
			default: "row",
			[mediaQueries.sm]: "column",
		},
		alignItems: "center",
		gap: spacing.small,
		marginTop: spacing.small,
		flexWrap: "wrap",
		justifyContent: "center",
		width: {
			[mediaQueries.sm]: "100%",
		},
	},
	actionFullWidth: {
		width: {
			[mediaQueries.sm]: "100%",
		},
	},
	detailsButton: {
		background: "none",
		border: "none",
		cursor: "pointer",
		color: theme.contentSecondary,
		fontSize: fontSize.small,
		padding: spacing.xsmall,
		textDecoration: "underline",
		":hover": {
			color: theme.contentPrimary,
		},
	},
	errorDetails: {
		width: "100%",
		maxWidth: 560,
		padding: spacing.medium,
		backgroundColor: theme.surfaceSubtle,
		borderRadius: theme.borderRadius,
		fontFamily: "monospace",
		fontSize: fontSize.xsmall,
		color: theme.contentSecondary,
		textAlign: "left",
		overflowX: "auto",
		whiteSpace: "pre-wrap",
		wordBreak: "break-word",
	},
});
