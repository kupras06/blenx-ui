"use client";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import { useRender } from "@base-ui/react/use-render";
import clsx from "clsx";
import type React from "react";
import type { _BaseDivProps } from "../../utils/types";
import { ScrollArea } from "../ScrollArea/scroll-area";
import { header, footerDefault, footerBare, title, description, panel } from "./alert-dialog.css";
import { CloseButton } from "../CloseButton";
import { Box } from "../Box/box";
import {
  backdrop,
  popup,
  viewport,
  viewportShellBottomStickOnMobile,
  popupBottomStickOnMobile,
  footer,
} from "../../utils/drawer-styles.css";

function AlertDialog(props: AlertDialogPrimitive.Root.Props): React.ReactElement {
  return <AlertDialogPrimitive.Root {...props} />;
}

function AlertDialogTrigger(props: AlertDialogPrimitive.Trigger.Props): React.ReactElement {
  return <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />;
}

function AlertDialogClose(props: AlertDialogPrimitive.Close.Props): React.ReactElement {
  return <AlertDialogPrimitive.Close data-slot="alert-dialog-close" {...props} />;
}

function AlertDialogPortal(props: AlertDialogPrimitive.Portal.Props): React.ReactElement {
  return <AlertDialogPrimitive.Portal {...props} />;
}

function AlertDialogBackdrop(props: AlertDialogPrimitive.Backdrop.Props): React.ReactElement {
  return (
    <AlertDialogPrimitive.Backdrop
      className={backdrop}
      data-slot="alert-dialog-backdrop"
      {...props}
    />
  );
}

function AlertDialogViewport(
  props: AlertDialogPrimitive.Viewport.Props & {
    bottomStickOnMobile?: boolean;
  },
): React.ReactElement {
  const { bottomStickOnMobile, className, ...restProps } = props;
  return (
    <AlertDialogPrimitive.Viewport
      className={clsx(viewport, bottomStickOnMobile && viewportShellBottomStickOnMobile, className)}
      data-slot="alert-dialog-viewport"
      {...restProps}
    />
  );
}

type AlertDialogPopupProps = AlertDialogPrimitive.Popup.Props & {
  showCloseButton?: boolean;
  closeProps?: AlertDialogPrimitive.Close.Props;
  bottomStickOnMobile?: boolean;
};

function AlertDialogPopup({
  children,
  bottomStickOnMobile = true,
  showCloseButton = true,
  closeProps,
  className,
  ...props
}: AlertDialogPopupProps): React.ReactElement {
  return (
    <AlertDialogPortal>
      <AlertDialogBackdrop />
      <AlertDialogViewport bottomStickOnMobile={bottomStickOnMobile}>
        <AlertDialogPrimitive.Popup
          className={clsx(popup, bottomStickOnMobile && popupBottomStickOnMobile, className)}
          data-slot="alert-dialog-popup"
          {...props}
        >
          {showCloseButton && (
            <Box position="absolute" right="xs" top="xs">
              <AlertDialogPrimitive.Close
                aria-label="Close"
                render={<CloseButton variant="ghost" />}
                {...closeProps}
              />
            </Box>
          )}
          {children}
        </AlertDialogPrimitive.Popup>
      </AlertDialogViewport>
    </AlertDialogPortal>
  );
}

type HeaderProps = _BaseDivProps;

function AlertDialogHeader({ className, render, ...props }: HeaderProps): React.ReactElement {
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(header, className),
      "data-slot": "alert-dialog-header",
      ...props,
    } as never,
    render,
  });
}

type FooterProps = _BaseDivProps & {
  variant?: "default" | "bare";
};

function AlertDialogFooter({
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
      "data-slot": "alert-dialog-footer",
      ...props,
    } as never,
    render,
  });
}

function AlertDialogTitle(props: AlertDialogPrimitive.Title.Props): React.ReactElement {
  return <AlertDialogPrimitive.Title className={title} data-slot="alert-dialog-title" {...props} />;
}

function AlertDialogDescription(props: AlertDialogPrimitive.Description.Props): React.ReactElement {
  return (
    <AlertDialogPrimitive.Description
      className={description}
      data-slot="alert-dialog-description"
      {...props}
    />
  );
}

function AlertDialogPanel({
  scrollFade = true,
  render,
  className,
  ...props
}: _BaseDivProps & {
  scrollFade?: boolean;
}): React.ReactElement {
  return (
    <ScrollArea scrollFade={scrollFade} height="fit-content">
      {useRender({
        defaultTagName: "div",
        props: {
          className: clsx(panel, className),
          "data-slot": "alert-dialog-panel",
          ...props,
        } as never,
        render,
      })}
    </ScrollArea>
  );
}

export type { AlertDialogPopupProps };
export {
  AlertDialog,
  AlertDialogBackdrop,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPanel,
  AlertDialogPopup,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogViewport,
};
