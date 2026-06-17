import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, fontSize } from "@/lib/theme/tokens.stylex";

export const loginStyles = stylex.create({
	container: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		minHeight: "100vh",
		padding: spacing.medium,
		boxSizing: "border-box",
	},
	card: {
		width: "100%",
		maxWidth: 420,
	},
	cardBody: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.large,
	},
	header: {
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: spacing.xsmall,
	},
	logo: {
		marginBottom: spacing.xsmall,
	},
	title: {},
	description: {
		color: theme.contentSecondary,
	},
	form: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.medium,
	},
	fieldGroup: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.small,
	},
	checkboxRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	checkboxLabel: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: spacing.xsmall,
		cursor: "pointer",
		fontSize: fontSize.small,
	},
	forgotLink: {
		background: "none",
		border: "none",
		padding: 0,
		cursor: "pointer",
		color: theme.contentAccent,
		fontSize: fontSize.small,
		fontFamily: "inherit",
		":hover": {
			textDecoration: "underline",
		},
	},
	socialSection: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.small,
	},
	socialButtons: {
		display: "flex",
		flexDirection: "row",
		gap: spacing.small,
	},
	socialButton: {
		flex: 1,
	},
	footer: {
		textAlign: "center",
	},
	footerLink: {
		background: "none",
		border: "none",
		padding: 0,
		cursor: "pointer",
		color: theme.contentAccent,
		fontFamily: "inherit",
		fontSize: fontSize.small,
		":hover": {
			textDecoration: "underline",
		},
	},
});
