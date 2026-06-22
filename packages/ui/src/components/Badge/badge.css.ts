import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "#theme/contract.css";
import { spacing } from "#theme/tokens.css";

export const badgeRecipe = recipe({
  base: {
    display: "inline-block",
    padding: spacing.xsmall,
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
