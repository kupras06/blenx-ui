"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { Drawer as DrawerPrimitive } from "@base-ui/react/drawer";
import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { useRender } from "@base-ui/react/use-render";
import clsx from "clsx";
import type React from "react";
import { createContext, useContext, useMemo } from "react";
import { ScrollArea } from "../ScrollArea/scroll-area";
import {
  swipeArea,
  swipeAreaBottom,
  swipeAreaTop,
  swipeAreaLeft,
  swipeAreaRight,
  viewport,
  viewportBottom,
  viewportTop,
  viewportLeft,
  viewportRight,
  viewportInset,
  popupDefault,
  popupStraight,
  popupInset,
  popupBottom,
  popupTop,
  popupLeft,
  popupRight,
  footerDefault,
  footerBare,
  title,
  description,
  panel,
  bar,
  barHorizontal,
  barVertical,
  barTop,
  barBottom,
  barLeft,
  barRight,
  menu,
  menuItem,
  menuItemDestructive,
  separator,
  menuGroup,
  menuGroupLabel,
  menuTrigger,
  menuTriggerIcon,
  menuCheckbox,
  menuCheckboxDefault,
  menuCheckboxSwitch,
  menuCheckboxSwitchLabel,
  menuCheckboxSwitchIndicator,
  menuCheckboxSwitchThumb,
  menuCheckboxIndicator,
  menuCheckboxLabel,
  menuRadio,
  menuRadioIndicator,
  menuRadioLabel,
} from "./drawer.css";
import { CloseButton } from "../CloseButton";
import type { _BaseDivProps } from "../../utils/types";
import { Box } from "../Box";
import { ArrowRightIcon, SquareCheckIcon } from "../../icons";
import { footer, backdrop, drawerPopup, drawerHeader } from "../../utils/drawer-styles.css";

type DrawerPosition = "right" | "left" | "top" | "bottom";

const DrawerContext: React.Context<{ position: DrawerPosition }> = createContext<{
  position: DrawerPosition;
}>({
  position: "bottom",
});

const directionMap: Record<DrawerPosition, DrawerPrimitive.Root.Props["swipeDirection"]> = {
  bottom: "down",
  left: "left",
  right: "right",
  top: "up",
};

export const DrawerCreateHandle: typeof DrawerPrimitive.createHandle = DrawerPrimitive.createHandle;

export function Drawer({
  swipeDirection,
  position = "bottom",
  ...props
}: DrawerPrimitive.Root.Props & {
  position?: DrawerPosition;
}): React.ReactElement {
  const contextValue = useMemo(() => ({ position }), [position]);
  return (
    <DrawerContext.Provider value={contextValue}>
      <DrawerPrimitive.Root swipeDirection={swipeDirection ?? directionMap[position]} {...props} />
    </DrawerContext.Provider>
  );
}

export const DrawerPortal: typeof DrawerPrimitive.Portal = DrawerPrimitive.Portal;

export function DrawerTrigger(props: DrawerPrimitive.Trigger.Props): React.ReactElement {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
}

export function DrawerClose(props: DrawerPrimitive.Close.Props): React.ReactElement {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
}

export function DrawerSwipeArea({
  className,
  position: positionProp,
  ...props
}: DrawerPrimitive.SwipeArea.Props & {
  position?: DrawerPosition;
}): React.ReactElement {
  const { position: contextPosition } = useContext(DrawerContext);
  const resolvedPosition = positionProp ?? contextPosition;

  return (
    <DrawerPrimitive.SwipeArea
      className={clsx(
        swipeArea,
        resolvedPosition === "bottom" && swipeAreaBottom,
        resolvedPosition === "top" && swipeAreaTop,
        resolvedPosition === "left" && swipeAreaLeft,
        resolvedPosition === "right" && swipeAreaRight,
        className,
      )}
      data-slot="drawer-swipe-area"
      {...props}
    />
  );
}

export function DrawerBackdrop({
  className,
  ...props
}: DrawerPrimitive.Backdrop.Props): React.ReactElement {
  return (
    <DrawerPrimitive.Backdrop
      className={clsx(backdrop, className)}
      data-slot="drawer-backdrop"
      {...props}
    />
  );
}

export function DrawerViewport({
  className,
  position: positionProp,
  variant = "default",
  ...props
}: DrawerPrimitive.Viewport.Props & {
  position?: DrawerPosition;
  variant?: "default" | "straight" | "inset";
}): React.ReactElement {
  const { position: contextPosition } = useContext(DrawerContext);
  const resolvedPosition = positionProp ?? contextPosition;

  return (
    <DrawerPrimitive.Viewport
      className={clsx(
        viewport,
        resolvedPosition === "bottom" && viewportBottom,
        resolvedPosition === "top" && viewportTop,
        resolvedPosition === "left" && viewportLeft,
        resolvedPosition === "right" && viewportRight,
        variant === "inset" && viewportInset,
        className,
      )}
      data-slot="drawer-viewport"
      {...props}
    />
  );
}

