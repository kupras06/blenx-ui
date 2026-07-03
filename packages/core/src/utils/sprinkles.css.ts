import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { colors, containerWidths, responsiveConditions, spacing } from "./sprinkles.tokens";

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
      default: tokenVars.borderRadius.default,
      none: "0",
      inherit: "inherit",
      full: "9999px",
      xxs: tokenVars.borderRadius.xxs,
      xs: tokenVars.borderRadius.xs,
      sm: tokenVars.borderRadius.sm,
      md: tokenVars.borderRadius.md,
      lg: tokenVars.borderRadius.lg,
      xl: tokenVars.borderRadius.xl,
      xxl: tokenVars.borderRadius.xxl,
      xxxl: tokenVars.borderRadius.xxxl,
    },
    borderWidth: {
      none: "0",
      hairline: tokenVars.borderWidth.hairline,
      thin: tokenVars.borderWidth.thin,
      medium: tokenVars.borderWidth.medium,
      thick: tokenVars.borderWidth.thick,
      heavy: tokenVars.borderWidth.heavy,
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
      primary: semanticVars.interactive.primary.default,
      primaryHover: semanticVars.interactive.primary.hover,
      primaryActive: semanticVars.interactive.primary.active,
      secondary: semanticVars.interactive.secondary.default,
      secondaryHover: semanticVars.interactive.secondary.hover,
      secondaryActive: semanticVars.interactive.secondary.active,
      surface: semanticVars.surface.default,
      canvas: semanticVars.background.default,
      subtle: semanticVars.background.subtle,
      default: "inherit",
      transparent: "transparent",
      disabled: semanticVars.background.subtle,
      error: semanticVars.status.dangerBg,
      success: semanticVars.status.successBg,
      warning: semanticVars.status.warningBg,
      info: semanticVars.status.infoBg,
    },
    borderColor: colors,
    boxShadow: {
      sm: tokenVars.shadow.sm,
      md: tokenVars.shadow.md,
      lg: tokenVars.shadow.lg,
      xl: tokenVars.shadow.xl,
    },
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
    flexWrap: ["wrap", "nowrap", "wrap-reverse"],
    flexDirection: ["row", "row-reverse", "column", "column-reverse"],
    gap: spacing,
  },
  shorthands: {
    direction: ["flexDirection"],
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
  },
  shorthands: {
    columns: ["gridTemplateColumns"],
    flow: ["gridAutoFlow"],
    gap: ["rowGap", "columnGap"],
  },
});
const alignmentProperties = defineProperties({
  conditions: responsiveConditions,
  defaultCondition: "base",
  properties: {
    alignItems: {
      start: "flex-start",
      center: "center",
      end: "flex-end",
      stretch: "stretch",
      baseline: "baseline",
    },
    justifyContent: {
      start: "flex-start",
      center: "center",
      end: "flex-end",
      stretch: "stretch",
      between: "space-between",
      around: "space-around",
      evenly: "space-evenly",
    },
  },
  shorthands: {
    align: ["alignItems"],
    justify: ["justifyContent"],
  },
});

const fontProperties = defineProperties({
  properties: {
    fontSize: {
      xxs: tokenVars.fontSize.xxs,
      xs: tokenVars.fontSize.xs,
      sm: tokenVars.fontSize.sm,
      md: tokenVars.fontSize.md,
      lg: tokenVars.fontSize.lg,
      xl: tokenVars.fontSize.xl,
      xxl: tokenVars.fontSize.xxl,
      xxxl: tokenVars.fontSize.xxxl,
      display: tokenVars.fontSize.display,
      displayLg: tokenVars.fontSize.displayLg,
      hero: tokenVars.fontSize.hero,
    },
    fontWeight: {
      regular: tokenVars.fontWeight.regular,
      medium: tokenVars.fontWeight.medium,
      semibold: tokenVars.fontWeight.semibold,
      bold: tokenVars.fontWeight.bold,
      extrabold: tokenVars.fontWeight.extrabold,
    },
    letterSpacing: {
      tight: tokenVars.letterSpacing.tight,
      snug: tokenVars.letterSpacing.snug,
      normal: tokenVars.letterSpacing.normal,
      wide: tokenVars.letterSpacing.wide,
      wider: tokenVars.letterSpacing.wider,
      widest: tokenVars.letterSpacing.widest,
    },
    lineHeight: {
      tight: tokenVars.lineHeight.tight,
      snug: tokenVars.lineHeight.snug,
      normal: tokenVars.lineHeight.normal,
      relaxed: tokenVars.lineHeight.relaxed,
      loose: tokenVars.lineHeight.loose,
    },
  },
});

export const baseSprinkles = createSprinkles(
  layoutProperties,
  responsiveSpacingProperties,
  colorProperties,
  flexProperties,
  positionProperties,
  alignmentProperties,
  fontProperties,
);

export const gridSprinkles = createSprinkles(gridProperties, alignmentProperties);

export type GridSprinkles = Parameters<typeof gridSprinkles>[0];

export type BaseSprinkles = Parameters<typeof baseSprinkles>[0] & {
  fullWidth?: boolean;
  fullHeight?: boolean;
  withBorder?: boolean;
};
