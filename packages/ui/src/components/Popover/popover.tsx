"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { popoverStyles } from "./popover.styles";

export const PopoverCreateHandle: typeof PopoverPrimitive.createHandle =
  PopoverPrimitive.createHandle;

export function Popover(props: PopoverPrimitive.Root.Props): React.ReactElement {
  return <PopoverPrimitive.Root {...props} />;
}

export function PopoverTrigger(props: PopoverPrimitive.Trigger.Props): React.ReactElement {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

export function PopoverClose(props: PopoverPrimitive.Close.Props): React.ReactElement {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />;
}

export function PopoverPortal(props: PopoverPrimitive.Portal.Props): React.ReactElement {
  return <PopoverPrimitive.Portal {...props} />;
}

export function PopoverPositioner({
  sideOffset = 4,
  side = "bottom",
  align = "center",
  ...props
}: PopoverPrimitive.Positioner.Props): React.ReactElement {
  return (
    <PopoverPrimitive.Positioner
      sideOffset={sideOffset}
      side={side}
      align={align}
      {...stylex.props(popoverStyles.positioner)}
      data-slot="popover-positioner"
      {...props}
    />
  );
}

export function PopoverPopup({
  style,
  ...props
}: PropsWithStylex<PopoverPrimitive.Popup.Props>): React.ReactElement {
  return (
    <PopoverPrimitive.Popup
      {...stylex.props(popoverStyles.popup, style)}
      data-slot="popover-popup"
      {...props}
    />
  );
}

export function PopoverArrow(props: PopoverPrimitive.Arrow.Props): React.ReactElement {
  return (
    <PopoverPrimitive.Arrow
      {...stylex.props(popoverStyles.arrow)}
      data-slot="popover-arrow"
      {...props}
    >
      <div {...stylex.props(popoverStyles.arrowFill)} />
    </PopoverPrimitive.Arrow>
  );
}

export function PopoverBackdrop(props: PopoverPrimitive.Backdrop.Props): React.ReactElement {
  return (
    <PopoverPrimitive.Backdrop
      {...stylex.props(popoverStyles.backdrop)}
      data-slot="popover-backdrop"
      {...props}
    />
  );
}

export function PopoverTitle(props: PopoverPrimitive.Title.Props): React.ReactElement {
  return (
    <PopoverPrimitive.Title
      {...stylex.props(popoverStyles.title)}
      data-slot="popover-title"
      {...props}
    />
  );
}

export function PopoverDescription(props: PopoverPrimitive.Description.Props): React.ReactElement {
  return (
    <PopoverPrimitive.Description
      {...stylex.props(popoverStyles.description)}
      data-slot="popover-description"
      {...props}
    />
  );
}

export const PopoverRoot = Popover;

export const PopoverCompound = {
  Root: Popover,
  Trigger: PopoverTrigger,
  Close: PopoverClose,
  Portal: PopoverPortal,
  Positioner: PopoverPositioner,
  Popup: PopoverPopup,
  Arrow: PopoverArrow,
  Backdrop: PopoverBackdrop,
  Title: PopoverTitle,
  Description: PopoverDescription,
  createHandle: PopoverCreateHandle,
};
