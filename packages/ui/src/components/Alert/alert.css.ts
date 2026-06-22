import { themeContract } from "#theme/contract.css.js";
import { recipe } from "@vanilla-extract/recipes";

export const alertVariants = recipe({
  variants: {
    variant: {
      info: {
        bg: themeContract.sentimentInfoSubtle,
        fg: themeContract.sentimentInfo,
        border: themeContract.sentimentInfo,
      },
      success: {
        bg: themeContract.sentimentPositiveSubtle,
        fg: themeContract.sentimentPositive,
        border: themeContract.sentimentPositive,
      },
      warning: {
        bg: themeContract.sentimentWarningSubtle,
        fg: themeContract.sentimentWarning,
        border: themeContract.sentimentWarning,
      },
      error: {
        bg: themeContract.sentimentNegativeSubtle,
        fg: themeContract.sentimentNegative,
        border: themeContract.sentimentNegative,
      },
    },
  },
});
