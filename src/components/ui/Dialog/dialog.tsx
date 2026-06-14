"use client";

import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { XIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import type { _BaseDivProps, PropsWithStylex } from "@/utils/stylex.utils";
import { Button } from "../Button/button";
import { ScrollArea } from "../ScrollArea/scroll-area";
import { dialogStyles } from "./dialog.styles";

type ClassNameProp<State> = string | ((state: State) => string | undefined);

function mergeClassName<State>(baseClassName: string, className?: ClassNameProp<State>) {
  const resolvedClassName = typeof className === "function" ? className({} as State) : className;
  return [baseClassName, resolvedClassName].filter(Boolean).join(" ");
}

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
  return (
    <DialogPrimitive.Backdrop
      {...stylex.props(dialogStyles.backdrop)}
      data-slot="dialog-backdrop"
      {...props}
    />
  );
}
type DialogViewportProps = PropsWithStylex<DialogPrimitive.Viewport.Props>;
export function DialogViewport({ style, ...props }: DialogViewportProps): React.ReactElement {
  return (
    <DialogPrimitive.Viewport
      {...stylex.props(dialogStyles.viewport, style)}
      data-slot="dialog-viewport"
      {...props}
    />
  );
}

export function DialogPopup({
  className,
  children,
  showCloseButton = true,
  bottomStickOnMobile = true,
  closeProps,
  portalProps,
  ...props
}: DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean;
  bottomStickOnMobile?: boolean;
  closeProps?: DialogPrimitive.Close.Props;
  portalProps?: DialogPrimitive.Portal.Props;
}): React.ReactElement {
  const popupProps = stylex.props(
    dialogStyles.popup,
    bottomStickOnMobile && dialogStyles.popupBottomStickOnMobile,
  );
  return (
    <DialogPortal {...portalProps}>
      <DialogBackdrop />
      <DialogViewport
        {...stylex.props(
          dialogStyles.viewportShell,
          bottomStickOnMobile && dialogStyles.viewportShellBottomStickOnMobile,
        )}
      >
        <DialogPrimitive.Popup
          className={mergeClassName(popupProps.className ?? "", className)}
          data-slot="dialog-popup"
          {...props}
        >
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close
              aria-label="Close"
              className={stylex.props(dialogStyles.closeButton).className}
              render={<Button size="small" variant="ghost" />}
              {...closeProps}
            >
              <XIcon />
            </DialogPrimitive.Close>
          )}
        </DialogPrimitive.Popup>
      </DialogViewport>
    </DialogPortal>
  );
}

type HeaderProps = useRender.ComponentProps<"div">;

export function DialogHeader({ className, render, ...props }: HeaderProps): React.ReactElement {
  const headerProps = stylex.props(dialogStyles.header);
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        ...headerProps,
        className: mergeClassName(headerProps.className ?? "", className),
        "data-slot": "dialog-header",
      } as never,
      props,
    ),
    render,
  });
}

type FooterProps = _BaseDivProps & {
  variant?: "default" | "bare";
};

export function DialogFooter({
  style,
  variant = "default",
  render,
  ...props
}: FooterProps): React.ReactElement {
  const footerProps = stylex.props(
    dialogStyles.footer,
    variant === "default" && dialogStyles.footerDefault,
    variant === "bare" && dialogStyles.footerBare,
    style,
  );
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        ...footerProps,
        "data-slot": "dialog-footer",
      } as never,
      props,
    ),
    render,
  });
}

export function DialogTitle(props: DialogPrimitive.Title.Props): React.ReactElement {
  return (
    <DialogPrimitive.Title
      {...stylex.props(dialogStyles.title)}
      data-slot="dialog-title"
      {...props}
    />
  );
}

export function DialogDescription(props: DialogPrimitive.Description.Props): React.ReactElement {
  return (
    <DialogPrimitive.Description
      {...stylex.props(dialogStyles.description)}
      data-slot="dialog-description"
      {...props}
    />
  );
}

function DialogPanel({
  className,
  scrollFade = true,
  render,
  ...props
}: useRender.ComponentProps<"div"> & {
  scrollFade?: boolean;
}): React.ReactElement {
  const panelProps = stylex.props(dialogStyles.panel, scrollFade && dialogStyles.panelScrollFade);
  return (
    <ScrollArea scrollFade={scrollFade}>
      {useRender({
        defaultTagName: "div",
        props: mergeProps<"div">(
          {
            ...panelProps,
            className: mergeClassName(panelProps.className ?? "", className),
            "data-slot": "dialog-panel",
          } as never,
          props,
        ),
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
  DialogPrimitive,
  DialogTrigger,
};
