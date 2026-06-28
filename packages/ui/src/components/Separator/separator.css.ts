import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { fontSize, fontWeight, spacing } from "@blenx-dev/theme/tokens";

export const separator = recipe({
  base: {
    boxSizing: "border-box",
    flexShrink: 0,
    backgroundColor: "currentColor",
  },
  variants: {
    orientation: {
      horizontal: { flexGrow: 1, height: 1 },
      vertical: { width: 1, height: "100%" },
    },
    tone: {
      subtle: { color: themeContract.borderSubtle },
      strong: { color: themeContract.borderStrong },
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    tone: "strong",
  },
});

export const withLabel = style({
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
  width: "100%",
  selectors: {
    "&::before": {
      content: '""',
      flex: 1,
      height: 1,
      backgroundColor: "currentColor",
      opacity: 1,
    },
    "&::after": {
      content: '""',
      flex: 1,
      height: 1,
      backgroundColor: "currentColor",
      opacity: 1,
    },
  },
});

export const label = style({
  paddingLeft: spacing.xs,
  paddingRight: spacing.xs,
  color: themeContract.contentSecondary,
  fontSize: fontSize.xs,
  fontWeight: fontWeight.medium,
  lineHeight: 1.2,
  whiteSpace: "nowrap",
});
