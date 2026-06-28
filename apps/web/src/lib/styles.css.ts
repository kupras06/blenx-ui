import { globalStyle, style } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, fontSize, spacing } from "@blenx-dev/theme/tokens";

/* ── Hero01 ── */

export const heroImage = style({
  width: "100%",
  maxWidth: 540,
  height: "auto",
  borderRadius: themeContract.borderRadius,
  objectFit: "cover",
});

/* ── Docs Sidebar ── */

export const sidebarLink = style({
  textDecoration: "none",
});

/* ── DocsToc ── */

export const tocRoot = style({
  display: "none",
  width: "220px",
  flexShrink: 0,
  position: "sticky",
  top: spacing.lg,
  alignSelf: "start",
  maxHeight: "90svh",
  overflowY: "auto",
  "@media": {
    "screen and (min-width: 1024px)": {
      display: "block",
    },
  },
});

export const tocList = style({
  listStyle: "none",
  margin: 0,
  padding: 0,
});

/* ── MdxComponents (table head) ── */

export const tableHeaderRow = style({
  backgroundColor: themeContract.surfaceSubtle,
});

export const tableHeaderCell = style({
  padding: "10px 16px",
  fontWeight: 600,
  fontSize: fontSize.sm,
  textAlign: "left",
  whiteSpace: "nowrap",
  color: themeContract.contentPrimary,
  borderBottom: `1px solid ${themeContract.border}`,
});

export const tableCell = style({
  padding: "10px 16px",
  fontSize: fontSize.sm,
  borderBottom: `1px solid ${themeContract.borderSubtle}`,
  color: themeContract.contentSecondary,
  verticalAlign: "top",
  lineHeight: 1.6,
});

/* ── DocsLink ── */

export const docsLink = style({
  color: themeContract.primary,
  textDecoration: "underline",
  textUnderlineOffset: 2,
  cursor: "pointer",
  transition: "text-decoration-color 200ms ease",
  ":hover": {
    color: themeContract.primary,
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
  fontSize: fontSize.sm,
});

export const installCode = style({
  color: themeContract.contentSecondary,
  backgroundColor: themeContract.surfaceSubtle,
  padding: "1px 6px",
  borderRadius: borderRadius.sm,
  fontSize: fontSize.sm,
});

/* ── CodeBlock ── */

export const codeHeader = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "8px 16px",
  backgroundColor: themeContract.surface,
  borderBottom: `1px solid ${themeContract.borderSubtle}`,
  borderRadius: `${borderRadius.md} ${borderRadius.md} 0 0`,
  fontSize: fontSize.xs,
  color: themeContract.contentSecondary,
});

export const codeScroll = style({
  overflowX: "auto",
  WebkitOverflowScrolling: "touch",
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

export const codeCopyButton = style({
  position: "absolute",
  top: 8,
  right: 8,
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

export const docsTableHeader = style({
  backgroundColor: themeContract.surfaceSubtle,
  borderBottom: `1px solid ${themeContract.border}`,
});

export const docsTableHeaderCell = style({
  padding: "8px 16px",
  fontWeight: 600,
  textAlign: "left",
  whiteSpace: "nowrap",
  color: themeContract.contentPrimary,
});

export const docsTableCell = style({
  padding: "8px 16px",
  borderBottom: `1px solid ${themeContract.borderSubtle}`,
  color: themeContract.contentSecondary,
  verticalAlign: "top",
});

export const docsTableCode = style({
  fontFamily: "ui-monospace, SFMono-Regular, monospace",
  fontSize: 13,
  backgroundColor: themeContract.surfaceSubtle,
  padding: "2px 6px",
  borderRadius: borderRadius.sm,
});

/* ── DocsParagraph ── */

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

/* ── Example Dashboard ── */

export const kpiGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: spacing["3"],
  marginBottom: spacing["6"],
});

export const kpiValue = style({
  fontSize: fontSize.xl,
  fontWeight: 700,
  color: themeContract.contentPrimary,
});

export const kpiLabel = style({
  fontSize: fontSize.xs,
  color: themeContract.contentSecondary,
  marginTop: spacing["1"],
});

export const trendUp = style({
  color: themeContract.sentimentPositive,
  fontSize: fontSize.xs,
  display: "flex",
  alignItems: "center",
  gap: spacing["1"],
  marginTop: spacing["1"],
});

export const trendDown = style({
  color: themeContract.sentimentNegative,
  fontSize: fontSize.xs,
  display: "flex",
  alignItems: "center",
  gap: spacing["1"],
  marginTop: spacing["1"],
});

export const dashboardGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: spacing["3"],
  marginTop: spacing["6"],
});

export const profileSection = style({
  marginTop: spacing["6"],
});

export const profileContent = style({
  display: "flex",
  alignItems: "center",
  gap: spacing["3"],
});

export const profileInfo = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing["1"],
});

export const profileName = style({
  fontSize: fontSize.md,
  fontWeight: 600,
  color: themeContract.contentPrimary,
});

export const profileEmail = style({
  fontSize: fontSize.sm,
  color: themeContract.contentSecondary,
});

export const profileActions = style({
  display: "flex",
  gap: spacing["2"],
  marginTop: spacing["3"],
});

export const chartPlaceholder = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 200,
  color: themeContract.contentDisabled,
  fontSize: fontSize.sm,
});

/* ── Impact Summary ── */

export const impactPanel = style({
  padding: spacing["2"],
  borderRadius: borderRadius.md,
  backgroundColor: themeContract.surfaceRaised,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.borderSubtle,
});

export const impactEmpty = style({
  color: themeContract.contentDisabled,
  fontSize: fontSize.xs,
  textAlign: "center",
  paddingBlock: spacing["2"],
});

export const impactList = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing["1"],
});

export const impactChip = style({
  display: "inline-flex",
  alignItems: "center",
  padding: "2px 8px",
  borderRadius: borderRadius.full,
  backgroundColor: `${themeContract.primary}15`,
  color: themeContract.primary,
  fontSize: fontSize.xs,
  fontWeight: 500,
});
