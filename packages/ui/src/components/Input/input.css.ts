import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";
import { spacing } from "#theme/tokens.css";

export const label = style({
  fontSize: 14,
  display: "inline-flex",
  gap: 4,
  lineHeight: 1.4,
  fontWeight: 400,
  color: theme.contentSecondary,
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
  color: theme.contentPrimary,
  backgroundColor: theme.surface,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.border,
  borderRadius: theme.borderRadius,
  outline: "none",
  selectors: {
    "&::placeholder": {
      color: theme.contentDisabled,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    "&:focus-visible": {
      borderColor: theme.borderStrong,
      boxShadow: `0 0 0 2px ${theme.borderStrong}`,
    },
    "&:focus-visible[aria-invalid='true']": {
      borderColor: theme.sentimentNegative,
      boxShadow: `0 0 0 3px ${theme.sentimentNegative}`,
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
  borderColor: theme.sentimentNegative,
});

export const error = style({
  fontSize: 12,
  lineHeight: 1.4,
  color: theme.sentimentNegative,
});
