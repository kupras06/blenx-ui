import { style, keyframes } from "@vanilla-extract/css";
import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, fontSize, fontWeight, spacing } from "@blenx-dev/theme/tokens";

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
  padding: spacing.sm,
  gap: spacing.sm,
});

export const fetchingText = style({
  color: themeContract.contentSecondary,
  fontSize: "13px",
});

export const tableContainer = style({
  overflowX: "auto",
  overflowY: "auto",
  borderRadius: borderRadius.md,
  borderWidth: 1,
  borderStyle: "solid",
  borderColor: themeContract.border,
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
  boxShadow: themeContract.shadowSm,
});

export const headRow = style({
  backgroundColor: themeContract.backgroundSubtle,
});

export const th = style({
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 12,
  paddingRight: 12,
  fontSize: "12px",
  fontWeight: fontWeight.semibold,
  color: themeContract.contentSecondary,
  textAlign: "left",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: themeContract.border,
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
  fontSize: fontSize.sm,
  color: themeContract.contentPrimary,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: themeContract.borderSubtle,
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
  backgroundColor: themeContract.backgroundSubtle,
});

export const emptyTd = style({
  padding: 0,
  borderBottomWidth: 1,
  borderBottomStyle: "solid",
  borderBottomColor: themeContract.border,
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
  borderBottomColor: themeContract.border,
  borderBottomStyle: "solid",
  borderBottomWidth: 1,
});

export const skeletonBar = style({
  borderRadius: 4,
  backgroundColor: themeContract.surfaceRaised,
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
  borderBottomColor: themeContract.borderSubtle,
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
  color: themeContract.contentSecondary,
  fontSize: fontSize.sm,
});

// ─── Column toggle ───────────────────────────────────────────────────────────

export const itemLabel = style({
  fontSize: 14,
});

export const deselectLabel = style({
  color: themeContract.contentSecondary,
  fontSize: 13,
});

export const checkboxChecked = style({
  marginLeft: "auto",
  width: 16,
  height: 16,
  borderRadius: 3,
  borderWidth: 1.5,
  borderStyle: "solid",
  borderColor: themeContract.primary,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: themeContract.primary,
});

export const checkboxUnchecked = style({
  marginLeft: "auto",
  width: 16,
  height: 16,
  borderRadius: 3,
  borderWidth: 1.5,
  borderStyle: "solid",
  borderColor: themeContract.border,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
});

export const partial = style({
  width: 8,
  height: 2,
  borderRadius: 1,
  backgroundColor: themeContract.contentSecondary,
});

// ─── Empty state ─────────────────────────────────────────────────────────────

export const emptyContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: spacing.xxxl,
  paddingBottom: spacing.xxxl,
  paddingLeft: spacing.md,
  paddingRight: spacing.md,
  gap: 12,
});

export const iconWrap = style({
  opacity: 0.5,
});

export const message = style({
  color: themeContract.contentSecondary,
  fontSize: fontSize.sm,
  lineHeight: 1.5,
  textAlign: "center",
  margin: 0,
});

export const actionWrap = style({
  marginTop: spacing.xs,
});

// ─── Error state ─────────────────────────────────────────────────────────────

export const errorContainer = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  paddingTop: spacing.xxxl,
  paddingBottom: spacing.xxxl,
  paddingLeft: spacing.md,
  paddingRight: spacing.md,
  gap: 12,
});

export const errorMessage = style({
  color: themeContract.sentimentNegative,
  fontSize: fontSize.sm,
  lineHeight: 1.5,
  textAlign: "center",
  margin: 0,
});

// ─── Infinite loader ─────────────────────────────────────────────────────────

export const sentinel = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: spacing.md,
  minHeight: 48,
});

export const loadingInline = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
});

export const loaderLoadingText = style({
  color: themeContract.contentSecondary,
  fontSize: fontSize.sm,
});

export const noMore = style({
  color: themeContract.contentDisabled,
  fontSize: fontSize.sm,
});

export const center = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: spacing.md,
});

// ─── Pagination ──────────────────────────────────────────────────────────────

export const nav = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: spacing.sm,
  paddingBottom: spacing.sm,
});

export const info = style({
  color: themeContract.contentSecondary,
  fontSize: fontSize.sm,
});

export const controls = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
});

export const range = style({
  color: themeContract.contentSecondary,
  fontSize: fontSize.sm,
  whiteSpace: "nowrap",
});

export const buttonGroup = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.xs,
});

export const pageWrap = style({
  display: "flex",
  alignItems: "center",
  gap: 2,
});

export const ellipsis = style({
  color: themeContract.contentDisabled,
  fontSize: fontSize.sm,
  paddingLeft: spacing.xs,
  paddingRight: spacing.xs,
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
  gap: spacing.md,
  paddingTop: spacing.sm,
  paddingBottom: spacing.sm,
});

export const leftGroup = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
  flex: 1,
});

export const rightGroup = style({
  display: "flex",
  alignItems: "center",
  gap: spacing.sm,
});

export const searchWrap = style({
  flex: 1,
  maxWidth: 320,
});
