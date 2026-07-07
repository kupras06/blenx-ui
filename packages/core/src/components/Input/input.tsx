import { Input as InputPrimitive } from "@base-ui/react/input";
import { useRender } from "@base-ui/react/use-render";
import clsx from "clsx";
import type * as React from "react";
import { useId } from "react";
import { inputStyle, inputSm, inputLg, inputError, label } from "./input.css";
import { applyBaseSprinkles } from "../../utils/ve-style.utils";
import type { BaseSprinkles } from "../../utils/sprinkles.css";

type InputSize = "sm" | "default" | "lg";
type _BaseInputProps = Omit<InputPrimitive.Props & React.RefAttributes<HTMLInputElement>, "size">;
export type InputProps = _BaseInputProps &
  BaseSprinkles & {
    size?: InputSize;
    error?: string;
    wrapperStyle?: React.CSSProperties;
    className?: string;
    style?: React.CSSProperties;
  };

type LabelProps = useRender.ComponentProps<"label"> & {
  className?: string;
  style?: React.CSSProperties;
};

export function Label({ render, className, style, ...props }: LabelProps): React.ReactElement {
  return useRender({
    defaultTagName: "label",
    props: { className: clsx(label, className), style, "data-slot": "label", ...props },
    render,
  });
}

export function Input({ error, className, style, size = "default", ...props }: InputProps) {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  const generatedId = useId();
  const fieldId = (restProps.id as string | undefined) ?? generatedId;

  return (
    <InputPrimitive
      id={fieldId}
      data-slot="input"
      className={clsx(
        inputStyle,
        size === "sm" && inputSm,
        size === "lg" && inputLg,
        error ? inputError : null,
        boxProps,
        className,
      )}
      style={style}
      {...restProps}
    />
  );
}
