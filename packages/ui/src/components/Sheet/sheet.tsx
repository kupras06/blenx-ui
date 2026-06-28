"use client";

import { Dialog as SheetPrimitive } from "@base-ui/react/dialog";
import { useRender } from "@base-ui/react/use-render";
import clsx from "clsx";
import type React from "react";
import { ScrollArea } from "../ScrollArea/scroll-area";
import {
  backdrop,
  viewport,
  viewportBottom,
  viewportTop,
  viewportLeft,
  viewportRight,
  viewportInset,
  popup,
  popupBottom,
  popupTop,
  popupLeft,
  popupRight,
  popupInset,
  header,
  footer,
  footerDefault,
  footerBare,
  title,
  description,
  panel,
} from "./sheet.css";
import { CloseButton } from "../CloseButton";
import type { _BaseDivProps } from "../../utils/types";
import { Box } from "../Box";

type Side = "right" | "left" | "top" | "bottom";

export const Sheet: typeof SheetPrimitive.Root = SheetPrimitive.Root;

export const SheetPortal: typeof SheetPrimitive.Portal = SheetPrimitive.Portal;

export function SheetTrigger(props: SheetPrimitive.Trigger.Props): React.ReactElement {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
}

export function SheetClose(props: SheetPrimitive.Close.Props): React.ReactElement {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
}

export function SheetBackdrop({
  className,
  ...props
}: SheetPrimitive.Backdrop.Props): React.ReactElement {
  return (
    <SheetPrimitive.Backdrop
      className={clsx(backdrop, className)}
      data-slot="sheet-backdrop"
      {...props}
    />
  );
}

type SheetViewportProps = SheetPrimitive.Viewport.Props & {
  side?: Side;
  variant?: "default" | "inset";
};

export function SheetViewport({
  className,
  side,
  variant = "default",
  ...props
}: SheetViewportProps): React.ReactElement {
  return (
    <SheetPrimitive.Viewport
      className={clsx(
        viewport,
        side === "bottom" && viewportBottom,
        side === "top" && viewportTop,
        side === "left" && viewportLeft,
        side === "right" && viewportRight,
        variant === "inset" && viewportInset,
        className,
      )}
      data-slot="sheet-viewport"
      {...props}
    />
  );
}

export function SheetPopup({
  children,
  showCloseButton = true,
  side = "right",
  variant = "default",
  closeProps,
  portalProps,
  className,
  ...props
}: SheetPrimitive.Popup.Props & {
  showCloseButton?: boolean;
  side?: Side;
  variant?: "default" | "inset";
  closeProps?: SheetPrimitive.Close.Props;
  portalProps?: SheetPrimitive.Portal.Props;
}): React.ReactElement {
  return (
    <SheetPortal {...portalProps}>
      <SheetBackdrop />
      <SheetViewport side={side} variant={variant}>
        <SheetPrimitive.Popup
          className={clsx(
            popup,
            side === "bottom" && popupBottom,
            side === "top" && popupTop,
            side === "left" && popupLeft,
            side === "right" && popupRight,
            variant === "inset" && popupInset,
            className,
          )}
          data-slot="sheet-popup"
          {...props}
        >
          {children}
          {showCloseButton && (
            <Box position="absolute" top="xs" right="xs">
              <SheetPrimitive.Close
                aria-label="Close"
                render={<CloseButton variant="ghost" />}
                {...closeProps}
              />
            </Box>
          )}
        </SheetPrimitive.Popup>
      </SheetViewport>
    </SheetPortal>
  );
}

type HeaderProps = _BaseDivProps;

export function SheetHeader({ className, render, ...props }: HeaderProps): React.ReactElement {
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(header, className),
      "data-slot": "sheet-header",
      ...props,
    } as never,
    render,
  });
}

type FooterProps = _BaseDivProps & {
  variant?: "default" | "bare";
};

export function SheetFooter({
  className,
  variant = "default",
  render,
  ...props
}: FooterProps): React.ReactElement {
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(
        footer,
        variant === "default" && footerDefault,
        variant === "bare" && footerBare,
        className,
      ),
      "data-slot": "sheet-footer",
      ...props,
    } as never,
    render,
  });
}

export function SheetTitle(props: SheetPrimitive.Title.Props): React.ReactElement {
  return <SheetPrimitive.Title className={title} data-slot="sheet-title" {...props} />;
}

export function SheetDescription(props: SheetPrimitive.Description.Props): React.ReactElement {
  return (
    <SheetPrimitive.Description className={description} data-slot="sheet-description" {...props} />
  );
}

type PanelProps = _BaseDivProps & {
  scrollFade?: boolean;
};

export function SheetPanel({
  scrollFade = true,
  render,
  className,
  ...props
}: PanelProps): React.ReactElement {
  return (
    <ScrollArea scrollFade={scrollFade}>
      {useRender({
        defaultTagName: "div",
        props: {
          className: clsx(panel, className),
          "data-slot": "sheet-panel",
          ...props,
        } as never,
        render,
      })}
    </ScrollArea>
  );
}

export type { SheetViewportProps };

export { SheetBackdrop as SheetOverlay, SheetPopup as SheetContent };
