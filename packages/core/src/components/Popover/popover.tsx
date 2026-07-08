"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import clsx from "clsx";
import type React from "react";
import { backdrop, positioner, popup, arrow, arrowFill, title, description } from "./popover.css";

const PopoverCreateHandle: typeof PopoverPrimitive.createHandle = PopoverPrimitive.createHandle;

function Popover(props: PopoverPrimitive.Root.Props): React.ReactElement {
  return <PopoverPrimitive.Root {...props} />;
}

function PopoverTrigger(props: PopoverPrimitive.Trigger.Props): React.ReactElement {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

function PopoverClose(props: PopoverPrimitive.Close.Props): React.ReactElement {
  return <PopoverPrimitive.Close data-slot="popover-close" {...props} />;
}

function PopoverPortal(props: PopoverPrimitive.Portal.Props): React.ReactElement {
  return <PopoverPrimitive.Portal {...props} />;
}

function PopoverPositioner({
  sideOffset = 4,
  side = "bottom",
  align = "center",
  className,
  style,
  ...props
}: PopoverPrimitive.Positioner.Props & {
  className?: string;
  style?: React.CSSProperties;
}): React.ReactElement {
  return (
    <PopoverPrimitive.Positioner
      sideOffset={sideOffset}
      side={side}
      align={align}
      className={clsx(positioner, className)}
      style={style}
      data-slot="popover-positioner"
      {...props}
    />
  );
}

function PopoverPopup({
  className,
  style,
  ...props
}: PopoverPrimitive.Popup.Props & {
  className?: string;
  style?: React.CSSProperties;
}): React.ReactElement {
  return (
    <PopoverPortal>
      <PopoverPositioner>
        <PopoverPrimitive.Popup
          className={clsx(popup, className)}
          style={style}
          data-slot="popover-popup"
          {...props}
        />
      </PopoverPositioner>
    </PopoverPortal>
  );
}

function PopoverArrow(props: PopoverPrimitive.Arrow.Props): React.ReactElement {
  return (
    <PopoverPrimitive.Arrow className={arrow} data-slot="popover-arrow" {...props}>
      <div className={arrowFill} />
    </PopoverPrimitive.Arrow>
  );
}

function PopoverBackdrop(props: PopoverPrimitive.Backdrop.Props): React.ReactElement {
  return <PopoverPrimitive.Backdrop className={backdrop} data-slot="popover-backdrop" {...props} />;
}

function PopoverTitle(props: PopoverPrimitive.Title.Props): React.ReactElement {
  return <PopoverPrimitive.Title className={title} data-slot="popover-title" {...props} />;
}

function PopoverDescription(props: PopoverPrimitive.Description.Props): React.ReactElement {
  return (
    <PopoverPrimitive.Description
      className={description}
      data-slot="popover-description"
      {...props}
    />
  );
}

export {
  Popover,
  PopoverTrigger,
  PopoverClose,
  PopoverPortal,
  PopoverPositioner,
  PopoverPopup,
  PopoverArrow,
  PopoverBackdrop,
  PopoverTitle,
  PopoverDescription,
  PopoverCreateHandle,
};
