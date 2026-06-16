import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import {
	duration,
	fontSize,
	fontWeight,
	mediaQueries,
	spacing,
} from "@/lib/theme/tokens.stylex";

export const breadcrumbsStyles = stylex.create({
	root: {
		display: "flex",
		alignItems: "center",
		gap: spacing.xsmall,
		color: theme.contentSecondary,
		fontSize: 14,
	},
	list: {
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
		gap: 6,
		fontSize: fontSize.small,
		color: theme.contentSecondary,
		[mediaQueries.sm]: {
			gap: 10,
		},
	},
	item: {
		display: "inline-flex",
		alignItems: "center",
		gap: 6,
	},
	link: {
		color: "inherit",
		textDecoration: "none",
		cursor: "pointer",
		transitionProperty: "color",
		transitionDuration: duration.fast,
		transitionTimingFunction: "ease",
		":hover": {
			color: theme.contentPrimary,
		},
	},
	page: {
		fontWeight: fontWeight.regular,
		color: theme.contentPrimary,
	},
	separator: {
		display: "inline-flex",
		alignItems: "center",
		opacity: 0.8,
	},
	ellipsis: {
		display: "inline-flex",
		alignItems: "center",
	},
	srOnly: {
		position: "absolute",
		width: 1,
		height: 1,
		padding: 0,
		margin: -1,
		overflow: "hidden",
		clip: "rect(0, 0, 0, 0)",
		whiteSpace: "nowrap",
		borderWidth: 0,
	},
});
