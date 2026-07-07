"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { useRender } from "@base-ui/react/use-render";
import clsx from "clsx";
import type React from "react";
import { ScrollArea } from "../ScrollArea/scroll-area";
import { footer, footerDefault, footerBare, title, description, panel } from "./dialog.css";
import { CloseButton } from "../CloseButton";
import type { _BaseDivProps } from "../../utils/types";
import {
  backdrop,
  dialogPopup,
  viewport,
  viewportShellBottomStickOnMobile,
  popupBottomStickOnMobile,
  drawerHeader,
} from "../../utils/drawer-styles.css";
import { Box } from "../Box";
import { applyBaseSprinkles } from "../../utils/ve-style.utils";
import type { BaseSprinkles } from "../../utils/sprinkles.css";
const DialogCreateHandle: typeof DialogPrimitive.createHandle = DialogPrimitive.createHandle;

const Dialog: typeof DialogPrimitive.Root = DialogPrimitive.Root;

const DialogPortal: typeof DialogPrimitive.Portal = DialogPrimitive.Portal;

function DialogTrigger(props: DialogPrimitive.Trigger.Props & BaseSprinkles): React.ReactElement {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return <DialogPrimitive.Trigger className={boxProps} data-slot="dialog-trigger" {...restProps} />;
}

export function DialogClose(
  props: DialogPrimitive.Close.Props & BaseSprinkles,
): React.ReactElement {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return <DialogPrimitive.Close className={boxProps} data-slot="dialog-close" {...restProps} />;
}

export function DialogBackdrop(
  props: DialogPrimitive.Backdrop.Props & BaseSprinkles,
): React.ReactElement {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return (
    <DialogPrimitive.Backdrop
      className={clsx(backdrop, boxProps)}
      data-slot="dialog-backdrop"
      {...restProps}
    />
  );
}

type DialogViewportProps = DialogPrimitive.Viewport.Props &
  BaseSprinkles & {
    bottomStickOnMobile?: boolean;
  };

export function DialogViewport({
  bottomStickOnMobile,
  className,
  ...props
}: DialogViewportProps): React.ReactElement {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return (
    <DialogPrimitive.Viewport
      className={clsx(
        viewport,
        bottomStickOnMobile && viewportShellBottomStickOnMobile,
        boxProps,
        className,
      )}
      data-slot="dialog-viewport"
      {...restProps}
    />
  );
}

export function DialogPopup({
  children,
  showCloseButton = true,
  bottomStickOnMobile = true,
  closeProps,
  portalProps,
  className,
  ...props
}: DialogPrimitive.Popup.Props &
  BaseSprinkles & {
    showCloseButton?: boolean;
    bottomStickOnMobile?: boolean;
    closeProps?: DialogPrimitive.Close.Props;
    portalProps?: DialogPrimitive.Portal.Props;
  }): React.ReactElement {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return (
    <DialogPortal {...portalProps}>
      <DialogViewport bottomStickOnMobile={bottomStickOnMobile}>
        <DialogBackdrop />
        <DialogPrimitive.Popup
          className={clsx(
            dialogPopup,
            bottomStickOnMobile && popupBottomStickOnMobile,
            boxProps,
            className,
          )}
          data-slot="dialog-popup"
          {...restProps}
        >
          {children}
          {showCloseButton && (
            <Box position="absolute" top="xs" right="xs">
              <DialogPrimitive.Close
                aria-label="Close"
                render={<CloseButton variant="ghost" />}
                {...closeProps}
              />
            </Box>
          )}
        </DialogPrimitive.Popup>
      </DialogViewport>
    </DialogPortal>
  );
}

type HeaderProps = _BaseDivProps & BaseSprinkles;

export function DialogHeader({ className, render, ...props }: HeaderProps): React.ReactElement {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(drawerHeader, boxProps, className),
      "data-slot": "dialog-header",
      ...restProps,
    } as never,
    render,
  });
}

type FooterProps = _BaseDivProps &
  BaseSprinkles & {
    variant?: "default" | "bare";
  };

export function DialogFooter({
  className,
  variant = "default",
  render,
  ...props
}: FooterProps): React.ReactElement {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(
        footer,
        variant === "default" && footerDefault,
        variant === "bare" && footerBare,
        boxProps,
        className,
      ),
      "data-slot": "dialog-footer",
      ...restProps,
    } as never,
    render,
  });
}

export function DialogTitle(
  props: DialogPrimitive.Title.Props & BaseSprinkles,
): React.ReactElement {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return (
    <DialogPrimitive.Title
      className={clsx(title, boxProps)}
      data-slot="dialog-title"
      {...restProps}
    />
  );
}

export function DialogDescription(
  props: DialogPrimitive.Description.Props & BaseSprinkles,
): React.ReactElement {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return (
    <DialogPrimitive.Description
      className={clsx(description, boxProps)}
      data-slot="dialog-description"
      {...restProps}
    />
  );
}

function DialogPanel({
  scrollFade = true,
  render,
  className,
  ...props
}: _BaseDivProps &
  BaseSprinkles & {
    scrollFade?: boolean;
  }): React.ReactElement {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return (
    <ScrollArea scrollFade={scrollFade} height="auto">
      {useRender({
        defaultTagName: "div",
        props: {
          className: clsx(panel, boxProps, className),
          "data-slot": "dialog-panel",
          ...restProps,
        } as never,
        render,
      })}
    </ScrollArea>
  );
}

export type { DialogViewportProps };

export {
  Dialog,
  DialogBackdrop as DialogOverlay,
  DialogCreateHandle,
  DialogPanel,
  DialogPopup as DialogContent,
  DialogPortal,
  DialogTrigger,
};
