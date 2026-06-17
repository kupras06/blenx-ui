import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, fontSize } from "@/lib/theme/tokens.stylex";

export const forgotPasswordStyles = stylex.create({
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
	success: {
		textAlign: "center",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: spacing.medium,
		padding: spacing.medium,
	},
	successIcon: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		width: 56,
		height: 56,
		borderRadius: "50%",
		backgroundColor: theme.sentimentPositiveSubtle,
		color: theme.sentimentPositive,
		fontSize: 28,
	},
	successMessage: {
		color: theme.contentSecondary,
	},
	error: {
		color: theme.sentimentNegative,
		fontSize: fontSize.xsmall,
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
