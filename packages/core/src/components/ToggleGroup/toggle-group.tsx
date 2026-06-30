"use client";

import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";
import clsx from "clsx";
import * as React from "react";
import type { SeparatorProps } from "../Separator/separator";
import { Separator } from "../Separator/separator";
import {
  Toggle as ToggleComponent,
  type ToggleProps as ToggleComponentProps,
  type ToggleProps,
  type ToggleSize,
} from "../Toggle/toggle";
import {
  groupBase,
  groupHorizontal,
  groupVertical,
  groupDefault,
  groupOutline,
  outlineItemHorizontal,
  outlineItemVertical,
} from "./toggle-group.css";

type ToggleGroupVariant = ToggleProps["variant"];
type ToggleGroupSize = ToggleSize;

type ToggleGroupContextValue = {
  variant: ToggleGroupVariant;
  size: ToggleGroupSize;
  orientation: "horizontal" | "vertical";
};

export const ToggleGroupContext = React.createContext<ToggleGroupContextValue | null>(null);

export type ToggleGroupProps = ToggleGroupPrimitive.Props & {
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
  orientation?: "horizontal" | "vertical";
  className?: string;
  style?: React.CSSProperties;
};

export function ToggleGroup({
  className,
  style,
  variant = "default",
  size = "default",
  orientation = "horizontal",
  children,
  ...props
}: ToggleGroupProps): React.ReactElement {
  const isHorizontal = orientation === "horizontal";
  const isOutline = variant === "outline";

  const contextValue = React.useMemo(
    () => ({ variant, size, orientation }),
    [variant, size, orientation],
  );

  return (
    <ToggleGroupPrimitive
      className={clsx(
        groupBase,
        isHorizontal ? groupHorizontal : groupVertical,
        isOutline ? groupOutline : groupDefault,
        className,
      )}
      style={style}
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      orientation={orientation}
      {...props}
    >
      <ToggleGroupContext.Provider value={contextValue}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive>
  );
}

export function ToggleGroupItem({
  className,
  style,
  children,
  variant,
  size,
  ...props
}: ToggleComponentProps & {
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
  className?: string;
  style?: React.CSSProperties;
}): React.ReactElement {
  const context = React.useContext(ToggleGroupContext);

  const resolvedVariant = variant ?? context?.variant ?? "default";
  const resolvedSize = size ?? context?.size ?? "default";
  const orientation = context?.orientation ?? "horizontal";
  const isOutline = resolvedVariant === "outline";

  return (
    <ToggleComponent
      className={clsx(
        isOutline && (orientation === "horizontal" ? outlineItemHorizontal : outlineItemVertical),
        className,
      )}
      style={style}
      data-size={resolvedSize}
      data-variant={resolvedVariant}
      size={resolvedSize}
      variant={resolvedVariant}
      {...props}
    >
      {children}
    </ToggleComponent>
  );
}

export function ToggleGroupSeparator({
  className,
  orientation,
  ...props
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
} & SeparatorProps): React.ReactElement {
  const context = React.useContext(ToggleGroupContext);
  const resolvedOrientation =
    orientation ?? (context?.orientation === "vertical" ? "horizontal" : "vertical");

  return <Separator className={clsx(className)} orientation={resolvedOrientation} {...props} />;
}
