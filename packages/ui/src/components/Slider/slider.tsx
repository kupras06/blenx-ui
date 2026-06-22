"use client";

import { Slider as SliderPrimitive } from "@base-ui/react/slider";
import clsx from "clsx";
import * as React from "react";
import {
  disabled,
  control,
  controlHorizontal,
  controlVertical,
  track,
  trackHorizontal,
  trackVertical,
  indicator,
  thumb,
  thumbDragging,
  value,
} from "./slider.css";

type SliderProps = Omit<SliderPrimitive.Root.Props, "style"> & {
  className?: string;
};

type SliderValueProps = Omit<SliderPrimitive.Value.Props, "style"> & {
  className?: string;
};

function Slider({
  className,
  children,
  defaultValue,
  value: controlledValue,
  min = 0,
  max = 100,
  ...props
}: SliderProps): React.ReactElement {
  const values = React.useMemo(() => {
    if (controlledValue !== undefined) {
      return Array.isArray(controlledValue) ? controlledValue : [controlledValue];
    }
    if (defaultValue !== undefined) {
      return Array.isArray(defaultValue) ? defaultValue : [defaultValue];
    }
    return [min];
  }, [controlledValue, defaultValue, min]);
  const orientation = props.orientation || "horizontal";

  return (
    <SliderPrimitive.Root
      className={clsx(props.disabled && disabled, className)}
      defaultValue={defaultValue}
      max={max}
      min={min}
      thumbAlignment="edge"
      value={controlledValue}
      {...props}
    >
      {children}
      <SliderPrimitive.Control
        className={clsx(
          control,
          orientation === "horizontal" ? controlHorizontal : controlVertical,
        )}
        data-slot="slider-control"
      >
        <SliderPrimitive.Track
          className={clsx(track, orientation === "horizontal" ? trackHorizontal : trackVertical)}
          data-slot="slider-track"
        >
          <SliderPrimitive.Indicator className={indicator} data-slot="slider-indicator" />
          {Array.from({ length: values.length }, (_, index) => (
            <SliderPrimitive.Thumb
              index={index}
              key={index}
              render={(thumbRenderProps, state) => (
                <div
                  {...thumbRenderProps}
                  className={clsx(
                    thumbRenderProps.className,
                    thumb,
                    state.dragging && thumbDragging,
                    state.disabled && disabled,
                  )}
                />
              )}
            />
          ))}
        </SliderPrimitive.Track>
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  );
}

function SliderValue({ className, ...props }: SliderValueProps): React.ReactElement {
  return (
    <SliderPrimitive.Value className={clsx(value, className)} data-slot="slider-value" {...props} />
  );
}

export { SliderValue, Slider };
