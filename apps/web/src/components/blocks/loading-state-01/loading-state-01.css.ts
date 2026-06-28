/* ── Loading Skeleton ── */

import { themeContract } from "@blenx-dev/theme/contract";
import { borderRadius, spacing } from "@blenx-dev/theme/tokens";
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
    background: `linear-gradient(90deg, transparent 0%, ${themeContract.surfaceRaised} 50%, transparent 100%)`,
    animationName: shimmerKeyframes,
    animationDuration: "1.5s",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
  },
});

export const skeletonTextLine = style({
  height: 14,
  borderRadius: borderRadius.full,
  backgroundColor: themeContract.surfaceRaised,
});

export const skeletonCardSkeleton = style({
  height: 200,
  borderRadius: themeContract.borderRadius,
  backgroundColor: themeContract.surfaceRaised,
});

export const skeletonTableHeader = style({
  height: 40,
  borderRadius: themeContract.borderRadius,
  backgroundColor: themeContract.surfaceRaised,
  marginBottom: spacing.xs,
});

export const skeletonTableRow = style({
  height: 48,
  borderRadius: themeContract.borderRadius,
  backgroundColor: themeContract.surfaceRaised,
});

export const skeletonAvatar = style({
  width: 48,
  height: 48,
  borderRadius: "50%",
  backgroundColor: themeContract.surfaceRaised,
  flexShrink: 0,
});

export const skeletonAvatarTextGroup = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.xs,
  flex: 1,
});

export const skeletonContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: spacing.md,
  padding: spacing.md,
});

export const skeletonProgressWrapper = style({
  marginTop: spacing.sm,
  width: "100%",
  maxWidth: 300,
});
