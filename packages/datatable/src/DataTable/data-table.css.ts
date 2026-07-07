import { style, keyframes } from "@vanilla-extract/css";
import { semanticVars } from "@blenx-dev/theme/contract";
import { baseSprinkles } from "@blenx-dev/core";

const pulse = keyframes({
  "0%, 100%": { opacity: 0.4 },
  "50%": { opacity: 0.8 },
});

export const actionsCell = baseSprinkles({
  display: "flex",
  gap: "4",
});

export const checkbox = baseSprinkles({
  cursor: "pointer",
});

export const fetchingBar = baseSprinkles({
  display: "flex",
  justify: "center",
  align: "center",
  padding: "sm",
  gap: "sm",
});

export const fetchingText = baseSprinkles({
  color: "secondary",
  fontSize: "sm",
});

export const tableContainer = style([
  baseSprinkles({
    overflow: "auto",
    position: "relative",
    borderRadius: "md",
    borderColor: "default",
    borderWidth: "thin",
    borderStyle: "solid",
  }),
]);

export const table = style([
  baseSprinkles({
    width: "full",
    borderCollapse: "collapse",
  }),
  style({
    tableLayout: "auto",
  }),
]);

export const theadStatic = style({});

export const theadSticky = baseSprinkles({
  position: "sticky",
  top: "0",
  zIndex: "1",
});

export const theadStickyScrolled = baseSprinkles({
  position: "sticky",
  top: "0",
  zIndex: "1",
  boxShadow: "sm",
});

export const headRow = baseSprinkles({
  backgroundColor: "subtle",
});

export const th = baseSprinkles({
  py: "10",
  px: "12",
  fontWeight: "semibold",
  color: "secondary",
  textAlign: "left",
  textTransform: "uppercase",
  whiteSpace: "nowrap",
  userSelect: "none",
  fontSize: "sm",
  letterSpacing: "tight",
  borderBottomWidth: "thin",
  borderBottomStyle: "solid",
  borderBottomColor: "default",
});
export const thSm = style([
  baseSprinkles({
    py: "6",
    px: "8",
  }),
  style({
    fontSize: "11px",
  }),
]);

export const thLg = baseSprinkles({
  py: "12",
  px: "16",
  fontSize: "sm",
});

export const thSortable = baseSprinkles({
  cursor: "pointer",
});

export const thContent = baseSprinkles({
  display: "flex",
  align: "center",
  gap: "4",
});

export const td = baseSprinkles({
  py: "10",
  px: "12",
  fontSize: "sm",
  textOverflow: "ellipsis",
  color: "primary",
  whiteSpace: "nowrap",
  overflow: "hidden",
  borderBottomStyle: "solid",
  borderBottomWidth: "thin",
  borderBottomColor: "subtle",
});
export const tdSm = baseSprinkles({
  py: "6",
  px: "8",
});

export const tdLg = baseSprinkles({
  py: "12",
  px: "16",
});

export const tr = style({
  transition: "background-color 0.15s ease",
});

export const trSm = style({ height: 36 });

export const trLg = style({ height: 60 });

export const trSelected = baseSprinkles({
  backgroundColor: "subtle",
});

export const emptyTd = baseSprinkles({
  padding: "0",
  borderBottomWidth: "thin",
  borderBottomStyle: "solid",
  borderBottomColor: "default",
});

// ─── Loading skeleton ────────────────────────────────────────────────────────

export const loadingWrapper = baseSprinkles({
  width: "full",
});

export const loadingTable = baseSprinkles({
  width: "full",
  borderCollapse: "collapse",
});

export const headerCell = baseSprinkles({
  py: "12",
  px: "16",
  borderBottomColor: "default",
  borderBottomStyle: "solid",
  borderBottomWidth: "thin",
});

export const skeletonBar = style({
  borderRadius: 4,
  backgroundColor: semanticVars.surface.raised,
  animationName: pulse,
  animationDuration: "1.5s",
  animationTimingFunction: "ease-in-out",
  animationIterationCount: "infinite",
});

export const cell = style([
  baseSprinkles({
    py: "12",
    px: "16",
  }),
  style({
    borderBottomColor: semanticVars.border.subtle,
    borderBottomStyle: "solid",
    borderBottomWidth: 1,
  }),
]);

