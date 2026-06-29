import { style } from "@vanilla-extract/css";
import { themeContract, tokenVars } from "@blenx-dev/theme/contract";

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: tokenVars.spacing.sm,
  padding: tokenVars.spacing.lg,
  boxSizing: "border-box",
  selectors: {
    "[data-has-panel] &": {
      paddingBottom: tokenVars.spacing.sm,
    },
  },
});

export const footer = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: tokenVars.spacing.sm,
  paddingLeft: tokenVars.spacing.lg,
  paddingRight: tokenVars.spacing.lg,
  boxSizing: "border-box",
  paddingBottom: "env(safe-area-inset-bottom)",
});

export const footerDefault = style({
  borderTopWidth: tokenVars.borderWidth.thin,
  borderTopStyle: "solid",
  borderTopColor: themeContract.borderSubtle,
  backgroundColor: themeContract.backgroundSubtle,
  paddingTop: tokenVars.spacing.md,
  paddingBottom: tokenVars.spacing.md,
});

export const footerBare = style({
  paddingTop: tokenVars.spacing.md,
  paddingBottom: tokenVars.spacing.lg,
});

export const title = style({
  fontSize: "20px",
  lineHeight: 1,
  fontWeight: 600,
  color: themeContract.contentPrimary,
});

export const description = style({
  fontSize: "14px",
  lineHeight: 1.4,
  color: themeContract.contentSecondary,
});

export const panel = style({
  boxSizing: "border-box",
  padding: tokenVars.spacing.lg,
});
