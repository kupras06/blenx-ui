import { style, keyframes } from "@vanilla-extract/css";
import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";

const pulse = keyframes({
  "0%, 100%": { opacity: 0.4 },
  "50%": { opacity: 0.8 },
});

export const actionsCell = style({
  display: "flex",
  gap: 4,
});

export const checkbox = style({
  cursor: "pointer",
});

export const fetchingBar = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: tokenVars.spacing.sm,
  gap: tokenVars.spacing.sm,
});

export const fetchingText = style({
  color: semanticVars.text.secondary,
  fontSize: "13px",
});

export const tableContainer = style({
  overflowX: "auto",
  overflowY: "auto",
  borderRadius: tokenVars.borderRadius.md,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: semanticVars.border.default,
  position: "relative",
});

export const table = style({
  width: "100%",
  borderCollapse: "collapse",
  tableLayout: "auto",
});

export const theadStatic = style({});

export const theadSticky = style({
  position: "sticky",
  top: 0,
  zIndex: 1,
});

export const theadStickyScrolled = style({
  position: "sticky",
  top: 0,
  zIndex: 1,
  boxShadow: semanticVars.shadow.sm,
});

export const headRow = style({
  backgroundColor: semanticVars.background.subtle,
});

export const th = style({
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 12,
  paddingRight: 12,
  fontSize: "12px",
  fontWeight: tokenVars.fontWeight.semibold,
  color: semanticVars.text.secondary,
  textAlign: "left",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: semanticVars.border.default,
  whiteSpace: "nowrap",
  userSelect: "none",
});

export const thSm = style({
  fontSize: "11px",
  paddingTop: 6,
  paddingBottom: 6,
  paddingLeft: 8,
  paddingRight: 8,
});

export const thLg = style({
  fontSize: "13px",
  paddingTop: 14,
  paddingBottom: 14,
  paddingLeft: 16,
  paddingRight: 16,
});

export const thSortable = style({
  cursor: "pointer",
});

export const thContent = style({
  display: "flex",
  alignItems: "center",
  gap: 4,
});

export const td = style({
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 12,
  paddingRight: 12,
  fontSize: tokenVars.fontSize.sm,
  color: semanticVars.text.primary,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: semanticVars.border.subtle,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const tdSm = style({
  paddingTop: 6,
  paddingBottom: 6,
  paddingLeft: 8,
  paddingRight: 8,
});

export const tdLg = style({
  paddingTop: 14,
  paddingBottom: 14,
  paddingLeft: 16,
  paddingRight: 16,
});

export const tr = style({
  transition: "background-color 0.15s ease",
});

export const trSm = style({ height: 36 });

export const trLg = style({ height: 60 });

export const trSelected = style({
  backgroundColor: semanticVars.background.subtle,
});

export const emptyTd = style({
  padding: 0,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: semanticVars.border.default,
});

// ─── Loading skeleton ────────────────────────────────────────────────────────

export const loadingWrapper = style({
  width: "100%",
});

export const loadingTable = style({
  width: "100%",
  borderCollapse: "collapse",
});

export const headerCell = style({
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 16,
  paddingRight: 16,
  borderBottomColor: semanticVars.border.default,
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
});

export const skeletonBar = style({
  borderRadius: 4,
  backgroundColor: semanticVars.surface.raised,
  animationName: pulse,
  animationDuration: "1.5s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
});

export const cell = style({
  paddingTop: 12,
  paddingBottom: 12,
  paddingLeft: 16,
  paddingRight: 16,
  borderBottomColor: semanticVars.border.subtle,
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
});

export const loadingFooter = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 16,
  gap: 8,
});

export const loadingText = style({
  color: semanticVars.text.secondary,
  fontSize: tokenVars.fontSize.sm,
});

// ─── Column toggle ───────────────────────────────────────────────────────────

export const itemLabel = style({
  fontSize: 14,
});

export const deselectLabel = style({
  color: semanticVars.text.secondary,
  fontSize: 13,
});

