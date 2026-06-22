import { Input as InputPrimitive } from "@base-ui/react/input";
import { useRender } from "@base-ui/react/use-render";
import clsx from "clsx";
import type * as React from "react";
import { useId } from "react";
import { input, inputSm, inputLg, inputError, label } from "./input.css";

type InputSize = "sm" | "default" | "lg";
type _BaseInputProps = Omit<InputPrimitive.Props & React.RefAttributes<HTMLInputElement>, "size">;
export type InputProps = _BaseInputProps & {
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
  const generatedId = useId();
  const fieldId = props.id ?? generatedId;

  return (
    <InputPrimitive
      id={fieldId}
      data-slot="input"
      className={clsx(
        input,
        size === "sm" && inputSm,
        size === "lg" && inputLg,
        error ? inputError : null,
        className,
      )}
      style={style}
      {...props}
    />
  );
}
