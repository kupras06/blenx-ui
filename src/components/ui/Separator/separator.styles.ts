import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { fontSize, fontWeight, spacing } from "@/lib/theme/tokens.stylex";

export const separatorStyles = stylex.create({
	base: {
		boxSizing: "border-box",
		flexShrink: 0,
		backgroundColor: "currentColor",
	},

	horizontal: {
		flexGrow: 1,
		height: 1,
	},
	vertical: {
		width: 1,
		height: "100%",
	},

	subtle: {
		color: theme.borderSubtle,
	},
	strong: {
		color: theme.borderStrong,
	},

	withLabel: {
		backgroundColor: "transparent",
		display: "flex",
		alignItems: "center",
		gap: spacing.small,
		width: "100%",
		"::before": {
			content: '""',
			flex: 1,
			height: 1,
			backgroundColor: "currentColor",
			opacity: 1,
		},
		"::after": {
			content: '""',
			flex: 1,
			height: 1,
			backgroundColor: "currentColor",
			opacity: 1,
		},
	},

	label: {
		paddingLeft: spacing.xsmall,
		paddingRight: spacing.xsmall,
		color: theme.contentSecondary,
		fontSize: fontSize.xsmall,
		fontWeight: fontWeight.medium,
		lineHeight: 1.2,
		whiteSpace: "nowrap",
	},
});
