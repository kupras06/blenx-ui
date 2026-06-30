/* ── Loading Skeleton ── */

import { semanticVars, tokenVars } from "@blenx-dev/theme/contract";
import { keyframes, style } from "@vanilla-extract/css";

export const shimmerKeyframes = keyframes({
  "0%": { transform: "translateX(-100%)" },
  "100%": { transform: "translateX(100%)" },
});
export const skeletonShimmer = style({
  position: "relative",
  overflow: "hidden",
  "::after": {
    content: "",
    position: "absolute",
    inset: 0,
    background: `linear-gradient(90deg, transparent 0%, ${semanticVars.surface.raised} 50%, transparent 100%)`,
    animationName: shimmerKeyframes,
    animationDuration: "1.5s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
});

export const skeletonTextLine = style({
  height: 14,
  borderRadius: tokenVars.borderRadius.full,
  backgroundColor: semanticVars.surface.raised,
});

export const skeletonCardSkeleton = style({
  height: 200,
  borderRadius: tokenVars.borderRadius.default,
  backgroundColor: semanticVars.surface.raised,
});

export const skeletonTableHeader = style({
  height: 40,
  borderRadius: tokenVars.borderRadius.default,
  backgroundColor: semanticVars.surface.raised,
  marginBottom: tokenVars.spacing.xs,
});

export const skeletonTableRow = style({
  height: 48,
  borderRadius: tokenVars.borderRadius.default,
  backgroundColor: semanticVars.surface.raised,
});

export const skeletonAvatar = style({
  width: 48,
  height: 48,
  borderRadius: "50%",
  backgroundColor: semanticVars.surface.raised,
  flexShrink: 0,
});

export const skeletonAvatarTextGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: tokenVars.spacing.xs,
  flex: 1,
});

export const skeletonContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: tokenVars.spacing.md,
  padding: tokenVars.spacing.md,
});

export const skeletonProgressWrapper = style({
  marginTop: tokenVars.spacing.sm,
  width: "100%",
  maxWidth: 300,
});
