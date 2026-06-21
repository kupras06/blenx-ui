import * as stylex from "@stylexjs/stylex";
import { theme } from "#theme/contract.stylex";

export const boxStyles = stylex.create({
  root: {
    boxSizing: "border-box",
    borderRadius: theme.borderRadius,
    display: "block",
  },
  withBorder: {
    borderWidth: "1px",
    borderStyle: "solid",
    borderRadius: theme.borderRadius,
    borderColor: "inherit",
  },
  fullWidth: {
    width: "100%",
  },
  fullHeight: {
    height: "100%",
  },
  grow: {
    flexGrow: 1,
    minWidth: 0,
  },
  shrink: {
    flexShrink: 0,
  },
  maxWidth: (value: number | string) => ({
    maxWidth: value,
  }),
});

export const boxWidthStyles = stylex.create({
  xxs: { maxWidth: 240 },
  xs: { maxWidth: 320 },
  sm: { maxWidth: 480 },
  md: { maxWidth: 640 },
  lg: { maxWidth: 768 },
  xl: { maxWidth: 1024 },
  "2xl": { maxWidth: 1280 },
  "3xl": { maxWidth: 1440 },
  full: {
    width: "fit-content",
    maxWidth: "100%",
  },
  screen: {
    maxWidth: "100%",
    width: "fit-content",
  },
  viewport: {
    width: "full",
    maxWidth: "90svw",
  },
  maxViewPort: {
    width: "fit-content",
    maxWidth: "98svw",
  },
});

export const boxHeightStyles = stylex.create({
  "5svh": {
    maxHeight: "5svh",
    height: "5svh",
  },
  "10svh": {
    maxHeight: "10svh",
    height: "10svh",
  },
  "15svh": {
    maxHeight: "15svh",
    height: "15svh",
  },
  "25svh": {
    maxHeight: "25svh",
    height: "25svh",
  },
  "40svh": {
    maxHeight: "40svh",
    height: "40svh",
  },
  "60svh": {
    maxHeight: "60svh",
    height: "60svh",
  },
  "75svh": {
    maxHeight: "75svh",
    height: "75svh",
  },
  "90svh": {
    maxHeight: "90svh",
    height: "90svh",
  },

  full: {
    maxHeight: "100%",
    height: "100%",
  },
  screen: {
    maxHeight: "100svh",
    height: "100svh",
  },
  none: {
    maxHeight: "none",
    height: "none",
  },
});
export type BoxHeightStyles = keyof typeof boxHeightStyles;
const BOX_HEIGHT_KEYS = Object.keys(boxHeightStyles);
export const applyBoxHeightStyle = (height: unknown) => {
  if (typeof height === "string" && BOX_HEIGHT_KEYS.includes(height))
    return [boxHeightStyles[height as BoxHeightStyles]];
  return null;
};
