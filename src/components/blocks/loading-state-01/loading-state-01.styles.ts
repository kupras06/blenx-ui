import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { spacing, borderRadius } from "@/lib/theme/tokens.stylex";

const shimmer = stylex.keyframes({
	"0%": { transform: "translateX(-100%)" },
	"100%": { transform: "translateX(100%)" },
});

export const skeletonStyles = stylex.create({
	shimmer: {
		position: "relative",
		overflow: "hidden",
		"::after": {
			content: "",
			position: "absolute",
			inset: 0,
			background: `linear-gradient(90deg, transparent 0%, ${theme.surfaceRaised} 50%, transparent 100%)`,
			animationName: shimmer,
			animationDuration: {
				default: "1.5s",
				"@media (prefers-reduced-motion: reduce)": "0ms",
			},
			animationIterationCount: "infinite",
			animationTimingFunction: "ease-in-out",
		},
	},

	textLine: {
		height: 14,
		borderRadius: borderRadius.full,
		backgroundColor: theme.surfaceSubtle,
	},

	textLineShort: {
		width: "60%",
	},

	cardSkeleton: {
		height: 200,
		borderRadius: theme.borderRadius,
		backgroundColor: theme.surfaceSubtle,
	},

	tableHeader: {
		height: 40,
		borderRadius: theme.borderRadius,
		backgroundColor: theme.surfaceSubtle,
		marginBottom: spacing.xsmall,
	},

	tableRow: {
		height: 48,
		borderRadius: theme.borderRadius,
		backgroundColor: theme.surfaceSubtle,
	},

	avatar: {
		width: 48,
		height: 48,
		borderRadius: "50%",
		backgroundColor: theme.surfaceSubtle,
		flexShrink: 0,
	},

	avatarRow: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: spacing.medium,
	},

	avatarTextGroup: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.xsmall,
		flex: 1,
	},

	container: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.medium,
		padding: spacing.medium,
	},

	progressWrapper: {
		marginTop: spacing.small,
		width: "100%",
		maxWidth: 300,
	},
});
