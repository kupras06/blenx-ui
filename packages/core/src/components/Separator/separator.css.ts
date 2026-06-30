import { recipe } from "@vanilla-extract/recipes";
import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

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
      subtle: { color: semanticVars.border.subtle },
      strong: { color: semanticVars.border.strong },
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
  gap: tokenVars.spacing.sm,
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
  paddingLeft: tokenVars.spacing.xs,
  paddingRight: tokenVars.spacing.xs,
  color: semanticVars.text.secondary,
  fontSize: tokenVars.fontSize.xs,
  fontWeight: tokenVars.fontWeight.medium,
  lineHeight: 1.2,
  whiteSpace: "nowrap",
});
