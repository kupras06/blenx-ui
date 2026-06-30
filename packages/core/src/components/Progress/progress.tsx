"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import clsx from "clsx";
import * as styles from "./progress.css";
import type { _BaseDivProps } from "../../utils/types";

type ProgressRootProps = _BaseDivProps & ProgressPrimitive.Root.Props;

function Progress({ children, className, style, ...props }: ProgressRootProps) {
  return (
    <ProgressPrimitive.Root className={clsx(styles.root, className)} style={style} {...props}>
      {children ?? (
        <ProgressTrack>
          <ProgressIndicator />
        </ProgressTrack>
      )}
    </ProgressPrimitive.Root>
  );
}

type ProgressLabelProps = _BaseDivProps & ProgressPrimitive.Label.Props;

export function ProgressLabel({ className, style, ...props }: ProgressLabelProps) {
  return (
    <ProgressPrimitive.Label
      className={clsx(styles.progressLabel, className)}
      style={style}
      {...props}
    />
  );
}

type ProgressTrackProps = _BaseDivProps & ProgressPrimitive.Track.Props;

export function ProgressTrack({ className, style, ...props }: ProgressTrackProps) {
  return (
    <ProgressPrimitive.Track className={clsx(styles.track, className)} style={style} {...props} />
  );
}

type ProgressIndicatorProps = _BaseDivProps & ProgressPrimitive.Indicator.Props;

export function ProgressIndicator({ className, style, ...props }: ProgressIndicatorProps) {
  return (
    <ProgressPrimitive.Indicator
      className={clsx(styles.indicator, className)}
      style={style}
      {...props}
    />
  );
}

type ProgressValueProps = _BaseDivProps & ProgressPrimitive.Value.Props;

export function ProgressValue({ className, style, ...props }: ProgressValueProps) {
  return (
    <ProgressPrimitive.Value className={clsx(styles.value, className)} style={style} {...props} />
  );
}

export { Progress };
