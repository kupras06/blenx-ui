import * as stylex from "@stylexjs/stylex";

export const containerStyles = stylex.create({
  root: {
    width: "100%",
    boxSizing: "border-box",
  },
  center: { marginLeft: "auto", marginRight: "auto" },
});

export const containerSizeStyles = stylex.create({
  xxs: { maxWidth: 220 },
  xs: { maxWidth: 320 },
  sm: { maxWidth: 640 },
  md: { maxWidth: 768 },
  lg: { maxWidth: 1024 },
  xl: { maxWidth: 1280 },
  full: { maxWidth: "none" },
});
