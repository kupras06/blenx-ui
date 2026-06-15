import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import {
	fontSize,
	fonts,
	fontWeight,
	lineHeight,
	spacing,
} from "@/lib/theme/tokens.stylex";

export const docStyles = stylex.create({
	page: {
		display: "flex",
		flexDirection: "column",
		gap: spacing["8"],
	},

	section: {
		marginBottom: spacing["8"],
	},

	code: {
		fontFamily: fonts.mono,
		fontSize: fontSize.small,
		lineHeight: lineHeight.normal,
	},

	pre: {
		backgroundColor: theme.surfaceSubtle,
		borderRadius: theme.borderRadius,
		padding: spacing["4"],
		overflowX: "auto",
		fontFamily: fonts.mono,
		fontSize: fontSize.small,
		lineHeight: lineHeight.normal,
		margin: 0,
	},

	// Lists
	list: {
		listStyle: "disc",
		paddingInlineStart: spacing["6"],
		margin: 0,
	},

	// Grid of cards
	cardGrid: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: spacing["3"],
	},

	card: {
		borderRadius: theme.borderRadius,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: theme.border,
		padding: spacing["4"],
	},

	cardTitle: {
		fontSize: fontSize.small,
		fontWeight: fontWeight.medium,
		margin: 0,
		color: theme.contentPrimary,
	},

	cardSubtitle: {
		fontSize: fontSize.xsmall,
		color: theme.contentSecondary,
		margin: 0,
	},

	// Table
	tableWrapper: {
		overflowX: "auto",
	},

	table: {
		width: "100%",
		borderCollapse: "collapse",
		fontSize: fontSize.small,
		lineHeight: lineHeight.relaxed,
	},

	th: {
		textAlign: "left",
		paddingInline: spacing["3"],
		paddingBlock: spacing["2"],
		borderBottomWidth: 1,
		borderBottomStyle: "solid",
		borderBottomColor: theme.border,
		fontWeight: fontWeight.semibold,
		color: theme.contentPrimary,
		whiteSpace: "nowrap",
	},

	td: {
		paddingInline: spacing["3"],
		paddingBlock: spacing["2"],
		borderBottomWidth: 1,
		borderBottomStyle: "solid",
		borderBottomColor: theme.borderSubtle,
		color: theme.contentSecondary,
		fontFamily: fonts.mono,
		fontSize: fontSize.xsmall,
	},

	tdLabel: {
		paddingInline: spacing["3"],
		paddingBlock: spacing["2"],
		borderBottomWidth: 1,
		borderBottomStyle: "solid",
		borderBottomColor: theme.borderSubtle,
		color: theme.contentSecondary,
		fontFamily: fonts.mono,
		fontSize: fontSize.xsmall,
		fontWeight: fontWeight.medium,
	},
});
