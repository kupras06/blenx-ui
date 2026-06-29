import { style } from "@vanilla-extract/css";
import { themeContract, tokenVars } from "@blenx-dev/theme/contract";

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
  paddingTop: tokenVars.spacing.sm,
  paddingBottom: tokenVars.spacing.sm,
  paddingLeft: tokenVars.spacing.md,
  paddingRight: tokenVars.spacing.md,
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
  paddingTop: tokenVars.spacing.xs,
  paddingBottom: tokenVars.spacing.xs,
  paddingLeft: tokenVars.spacing.sm,
  paddingRight: tokenVars.spacing.sm,
  fontSize: 16,
});

export const inputLg = style({
  paddingTop: tokenVars.spacing.md,
  paddingBottom: tokenVars.spacing.md,
  paddingLeft: tokenVars.spacing.lg,
  paddingRight: tokenVars.spacing.lg,
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
