"use client";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import type { _BaseDivProps, PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { ScrollArea } from "../ScrollArea/scroll-area";
import { alertDialogStyles } from "./alert-dialog.styles";
import { IconButton } from "../IconButton/icon-button";
import { XIcon } from "@phosphor-icons/react";

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
      {...stylex.props(alertDialogStyles.backdrop)}
      data-slot="alert-dialog-backdrop"
      {...props}
    />
  );
}

function AlertDialogViewport(
  props: PropsWithStylex<AlertDialogPrimitive.Viewport.Props> & {
    bottomStickOnMobile?: boolean;
  },
): React.ReactElement {
  const { bottomStickOnMobile, style, ...restProps } = props;
  return (
    <AlertDialogPrimitive.Viewport
      {...stylex.props(
        alertDialogStyles.viewport,
        bottomStickOnMobile && alertDialogStyles.viewportShellBottomStickOnMobile,
        style,
      )}
      data-slot="alert-dialog-viewport"
      {...restProps}
    />
  );
}
type AlertDialogPopupProps = PropsWithStylex<
  AlertDialogPrimitive.Popup.Props & {
    showCloseButton?: boolean;
    closeProps?: AlertDialogPrimitive.Close.Props;
    bottomStickOnMobile?: boolean;
  }
>;

function AlertDialogPopup({
  children,
  style,
  bottomStickOnMobile = true,
  showCloseButton = true,
  closeProps,
  ...props
}: AlertDialogPopupProps): React.ReactElement {
  return (
    <AlertDialogPortal>
      <AlertDialogBackdrop />
      <AlertDialogViewport bottomStickOnMobile={bottomStickOnMobile}>
        <AlertDialogPrimitive.Popup
          {...stylex.props(
            alertDialogStyles.popup,
            bottomStickOnMobile && alertDialogStyles.popupBottomStickOnMobile,
            style,
          )}
          data-slot="alert-dialog-popup"
          {...props}
        >
          {showCloseButton && (
            <AlertDialogPrimitive.Close
              aria-label="Close"
              {...stylex.props(alertDialogStyles.closeButton)}
              render={<IconButton variant="ghost" style={alertDialogStyles.closeButton} />}
              {...closeProps}
            >
              <XIcon />
            </AlertDialogPrimitive.Close>
          )}
          {children}
        </AlertDialogPrimitive.Popup>
      </AlertDialogViewport>
    </AlertDialogPortal>
  );
}

type HeaderProps = _BaseDivProps;

function AlertDialogHeader({ render, style, ...props }: HeaderProps): React.ReactElement {
  const headerProps = stylex.props(alertDialogStyles.header, style);
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        ...headerProps,
        "data-slot": "alert-dialog-header",
      } as never,
      props,
    ),
    render,
  });
}

type FooterProps = _BaseDivProps & {
  variant?: "default" | "bare";
};

function AlertDialogFooter({
  style,
  variant = "default",
  render,
  ...props
}: FooterProps): React.ReactElement {
  const footerProps = stylex.props(
    alertDialogStyles.footer,
    variant === "default" && alertDialogStyles.footerDefault,
    variant === "bare" && alertDialogStyles.footerBare,
    style,
  );
  return useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        ...footerProps,
        "data-slot": "alert-dialog-footer",
      } as never,
      props,
    ),
    render,
  });
}

function AlertDialogTitle(props: AlertDialogPrimitive.Title.Props): React.ReactElement {
  return (
    <AlertDialogPrimitive.Title
      {...stylex.props(alertDialogStyles.title)}
      data-slot="alert-dialog-title"
      {...props}
    />
  );
}

function AlertDialogDescription(props: AlertDialogPrimitive.Description.Props): React.ReactElement {
  return (
    <AlertDialogPrimitive.Description
      {...stylex.props(alertDialogStyles.description)}
      data-slot="alert-dialog-description"
      {...props}
    />
  );
}

function AlertDialogPanel({
  style,
  scrollFade = true,
  render,
  ...props
}: _BaseDivProps & {
  scrollFade?: boolean;
}): React.ReactElement {
  const panelProps = stylex.props(
    alertDialogStyles.panel,
    scrollFade && alertDialogStyles.panelScrollFade,
    style,
  );
  return (
    <ScrollArea scrollFade={scrollFade}>
      {useRender({
        defaultTagName: "div",
        props: mergeProps<"div">(
          {
            ...panelProps,
            "data-slot": "alert-dialog-panel",
          } as never,
          props,
        ),
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
