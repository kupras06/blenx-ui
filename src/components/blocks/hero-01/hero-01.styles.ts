import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, mediaQueries } from "@/lib/theme/tokens.stylex";

export const heroStyles = stylex.create({
	section: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		paddingTop: spacing.xxxlarge,
		paddingBottom: spacing.xxxlarge,
		paddingLeft: spacing.medium,
		paddingRight: spacing.medium,
		overflow: "hidden",
	},
	default: {
		backgroundColor: theme.background,
	},
	muted: {
		backgroundColor: theme.backgroundSubtle,
	},
	accent: {
		backgroundColor: theme.primarySubtle,
	},
	inner: {
		display: "flex",
		flexDirection: {
			default: "row",
			[mediaQueries.sm]: "column",
		},
		alignItems: "center",
		gap: {
			default: spacing.xxxlarge,
			[mediaQueries.sm]: spacing.xlarge,
		},
		width: "100%",
		maxWidth: 1200,
		marginLeft: "auto",
		marginRight: "auto",
	},
	textColumn: {
		flex: "1 1 50%",
		display: "flex",
		flexDirection: "column",
		gap: spacing.medium,
	},
	imageColumn: {
		flex: "1 1 50%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: "100%",
		maxWidth: 540,
		height: "auto",
		borderRadius: theme.borderRadius,
		objectFit: "cover",
	},
	imagePlaceholder: {
		width: "100%",
		maxWidth: 540,
		height: 360,
		borderRadius: theme.borderRadius,
		backgroundColor: theme.surfaceSubtle,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		color: theme.contentDisabled,
		fontSize: 48,
	},
	headline: {
		maxWidth: 640,
	},
	subheadline: {
		maxWidth: 560,
	},
	actions: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: spacing.small,
		flexWrap: "wrap",
		marginTop: spacing.small,
		width: {
			[mediaQueries.sm]: "100%",
		},
	},
	actionFullWidth: {
		width: {
			[mediaQueries.sm]: "100%",
		},
	},
});