export function DrawerPopup({
  children,
  showCloseButton = true,
  position: positionProp,
  variant = "default",
  showBar = false,
  portalProps,
  className,
  ...props
}: DrawerPrimitive.Popup.Props & {
  showCloseButton?: boolean;
  position?: DrawerPosition;
  variant?: "default" | "straight" | "inset";
  showBar?: boolean;
  portalProps?: DrawerPrimitive.Portal.Props;
}): React.ReactElement {
  const { position: contextPosition } = useContext(DrawerContext);
  const resolvedPosition = positionProp ?? contextPosition;

  return (
    <DrawerPortal {...portalProps}>
      <DrawerBackdrop />
      <DrawerViewport position={resolvedPosition} variant={variant}>
        <DrawerPrimitive.Popup
          className={clsx(
            drawerPopup,
            resolvedPosition === "bottom" && popupBottom,
            resolvedPosition === "top" && popupTop,
            resolvedPosition === "left" && popupLeft,
            resolvedPosition === "right" && popupRight,
            variant === "default" && popupDefault,
            variant === "straight" && popupStraight,
            variant === "inset" && popupInset,
            className,
          )}
          data-slot="drawer-popup"
          {...props}
        >
          {showCloseButton && (
            <Box position="absolute" top="xs" right="xs">
              <DrawerPrimitive.Close aria-label="Close" render={<CloseButton variant="ghost" />} />
            </Box>
          )}
          {children}
          {showBar && <DrawerBar />}
        </DrawerPrimitive.Popup>
      </DrawerViewport>
    </DrawerPortal>
  );
}

export function DrawerHeader({
  className,
  allowSelection = false,
  render,
  ...props
}: _BaseDivProps & {
  allowSelection?: boolean;
}): React.ReactElement {
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(drawerHeader, className),
      "data-slot": "drawer-header",
      ...props,
    } as never,
    render: allowSelection ? <DrawerContent render={render} /> : render,
  });
}

export function DrawerFooter({
  className,
  variant = "default",
  allowSelection = true,
  render,
  ...props
}: _BaseDivProps & {
  variant?: "default" | "bare";
  allowSelection?: boolean;
}): React.ReactElement {
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(
        footer,
        variant === "default" && footerDefault,
        variant === "bare" && footerBare,
        className,
      ),
      "data-slot": "drawer-footer",
      ...props,
    } as never,
    render: allowSelection ? <DrawerContent render={render} /> : render,
  });
}

export function DrawerTitle(props: DrawerPrimitive.Title.Props): React.ReactElement {
  return <DrawerPrimitive.Title className={title} data-slot="drawer-title" {...props} />;
}

export function DrawerDescription(props: DrawerPrimitive.Description.Props): React.ReactElement {
  return (
    <DrawerPrimitive.Description
      className={description}
      data-slot="drawer-description"
      {...props}
    />
  );
}

export function DrawerPanel({
  scrollFade = true,
  scrollable = true,
  allowSelection = true,
  render,
  className,
  ...props
}: _BaseDivProps & {
  scrollFade?: boolean;
  scrollable?: boolean;
  allowSelection?: boolean;
}): React.ReactElement {
  const content = useRender({
    defaultTagName: "div",
    props: {
      className: clsx(panel, className),
      "data-slot": "drawer-panel",
      ...props,
    } as never,
    render: allowSelection ? <DrawerContent render={render} /> : render,
  });

  if (scrollable) {
    return (
      <ScrollArea scrollFade={scrollFade} height={"fit"}>
        {content}
      </ScrollArea>
    );
  }

  return content;
}

export function DrawerBar({
  className,
  position: positionProp,
  render,
  ...props
}: _BaseDivProps & {
  position?: DrawerPosition;
}): React.ReactElement {
  const { position: contextPosition } = useContext(DrawerContext);
  const resolvedPosition = positionProp ?? contextPosition;
  const isHorizontal = resolvedPosition === "left" || resolvedPosition === "right";

  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(
        bar,
        isHorizontal && barHorizontal,
        !isHorizontal && barVertical,
        resolvedPosition === "top" && barTop,
        resolvedPosition === "bottom" && barBottom,
        resolvedPosition === "left" && barLeft,
        resolvedPosition === "right" && barRight,
        className,
      ),
      "aria-hidden": true,
      "data-slot": "drawer-bar",
      ...props,
    } as never,
    render,
  });
}

