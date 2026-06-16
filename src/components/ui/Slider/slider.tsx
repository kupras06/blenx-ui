"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import * as stylex from "@stylexjs/stylex";
import * as React from "react";
import {
	sliderControlStyles,
	sliderStyles,
	sliderTrackStyles,
	thumbStateStyles,
} from "./slider.styles";

type SliderProps = Omit<SliderPrimitive.Root.Props, "style"> & {
	style?: stylex.StyleXStyles;
};

type SliderValueProps = Omit<SliderPrimitive.Value.Props, "style"> & {
	style?: stylex.StyleXStyles;
};

export function Slider({
	className,
	children,
	defaultValue,
	value,
	min = 0,
	max = 100,
	style,
	...props
}: SliderProps): React.ReactElement {
	const _values = React.useMemo(() => {
		if (value !== undefined) {
			return Array.isArray(value) ? value : [value];
		}
		if (defaultValue !== undefined) {
			return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
		}
		return [min];
	}, [value, defaultValue, min]);
	const orientation = props.orientation || "horizontal";
	const rootProps = stylex.props(
		props.disabled && sliderStyles.disabled,
		style,
	);

	return (
		<SliderPrimitive.Root
			className={[rootProps.className, className].filter(Boolean).join(" ")}
			defaultValue={defaultValue}
			max={max}
			min={min}
			thumbAlignment="edge"
			value={value}
			{...props}
		>
			{children}
			<SliderPrimitive.Control
				className={stylex.props(
					sliderStyles.control,
					sliderControlStyles[orientation],
				).className}
				data-slot="slider-control"
			>
				<SliderPrimitive.Track
					className={
						stylex.props(sliderStyles.track, sliderTrackStyles[orientation])
							.className
					}
					data-slot="slider-track"
				>
					<SliderPrimitive.Indicator
						className={stylex.props(sliderStyles.indicator).className}
						data-slot="slider-indicator"
					/>
					{Array.from({ length: _values.length }, (_, index) => (
						<SliderPrimitive.Thumb
							index={index}
							key={index}
							render={(props, state) => (
								<div
									{...props}
									className={[
										props.className,
										stylex.props(
											sliderStyles.thumb,
											state.dragging && thumbStateStyles.dragging,
											state.disabled && sliderStyles.disabled,
										).className,
									]
										.filter(Boolean)
										.join(" ")}
								/>
							)}
						/>
					))}
				</SliderPrimitive.Track>
			</SliderPrimitive.Control>
		</SliderPrimitive.Root>
	);
}

export function SliderValue({
	className,
	style,
	...props
}: SliderValueProps): React.ReactElement {
	return (
		<SliderPrimitive.Value
			className={[
				stylex.props(sliderStyles.value, style).className,
				className,
			]
				.filter(Boolean)
				.join(" ")}
			data-slot="slider-value"
			{...props}
		/>
	);
}

export { SliderPrimitive };
