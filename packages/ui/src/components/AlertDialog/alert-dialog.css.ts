import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderWidth, fontSize, fontWeight, lineHeight, spacing } from "@blenx-dev/theme/tokens";

export const header = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.xxs,
  padding: spacing.md,
  boxSizing: "border-box",
  paddingBottom: spacing.xs,
});

export const footer = style({
  display: "flex",
  flexDirection: "column-reverse",
  gap: spacing.sm,
  paddingLeft: spacing.md,
  paddingRight: spacing.md,
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
  fontSize: fontSize.lg,
  lineHeight: lineHeight.tight,
  fontWeight: fontWeight.semibold,
  color: themeContract.contentPrimary,
});

export const description = style({
  fontSize: fontSize.sm,
  lineHeight: lineHeight.normal,
  color: themeContract.contentSecondary,
});

export const panel = style({
  boxSizing: "border-box",
  padding: spacing.md,
  paddingTop: spacing.xxs,
  paddingBottom: spacing.xxs,
});
