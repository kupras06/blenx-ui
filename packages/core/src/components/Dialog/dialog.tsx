"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { useRender } from "@base-ui/react/use-render";
import clsx from "clsx";
import type React from "react";
import { ScrollArea } from "../ScrollArea/scroll-area";
import { header, footer, footerDefault, footerBare, title, description, panel } from "./dialog.css";
import { CloseButton } from "../CloseButton";
import type { _BaseDivProps } from "../../utils/types";
import {
  backdrop,
  popup,
  viewport,
  viewportShellBottomStickOnMobile,
  popupBottomStickOnMobile,
} from "../../utils/drawer-styles.css";
import { Box } from "../Box";
const DialogCreateHandle: typeof DialogPrimitive.createHandle = DialogPrimitive.createHandle;

const Dialog: typeof DialogPrimitive.Root = DialogPrimitive.Root;

const DialogPortal: typeof DialogPrimitive.Portal = DialogPrimitive.Portal;

function DialogTrigger(props: DialogPrimitive.Trigger.Props): React.ReactElement {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

export function DialogClose(props: DialogPrimitive.Close.Props): React.ReactElement {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

export function DialogBackdrop(props: DialogPrimitive.Backdrop.Props): React.ReactElement {
  return <DialogPrimitive.Backdrop className={backdrop} data-slot="dialog-backdrop" {...props} />;
}

type DialogViewportProps = DialogPrimitive.Viewport.Props & {
  bottomStickOnMobile?: boolean;
};

export function DialogViewport({
  bottomStickOnMobile,
  className,
  ...props
}: DialogViewportProps): React.ReactElement {
  return (
    <DialogPrimitive.Viewport
      className={clsx(viewport, bottomStickOnMobile && viewportShellBottomStickOnMobile, className)}
      data-slot="dialog-viewport"
      {...props}
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
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean;
  bottomStickOnMobile?: boolean;
  closeProps?: DialogPrimitive.Close.Props;
  portalProps?: DialogPrimitive.Portal.Props;
}): React.ReactElement {
  return (
    <DialogPortal {...portalProps}>
      <DialogViewport bottomStickOnMobile={bottomStickOnMobile}>
        <DialogBackdrop />
        <DialogPrimitive.Popup
          className={clsx(popup, bottomStickOnMobile && popupBottomStickOnMobile, className)}
          data-slot="dialog-popup"
          {...props}
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

type HeaderProps = _BaseDivProps;

export function DialogHeader({ className, render, ...props }: HeaderProps): React.ReactElement {
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(header, className),
      "data-slot": "dialog-header",
      ...props,
    } as never,
    render,
  });
}

type FooterProps = _BaseDivProps & {
  variant?: "default" | "bare";
};

export function DialogFooter({
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
      "data-slot": "dialog-footer",
      ...props,
    } as never,
    render,
  });
}

export function DialogTitle(props: DialogPrimitive.Title.Props): React.ReactElement {
  return <DialogPrimitive.Title className={title} data-slot="dialog-title" {...props} />;
}

export function DialogDescription(props: DialogPrimitive.Description.Props): React.ReactElement {
  return (
    <DialogPrimitive.Description
      className={description}
      data-slot="dialog-description"
      {...props}
    />
  );
}

function DialogPanel({
  scrollFade = true,
  render,
  className,
  ...props
}: _BaseDivProps & {
  scrollFade?: boolean;
}): React.ReactElement {
  return (
    <ScrollArea scrollFade={scrollFade} height="auto">
      {useRender({
        defaultTagName: "div",
        props: {
          className: clsx(panel, className),
          "data-slot": "dialog-panel",
          ...props,
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
