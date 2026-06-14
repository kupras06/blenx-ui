import * as stylex from "@stylexjs/stylex";
import {
  borderRadius,
  borderWidth,
  fontSize,
  fontWeight,
  mediaQueries,
  spacing,
  theme,
  zIndex,
} from "@/lib/theme/theme.stylex";

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
    // 	opacity: 1,
    // },
    // "::after": {
    // 	content: '""',
    // 	position: "absolute",
    // 	inset: "-6px",
    // },
    // "& svg": {
    // 	pointerEvents: "none",
    // 	flexShrink: 0,
    // },
  },
  adornmentHiddenWhenClear: {
    // ":has(+ [data-slot='autocomplete-clear'])": {
    // 	display: "none",
    // },
  },
  adornmentSmall: {
    width: "28px",
    height: "28px",
    // "::after": {
    // 	inset: "-8px",
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
    zIndex: zIndex.dropdown,
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
    transitionProperty: "scale, opacity",
    transitionDuration: "150ms",
    // ":is([data-starting-style], [data-ending-style])": {
    // 	opacity: 0,
    // 	scale: 0.95,
    // },
    // "::before": {
    // 	content: '""',
    // 	pointerEvents: "none",
    // 	position: "absolute",
    // 	inset: 0,
    // 	borderRadius: "inherit",
    // 	boxShadow:
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
    // 	display: "none",
    // },
  },
  list: {
    padding: spacing.xsmall,
    // ":not(:empty)": {
    // 	scrollPaddingBlock: spacing.xsmall,
    // },
  },
  status: {
    paddingInline: spacing.medium,
    paddingBlock: spacing.small,
    fontSize: fontSize.xsmall,
    fontWeight: fontWeight.medium,
    color: theme.contentSecondary,
    // ":empty": {
    // 	margin: 0,
    // 	padding: 0,
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
    // 	backgroundColor: theme.surfaceHover,
    // },
    // ":where([data-disabled])&": {
    // 	pointerEvents: "none",
    // 	opacity: 0.64,
    // },
    // ":where([data-highlighted])&": {
    // 	backgroundColor: theme.surface,
    // 	color: theme.contentAccent,
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
