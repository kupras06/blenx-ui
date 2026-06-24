import { createThemeContract, globalStyle } from "@vanilla-extract/css";

export const themeContract = createThemeContract({
  primary: "primary",
  primarySubtle: "primary-subtle",
  secondary: "secondary",
  primaryHover: "primary-hover",
  contentPrimary: "content-primary",
  contentSecondary: "content-secondary",
  contentDisabled: "content-disabled",
  contentAccent: "content-accent",
  contentOnPrimary: "content-on-primary",
  surface: "surface",
  surfaceSubtle: "surface-subtle",
  surfaceRaised: "surface-raised",
  surfaceHover: "surface-hover",
  surfaceOverlay: "surface-overlay",
  border: "border",
  borderSubtle: "border-subtle",
  borderStrong: "border-strong",
  borderRadius: "border-radius",
  background: "background",
  backgroundSubtle: "background-subtle",
  sentimentPositive: "sentiment-positive",
  sentimentPositiveSubtle: "sentiment-positive-subtle",
  sentimentPositiveHover: "sentiment-positive-hover",
  sentimentWarning: "sentiment-warning",
  sentimentWarningSubtle: "sentiment-warning-subtle",
  sentimentWarningHover: "sentiment-warning-hover",
  sentimentNegative: "sentiment-negative",
  sentimentNegativeSubtle: "sentiment-negative-subtle",
  sentimentNegativeHover: "sentiment-negative-hover",
  sentimentInfo: "sentiment-info",
  sentimentInfoSubtle: "sentiment-info-subtle",
  sentimentInfoHover: "sentiment-info-hover",
  focusRing: "focus-ring",
  shadowSm: "shadow-sm",
  shadowMd: "shadow-md",
  shadowLg: "shadow-lg",
  shadowXl: "shadow-xl",
  fontSize: "font-size",
  hoverOverlay: "hover-overlay",
  hoverOverlaySoft: "hover-overlay-soft",
});

globalStyle("*", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

globalStyle("*::before, *::after", {
  boxSizing: "border-box",
});
globalStyle("html, body", {
  margin: 0,
  padding: 0,
  minHeight: "100%",
});
globalStyle("body", {
  lineHeight: 1.5,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});
globalStyle("h1, h2, h3, h4, h5, h6", {
  fontSize: "inherit",
  fontWeight: "inherit",
});
globalStyle("ul, ol", {
  margin: 0,
  padding: 0,
});
globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});
globalStyle("button,a,input, textarea, select", {
  font: "inherit",
  color: "inherit",
  textDecoration: "none",
});
globalStyle("#root", {
  minHeight: "100vh",
});
