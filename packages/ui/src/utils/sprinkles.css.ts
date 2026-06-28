import { themeContract } from "@blenx-dev/theme/contract";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";

export const spacing = {
  none: "0",
  xxs: "2px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  medium: "12px",
  lg: "16px",
  large: "16px",
  xl: "64px",
  xlarge: "80px",
  huge: "96px",
  "2xl": "96px",
  "3xl": "128px",
  massive: "144px",
} as const;

const containerWidths = {
  xxs: "240px",
  xs: "320px",
  sm: "480px",
  md: "640px",
  lg: "768px",
  xl: "1024px",
  "2xl": "1280px",
  "3xl": "1440px",
  480: "480px",
  640: "640px",
  400: "400px",
  560: "560px",
  medium: "640px",
  large: "768px",
  xlarge: "1024px",
  xxlarge: "1280px",
  xxxl: "1440px",
  massive: "1440px",
  full: "100%",
  screen: "100%",
  viewport: "90svw",
  maxViewport: "98svw",
};

const colors = {
  primary: themeContract.contentPrimary,
  default: "currentColor",
  secondary: themeContract.contentSecondary,
  disabled: themeContract.contentDisabled,
  error: themeContract.sentimentNegative,
  success: themeContract.sentimentPositive,
  warning: themeContract.sentimentWarning,
  info: themeContract.sentimentInfo,
} as const;

const responsiveConditions = {
  base: {},
  sm: { "@media": "screen and (min-width: 640px)" },
  md: { "@media": "screen and (min-width: 768px)" },
  lg: { "@media": "screen and (min-width: 1280px)" },
  xl: { "@media": "screen and (min-width: 1536px)" },
} as const;

const layoutProperties = defineProperties({
  properties: {
    width: { auto: "auto", full: "100%", fit: "fit-content" },
    maxWidth: containerWidths,
    height: { auto: "auto", full: "100%", fit: "fit-content" },
    maxHeight: {
      "5svh": "5svh",
      "10svh": "10svh",
      "15svh": "15svh",
      "25svh": "25svh",
      "40svh": "40svh",
      "60svh": "60svh",
      "75svh": "75svh",
      "90svh": "90svh",
      full: "100%",
      screen: "100svh",
      none: "none",
    },
    borderRadius: {
      default: themeContract.borderRadius,
      none: "0",
      sm: "8px",
      medium: "12px",
      large: "16px",
      xlarge: "24px",
      xxlarge: "32px",
      full: "9999px",
      xxs: "2px",
      xs: "4px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      xxl: "32px",
    },
  },
  shorthands: {
    radius: ["borderRadius"],
  },
});

const colorProperties = defineProperties({
  properties: {
    color: colors,
    backgroundColor: {
      primary: themeContract.primary,
      default: "inherit",
      secondary: themeContract.secondary,
      disabled: themeContract.contentDisabled,
      error: themeContract.sentimentNegativeSubtle,
      success: themeContract.sentimentPositiveSubtle,
      warning: themeContract.sentimentWarningSubtle,
      info: themeContract.sentimentInfoSubtle,
    },
    borderColor: colors,
  },
});

const flexProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: "base",
  properties: {
    flex: ["none", 1],
    flexGrow: { 0: 0, 1: 1 },
    flexShrink: { 0: 0, 1: 1 },
    display: ["block", "flex", "grid", "inline-flex", "none"],
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    justifyContent: ["center", "start", "end", "stretch", "between", "around", "evenly"],
    alignItems: ["center", "start", "end", "stretch", "baseline"],
  },
  shorthands: {
    direction: ["flexDirection"],
    justify: ["justifyContent"],
    align: ["alignItems"],
    grow: ["flexGrow"],
    shrink: ["flexShrink"],
  },
});

const positionProperties = defineProperties({
  properties: {
    zIndex: {
      "0": 0,
      "1": 1,
      "-1": -1,
      base: 0,
      raised: 100,
      floating: 1000,
      sticky: 1100,
      overlay: 1200,
      popover: 1300,
      modal: 1400,
      toast: 1500,
      tooltip: 1600,
    },
    position: ["static", "relative", "absolute", "fixed", "sticky"],
    top: spacing,
    bottom: spacing,
    left: spacing,
    right: spacing,
    overflow: ["scroll", "visible", "hidden", "auto"],
  },
});

const responsiveSpacingProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: "base",
  properties: {
    paddingTop: spacing,
    paddingBottom: spacing,
    paddingLeft: spacing,
    paddingRight: spacing,
    marginTop: spacing,
    marginBottom: spacing,
    marginLeft: spacing,
    marginRight: spacing,
    gap: spacing,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    marginY: ["marginTop", "marginBottom"],
  },
});

/* ── Grid properties ── */

const columnValues: Record<number, string> = {};
for (let i = 1; i <= 12; i++) {
  columnValues[i] = `repeat(${i}, minmax(0, 1fr))`;
}

const gridProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: "base",
  properties: {
    gridTemplateColumns: columnValues,
    gridAutoFlow: {
      row: "row",
      column: "column",
      dense: "dense",
      "row dense": "row dense",
      "column dense": "column dense",
    },
    rowGap: spacing,
    columnGap: spacing,
    alignItems: ["start", "center", "end", "stretch", "baseline"],
    justifyItems: ["start", "center", "end", "stretch"],
  },
  shorthands: {
    columns: ["gridTemplateColumns"],
    flow: ["gridAutoFlow"],
    align: ["alignItems"],
    justify: ["justifyItems"],
    gap: ["rowGap", "columnGap"],
  },
});

export const gridSprinkles = createSprinkles(
  colorProperties,
  positionProperties,
  layoutProperties,
  responsiveSpacingProperties,
  gridProperties,
);

export const baseSprinkles = createSprinkles(
  layoutProperties,
  responsiveSpacingProperties,
  colorProperties,
  flexProperties,
  positionProperties,
);

export type BaseSprinkles = Parameters<typeof baseSprinkles>[0] & {
  fullWidth?: boolean;
  fullHeight?: boolean;
  withBorder?: boolean;
};
