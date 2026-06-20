import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import * as stylex from "@stylexjs/stylex";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { menuStyles } from "./menu.styles";

interface MenuProps extends PropsWithStylex<MenuPrimitive.Root.Props> {
  variant?: "default" | "destructive";
}
const Menu = MenuPrimitive.Root;

function MenuTrigger({ style, ...props }: PropsWithStylex<MenuPrimitive.Trigger.Props>) {
  const renderedStyles = stylex.props(menuStyles.trigger, style);
  return <MenuPrimitive.Trigger {...renderedStyles} {...props} />;
}

type MenuPopupProps = PropsWithStylex<
  MenuPrimitive.Popup.Props & {
    align?: "start" | "center" | "end";
    sideOffset?: number;
  }
>;

function MenuPopup({ align = "start", style, sideOffset = 4, ...props }: MenuPopupProps) {
  const renderedStyles = stylex.props(menuStyles.popup, style);
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner align={align} sideOffset={sideOffset}>
        <MenuPrimitive.Popup {...renderedStyles} {...props} />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

type MenuItemProps = PropsWithStylex<
  MenuPrimitive.Item.Props & {
    variant?: "default" | "destructive";
  }
>;

function MenuItem({ style, variant = "default", ...props }: MenuItemProps) {
  const renderedStyles = stylex.props(
    menuStyles.item,
    variant === "destructive" && menuStyles.itemDestructive,
    style,
  );

  return <MenuPrimitive.Item {...renderedStyles} {...props} />;
}

type MenuSeparatorProps = PropsWithStylex<MenuPrimitive.Separator.Props>;

function MenuSeparator({ style, ...props }: MenuSeparatorProps) {
  const renderedStyles = stylex.props(menuStyles.separator, style);
  return <MenuPrimitive.Separator {...renderedStyles} {...props} />;
}

type MenuGroupLabelProps = PropsWithStylex<
  MenuPrimitive.GroupLabel.Props & {
    inset?: boolean;
  }
>;

function MenuGroupLabel({ inset, style, ...props }: MenuGroupLabelProps) {
  const renderedStyles = stylex.props(menuStyles.groupLabel, inset && menuStyles.inset, style);
  return <MenuPrimitive.GroupLabel {...renderedStyles} {...props} />;
}

type MenuShortcutProps = PropsWithStylex<{ children?: React.ReactNode }>;

function MenuShortcut({ children, style }: MenuShortcutProps) {
  const renderedStyles = stylex.props(menuStyles.shortcut, style);
  return <span {...renderedStyles}>{children}</span>;
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
