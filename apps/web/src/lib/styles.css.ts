import { globalStyle, style } from "@vanilla-extract/css";

/* ── CodeBlock ── */

export const codeBlockContent = style({
  minWidth: 0,
  maxWidth: "100%",
  marginTop: "10px",
});

globalStyle(`${codeBlockContent} .shiki`, {
  width: "100%",
  maxWidth: "100%",
  boxSizing: "border-box",
  margin: 0,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
});

globalStyle(`${codeBlockContent} .shiki code`, {
  display: "block",
  width: "100%",
  maxWidth: "100%",
  whiteSpace: "inherit",
  overflowWrap: "inherit",
  wordBreak: "inherit",
});

globalStyle(`${codeBlockContent} .shiki .line`, {
  display: "block",
  width: "100%",
  maxWidth: "100%",
  whiteSpace: "inherit",
  overflowWrap: "inherit",
  wordBreak: "inherit",
});

globalStyle(`${codeBlockContent} .shiki span`, {
  whiteSpace: "inherit",
});

/* ── DocHeaders ── */

export const headingAnchor = style({
  opacity: 0,
  marginLeft: 8,
  fontSize: "0.7em",
  fontWeight: 400,
  verticalAlign: "middle",
  color: "color-mix(in srgb, var(--docs-heading-anchor) 65%, transparent)",
  textDecoration: "none",
  userSelect: "none",
  ":hover": {
    color: "var(--docs-heading-anchor-hover)",
    opacity: 1,
  },
});
