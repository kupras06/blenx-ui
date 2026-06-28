import { style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { spacing } from "@blenx-dev/theme/tokens";

export const root = style({
  height: "100%",
  minHeight: 0,
  width: "100%",
  boxSizing: "border-box",
});

export const viewport = style({
  height: "100%",
  minWidth: 0,
  borderRadius: themeContract.borderRadius,
  outline: "none",
  boxSizing: "border-box",
  overscrollBehaviorY: "contain",
  overscrollBehaviorX: "contain",
  selectors: {
    "&:focus-visible": {
      boxShadow: `0 0 0 2px ${themeContract.borderStrong}`,
    },
  },
});

export const viewportFade = style({
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent, black 1.5rem, black calc(100% - 1.5rem), transparent)",
  maskImage:
    "linear-gradient(to bottom, transparent, black 1.5rem, black calc(100% - 1.5rem), transparent)",
});

export const viewportGutter = style({
  paddingRight: spacing.sm,
  paddingBottom: spacing.sm,
});

export const contentFill = style({
  height: "100%",
  width: "100%",
});

export const scrollbar = style({
  margin: spacing.xs,
  display: "flex",
  opacity: 0,
  boxSizing: "border-box",
  transitionProperty: "opacity",
  transitionDuration: "300ms",
  transitionTimingFunction: "ease",
  selectors: {
    "&[data-hovering]": {
      opacity: 1,
      transitionDelay: "0ms",
      transitionDuration: "100ms",
    },
    "&[data-scrolling]": {
      opacity: 1,
      transitionDelay: "0ms",
      transitionDuration: "100ms",
    },
  },
});

export const scrollbarHorizontal = style({
  height: "6px",
  flexDirection: "column",
});

export const scrollbarVertical = style({
  width: "6px",
});

export const thumb = style({
  position: "relative",
  flexGrow: 1,
  borderRadius: themeContract.borderRadius,
  backgroundColor: themeContract.borderStrong,
});
