import { globalStyle } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { createBlenxTheme } from "@blenx-dev/theme";

export const { lightClass, darkClass, tokenThemeClass } = createBlenxTheme();

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