export const DrawerContent: typeof DrawerPrimitive.Content = DrawerPrimitive.Content;

export function DrawerMenu({ className, render, ...props }: _BaseDivProps): React.ReactElement {
  return useRender({
    defaultTagName: "nav",
    props: {
      className: clsx(menu, className),
      "data-slot": "drawer-menu",
      ...props,
    } as never,
    render,
  });
}

export function DrawerMenuItem({
  className,
  variant = "default",
  render,
  disabled,
  ...props
}: _BaseDivProps & {
  variant?: "default" | "destructive";
  disabled?: boolean;
}): React.ReactElement {
  return useRender({
    defaultTagName: "button",
    props: {
      className: clsx(menuItem, variant === "destructive" && menuItemDestructive, className),
      "data-slot": "drawer-menu-item",
      "data-variant": variant,
      disabled,
      type: "button" as const,
      ...props,
    } as never,
    render,
  });
}

export function DrawerMenuSeparator({
  className,
  render,
  ...props
}: _BaseDivProps): React.ReactElement {
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(separator, className),
      "data-slot": "drawer-menu-separator",
      ...props,
    } as never,
    render,
  });
}

export function DrawerMenuGroup({
  className,
  render,
  ...props
}: _BaseDivProps): React.ReactElement {
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(menuGroup, className),
      "data-slot": "drawer-menu-group",
      ...props,
    } as never,
    render,
  });
}

export function DrawerMenuGroupLabel({
  className,
  render,
  ...props
}: _BaseDivProps): React.ReactElement {
  return useRender({
    defaultTagName: "div",
    props: {
      className: clsx(menuGroupLabel, className),
      "data-slot": "drawer-menu-group-label",
      ...props,
    } as never,
    render,
  });
}

export function DrawerMenuTrigger({
  className,
  children,
  ...props
}: DrawerPrimitive.Trigger.Props): React.ReactElement {
  return (
    <DrawerTrigger
      className={clsx(menuTrigger, className)}
      data-slot="drawer-menu-trigger"
      {...props}
    >
      {children}
      <ArrowRightIcon className={menuTriggerIcon} />
    </DrawerTrigger>
  );
}

export function DrawerMenuCheckboxItem({
  className,
  children,
  checked,
  defaultChecked,
  onCheckedChange,
  variant = "default",
  disabled,
  render,
  ...props
}: CheckboxPrimitive.Root.Props & {
  variant?: "default" | "switch";
  render?: React.ReactElement;
}): React.ReactElement {
  return (
    <CheckboxPrimitive.Root
      checked={checked}
      className={clsx(
        menuCheckbox,
        variant === "switch" && menuCheckboxSwitch,
        variant !== "switch" && menuCheckboxDefault,
        className,
      )}
      data-slot="drawer-menu-checkbox-item"
      defaultChecked={defaultChecked}
      disabled={disabled}
      onCheckedChange={onCheckedChange}
      render={render}
      {...props}
    >
      {variant === "switch" ? (
        <>
          <span className={menuCheckboxSwitchLabel}>{children}</span>
          <CheckboxPrimitive.Indicator className={menuCheckboxSwitchIndicator} keepMounted>
            <span className={menuCheckboxSwitchThumb} />
          </CheckboxPrimitive.Indicator>
        </>
      ) : (
        <>
          <CheckboxPrimitive.Indicator className={menuCheckboxIndicator}>
            <SquareCheckIcon width={16} />
          </CheckboxPrimitive.Indicator>
          <span className={menuCheckboxLabel}>{children}</span>
        </>
      )}
    </CheckboxPrimitive.Root>
  );
}

export function DrawerMenuRadioGroup({
  className,
  ...props
}: RadioGroupPrimitive.Props): React.ReactElement {
  return (
    <RadioGroupPrimitive
      className={clsx(menuGroup, className)}
      data-slot="drawer-menu-radio-group"
      {...props}
    />
  );
}

function DrawerMenuRadioItem({
  className,
  children,
  value,
  disabled,
  render,
  ...props
}: RadioPrimitive.Root.Props & {
  value: string;
  render?: React.ReactElement;
}): React.ReactElement {
  return (
    <RadioPrimitive.Root
      className={clsx(menuRadio, className)}
      data-slot="drawer-menu-radio-item"
      disabled={disabled}
      render={render}
      value={value}
      {...props}
    >
      <RadioPrimitive.Indicator className={menuRadioIndicator}>
        <SquareCheckIcon width={16} />
      </RadioPrimitive.Indicator>
      <span className={menuRadioLabel}>{children}</span>
    </RadioPrimitive.Root>
  );
}

export { DrawerMenuRadioItem };
