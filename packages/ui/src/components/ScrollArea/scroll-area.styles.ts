import * as stylex from "@stylexjs/stylex";
import type { CSSProperties } from "react";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import { spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const scrollAreaStyles = stylex.create({
	height: (height: CSSProperties["height"]) => ({
		height,
		maxHeight: height,
	}),
	root: {
		height: "100%",
		minHeight: 0,
		boxSizing: "border-box",
	},
	viewport: {
		height: "100%",
		borderRadius: theme.borderRadius,
		outline: "none",
		boxSizing: "border-box",
		overscrollBehaviorY: "contain",
		overscrollBehaviorX: "contain",
		":focus-visible": {
			boxShadow: `0 0 0 2px ${theme.borderStrong}`,
		},
	},
	viewportFade: {
		"--fade-size": "1.5rem",
		WebkitMaskImage:
			"linear-gradient(to bottom, transparent, black var(--fade-size), black calc(100% - var(--fade-size)), transparent)",
		maskImage:
			"linear-gradient(to bottom, transparent, black var(--fade-size), black calc(100% - var(--fade-size)), transparent)",
	},
	viewportGutter: {
		paddingRight: spacing.small,
		paddingBottom: spacing.small,
	},
	contentFill: {
		height: "100%",
		width: "100%",
	},
	scrollbar: {
		margin: spacing.xsmall,
		display: "flex",
		opacity: 0,
		boxSizing: "border-box",
		transitionProperty: "opacity",
		transitionDuration: "300ms",
		transitionTimingFunction: "ease",
		"[data-hovering]": {
			opacity: 1,
			transitionDelay: "0ms",
			transitionDuration: "100ms",
		},
		"[data-scrolling]": {
			opacity: 1,
			transitionDelay: "0ms",
			transitionDuration: "100ms",
		},
	},
	scrollbarHorizontal: {
		height: "6px",
		flexDirection: "column",
	},
	scrollbarVertical: {
		width: "6px",
	},
	thumb: {
		position: "relative",
		flexGrow: 1,
		borderRadius: theme.borderRadius,
		backgroundColor: "rgba(0, 0, 0, 0.2)",
	},
});
