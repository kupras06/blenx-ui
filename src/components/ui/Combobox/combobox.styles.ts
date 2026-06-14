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

export const comboboxStyles = stylex.create({
  inputGroup: {
    position: "relative",
    width: "100%",
    minWidth: 0,
    color: theme.contentPrimary,
  },
  inputSm: {
    paddingInlineStart: "30px",
    paddingInlineEnd: "26px",
  },
  inputDefault: {
    paddingInlineStart: "32px",
    paddingInlineEnd: "28px",
  },
  inputLg: {
    paddingInlineStart: "34px",
    paddingInlineEnd: "30px",
  },
  startAddon: {
    pointerEvents: "none",
    position: "absolute",
    insetBlock: 0,
    insetInlineStart: borderWidth.thin,
    display: "flex",
    alignItems: "center",
    opacity: 0.8,
  },
  startAddonSm: {
    paddingInlineStart: "9px",
  },
  startAddonDefault: {
    paddingInlineStart: "11px",
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
    ":hover": {
      opacity: 1,
    },
    "::after": {
      content: '""',
      position: "absolute",
      inset: "-6px",
    },
    // "& svg": {
    // 	pointerEvents: "none",
    // 	flexShrink: 0,
    // },
  },
  adornmentSm: {
    width: "28px",
    height: "28px",
    "::after": {
      inset: "-8px",
    },
  },
  adornmentDefault: {
    width: "32px",
    height: "32px",
  },
  adornmentEndSm: {
    insetInlineEnd: spacing["0"],
  },
  adornmentEndDefault: {
    insetInlineEnd: spacing["0.5"],
  },
  adornmentHiddenWhenClear: {
    // ":has(+ [data-slot='combobox-clear'])": {
    // 	display: "none",
    // },
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
    "::before": {
      content: '""',
      pointerEvents: "none",
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      boxShadow: "0 1px 0 rgba(0, 0, 0, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.02)",
    },
  },
  popup: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    maxHeight: "min(var(--available-height), 23rem)",
    color: theme.contentPrimary,
  },
  separator: {
    height: "1px",
    marginBlock: spacing.xsmall,
    marginInline: spacing.small,
    backgroundColor: theme.border,
    ":last-child": {
      display: "none",
    },
  },
  group: {
    display: "flex",
    flexDirection: "column",
    // ":not(:first-child)": {
    // 	marginTop: "6px",
    // },
  },
  groupLabel: {
    paddingBlock: "6px",
    paddingInline: spacing.small,
    fontSize: fontSize.xsmall,
    fontWeight: fontWeight.medium,
    color: theme.contentSecondary,
  },
  empty: {
    padding: spacing.small,
    textAlign: "center",
    fontSize: {
      default: fontSize.medium,
      [mediaQueries.sm]: fontSize.small,
    },
  },
  row: {
    display: "flex",
    flexDirection: "column",
  },
  value: {
    display: "block",
  },
  list: {
    padding: spacing.xsmall,
    ":not(:empty)": {
      scrollPaddingBlock: spacing.xsmall,
    },
    ":has([data-slot='combobox-item'])": {
      paddingInlineEnd: spacing.small,
    },
  },
  status: {
    paddingInline: spacing.medium,
    paddingBlock: spacing.small,
    fontSize: fontSize.xsmall,
    fontWeight: fontWeight.medium,
    color: theme.contentSecondary,
    ":empty": {
      margin: 0,
      padding: 0,
    },
  },
  item: {
    display: "grid",
    gridTemplateColumns: "1rem 1fr",
    alignItems: "center",
    columnGap: spacing.small,
    minHeight: {
      default: "32px",
      [mediaQueries.sm]: "28px",
    },
    paddingInlineStart: spacing.small,
    paddingInlineEnd: spacing.medium,
    paddingBlock: spacing["1"],
    borderRadius: borderRadius.small,
    cursor: "default",
    userSelect: "none",
    outline: "none",

    fontSize: {
      default: fontSize.medium,
      [mediaQueries.sm]: fontSize.small,
    },
    ":hover": {
      backgroundColor: theme.surfaceHover,
    },
    ":where([data-disabled])&": {
      pointerEvents: "none",
      opacity: 0.64,
    },
    ":where([data-highlighted])&": {
      backgroundColor: theme.surfaceHover,
      color: theme.contentPrimary,
    },
  },
  itemIndicator: {
    gridColumn: "1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContent: {
    gridColumn: "2",
  },
  chips: {
    position: "relative",
    display: "inline-flex",
    width: "100%",
    minWidth: 0,
    flexWrap: "wrap",
    alignItems: "center",
    gap: spacing.xxsmall,
    minHeight: {
      default: "36px",
      [mediaQueries.sm]: "32px",
    },
    padding: "calc(4px - 1px)",
    borderWidth: borderWidth.thin,
    borderStyle: "solid",
    borderColor: theme.border,
    borderRadius: borderRadius.large,
    backgroundColor: theme.background,
    color: theme.contentPrimary,
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.04)",
    outline: "none",
    transitionProperty: "border-color, box-shadow",
    transitionDuration: "150ms",
    ":focus-within": {
      borderColor: theme.borderStrong,
      boxShadow: `0 0 0 2px ${theme.borderStrong}`,
    },
    ":has([aria-invalid='true'])": {
      borderColor: theme.sentimentNegative,
    },
    ":has([aria-invalid='true']:focus-visible)": {
      borderColor: theme.sentimentNegative,
      boxShadow: `0 0 0 2px ${theme.sentimentNegative}`,
    },
    ":has(:disabled)": {
      opacity: 0.64,
      cursor: "not-allowed",
    },
    ":has([data-size='sm'])": {
      minHeight: "32px",
    },
    ":has([data-size='lg'])": {
      minHeight: "40px",
    },
  },
  chipsStartAddon: {
    display: "flex",
    flexShrink: 0,
    alignItems: "center",
    opacity: 0.8,
    paddingInlineStart: spacing.small,
    // "& svg": {
    // 	pointerEvents: "none",
    // 	flexShrink: 0,
    // },
  },
  chipsStartAddonSm: {
    paddingInlineStart: "6px",
  },
  chipsStartAddonDefault: {
    paddingInlineStart: spacing.small,
  },
  chipsInput: {
    flex: "1 1 0%",
    minWidth: "3rem",
    borderWidth: 0,
    outline: "none",
    backgroundColor: "transparent",
    paddingBlock: "6px",
    paddingInlineStart: spacing.xsmall,
    paddingInlineEnd: spacing.xsmall,
    fontSize: {
      default: fontSize.medium,
      [mediaQueries.sm]: fontSize.small,
    },
    lineHeight: 1.5,
    color: theme.contentPrimary,
    "::placeholder": {
      color: theme.contentDisabled,
    },
    ":disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    ":has(+ [data-slot='combobox-chip'])": {
      paddingInlineStart: spacing.xxsmall,
    },
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: borderRadius.medium,
    backgroundColor: theme.surfaceHover,
    color: theme.contentPrimary,
    paddingInlineStart: spacing.small,
    fontSize: fontSize.small,
    fontWeight: fontWeight.medium,
    lineHeight: 1.2,
    outline: "none",
    // "& svg": {
    // 	pointerEvents: "none",
    // 	flexShrink: 0,
    // },
  },
  chipSm: {
    fontSize: fontSize.xsmall,
  },
  chipRemove: {
    display: "inline-flex",
    height: "100%",
    alignItems: "center",
    flexShrink: 0,
    cursor: "pointer",
    paddingInline: spacing.xsmall,
    opacity: 0.8,
    ":hover": {
      opacity: 1,
    },
    // "& svg": {
    // 	pointerEvents: "none",
    // 	flexShrink: 0,
    // },
  },
});
