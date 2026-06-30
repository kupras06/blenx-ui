import { style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

export const root = style({
  width: "100%",
  borderCollapse: "collapse",
  color: semanticVars.text.secondary,
  boxSizing: "border-box",
});

export const head = style({
  backgroundColor: semanticVars.background.subtle,
});

export const header = style({
  paddingTop: tokenVars.spacing.sm,
  paddingBottom: tokenVars.spacing.sm,
  paddingLeft: tokenVars.spacing.md,
  paddingRight: tokenVars.spacing.md,
  fontSize: tokenVars.fontSize.md,
  fontWeight: 600,
  color: semanticVars.text.secondary,
  textAlign: "left",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: semanticVars.border.default,
  whiteSpace: "nowrap",
  userSelect: "none",
});

export const row = style({
  transition: "background-color 0.15s ease",
  selectors: {
    "&:hover": {
      backgroundColor: semanticVars.background.subtle,
    },
  },
});

export const cell = style({
  paddingTop: tokenVars.spacing.sm,
  paddingBottom: tokenVars.spacing.sm,
  paddingLeft: tokenVars.spacing.md,
  paddingRight: tokenVars.spacing.md,
  fontSize: tokenVars.fontSize.md,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: semanticVars.border.subtle,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const wrapper = style({
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: semanticVars.border.default,
  borderRadius: tokenVars.borderRadius.default,
  maxWidth: "100%",
  overflowX: "auto",
});

export const alignLeft = style({ textAlign: "left" });
export const alignCenter = style({ textAlign: "center" });
export const alignRight = style({ textAlign: "right" });

export const colorSecondary = style({
  color: semanticVars.text.secondary,
});
