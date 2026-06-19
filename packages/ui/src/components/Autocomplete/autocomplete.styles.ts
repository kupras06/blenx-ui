import * as stylex from "@stylexjs/stylex";
import { theme } from "@blenx-dev/ui/lib/theme/contract.stylex";
import {
	borderRadius,
	borderWidth,
	fontSize,
	fontWeight,
	mediaQueries,
	spacing,
	zIndexVars,
} from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const autoCompleteInputSize = stylex.create({
	sm: {
		paddingInlineStart: "31px",
		paddingInlineEnd: "26px",
	},
	defaultSize: {
		paddingInlineStart: "33px",
		paddingInlineEnd: "28px",
	},
	lg: {
		paddingInlineStart: "35px",
		paddingInlineEnd: "30px",
	},
});

export const autoCompleteStyles = stylex.create({
	inputGroup: {
		position: "relative",
		width: "100%",
		minWidth: 0,
		color: theme.contentPrimary,
	},
	startAddon: {
		pointerEvents: "none",
		position: "absolute",
		insetBlock: 0,
		insetInlineStart: borderWidth.thin,
		zIndex: 1,
		display: "flex",
		alignItems: "center",
		opacity: 0.8,
	},
	startAddonDefault: {
		paddingInlineStart: "11px",
	},
	startAddonSmall: {
		paddingInlineStart: "9px",
	},
	startAddonIcon: {
		flexShrink: 0,
	},
	adornment: {
		position: "absolute",
		top: "50%",
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		flexShrink: 0,
		transform: "translateY(-50%)",
		borderRadius: borderRadius.medium,
		borderWidth: borderWidth.thin,
		borderStyle: "solid",
		borderColor: "transparent",
		opacity: 0.8,
		outline: "none",
		transitionProperty: "color, background-color, box-shadow, opacity",
		transitionDuration: "150ms",
		// ":hover": {
		// 	Opacity: 1,
		// },
		// "::after": {
		// 	Content: '""',
		// 	Position: "absolute",
		// 	Inset: "-6px",
		// },
		// "& svg": {
		// 	PointerEvents: "none",
		// 	FlexShrink: 0,
		// },
	},
	adornmentHiddenWhenClear: {
		// ":has(+ [data-slot='autocomplete-clear'])": {
		// 	Display: "none",
		// },
	},
	adornmentSmall: {
		width: "28px",
		height: "28px",
		// "::after": {
		// 	Inset: "-8px",
		// },
	},
	adornmentDefault: {
		width: "32px",
		height: "32px",
	},
	adornmentEndSmall: {
		insetInlineEnd: spacing["0"],
	},
	adornmentEndDefault: {
		insetInlineEnd: spacing["0.5"],
	},
	adornmentIconDefault: {
		width: "18px",
		height: "18px",
	},
	adornmentIconSmall: {
		width: "16px",
		height: "16px",
	},
	positioner: {
		zIndex: zIndexVars.floating,
		outline: "none",
	},
	popupShell: {
		position: "relative",
		display: "flex",
		maxHeight: "100%",
		minWidth: "var(--anchor-width)",
		maxWidth: "var(--available-width)",
		borderWidth: borderWidth.thin,
		borderStyle: "solid",
		borderColor: theme.border,
		borderRadius: borderRadius.large,
		backgroundColor: theme.surface,
		boxShadow: theme.shadowLg,
		transformOrigin: "var(--transform-origin)",
		transitionProperty: "transform, opacity",
		transitionDuration: "150ms",
		// ":is([data-starting-style], [data-ending-style])": {
		// 	Opacity: 0,
		// 	Scale: 0.95,
		// },
		// "::before": {
		// 	Content: '""',
		// 	PointerEvents: "none",
		// 	Position: "absolute",
		// 	Inset: 0,
		// 	BorderRadius: "inherit",
		// 	BoxShadow:
		// 		"0 1px 0 rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.02)",
		// },
	},
	popup: {
		display: "flex",
		flex: 1,
		flexDirection: "column",
		maxHeight: "min(var(--available-height), 23rem)",
		color: theme.contentPrimary,
	},
	group: {
		display: "flex",
		flexDirection: "column",
	},
	separator: {
		height: "1px",
		marginBlock: spacing.xsmall,
		marginInline: spacing.small,
		backgroundColor: theme.border,
	},
	groupLabel: {
		paddingBlock: spacing["1"],
		paddingInline: spacing["2"],
		fontSize: fontSize.xsmall,
		fontWeight: fontWeight.medium,
		color: theme.contentSecondary,
	},
	empty: {
		padding: spacing.small,
		textAlign: "center",
		fontSize: {
			default: fontSize.small,
			[mediaQueries.sm]: fontSize.xsmall,
		},
		color: theme.contentSecondary,
		// ":empty": {
		// 	Display: "none",
		// },
	},
	list: {
		padding: spacing.xsmall,
		// ":not(:empty)": {
		// 	ScrollPaddingBlock: spacing.xsmall,
		// },
	},
	status: {
		paddingInline: spacing.medium,
		paddingBlock: spacing.small,
		fontSize: fontSize.xsmall,
		fontWeight: fontWeight.medium,
		color: theme.contentSecondary,
		// ":empty": {
		// 	Margin: 0,
		// 	Padding: 0,
		// },
	},
	item: {
		display: "flex",
		alignItems: "center",
		paddingInline: spacing.small,
		paddingBlock: spacing["1"],
		borderRadius: borderRadius.medium,
		cursor: "default",
		userSelect: "none",
		outline: "none",
		// ":hover": {
		// 	BackgroundColor: theme.surfaceHover,
		// },
		// ":where([data-disabled])&": {
		// 	PointerEvents: "none",
		// 	Opacity: 0.64,
		// },
		// ":where([data-highlighted])&": {
		// 	BackgroundColor: theme.surface,
		// },
		minHeight: {
			default: "32px",
			[mediaQueries.sm]: "28px",
		},
		fontSize: {
			default: fontSize.medium,
			[mediaQueries.sm]: fontSize.small,
		},
	},
});
