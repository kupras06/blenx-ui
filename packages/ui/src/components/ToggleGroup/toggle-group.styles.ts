import * as stylex from "@stylexjs/stylex";
import { borderRadius, spacing } from "@blenx-dev/ui/lib/theme/tokens.stylex";

export const toggleGroupStyles = stylex.create({
  groupBase: {
    display: "inline-flex",
    position: "relative",
  },
  groupHorizontal: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupVertical: {
    flexDirection: "column",
    alignItems: "center",
  },
  groupDefault: {
    gap: spacing.xxsmall,
  },
  groupOutline: {
    gap: 0,
  },
  outlineItemHorizontal: {
    ":first-child": {
      borderStartStartRadius: borderRadius.medium,
      borderEndStartRadius: borderRadius.medium,
    },
    ":last-child": {
      borderStartEndRadius: borderRadius.medium,
      borderEndEndRadius: borderRadius.medium,
    },
    ":not(:first-child)": {
      borderInlineStartWidth: 0,
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
    },
    ":not(:last-child)": {
      borderInlineEndWidth: 0,
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
    },
    ":focus-visible": {
      zIndex: 10,
    },
  },
  outlineItemVertical: {
    ":first-child": {
      borderStartStartRadius: borderRadius.medium,
      borderStartEndRadius: borderRadius.medium,
    },
    ":last-child": {
      borderEndStartRadius: borderRadius.medium,
      borderEndEndRadius: borderRadius.medium,
    },
    ":not(:first-child)": {
      borderBlockStartWidth: 0,
      borderStartStartRadius: 0,
      borderStartEndRadius: 0,
    },
    ":not(:last-child)": {
      borderBlockEndWidth: 0,
      borderEndStartRadius: 0,
      borderEndEndRadius: 0,
    },
    ":focus-visible": {
      zIndex: 10,
    },
  },
});
