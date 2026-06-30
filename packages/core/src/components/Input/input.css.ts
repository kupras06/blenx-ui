import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const label = style({
  fontSize: 14,
  display: "inline-flex",
  gap: 4,
  lineHeight: 1.4,
  fontWeight: 400,
  color: semanticVars.text.secondary,
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
  color: semanticVars.text.primary,
  backgroundColor: semanticVars.surface.default,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: semanticVars.border.default,
  borderRadius: tokenVars.borderRadius.default,
  outline: "none",
  selectors: {
    "&::placeholder": {
      color: semanticVars.text.disabled,
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    "&:focus-visible": {
      borderColor: semanticVars.border.strong,
      boxShadow: `0 0 0 2px ${semanticVars.border.strong}`,
    },
    "&:focus-visible[aria-invalid='true']": {
      borderColor: semanticVars.status.danger.default,
      boxShadow: `0 0 0 3px ${semanticVars.status.danger}`,
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
  borderColor: semanticVars.status.danger.default,
});

export const error = style({
  fontSize: 12,
  lineHeight: 1.4,
  color: semanticVars.status.danger.default,
});
