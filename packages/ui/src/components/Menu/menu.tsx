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

interface MenuProps extends MenuPrimitive.Root.Props {
  variant?: "default" | "destructive";
}
const Menu = MenuPrimitive.Root;

function MenuTrigger({
  className,
  style,
  ...props
}: MenuPrimitive.Trigger.Props & { className?: string; style?: React.CSSProperties }) {
  return <MenuPrimitive.Trigger className={clsx(trigger, className)} style={style} {...props} />;
}

type MenuPopupProps = MenuPrimitive.Popup.Props & {
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
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner align={align} sideOffset={sideOffset}>
        <MenuPrimitive.Popup className={clsx(popup, className)} style={style} {...props} />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

type MenuItemProps = MenuPrimitive.Item.Props & {
  variant?: "default" | "destructive";
  className?: string;
  style?: React.CSSProperties;
};

function MenuItem({ variant = "default", className, style, ...props }: MenuItemProps) {
  return (
    <MenuPrimitive.Item
      className={clsx(item, variant === "destructive" && itemDestructive, className)}
      style={style}
      {...props}
    />
  );
}

type MenuSeparatorProps = MenuPrimitive.Separator.Props & {
  className?: string;
  style?: React.CSSProperties;
};

function MenuSeparator({ className, style, ...props }: MenuSeparatorProps) {
  return (
    <MenuPrimitive.Separator className={clsx(separator, className)} style={style} {...props} />
  );
}

type MenuGroupLabelProps = MenuPrimitive.GroupLabel.Props & {
  inset?: boolean;
  className?: string;
  style?: React.CSSProperties;
};

function MenuGroupLabel({ inset: hasInset, className, style, ...props }: MenuGroupLabelProps) {
  return (
    <MenuPrimitive.GroupLabel
      className={clsx(groupLabel, hasInset && inset, className)}
      style={style}
      {...props}
    />
  );
}

type MenuShortcutProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

function MenuShortcut({ children, className, style }: MenuShortcutProps) {
  return (
    <span className={clsx(shortcut, className)} style={style}>
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
export { Menu, MenuGroupLabel, MenuItem, MenuPopup, MenuSeparator, MenuShortcut, MenuTrigger };
