import { globalStyle } from "@vanilla-extract/css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html, body", {
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

globalStyle("img, picture, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

globalStyle("button, a, input, textarea, select", {
  font: "inherit",
  color: "inherit",
  textDecoration: "none",
});

globalStyle("#root", {
  minHeight: "100vh",
});
