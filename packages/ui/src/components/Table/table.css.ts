import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { spacing } from "@blenx-dev/theme/tokens";

export const root = style({
  width: "100%",
  borderCollapse: "collapse",
  color: themeContract.contentSecondary,
  boxSizing: "border-box",
});

export const head = style({
  backgroundColor: themeContract.backgroundSubtle,
});

export const header = style({
  paddingTop: spacing.sm,
  paddingBottom: spacing.sm,
  paddingLeft: spacing.md,
  paddingRight: spacing.md,
  fontSize: themeContract.fontSize,
  fontWeight: 600,
  color: themeContract.contentSecondary,
  textAlign: "left",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: themeContract.border,
  whiteSpace: "nowrap",
  userSelect: "none",
});

export const row = style({
  transition: "background-color 0.15s ease",
  selectors: {
    "&:hover": {
      backgroundColor: themeContract.surfaceHover,
    },
  },
});

export const cell = style({
  paddingTop: spacing.sm,
  paddingBottom: spacing.sm,
  paddingLeft: spacing.md,
  paddingRight: spacing.md,
  fontSize: themeContract.fontSize,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: themeContract.borderSubtle,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const wrapper = style({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.border,
  borderRadius: themeContract.borderRadius,
  maxWidth: "100%",
  overflowX: "auto",
});

export const alignLeft = style({ textAlign: "left" });
export const alignCenter = style({ textAlign: "center" });
export const alignRight = style({ textAlign: "right" });

export const colorSecondary = style({
  color: themeContract.contentSecondary,
});
