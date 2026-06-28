import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@blenx-dev/theme/contract";
import { fontSize, spacing } from "@blenx-dev/theme/tokens";

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
    borderRadius: themeContract.borderRadius,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: themeContract.border,
    backgroundColor: themeContract.background,
    color: themeContract.contentPrimary,
    outline: "none",
    caretColor: themeContract.primary,
    transition: "box-shadow 0.15s ease, border-color 0.15s ease",
    padding: 0,
    margin: 0,
  },
  variants: {
    size: {
      default: {
        width: spacing["9"],
        height: spacing["9"],
        fontSize: fontSize.md,
      },
      lg: {
        width: spacing["10"],
        height: spacing["10"],
        fontSize: fontSize.lg,
      },
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export const separator = style({
  backgroundColor: themeContract.border,
  borderRadius: "999px",
  width: spacing["3"],
  height: spacing["0.5"],
  flexShrink: 0,
});
