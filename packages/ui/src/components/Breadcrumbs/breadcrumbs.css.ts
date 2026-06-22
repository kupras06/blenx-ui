import { style } from "@vanilla-extract/css";
import { theme } from "#theme/contract.css";

export const root = style({
  display: "flex",
  alignItems: "center",
  gap: "4px",
  color: theme.contentSecondary,
  fontSize: 14,
});

export const list = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: 6,
  fontSize: theme.fontSize,
  color: theme.contentSecondary,
  "@media": {
    "screen and (min-width: 768px)": {
      gap: 10,
    },
  },
});

export const item = style({
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
});

export const link = style({
  color: "inherit",
  textDecoration: "none",
  cursor: "pointer",
  transitionProperty: "color",
  transitionDuration: "150ms",
  transitionTimingFunction: "ease",
  selectors: {
    "&:hover": {
      color: theme.contentPrimary,
    },
  },
});

export const page = style({
  fontWeight: 400,
  color: theme.contentPrimary,
});

export const separator = style({
  display: "inline-flex",
  alignItems: "center",
  opacity: 0.8,
});

export const ellipsis = style({
  display: "inline-flex",
  alignItems: "center",
});

export const srOnly = style({
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
});
