"use client";

import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { CaretDownIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import {
  root,
  rootVertical,
  item,
  itemDisabled,
  trigger,
  triggerIcon,
  panel,
} from "./accordion.css";

type AccordionRootProps = AccordionPrimitive.Root.Props;

function AccordionRoot({ children, className, ...props }: AccordionRootProps) {
  return (
    <AccordionPrimitive.Root
      className={(state) => clsx(root, state.orientation === "vertical" && rootVertical, className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Root>
  );
}

type AccordionItemProps = AccordionPrimitive.Item.Props;

function AccordionItem({ children, className, ...props }: AccordionItemProps) {
  return (
    <AccordionPrimitive.Item
      className={(state) => clsx(item, state.disabled && itemDisabled, className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  );
}

type AccordionHeaderProps = AccordionPrimitive.Header.Props;

function AccordionHeader({ children, className, ...props }: AccordionHeaderProps) {
  return (
    <AccordionPrimitive.Header className={className} {...props}>
      {children}
    </AccordionPrimitive.Header>
  );
}

type AccordionTriggerProps = AccordionPrimitive.Trigger.Props;

function AccordionTrigger({ children, className, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Trigger className={clsx(trigger, className)} {...props}>
      <CaretDownIcon size={16} className={triggerIcon} />
      {children}
    </AccordionPrimitive.Trigger>
  );
}

type AccordionPanelProps = AccordionPrimitive.Panel.Props;

function AccordionPanel({ children, className, ...props }: AccordionPanelProps) {
  return (
    <AccordionPrimitive.Panel className={clsx(panel, className)} {...props}>
      {children}
    </AccordionPrimitive.Panel>
  );
}

export { AccordionPanel, AccordionTrigger, AccordionHeader, AccordionItem, AccordionRoot };
export type {
  AccordionPanelProps,
  AccordionTriggerProps,
  AccordionHeaderProps,
  AccordionItemProps,
  AccordionRootProps,
};
export const Accordion = {
  Root: AccordionRoot,
  Item: AccordionItem,
  Header: AccordionHeader,
  Trigger: AccordionTrigger,
  Panel: AccordionPanel,
};
