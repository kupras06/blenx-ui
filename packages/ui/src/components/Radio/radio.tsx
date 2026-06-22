"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import clsx from "clsx";
import { group, root, rootDisabled, indicator, indicatorChecked, dot } from "./radio.css";

type RadioGroupProps = Omit<RadioGroupPrimitive.Props, "style" | "className"> & {
  className?: string;
  style?: React.CSSProperties;
};

type RadioProps = Omit<RadioPrimitive.Root.Props, "style" | "className"> & {
  className?: string;
  style?: React.CSSProperties;
};

export function RadioGroup({ className, style, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive
      className={clsx(group, className)}
      style={style}
      data-slot="radio-group"
      {...props}
    />
  );
}

export function Radio({ className, style, ...props }: RadioProps) {
  return (
    <RadioPrimitive.Root
      {...props}
      render={(rootProps, { checked, disabled }) => (
        <span
          {...rootProps}
          className={clsx(root, disabled && rootDisabled, className)}
          style={style}
          data-slot="radio"
        >
          <RadioPrimitive.Indicator className={clsx(indicator, checked && indicatorChecked)}>
            {checked && <span className={dot} />}
          </RadioPrimitive.Indicator>
        </span>
      )}
    />
  );
}

export { Radio as RadioGroupItem };
