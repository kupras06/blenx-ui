import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderWidth, spacing } from "@blenx-dev/theme/tokens";

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.sm,
  padding: spacing.lg,
  boxSizing: "border-box",
  selectors: {
    "[data-has-panel] &": {
      paddingBottom: spacing.sm,
    },
  },
});

export const footer = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: spacing.sm,
  paddingLeft: spacing.lg,
  paddingRight: spacing.lg,
  boxSizing: "border-box",
  paddingBottom: "env(safe-area-inset-bottom)",
});

export const footerDefault = style({
  borderTopWidth: borderWidth.thin,
  borderTopStyle: "solid",
  borderTopColor: themeContract.borderSubtle,
  backgroundColor: themeContract.backgroundSubtle,
  paddingTop: spacing.md,
  paddingBottom: spacing.md,
});

export const footerBare = style({
  paddingTop: spacing.md,
  paddingBottom: spacing.lg,
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
  padding: spacing.lg,
});
