import { style, createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeContract } from "#theme/contract.css";
import { fontSize, fonts, spacing } from "#theme/tokens.css";

export const intentTokens = {
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

export const base = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: spacing.small,
  borderStyle: "solid",
  borderWidth: 1,
  borderRadius: themeContract.borderRadius,
  cursor: "pointer",
  fontWeight: 500,
  width: "fit-content",
  height: "fit-content",
  fontSize: themeContract.fontSize,
  fontFamily: fonts.display,
  textDecoration: "none",
  position: "relative",
  transition: "all 0.2s ease",
  selectors: {
    "&:disabled": {
      opacity: 0.4,
      cursor: "not-allowed",
    },
  },
});

export const fullWidth = style({
  width: "100%",
});

export const size = recipe({
  variants: {
    size: {
      xsmall: {
        paddingTop: spacing.xxsmall,
        paddingBottom: spacing.xxsmall,
        paddingLeft: spacing.xsmall,
        paddingRight: spacing.xsmall,
        fontSize: fontSize.small,
      },
      small: {
        paddingTop: spacing.xsmall,
        paddingBottom: spacing.xsmall,
        paddingLeft: spacing.small,
        paddingRight: spacing.small,
      },
      icon: {
        paddingTop: spacing.xsmall,
        paddingBottom: spacing.xsmall,
        paddingLeft: spacing.xsmall,
        paddingRight: spacing.xsmall,
      },
      medium: {
        paddingTop: spacing.small,
        paddingBottom: spacing.small,
        paddingLeft: spacing.medium,
        paddingRight: spacing.medium,
      },
      large: {
        paddingTop: spacing.medium,
        paddingBottom: spacing.medium,
        paddingLeft: spacing.large,
        paddingRight: spacing.large,
        fontSize: fontSize.large,
      },
    },
  },
});

