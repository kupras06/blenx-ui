import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import clsx from "clsx";
import {
  trigger,
  popup,
  item,
  itemDestructive,
  separator,
  groupLabel,
  inset,
  shortcut,
} from "./menu.css";
import { applyBaseSprinkles } from "../../utils/ve-style.utils";
import type { BaseSprinkles } from "../../utils/sprinkles.css";

interface MenuProps extends MenuPrimitive.Root.Props {
  variant?: "default" | "destructive";
}
const Menu = MenuPrimitive.Root;

function MenuTrigger({
  className,
  style,
  ...props
}: MenuPrimitive.Trigger.Props &
  BaseSprinkles & { className?: string; style?: React.CSSProperties }) {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return (
    <MenuPrimitive.Trigger
      className={clsx(trigger, boxProps, className)}
      style={style}
      {...restProps}
    />
  );
}

type MenuPopupProps = MenuPrimitive.Popup.Props &
  BaseSprinkles & {
    align?: "start" | "center" | "end";
    sideOffset?: number;
    className?: string;
    style?: React.CSSProperties;
  };

function MenuPopup({
  align = "start",
  sideOffset = 4,
  className,
  style,
  ...props
}: MenuPopupProps) {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner align={align} sideOffset={sideOffset}>
        <MenuPrimitive.Popup
          className={clsx(popup, boxProps, className)}
          style={style}
          {...restProps}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

type MenuItemProps = MenuPrimitive.Item.Props &
  BaseSprinkles & {
    variant?: "default" | "destructive";
    className?: string;
    style?: React.CSSProperties;
  };

function MenuItem({ variant = "default", className, style, ...props }: MenuItemProps) {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return (
    <MenuPrimitive.Item
      className={clsx(item, variant === "destructive" && itemDestructive, boxProps, className)}
      style={style}
      {...restProps}
    />
  );
}

type MenuSeparatorProps = MenuPrimitive.Separator.Props &
  BaseSprinkles & {
    className?: string;
    style?: React.CSSProperties;
  };

function MenuSeparator({ className, style, ...props }: MenuSeparatorProps) {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return (
    <MenuPrimitive.Separator
      className={clsx(separator, boxProps, className)}
      style={style}
      {...restProps}
    />
  );
}

type MenuGroupLabelProps = MenuPrimitive.GroupLabel.Props &
  BaseSprinkles & {
    inset?: boolean;
    className?: string;
    style?: React.CSSProperties;
  };

function MenuGroupLabel({ inset: hasInset, className, style, ...props }: MenuGroupLabelProps) {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return (
    <MenuPrimitive.GroupLabel
      className={clsx(groupLabel, hasInset && inset, boxProps, className)}
      style={style}
      {...restProps}
    />
  );
}

type MenuShortcutProps = BaseSprinkles & {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function MenuShortcut({ children, className, style, ...props }: MenuShortcutProps) {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return (
    <span className={clsx(shortcut, boxProps, className)} style={style} {...restProps}>
      {children}
    </span>
  );
}

export type {
  MenuGroupLabelProps,
  MenuItemProps,
  MenuPopupProps,
  MenuProps,
  MenuSeparatorProps,
  MenuShortcutProps,
};
const MenuGroup = MenuPrimitive.Group;
export {
  Menu,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
  MenuGroup,
};
