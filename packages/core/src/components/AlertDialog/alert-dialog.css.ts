import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: tokenVars.spacing.xxs,
  padding: tokenVars.spacing.md,
  boxSizing: "border-box",
  paddingBottom: tokenVars.spacing.xs,
});

export const footer = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: tokenVars.spacing.sm,
  paddingLeft: tokenVars.spacing.md,
  paddingRight: tokenVars.spacing.md,
  boxSizing: "border-box",
  "@media": {
    "(min-width: 640px)": {
      flexDirection: "row",
      justifyContent: "flex-end",
      borderBottomLeftRadius: "calc(16px - 1px)",
      borderBottomRightRadius: "calc(16px - 1px)",
    },
  },
});

export const footerDefault = style({
  borderTopWidth: tokenVars.borderWidth.thin,
  borderTopStyle: "solid",
  borderTopColor: semanticVars.border.subtle,
  backgroundColor: semanticVars.background.subtle,
  paddingTop: tokenVars.spacing.md,
  paddingBottom: tokenVars.spacing.md,
});

export const footerBare = style({
  paddingTop: tokenVars.spacing.md,
  paddingBottom: tokenVars.spacing.lg,
});

export const title = style({
  fontSize: tokenVars.fontSize.lg,
  lineHeight: tokenVars.lineHeight.tight,
  fontWeight: tokenVars.fontWeight.semibold,
  color: semanticVars.text.primary,
});

export const description = style({
  fontSize: tokenVars.fontSize.sm,
  lineHeight: tokenVars.lineHeight.normal,
  color: semanticVars.text.secondary,
});

export const panel = style({
  boxSizing: "border-box",
  padding: tokenVars.spacing.md,
  paddingTop: tokenVars.spacing.xxs,
  paddingBottom: tokenVars.spacing.xxs,
});
