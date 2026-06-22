import { style } from "@vanilla-extract/css";
import { themeContract } from "#theme/contract.css";
import { spacing } from "#theme/tokens.css";

export const label = style({
  fontSize: 14,
  display: "inline-flex",
  gap: 4,
  lineHeight: 1.4,
  fontWeight: 400,
  color: themeContract.contentSecondary,
});

export const input = style({
  width: "100%",
  boxSizing: "border-box",
  paddingTop: spacing.small,
  paddingBottom: spacing.small,
  paddingLeft: spacing.medium,
  paddingRight: spacing.medium,
  fontSize: 16,
  lineHeight: 1.5,
  color: themeContract.contentPrimary,
  backgroundColor: themeContract.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.border,
  borderRadius: themeContract.borderRadius,
  outline: "none",
  selectors: {
    "&::placeholder": {
      color: themeContract.contentDisabled,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    "&:focus-visible": {
      borderColor: themeContract.borderStrong,
      boxShadow: `0 0 0 2px ${themeContract.borderStrong}`,
    },
    "&:focus-visible[aria-invalid='true']": {
      borderColor: themeContract.sentimentNegative,
      boxShadow: `0 0 0 3px ${themeContract.sentimentNegative}`,
    },
  },
});

export const inputSm = style({
  paddingTop: spacing.xsmall,
  paddingBottom: spacing.xsmall,
  paddingLeft: spacing.small,
  paddingRight: spacing.small,
  fontSize: 16,
});

export const inputLg = style({
  paddingTop: spacing.medium,
  paddingBottom: spacing.medium,
  paddingLeft: spacing.large,
  paddingRight: spacing.large,
  fontSize: 16,
});

export const inputError = style({
  borderColor: themeContract.sentimentNegative,
});

export const error = style({
  fontSize: 12,
  lineHeight: 1.4,
  color: themeContract.sentimentNegative,
});
