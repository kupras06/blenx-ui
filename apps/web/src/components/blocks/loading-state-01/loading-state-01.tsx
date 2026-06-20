import * as stylex from "@stylexjs/stylex";
import { VStack, HStack } from "@blenx-dev/ui/components/Stack/stack";
import { Progress } from "@blenx-dev/ui/components/Progress/progress";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { skeletonStyles } from "./loading-state-01.styles";

type SkeletonPattern = "text" | "card" | "table" | "avatar" | "custom";

type Props = PropsWithStylex<{
  pattern?: SkeletonPattern;
  lines?: number;
  rows?: number;
  showProgress?: boolean;
  label?: string;
  children?: React.ReactNode;
}>;

function SkeletonBar({ style }: { style?: stylex.StyleXStyles }) {
  return (
    <div
      aria-hidden="true"
      {...stylex.props(skeletonStyles.textLine, skeletonStyles.shimmer, style)}
    />
  );
}

function TextPattern({ lines = 3 }: { lines?: number }) {
  return (
    <VStack gap="small">
      {Array.from({ length: lines }, (_, i) => (
        <SkeletonBar key={i} style={i === lines - 1 ? skeletonStyles.textLineShort : undefined} />
      ))}
    </VStack>
  );
}

function CardPattern() {
  return (
    <div
      {...stylex.props(skeletonStyles.cardSkeleton, skeletonStyles.shimmer)}
      aria-hidden="true"
    />
  );
}

function TablePattern({ rows = 4 }: { rows?: number }) {
  return (
    <VStack gap="xsmall">
      <div
        {...stylex.props(skeletonStyles.tableHeader, skeletonStyles.shimmer)}
        aria-hidden="true"
      />
      {Array.from({ length: rows }, (_, i) => (
        <div
          key={i}
          {...stylex.props(skeletonStyles.tableRow, skeletonStyles.shimmer)}
          aria-hidden="true"
        />
      ))}
    </VStack>
  );
}

function AvatarPattern() {
  return (
    <HStack gap="medium" align="center">
      <div {...stylex.props(skeletonStyles.avatar, skeletonStyles.shimmer)} aria-hidden="true" />
      <div {...stylex.props(skeletonStyles.avatarTextGroup)}>
        <SkeletonBar />
        <SkeletonBar />
      </div>
    </HStack>
  );
}

export function LoadingState01({
  pattern = "text",
  lines,
  rows,
  showProgress,
  label = "Loading content",
  children,
  style,
}: Props) {
  return (
    <output aria-busy="true" aria-label={label} {...stylex.props(skeletonStyles.container, style)}>
      {pattern === "text" && <TextPattern lines={lines} />}
      {pattern === "card" && <CardPattern />}
      {pattern === "table" && <TablePattern rows={rows} />}
      {pattern === "avatar" && <AvatarPattern />}
      {pattern === "custom" && children}

      {showProgress && (
        <div {...stylex.props(skeletonStyles.progressWrapper)}>
          <Progress value={null} />
        </div>
      )}
    </output>
  );
}
