import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { fontWeight, spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";
export const avatarStyles = stylex.create({
	root: {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: theme.borderRadius,
		backgroundColor: theme.backgroundSubtle,
		color: theme.contentSecondary,
		overflow: "hidden",
		flexShrink: 0,
		outline: "none",
		border: "none",
		borderWidth: 0,
	},
	image: {
		width: "100%",
		height: "100%",
		objectFit: "cover",
		display: "block",
		outline: "none",
		border: "none",
		borderWidth: 0,
	},
	fallback: {
		width: "100%",
		height: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: theme.backgroundSubtle,
		color: theme.contentSecondary,
		fontSize: 12,
		outline: "none",
		border: "none",
		borderWidth: 0,
		fontWeight: fontWeight.semibold,
		lineHeight: 1,
	},
});

export const avataSizeStyles = stylex.create({
	small: {
		width: spacing.large,
		height: spacing.large,
	},
	medium: {
		width: spacing.xlarge,
		height: spacing.xlarge,
	},
	large: {
		width: spacing.xxlarge,
		height: spacing.xxlarge,
	},
	xlarge: {
		width: spacing.xxxlarge,
		height: spacing.xxxlarge,
	},
	hero: {
		width: spacing.titanic,
		height: spacing.titanic,
	},
});
