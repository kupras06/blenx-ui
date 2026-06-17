import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, fontSize } from "@/lib/theme/tokens.stylex";

export const login02Styles = stylex.create({
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
	stepIndicator: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: spacing.xsmall,
		marginBottom: spacing.small,
	},
	stepDot: {
		width: 8,
		height: 8,
		borderRadius: "50%",
		backgroundColor: theme.border,
	},
	stepDotActive: {
		backgroundColor: theme.primary,
		width: 10,
		height: 10,
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
	backButton: {
		background: "none",
		border: "none",
		padding: 0,
		cursor: "pointer",
		color: theme.contentSecondary,
		fontFamily: "inherit",
		fontSize: fontSize.small,
		display: "flex",
		alignItems: "center",
		gap: spacing.xxsmall,
		width: "fit-content",
		":hover": {
			color: theme.contentPrimary,
		},
	},
	magicLinkText: {
		textAlign: "center",
		padding: spacing.medium,
		color: theme.contentSecondary,
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
	magicLinkAction: {
		marginTop: spacing.medium,
	},
});