export const loadingFooter = baseSprinkles({
  display: "flex",
  justify: "center",
  align: "center",
  p: "16",
  gap: "8",
});

export const loadingText = baseSprinkles({
  color: "secondary",
  fontSize: "sm",
});

// ─── Column toggle ───────────────────────────────────────────────────────────

export const itemLabel = style({
  fontSize: 14,
});

export const deselectLabel = baseSprinkles({ color: "secondary", fontSize: "sm" });

export const checkboxChecked = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    justify: "center",
    borderRadius: "xxs",
    borderWidth: "medium",
    borderStyle: "solid",
    borderColor: "default",
    backgroundColor: "primary",
  }),
  style({
    marginLeft: "auto",
    width: 16,
    height: 16,
  }),
]);

export const checkboxUnchecked = style([
  baseSprinkles({
    display: "inline-flex",
    align: "center",
    justify: "center",
    backgroundColor: "transparent",
    borderRadius: "xs",
    borderWidth: "medium",
    borderStyle: "solid",
    borderColor: "default",
  }),
  style({
    marginLeft: "auto",
    width: 16,
    height: 16,
  }),
]);

export const partial = style({
  width: 8,
  height: 2,
  borderRadius: 1,
  backgroundColor: semanticVars.text.secondary,
});

// ─── Empty state ─────────────────────────────────────────────────────────────

export const emptyContainer = baseSprinkles({
  display: "flex",
  direction: "column",
  align: "center",
  justify: "center",
  py: "xxxl",
  px: "md",
  gap: "12",
});

export const iconWrap = baseSprinkles({
  opacity: "0.5",
});

export const message = baseSprinkles({
  color: "secondary",
  fontSize: "sm",
  margin: "0",
  lineHeight: "normal",
});
export const actionWrap = baseSprinkles({
  marginTop: "xs",
});

// ─── Error state ─────────────────────────────────────────────────────────────

export const errorContainer = baseSprinkles({
  display: "flex",
  direction: "column",
  align: "center",
  justify: "center",
  py: "xxxl",
  px: "md",
  gap: "12",
});

export const errorMessage = baseSprinkles({
  fontSize: "sm",
  textAlign: "center",
  color: "error",
  lineHeight: "normal",
  margin: "0",
});

// ─── Infinite loader ─────────────────────────────────────────────────────────

export const sentinel = style([
  baseSprinkles({
    display: "flex",
    justify: "center",
    align: "center",
    padding: "md",
  }),
  style({
    minHeight: 48,
  }),
]);

export const loadingInline = baseSprinkles({
  display: "flex",
  align: "center",
  gap: "sm",
});

export const loaderLoadingText = baseSprinkles({
  color: "secondary",
  fontSize: "sm",
});

export const noMore = baseSprinkles({
  color: "disabled",
  fontSize: "sm",
});

export const center = baseSprinkles({
  display: "flex",
  justify: "center",
  align: "center",
  padding: "md",
});

// ─── Pagination ──────────────────────────────────────────────────────────────

export const nav = baseSprinkles({
  display: "flex",
  align: "center",
  justify: "between",
  py: "sm",
});

export const info = baseSprinkles({
  color: "secondary",
  fontSize: "sm",
});

export const controls = baseSprinkles({
  display: "flex",
  align: "center",
  gap: "sm",
});

export const range = baseSprinkles({
  color: "secondary",
  fontSize: "sm",
  whiteSpace: "nowrap",
});

export const buttonGroup = baseSprinkles({
  display: "flex",
  align: "center",
  gap: "xs",
});

export const pageWrap = baseSprinkles({
  display: "flex",
  align: "center",
  gap: "2",
});

export const ellipsis = baseSprinkles({
  color: "disabled",
  fontSize: "sm",
  px: "xs",
});

export const pageButton = style({
  minWidth: 32,
  height: 32,
});

// ─── Toolbar ─────────────────────────────────────────────────────────────────

export const toolbarContainer = baseSprinkles({
  display: "flex",
  align: "center",
  justify: "between",
  gap: "md",
  py: "sm",
});

export const leftGroup = baseSprinkles({
  display: "flex",
  align: "center",
  gap: "sm",
  flex: 1,
});

export const rightGroup = baseSprinkles({
  display: "flex",
  align: "center",
  gap: "sm",
});

export const searchWrap = baseSprinkles({
  flex: 1,
  maxWidth: "xs",
});
