import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, fontSize } from "@/lib/theme/tokens.stylex";

export const verifyEmailStyles = stylex.create({
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
	codeInputs: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: spacing.small,
	},
	digitInput: {
		width: 48,
		height: 56,
		textAlign: "center",
		fontSize: fontSize.xxlarge,
		fontFamily: "monospace",
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: theme.border,
		borderRadius: theme.borderRadius,
		backgroundColor: theme.background,
		color: theme.contentPrimary,
		outline: {
			default: "none",
			":focus": `2px solid ${theme.focusRing}`,
		},
		outlineOffset: "2px",
		boxSizing: "border-box",
		caretColor: theme.primary,
	},
	digitInputFilled: {
		borderColor: theme.primary,
	},
	digitInputError: {
		borderColor: theme.sentimentNegative,
	},
	form: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: spacing.medium,
	},
	resendRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: spacing.xsmall,
		fontSize: fontSize.small,
	},
	resendButton: {
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
	resendDisabled: {
		color: theme.contentDisabled,
		cursor: "not-allowed",
		textDecoration: "none",
		":hover": {
			textDecoration: "none",
		},
	},
	timer: {
		color: theme.contentSecondary,
		fontSize: fontSize.small,
	},
	status: {
		textAlign: "center",
		padding: spacing.small,
	},
	error: {
		color: theme.sentimentNegative,
		fontSize: fontSize.xsmall,
	},
	success: {
		color: theme.sentimentPositive,
		fontSize: fontSize.xsmall,
	},
});
