import { createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "@blenx-dev/theme/contract";
import { fontSize, fonts, spacing } from "@blenx-dev/theme/tokens";

export const intentVars = {
  solidBg: createVar(),
  solidFg: createVar(),
  solidHoverBg: createVar(),
  softBg: createVar(),
  softFg: createVar(),
  softHoverBg: createVar(),
  border: createVar(),
  borderHover: createVar(),
  fg: createVar(),
};

export const variant = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: themeContract.borderRadius,
    cursor: "pointer",
    fontWeight: 500,
    width: "fit-content",
    height: "fit-content",
    fontSize: themeContract.fontSize,
    fontFamily: fonts.body,
    textDecoration: "none",
    position: "relative",
    transition: "all 0.2s ease",
    selectors: {
      "&:disabled": {
        opacity: 0.4,
        cursor: "not-allowed",
      },
    },
  },
  variants: {
    intent: {
      primary: {
        vars: {
          [intentVars.solidBg]: themeContract.primary,
          [intentVars.solidFg]: themeContract.contentOnPrimary,
          [intentVars.solidHoverBg]: themeContract.primaryHover,
          [intentVars.softBg]: themeContract.primarySubtle,
          [intentVars.softFg]: themeContract.primary,
          [intentVars.softHoverBg]: themeContract.primarySubtle,
          [intentVars.border]: themeContract.primary,
          [intentVars.borderHover]: themeContract.primaryHover,
          [intentVars.fg]: themeContract.primary,
        },
      },
      neutral: {
        vars: {
          [intentVars.solidBg]: themeContract.surfaceRaised,
          [intentVars.solidFg]: themeContract.contentPrimary,
          [intentVars.solidHoverBg]: themeContract.surfaceHover,
          [intentVars.softBg]: themeContract.backgroundSubtle,
          [intentVars.softFg]: themeContract.contentPrimary,
          [intentVars.softHoverBg]: themeContract.surfaceHover,
          [intentVars.border]: themeContract.border,
          [intentVars.borderHover]: themeContract.borderStrong,
          [intentVars.fg]: themeContract.contentPrimary,
        },
      },
      success: {
        vars: {
          [intentVars.solidBg]: themeContract.sentimentPositive,
          [intentVars.solidFg]: themeContract.contentOnPrimary,
          [intentVars.solidHoverBg]: themeContract.sentimentPositiveHover,
          [intentVars.softBg]: themeContract.sentimentPositiveSubtle,
          [intentVars.softFg]: themeContract.sentimentPositive,
          [intentVars.softHoverBg]: themeContract.sentimentPositiveSubtle,
          [intentVars.border]: themeContract.sentimentPositive,
          [intentVars.borderHover]: themeContract.sentimentPositiveHover,
          [intentVars.fg]: themeContract.sentimentPositive,
        },
      },
      warning: {
        vars: {
          [intentVars.solidBg]: themeContract.sentimentWarning,
          [intentVars.solidFg]: themeContract.contentOnPrimary,
          [intentVars.solidHoverBg]: themeContract.sentimentWarningHover,
          [intentVars.softBg]: themeContract.sentimentWarningSubtle,
          [intentVars.softFg]: themeContract.sentimentWarning,
          [intentVars.softHoverBg]: themeContract.sentimentWarningSubtle,
          [intentVars.border]: themeContract.sentimentWarning,
          [intentVars.borderHover]: themeContract.sentimentWarningHover,
          [intentVars.fg]: themeContract.sentimentWarning,
        },
      },
      danger: {
        vars: {
          [intentVars.solidBg]: themeContract.sentimentNegative,
          [intentVars.solidFg]: themeContract.contentOnPrimary,
          [intentVars.solidHoverBg]: themeContract.sentimentNegativeHover,
          [intentVars.softBg]: themeContract.sentimentNegativeSubtle,
          [intentVars.softFg]: themeContract.sentimentNegative,
          [intentVars.softHoverBg]: themeContract.sentimentNegativeSubtle,
          [intentVars.border]: themeContract.sentimentNegative,
          [intentVars.borderHover]: themeContract.sentimentNegativeHover,
          [intentVars.fg]: themeContract.sentimentNegative,
        },
      },
      info: {
        vars: {
          [intentVars.solidBg]: themeContract.sentimentInfo,
          [intentVars.solidFg]: themeContract.contentOnPrimary,
          [intentVars.solidHoverBg]: themeContract.sentimentInfoHover,
          [intentVars.softBg]: themeContract.sentimentInfoSubtle,
          [intentVars.softFg]: themeContract.sentimentInfo,
          [intentVars.softHoverBg]: themeContract.sentimentInfoSubtle,
          [intentVars.border]: themeContract.sentimentInfo,
          [intentVars.borderHover]: themeContract.sentimentInfoHover,
          [intentVars.fg]: themeContract.sentimentInfo,
        },
      },
      mono: {
        vars: {
          [intentVars.solidBg]: "#ffffff",
          [intentVars.solidFg]: "#111111",
          [intentVars.solidHoverBg]: "#f5f5f5",
          [intentVars.softBg]: "#ffffff",
          [intentVars.softFg]: "#111111",
          [intentVars.softHoverBg]: "#f5f5f5",
          [intentVars.border]: "#d4d4d4",
          [intentVars.borderHover]: "#d4d4d4",
          [intentVars.fg]: "#111111",
        },
      },
    },
    size: {
      xs: {
        padding: `${spacing.xxs} ${spacing.xs}`,
        fontSize: fontSize.sm,
      },
      sm: {
        padding: `${spacing.xs} ${spacing.sm}`,
        fontSize: fontSize.sm,
      },
      icon: {
        padding: `${spacing.xs} ${spacing.xs}`,
      },
      md: { padding: `${spacing.sm} ${spacing.md}` },
      lg: {
        padding: `${spacing.md} ${spacing.lg}`,
        fontSize: fontSize.lg,
      },
    },
    variant: {
      solid: {
        backgroundColor: intentVars.solidBg,
        borderColor: intentVars.border,
        color: intentVars.solidFg,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: intentVars.solidHoverBg,
          },
        },
      },
      soft: {
        backgroundColor: `color-mix(in srgb, ${intentVars.softBg} 30%, transparent)`,
        color: intentVars.solidBg,
        borderColor: "transparent",
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${intentVars.solidHoverBg} 20%, transparent)`,
          },
        },
      },
      outline: {
        backgroundColor: "transparent",
        borderColor: intentVars.border,
        color: intentVars.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${intentVars.solidBg} 10%, transparent)`,
            borderColor: intentVars.borderHover,
          },
        },
      },
      ghost: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: intentVars.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${intentVars.solidBg} 12%, transparent)`,
          },
        },
      },
      link: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: intentVars.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});
