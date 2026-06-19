"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import * as stylex from "@stylexjs/stylex";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { progressStyles } from "./progress.styles";

type ProgressRootProps = PropsWithStylex<ProgressPrimitive.Root.Props>;

function Progress({ children, style, ...props }: ProgressRootProps) {
	return (
		<ProgressPrimitive.Root
			{...stylex.props(progressStyles.root, style)}
			{...props}
		>
			{children ?? (
				<ProgressTrack>
					<ProgressIndicator />
				</ProgressTrack>
			)}
		</ProgressPrimitive.Root>
	);
}

type ProgressLabelProps = PropsWithStylex<ProgressPrimitive.Label.Props>;

export function ProgressLabel({ style, ...props }: ProgressLabelProps) {
	return (
		<ProgressPrimitive.Label
			{...stylex.props(progressStyles.label, style)}
			{...props}
		/>
	);
}

type ProgressTrackProps = PropsWithStylex<ProgressPrimitive.Track.Props>;

export function ProgressTrack({ style, ...props }: ProgressTrackProps) {
	return (
		<ProgressPrimitive.Track
			{...stylex.props(progressStyles.track, style)}
			{...props}
		/>
	);
}

type ProgressIndicatorProps =
	PropsWithStylex<ProgressPrimitive.Indicator.Props>;

export function ProgressIndicator({ style, ...props }: ProgressIndicatorProps) {
	return (
		<ProgressPrimitive.Indicator
			{...stylex.props(progressStyles.indicator, style)}
			{...props}
		/>
	);
}

type ProgressValueProps = PropsWithStylex<ProgressPrimitive.Value.Props>;

export function ProgressValue({ style, ...props }: ProgressValueProps) {
	return (
		<ProgressPrimitive.Value
			{...stylex.props(progressStyles.value, style)}
			{...props}
		/>
	);
}

export { Progress };
