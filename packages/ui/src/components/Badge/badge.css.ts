import { recipe } from "@vanilla-extract/recipes";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const badgeRecipe = recipe({
  base: {
    display: "inline-block",
    padding: tokenVars.spacing.xs,
    borderRadius: tokenVars.borderRadius.default,
    fontSize: 12,
    lineHeight: 1.2,
  },
  variants: {
    variant: {
      default: {
        backgroundColor: semanticVars.surface.raised,
        color: semanticVars.text.primary,
      },
      primary: {
        backgroundColor: semanticVars.interactive.primary,
        color: semanticVars.interactive.primaryFg,
      },
      secondary: {
        backgroundColor: semanticVars.interactive.secondary,
        color: semanticVars.interactive.secondaryFg,
      },
      danger: {
        backgroundColor: semanticVars.status.danger,
        color: semanticVars.text.inverse,
      },
      sucess: {
        backgroundColor: semanticVars.status.success,
        color: semanticVars.text.inverse,
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
