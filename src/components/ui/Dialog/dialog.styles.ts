import * as stylex from "@stylexjs/stylex";
import { theme } from "@/lib/theme/contract.stylex";
import { borderRadius, borderWidth, spacing } from "@/lib/theme/tokens.stylex";

export const dialogStyles = stylex.create({
	backdrop: {
		position: "fixed",
		inset: 0,
		zIndex: 50,
		backgroundColor: "rgba(0, 0, 0, 0.32)",
		backdropFilter: "blur(4px)",
		transitionProperty: "opacity, transform",
		transitionDuration: "200ms",
	},
	viewport: {
		position: "fixed",
		inset: 0,
		zIndex: 50,
		display: "grid",
		gridTemplateRows: "1fr auto 3fr",
		justifyItems: "center",
		padding: spacing.medium,
		boxSizing: "border-box",
	},
	viewportShell: {
		":is([data-slot='dialog-viewport'])": {
			display: "grid",
		},
	},
	// viewportShellBottomStickOnMobile: {},
	popup: {
		position: "relative",
		gridRowStart: 2,
		display: "flex",
		flexDirection: "column",
		width: "100%",
		minWidth: 0,
		maxWidth: "32rem",
		maxHeight: "100%",
		minHeight: 0,
		transformOrigin: "center",
		borderWidth: borderWidth.thin,
		borderStyle: "solid",
		borderColor: theme.border,
		borderRadius: borderRadius.xlarge,
		backgroundColor: theme.surface,
		color: theme.contentPrimary,
		boxSizing: "border-box",
		opacity: "calc(1 - var(--nested-dialogs))",
		outline: "none",
		transitionProperty: "transform, opacity",
		transitionDuration: "200ms",
		transitionTimingFunction: "ease-in-out",
		willChange: "transform",
		"::before": {
			content: '""',
			pointerEvents: "none",
			position: "absolute",
			inset: 0,
			borderRadius: "calc(16px - 1px)",
			boxShadow:
				"0 1px 0 rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.02)",
		},
	},
	// popupBottomStickOnMobile: {},
	closeButton: {
		position: "absolute",
		top: spacing.small,
		insetInlineEnd: spacing.small,
	},
	header: {
		display: "flex",
		flexDirection: "column",
		gap: spacing.small,
		padding: spacing.large,
		boxSizing: "border-box",
		"[data-has-panel]": {
			paddingBottom: spacing.small,
		},
	},
	footer: {
		display: "flex",
		flexDirection: "column-reverse",
		gap: spacing.small,
		paddingLeft: spacing.large,
		paddingRight: spacing.large,
		boxSizing: "border-box",
	},
	footerDefault: {
		borderTopWidth: borderWidth.thin,
		borderTopStyle: "solid",
		borderTopColor: theme.borderSubtle,
		backgroundColor: theme.backgroundSubtle,
		paddingTop: spacing.medium,
		paddingBottom: spacing.medium,
	},
	footerBare: {
		paddingTop: spacing.medium,
		paddingBottom: spacing.large,
		":has([data-slot='dialog-popup']:has([data-slot='dialog-panel']))": {
			paddingTop: spacing.small,
		},
	},
	title: {
		fontSize: "20px",
		lineHeight: 1,
		fontWeight: 600,
		color: theme.contentPrimary,
	},
	description: {
		fontSize: "14px",
		lineHeight: 1.4,
		color: theme.contentSecondary,
	},
	panelScrollFade: { opacity: 1 },
	panel: {
		boxSizing: "border-box",
		padding: spacing.large,
		":has([data-slot='dialog-popup']:has([data-slot='dialog-header']))": {
			paddingTop: spacing.xsmall,
		},
		// ":has([data-slot='dialog-popup']:has([data-slot='dialog-footer']:not(.border-t))":
		// 	{
		// 		paddingBottom: spacing.xsmall,
		// 	},
	},
});
