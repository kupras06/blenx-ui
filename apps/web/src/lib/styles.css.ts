import { globalStyle, style } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

/* ── DocsLink ── */

export const docsLink = style({
  color: semanticVars.interactive.primary.default,
  textDecoration: "underline",
  textUnderlineOffset: 2,
  cursor: "pointer",
  transition: "text-decoration-color 200ms ease",
  ":hover": {
    color: semanticVars.interactive.primary.default,
  },
});

/* ── Installation ── */
export const installList = style({
  margin: 0,
  paddingLeft: "1.25rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.375rem",
});

export const installItem = style({
  margin: 0,
  fontFamily: "ui-monospace, SFMono-Regular, monospace",
  fontSize: tokenVars.fontSize.sm,
});

export const installCode = style({
  color: semanticVars.text.secondary,
  backgroundColor: semanticVars.background.subtle,
  padding: "1px 6px",
  borderRadius: tokenVars.borderRadius.sm,
  fontSize: tokenVars.fontSize.sm,
});

/* ── CodeBlock ── */

export const codeHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 16px",
  backgroundColor: semanticVars.surface.default,
  borderBottom: `1px solid ${semanticVars.border.subtle}`,
  borderRadius: `${tokenVars.borderRadius.md} ${tokenVars.borderRadius.md} 0 0`,
  fontSize: tokenVars.fontSize.xs,
  color: semanticVars.text.secondary,
});

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

/* ── DocsTable ── */

export const tableScroll = style({
  overflowX: "auto",
  WebkitOverflowScrolling: "touch",
});

export const tableView = style({
  width: "100%",
  borderCollapse: "collapse",
  fontSize: 14,
});

export const docsParagraph = style({
  lineHeight: 1.75,
  marginBlock: 0,
});

/* ── DocsList ── */

export const docsUl = style({
  paddingLeft: 24,
  marginBlock: 0,
  listStyle: "disc",
});

export const docsOl = style({
  paddingLeft: 24,
  marginBlock: 0,
  listStyle: "decimal",
});

export const docsLi = style({
  marginBottom: 4,
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

export const kpiLabel = style({
  fontSize: tokenVars.fontSize.xs,
  color: semanticVars.text.secondary,
  marginTop: tokenVars.spacing["1"],
});

export const profileSection = style({
  marginTop: tokenVars.spacing["6"],
});

export const profileActions = style({
  display: "flex",
  gap: tokenVars.spacing["2"],
  marginTop: tokenVars.spacing["3"],
});

/* ── Impact Summary ── */

export const impactPanel = style({
  padding: tokenVars.spacing["2"],
  borderRadius: tokenVars.borderRadius.md,
  backgroundColor: semanticVars.surface.raised,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: semanticVars.border.subtle,
});

export const impactEmpty = style({
  color: semanticVars.text.disabled,
  fontSize: tokenVars.fontSize.xs,
  textAlign: "center",
  paddingBlock: tokenVars.spacing["2"],
});

export const impactChip = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "2px 8px",
  borderRadius: tokenVars.borderRadius.full,
  backgroundColor: `color-mix(in srgb, ${semanticVars.interactive.primary} 15%, transparent)`,
  color: semanticVars.interactive.primary.default,
  fontSize: tokenVars.fontSize.xs,
  fontWeight: 500,
});
