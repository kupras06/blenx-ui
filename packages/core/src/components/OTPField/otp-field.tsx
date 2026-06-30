import { OTPField as OTPFieldPreview } from "@base-ui/react/otp-field";
import clsx from "clsx";
import type React from "react";
import { root, input as inputRecipe, separator } from "./otp-field.css";

type OTPFieldSize = "default" | "lg";

type OTPFieldProps = Omit<React.ComponentProps<typeof OTPFieldPreview.Root>, "style"> & {
  size?: OTPFieldSize;
  className?: string;
};

type OTPFieldInputProps = Omit<
  React.ComponentProps<typeof OTPFieldPreview.Input>,
  "style" | "size"
> & {
  size?: OTPFieldSize;
  className?: string;
};

type OTPFieldSeparatorProps = {
  className?: string;
};

export function OTPField({ size = "default", className, ...props }: OTPFieldProps) {
  return (
    <OTPFieldPreview.Root
      className={clsx(root, className)}
      data-size={size}
      {...(props as React.ComponentProps<typeof OTPFieldPreview.Root>)}
    />
  );
}

export function OTPFieldInput({ size = "default", className, ...props }: OTPFieldInputProps) {
  return (
    <OTPFieldPreview.Input
      className={clsx(inputRecipe({ size }), className)}
      {...(props as React.ComponentProps<typeof OTPFieldPreview.Input>)}
    />
  );
}

export function OTPFieldSeparator({ className }: OTPFieldSeparatorProps) {
  return <OTPFieldPreview.Separator render={<div className={clsx(separator, className)} />} />;
}
