import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";
import { spacing } from "#theme/tokens.css";

export const root = style({
  width: "100%",
  borderCollapse: "collapse",
  color: theme.contentSecondary,
  boxSizing: "border-box",
});

export const head = style({
  backgroundColor: theme.backgroundSubtle,
});

export const header = style({
  paddingTop: spacing.small,
  paddingBottom: spacing.small,
  paddingLeft: spacing.medium,
  paddingRight: spacing.medium,
  fontSize: theme.fontSize,
  fontWeight: 600,
  color: theme.contentSecondary,
  textAlign: "left",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: theme.border,
  whiteSpace: "nowrap",
  userSelect: "none",
});

export const row = style({
  transition: "background-color 0.15s ease",
  selectors: {
    "&:hover": {
      backgroundColor: theme.surfaceHover,
    },
  },
});

export const cell = style({
  paddingTop: spacing.small,
  paddingBottom: spacing.small,
  paddingLeft: spacing.medium,
  paddingRight: spacing.medium,
  fontSize: theme.fontSize,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: theme.borderSubtle,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const wrapper = style({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: theme.border,
  borderRadius: theme.borderRadius,
  maxWidth: "100%",
  overflowX: "auto",
});

export const alignLeft = style({ textAlign: "left" });
export const alignCenter = style({ textAlign: "center" });
export const alignRight = style({ textAlign: "right" });

export const colorSecondary = style({
  color: theme.contentSecondary,
});
