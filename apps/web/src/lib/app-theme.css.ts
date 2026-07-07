import { createTheme, globalStyle } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { createBlenxTheme, mergeWithDefaultTokens, genPaletteFromRadix } from "@blenx-dev/theme";
import {
  blue,
  blueA,
  blueDark,
  blueDarkA,
  amber,
  amberA,
  amberDark,
  amberDarkA,
  gray,
  grayDark,
  green,
  greenA,
  greenDark,
  greenDarkA,
  red,
  redA,
  redDark,
  redDarkA,
} from "@radix-ui/colors";

const tokens = mergeWithDefaultTokens({
  font: {
    sans: '"DM Sans", system-ui, -apple-system, sans-serif',
    body: '"DM Sans", system-ui, sans-serif',
    mono: '"DM Mono", ui-monospace, SFMono-Regular, monospace',
  },
});
export const tokenThemeClass = createTheme(tokenVars, tokens);

export const { themeClass: lightClass } = createBlenxTheme({
  colors: {
    primary: {
      base: genPaletteFromRadix("blue", blue),
      accent: genPaletteFromRadix("blueA", blueA),
    },
    neutral: {
      base: genPaletteFromRadix("gray", gray),
      accent: genPaletteFromRadix("gray", gray),
    },
    secondary: {
      base: genPaletteFromRadix("gray", gray),
      accent: genPaletteFromRadix("gray", gray),
    },
    success: {
      base: genPaletteFromRadix("green", green),
      accent: genPaletteFromRadix("greenA", greenA),
    },
    warning: {
      base: genPaletteFromRadix("amber", amber),
      accent: genPaletteFromRadix("amberA", amberA),
    },
    danger: {
      base: genPaletteFromRadix("red", red),
      accent: genPaletteFromRadix("redA", redA),
    },
    info: {
      base: genPaletteFromRadix("blue", blue),
      accent: genPaletteFromRadix("blueA", blueA),
    },
  },
});

export const { themeClass: darkClass } = createBlenxTheme({
  colors: {
    primary: {
      base: genPaletteFromRadix("blue", blueDark),
      accent: genPaletteFromRadix("blueA", blueDarkA),
    },
    neutral: {
      base: genPaletteFromRadix("gray", grayDark),
      accent: genPaletteFromRadix("gray", grayDark),
    },
    secondary: {
      base: genPaletteFromRadix("gray", grayDark),
      accent: genPaletteFromRadix("gray", grayDark),
    },
    success: {
      base: genPaletteFromRadix("green", greenDark),
      accent: genPaletteFromRadix("greenA", greenDarkA),
    },
    warning: {
      base: genPaletteFromRadix("amber", amberDark),
      accent: genPaletteFromRadix("amberA", amberDarkA),
    },
    danger: {
      base: genPaletteFromRadix("red", redDark),
      accent: genPaletteFromRadix("redA", redDarkA),
    },
    info: {
      base: genPaletteFromRadix("blue", blueDark),
      accent: genPaletteFromRadix("blueA", blueDarkA),
    },
  },
});

globalStyle("body", {
  backgroundColor: semanticVars.background.default,
  color: semanticVars.text.primary,
  margin: 0,
  fontFamily: tokenVars.font.body,
  fontSize: "14px",
  lineHeight: 1.5,
  maxWidth: "100vw",
});

globalStyle("h1,h2,h3,h4,h5,h6", {
  fontFamily: tokenVars.font.body,
});
