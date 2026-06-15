import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { mediaQueries, spacing } from "@/lib/theme/tokens.stylex";

export const breadcrumbsStyles = stylex.create({
	root: {
		display: "flex",
		alignItems: "center",
		gap: spacing.xsmall,
		color: {
			default: theme.contentSecondary,
			[mediaQueries.dark]: theme.contentSecondary,
		},
		fontSize: 14,
	},
});
