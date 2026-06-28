import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { spacing } from "@blenx-dev/theme/tokens";

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
  paddingTop: spacing.sm,
  paddingBottom: spacing.sm,
  paddingLeft: spacing.md,
  paddingRight: spacing.md,
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
  paddingTop: spacing.xs,
  paddingBottom: spacing.xs,
  paddingLeft: spacing.sm,
  paddingRight: spacing.sm,
  fontSize: 16,
});

export const inputLg = style({
  paddingTop: spacing.md,
  paddingBottom: spacing.md,
  paddingLeft: spacing.lg,
  paddingRight: spacing.lg,
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