export const intent = recipe({
  variants: {
    intent: {
      primary: {
        vars: {
          [intentTokens.solidBg]: themeContract.primary,
          [intentTokens.solidFg]: themeContract.contentOnPrimary,
          [intentTokens.solidHoverBg]: themeContract.primaryHover,
          [intentTokens.softBg]: themeContract.primarySubtle,
          [intentTokens.softFg]: themeContract.primary,
          [intentTokens.softHoverBg]: themeContract.primarySubtle,
          [intentTokens.border]: themeContract.primary,
          [intentTokens.borderHover]: themeContract.primaryHover,
          [intentTokens.fg]: themeContract.primary,
        },
      },
      neutral: {
        vars: {
          [intentTokens.solidBg]: themeContract.surfaceRaised,
          [intentTokens.solidFg]: themeContract.contentPrimary,
          [intentTokens.solidHoverBg]: themeContract.surfaceHover,
          [intentTokens.softBg]: themeContract.backgroundSubtle,
          [intentTokens.softFg]: themeContract.contentPrimary,
          [intentTokens.softHoverBg]: themeContract.surfaceHover,
          [intentTokens.border]: themeContract.border,
          [intentTokens.borderHover]: themeContract.borderStrong,
          [intentTokens.fg]: themeContract.contentPrimary,
        },
      },
      success: {
        vars: {
          [intentTokens.solidBg]: themeContract.sentimentPositive,
          [intentTokens.solidFg]: themeContract.contentOnPrimary,
          [intentTokens.solidHoverBg]: themeContract.sentimentPositiveHover,
          [intentTokens.softBg]: themeContract.sentimentPositiveSubtle,
          [intentTokens.softFg]: themeContract.sentimentPositive,
          [intentTokens.softHoverBg]: themeContract.sentimentPositiveSubtle,
          [intentTokens.border]: themeContract.sentimentPositive,
          [intentTokens.borderHover]: themeContract.sentimentPositiveHover,
          [intentTokens.fg]: themeContract.sentimentPositive,
        },
      },
      warning: {
        vars: {
          [intentTokens.solidBg]: themeContract.sentimentWarning,
          [intentTokens.solidFg]: themeContract.contentOnPrimary,
          [intentTokens.solidHoverBg]: themeContract.sentimentWarningHover,
          [intentTokens.softBg]: themeContract.sentimentWarningSubtle,
          [intentTokens.softFg]: themeContract.sentimentWarning,
          [intentTokens.softHoverBg]: themeContract.sentimentWarningSubtle,
          [intentTokens.border]: themeContract.sentimentWarning,
          [intentTokens.borderHover]: themeContract.sentimentWarningHover,
          [intentTokens.fg]: themeContract.sentimentWarning,
        },
      },
      danger: {
        vars: {
          [intentTokens.solidBg]: themeContract.sentimentNegative,
          [intentTokens.solidFg]: themeContract.contentOnPrimary,
          [intentTokens.solidHoverBg]: themeContract.sentimentNegativeHover,
          [intentTokens.softBg]: themeContract.sentimentNegativeSubtle,
          [intentTokens.softFg]: themeContract.sentimentNegative,
          [intentTokens.softHoverBg]: themeContract.sentimentNegativeSubtle,
          [intentTokens.border]: themeContract.sentimentNegative,
          [intentTokens.borderHover]: themeContract.sentimentNegativeHover,
          [intentTokens.fg]: themeContract.sentimentNegative,
        },
      },
      info: {
        vars: {
          [intentTokens.solidBg]: themeContract.sentimentInfo,
          [intentTokens.solidFg]: themeContract.contentOnPrimary,
          [intentTokens.solidHoverBg]: themeContract.sentimentInfoHover,
          [intentTokens.softBg]: themeContract.sentimentInfoSubtle,
          [intentTokens.softFg]: themeContract.sentimentInfo,
          [intentTokens.softHoverBg]: themeContract.sentimentInfoSubtle,
          [intentTokens.border]: themeContract.sentimentInfo,
          [intentTokens.borderHover]: themeContract.sentimentInfoHover,
          [intentTokens.fg]: themeContract.sentimentInfo,
        },
      },
      mono: {
        vars: {
          [intentTokens.solidBg]: "#ffffff",
          [intentTokens.solidFg]: "#ffffff",
          [intentTokens.solidHoverBg]: "#f5f5f5",
          [intentTokens.softBg]: "#ffffff",
          [intentTokens.softFg]: "#ffffff",
          [intentTokens.softHoverBg]: "#f5f5f5",
          [intentTokens.border]: "#d4d4d4",
          [intentTokens.borderHover]: "#d4d4d4",
          [intentTokens.fg]: "#111111",
        },
      },
    },
  },
});

export const variant = recipe({
  variants: {
    variant: {
      solid: {
        backgroundColor: intentTokens.solidBg,
        borderColor: intentTokens.border,
        color: intentTokens.solidFg,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: intentTokens.solidHoverBg,
            borderColor: intentTokens.borderHover,
          },
        },
      },
      soft: {
        backgroundColor: intentTokens.softBg,
        color: intentTokens.solidFg,
        borderColor: "transparent",
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${intentTokens.solidHoverBg} 80%, ${intentTokens.softBg})`,
            borderColor: `color-mix(in srgb, ${intentTokens.border} 80%, ${intentTokens.softBg})`,
          },
        },
      },
      outline: {
        backgroundColor: "transparent",
        borderColor: intentTokens.border,
        color: intentTokens.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${intentTokens.solidFg} 85%, ${intentTokens.solidFg})`,
            borderColor: intentTokens.borderHover,
          },
        },
      },
      ghost: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: intentTokens.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            backgroundColor: `color-mix(in srgb, ${intentTokens.border} 15%, ${intentTokens.solidFg})`,
          },
        },
      },
      link: {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: intentTokens.fg,
        selectors: {
          "&:hover:not(:disabled)": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});
