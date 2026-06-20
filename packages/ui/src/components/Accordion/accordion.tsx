"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { CaretUpDownIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { accordionStyles } from "./accordion.styles";

type AccordionRootProps = PropsWithStylex<AccordionPrimitive.Root.Props>;

export function AccordionRoot({ children, style, ...props }: AccordionRootProps) {
  return (
    <AccordionPrimitive.Root
      className={(state) => {
        const base = stylex.props(
          accordionStyles.root,
          state.orientation === "vertical" && accordionStyles.rootVertical,
          style,
        );
        return base.className ?? "";
      }}
      {...props}
    >
      {children}
    </AccordionPrimitive.Root>
  );
}

type AccordionItemProps = PropsWithStylex<AccordionPrimitive.Item.Props>;

export function AccordionItem({ children, style, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={(state) => {
        const base = stylex.props(
          accordionStyles.item,
          state.disabled && accordionStyles.itemDisabled,
          style,
        );
        return base.className ?? "";
      }}
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  );
}

type AccordionHeaderProps = PropsWithStylex<AccordionPrimitive.Header.Props>;

export function AccordionHeader({ children, style, ...props }: AccordionHeaderProps) {
  return (
    <AccordionPrimitive.Header
      className={stylex.props(accordionStyles.header, style).className ?? ""}
      {...props}
    >
      {children}
    </AccordionPrimitive.Header>
  );
}

type AccordionTriggerProps = PropsWithStylex<AccordionPrimitive.Trigger.Props>;

export function AccordionTrigger({ children, style, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Trigger
      className={(state) => {
        const base = stylex.props(
          accordionStyles.trigger,
          state.open && accordionStyles.triggerOpen,
          style,
        );
        return base.className ?? "";
      }}
      {...props}
    >
      <CaretUpDownIcon size={16} {...stylex.props(accordionStyles.triggerIcon)} />
      {children}
    </AccordionPrimitive.Trigger>
  );
}

type AccordionPanelProps = PropsWithStylex<AccordionPrimitive.Panel.Props>;

export function AccordionPanel({ children, style, ...props }: AccordionPanelProps) {
  return (
    <AccordionPrimitive.Panel
      className={(state) => {
        const base = stylex.props(
          accordionStyles.panel,
          state.open && accordionStyles.panelOpen,
          style,
        );
        return base.className ?? "";
      }}
      {...props}
    >
      {children}
    </AccordionPrimitive.Panel>
  );
}

export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Header: AccordionHeader,
  Trigger: AccordionTrigger,
  Panel: AccordionPanel,
};
