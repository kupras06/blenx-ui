import { recipe } from "@vanilla-extract/recipes";
import { themeContract, tokenVars } from "@blenx-dev/theme/contract";

export const badgeRecipe = recipe({
  base: {
    display: "inline-block",
    padding: tokenVars.spacing.xs,
    borderRadius: themeContract.borderRadius,
    fontSize: 12,
    lineHeight: 1.2,
  },
  variants: {
    variant: {
      default: {
        backgroundColor: themeContract.surfaceRaised,
        color: themeContract.contentPrimary,
      },
      primary: {
        backgroundColor: themeContract.primary,
        color: themeContract.contentOnPrimary,
      },
      secondary: {
        backgroundColor: themeContract.secondary,
        color: themeContract.contentPrimary,
      },
      danger: {
        backgroundColor: themeContract.sentimentNegative,
        color: themeContract.contentOnPrimary,
      },
      sucess: {
        backgroundColor: themeContract.sentimentPositive,
        color: themeContract.contentOnPrimary,
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