export const checkboxChecked = style({
  marginLeft: "auto",
  width: 16,
  height: 16,
  borderRadius: 3,
  borderWidth: 1.5,
  borderStyle: "solid",
  borderColor: semanticVars.interactive.primary,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: semanticVars.interactive.primary,
});

export const checkboxUnchecked = style({
  marginLeft: "auto",
  width: 16,
  height: 16,
  borderRadius: 3,
  borderWidth: 1.5,
  borderStyle: "solid",
  borderColor: semanticVars.border.default,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
});

export const partial = style({
  width: 8,
  height: 2,
  borderRadius: 1,
  backgroundColor: semanticVars.text.secondary,
});

// ─── Empty state ─────────────────────────────────────────────────────────────

export const emptyContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: tokenVars.spacing.xxxl,
  paddingBottom: tokenVars.spacing.xxxl,
  paddingLeft: tokenVars.spacing.md,
  paddingRight: tokenVars.spacing.md,
  gap: 12,
});

export const iconWrap = style({
  opacity: 0.5,
});

export const message = style({
  color: semanticVars.text.secondary,
  fontSize: tokenVars.fontSize.sm,
  lineHeight: 1.5,
  textAlign: "center",
  margin: 0,
});

export const actionWrap = style({
  marginTop: tokenVars.spacing.xs,
});

// ─── Error state ─────────────────────────────────────────────────────────────

export const errorContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: tokenVars.spacing.xxxl,
  paddingBottom: tokenVars.spacing.xxxl,
  paddingLeft: tokenVars.spacing.md,
  paddingRight: tokenVars.spacing.md,
  gap: 12,
});

export const errorMessage = style({
  color: semanticVars.status.danger,
  fontSize: tokenVars.fontSize.sm,
  lineHeight: 1.5,
  textAlign: "center",
  margin: 0,
});

// ─── Infinite loader ─────────────────────────────────────────────────────────

export const sentinel = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: tokenVars.spacing.md,
  minHeight: 48,
});

export const loadingInline = style({
  display: "flex",
  alignItems: "center",
  gap: tokenVars.spacing.sm,
});

export const loaderLoadingText = style({
  color: semanticVars.text.secondary,
  fontSize: tokenVars.fontSize.sm,
});

export const noMore = style({
  color: semanticVars.text.disabled,
  fontSize: tokenVars.fontSize.sm,
});

export const center = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: tokenVars.spacing.md,
});

// ─── Pagination ──────────────────────────────────────────────────────────────

export const nav = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: tokenVars.spacing.sm,
  paddingBottom: tokenVars.spacing.sm,
});

export const info = style({
  color: semanticVars.text.secondary,
  fontSize: tokenVars.fontSize.sm,
});

export const controls = style({
  display: "flex",
  alignItems: "center",
  gap: tokenVars.spacing.sm,
});

export const range = style({
  color: semanticVars.text.secondary,
  fontSize: tokenVars.fontSize.sm,
  whiteSpace: "nowrap",
});

export const buttonGroup = style({
  display: "flex",
  alignItems: "center",
  gap: tokenVars.spacing.xs,
});

export const pageWrap = style({
  display: "flex",
  alignItems: "center",
  gap: 2,
});

export const ellipsis = style({
  color: semanticVars.text.disabled,
  fontSize: tokenVars.fontSize.sm,
  paddingLeft: tokenVars.spacing.xs,
  paddingRight: tokenVars.spacing.xs,
});

export const pageButton = style({
  minWidth: 32,
  height: 32,
});

// ─── Toolbar ─────────────────────────────────────────────────────────────────

export const toolbarContainer = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: tokenVars.spacing.md,
  paddingTop: tokenVars.spacing.sm,
  paddingBottom: tokenVars.spacing.sm,
});

export const leftGroup = style({
  display: "flex",
  alignItems: "center",
  gap: tokenVars.spacing.sm,
  flex: 1,
});

export const rightGroup = style({
  display: "flex",
  alignItems: "center",
  gap: tokenVars.spacing.sm,
});

export const searchWrap = style({
  flex: 1,
  maxWidth: 320,
});
