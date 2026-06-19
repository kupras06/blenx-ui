import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const inputStyles = stylex.create({
	label: {
		fontSize: 14,
		display: "inline-flex",
		gap: 4,
		lineHeight: 1.4,
		fontWeight: 400,
		color: theme.contentSecondary,
	},

	labelSm: {
		fontSize: 13,
	},

	labelLg: {
		fontSize: 15,
	},

	input: {
		width: "100%",
		boxSizing: "border-box",
		paddingTop: spacing.small,
		paddingBottom: spacing.small,
		paddingLeft: spacing.medium,
		paddingRight: spacing.medium,
		fontSize: 16,
		lineHeight: 1.5,
		color: theme.contentPrimary,
		backgroundColor: theme.surface,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: theme.border,
		borderRadius: theme.borderRadius,
		outline: "none",
		"::placeholder": {
			color: theme.contentDisabled,
		},
		":disabled": {
			opacity: 0.5,
			cursor: "not-allowed",
		},
		":focus-visible": {
			borderColor: theme.borderStrong,
			boxShadow: `0 0 0 2px ${theme.borderStrong}`,
		},
		":focus-visible[aria-invalid='true']": {
			borderColor: theme.sentimentNegative,
			boxShadow: `0 0 0 3px ${theme.sentimentNegative}`,
		},
	},
	inputSm: {
		paddingTop: spacing.xsmall,
		paddingBottom: spacing.xsmall,
		paddingLeft: spacing.small,
		paddingRight: spacing.small,
		fontSize: 16,
	},
	inputLg: {
		paddingTop: spacing.medium,
		paddingBottom: spacing.medium,
		paddingLeft: spacing.large,
		paddingRight: spacing.large,
		fontSize: 16,
	},

	inputError: {
		borderColor: theme.sentimentNegative,
	},

	error: {
		fontSize: 12,
		lineHeight: 1.4,
		color: theme.sentimentNegative,
	},
});
