import { recipe } from "@vanilla-extract/recipes";
import { theme } from "#theme/contract.css";
import { spacing } from "#theme/tokens.css";

export const badgeRecipe = recipe({
  base: {
    display: "inline-block",
    padding: spacing.xsmall,
    borderRadius: theme.borderRadius,
    fontSize: 12,
    lineHeight: 1.2,
  },
  variants: {
    variant: {
      default: {
        backgroundColor: theme.surfaceRaised,
        color: theme.contentPrimary,
      },
      primary: {
        backgroundColor: theme.primary,
        color: theme.contentOnPrimary,
      },
      secondary: {
        backgroundColor: theme.secondary,
        color: theme.contentPrimary,
      },
      danger: {
        backgroundColor: theme.sentimentNegative,
        color: theme.contentOnPrimary,
      },
      sucess: {
        backgroundColor: theme.sentimentPositive,
        color: theme.contentOnPrimary,
      },
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
