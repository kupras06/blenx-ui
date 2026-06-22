import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { theme } from "#theme/contract.css";
import { fontSize, spacing } from "#theme/tokens.css";

export const root = style({
  display: "flex",
  alignItems: "center",
  gap: spacing["1"],
});

export const input = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: theme.borderRadius,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: theme.border,
    backgroundColor: theme.background,
    color: theme.contentPrimary,
    outline: "none",
    caretColor: theme.primary,
    transition: "box-shadow 0.15s ease, border-color 0.15s ease",
    padding: 0,
    margin: 0,
  },
  variants: {
    size: {
      default: {
        width: spacing["9"],
        height: spacing["9"],
        fontSize: fontSize.medium,
      },
      lg: {
        width: spacing["10"],
        height: spacing["10"],
        fontSize: fontSize.large,
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const separator = style({
  backgroundColor: theme.border,
  borderRadius: "999px",
  width: spacing["3"],
  height: spacing["0.5"],
  flexShrink: 0,
});
