import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";
import { fontSize, fontWeight, spacing } from "#theme/tokens.css";

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
      subtle: { color: theme.borderSubtle },
      strong: { color: theme.borderStrong },
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
  gap: spacing.small,
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
  paddingLeft: spacing.xsmall,
  paddingRight: spacing.xsmall,
  color: theme.contentSecondary,
  fontSize: fontSize.xsmall,
  fontWeight: fontWeight.medium,
  lineHeight: 1.2,
  whiteSpace: "nowrap",
});
