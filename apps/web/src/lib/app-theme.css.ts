import { createTheme, globalStyle } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { createBlenxTheme, tokenVarsDefaults, genPalleteFromRadix } from "@blenx-dev/theme";
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

export const tokenThemeClass = createTheme(tokenVars, tokenVarsDefaults);

export const { themeClass: lightClass } = createBlenxTheme({
  colors: {
    primary: {
      base: genPalleteFromRadix("blue", blue),
      accent: genPalleteFromRadix("blueA", blueA),
    },
    neutral: {
      base: genPalleteFromRadix("gray", gray),
      accent: genPalleteFromRadix("gray", gray),
    },
    secondary: {
      base: genPalleteFromRadix("gray", gray),
      accent: genPalleteFromRadix("gray", gray),
    },
    success: {
      base: genPalleteFromRadix("green", green),
      accent: genPalleteFromRadix("greenA", greenA),
    },
    warning: {
      base: genPalleteFromRadix("amber", amber),
      accent: genPalleteFromRadix("amberA", amberA),
    },
    danger: {
      base: genPalleteFromRadix("red", red),
      accent: genPalleteFromRadix("redA", redA),
    },
    info: {
      base: genPalleteFromRadix("blue", blue),
      accent: genPalleteFromRadix("blueA", blueA),
    },
  },
});

export const { themeClass: darkClass } = createBlenxTheme({
  colors: {
    primary: {
      base: genPalleteFromRadix("blue", blueDark),
      accent: genPalleteFromRadix("blueA", blueDarkA),
    },
    neutral: {
      base: genPalleteFromRadix("gray", grayDark),
      accent: genPalleteFromRadix("gray", grayDark),
    },
    secondary: {
      base: genPalleteFromRadix("gray", grayDark),
      accent: genPalleteFromRadix("gray", grayDark),
    },
    success: {
      base: genPalleteFromRadix("green", greenDark),
      accent: genPalleteFromRadix("greenA", greenDarkA),
    },
    warning: {
      base: genPalleteFromRadix("amber", amberDark),
      accent: genPalleteFromRadix("amberA", amberDarkA),
    },
    danger: {
      base: genPalleteFromRadix("red", redDark),
      accent: genPalleteFromRadix("redA", redDarkA),
    },
    info: {
      base: genPalleteFromRadix("blue", blueDark),
      accent: genPalleteFromRadix("blueA", blueDarkA),
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
