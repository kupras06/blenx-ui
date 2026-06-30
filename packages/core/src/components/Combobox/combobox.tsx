import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import { CaretUpDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import * as React from "react";
import { Input } from "../Input/input";
import { ScrollArea } from "../ScrollArea/scroll-area";
import {
  inputGroup,
  inputSm,
  inputDefault,
  inputLg,
  startAddon,
  startAddonSm,
  startAddonDefault,
  adornment,
  adornmentSm,
  adornmentDefault,
  adornmentEndSm,
  adornmentEndDefault,
  positioner,
  popupShell,
  popup,
  separator,
  group,
  groupLabel,
  empty,
  row,
  list,
  status,
  item,
  itemIndicator,
  itemContent,
  chips,
  chipsStartAddon,
  chipsInput,
  chip,
  chipRemove,
} from "./combobox.css";
import { CloseButton } from "../CloseButton";

type InputSize = "sm" | "default" | "lg" | number;

export const ComboboxContext: React.Context<{
  chipsRef: React.RefObject<Element | null> | null;
  multiple: boolean;
}> = React.createContext<{
  chipsRef: React.RefObject<Element | null> | null;
  multiple: boolean;
}>({
  chipsRef: null,
  multiple: false,
});

export function Combobox<Value, Multiple extends boolean | undefined = false>(
  props: ComboboxPrimitive.Root.Props<Value, Multiple>,
): React.ReactElement {
  const chipsRef = React.useRef<Element | null>(null);
  const contextValue = React.useMemo(
    () => ({ chipsRef, multiple: Boolean(props.multiple) }),
    [props.multiple],
  );
  return (
    <ComboboxContext.Provider value={contextValue}>
      <ComboboxPrimitive.Root {...props} />
    </ComboboxContext.Provider>
  );
}

export function ComboboxChipsInput({
  size,
  className,
  ...props
}: ComboboxPrimitive.Input.Props & {
  size?: InputSize;
  ref?: React.Ref<HTMLInputElement>;
}): React.ReactElement {
  const resolvedSize = size ?? "default";
  return (
    <ComboboxPrimitive.Input
      className={clsx(chipsInput, className)}
      data-size={typeof resolvedSize === "string" ? resolvedSize : undefined}
      data-slot="combobox-chips-input"
      size={typeof resolvedSize === "number" ? resolvedSize : undefined}
      {...props}
    />
  );
}

type ComboboxTriggerProps = ComboboxPrimitive.Trigger.Props;
export function ComboboxTrigger({ className, ...props }: ComboboxTriggerProps): React.ReactElement {
  return (
    <ComboboxPrimitive.Trigger className={className} data-slot="combobox-trigger" {...props} />
  );
}

type ComboboxClearProps = ComboboxPrimitive.Clear.Props;
export function ComboboxClear({
  className,
  children,
  ...props
}: ComboboxClearProps): React.ReactElement {
  return (
    <ComboboxPrimitive.Clear
      className={clsx(adornment, className)}
      data-slot="combobox-clear"
      {...props}
    >
      {children ?? <XIcon size={18} weight="regular" />}
    </ComboboxPrimitive.Clear>
  );
}

export function ComboboxInput({
  showTrigger = true,
  showClear = false,
  startAddon: startAddonNode,
  size,
  triggerProps,
  clearProps,
  render: renderProp,
  className,
  ...props
}: Omit<ComboboxPrimitive.Input.Props, "size"> & {
  showTrigger?: boolean;
  showClear?: boolean;
  startAddon?: React.ReactNode;
  size?: InputSize;
  ref?: React.Ref<HTMLInputElement>;
  triggerProps?: ComboboxPrimitive.Trigger.Props;
  clearProps?: ComboboxPrimitive.Clear.Props;
}): React.ReactElement {
  const resolvedSize = size ?? "default";
  const renderSize = resolvedSize === "sm" || resolvedSize === "lg" ? resolvedSize : "default";
  const inputCls = clsx(
    resolvedSize === "sm" ? inputSm : resolvedSize === "lg" ? inputLg : inputDefault,
    className,
  );

  return (
    <ComboboxPrimitive.InputGroup className={inputGroup} data-slot="combobox-input-group">
      {startAddonNode && (
        <div
          aria-hidden="true"
          className={clsx(startAddon, resolvedSize === "sm" ? startAddonSm : startAddonDefault)}
          data-slot="combobox-start-addon"
        >
          {startAddonNode}
        </div>
      )}
      <ComboboxPrimitive.Input
        data-slot="combobox-input"
        render={renderProp ?? <Input size={renderSize} />}
        className={inputCls}
        {...props}
      />
      {showTrigger && (
        <ComboboxPrimitive.Trigger
          className={clsx(
            adornment,
            resolvedSize === "sm" ? adornmentSm : adornmentDefault,
            resolvedSize === "sm" ? adornmentEndSm : adornmentEndDefault,
          )}
          data-slot="combobox-trigger"
          {...triggerProps}
        >
          <CaretUpDownIcon size={resolvedSize === "sm" ? 16 : 18} weight="regular" />
        </ComboboxPrimitive.Trigger>
      )}
      {showClear && (
        <ComboboxClear
          className={clsx(
            adornment,
            resolvedSize === "sm" ? adornmentSm : adornmentDefault,
            resolvedSize === "sm" ? adornmentEndSm : adornmentEndDefault,
          )}
          render={<CloseButton />}
          {...clearProps}
        />
      )}
    </ComboboxPrimitive.InputGroup>
  );
}

export function ComboboxPopup({
  children,
  side = "bottom",
  sideOffset = 4,
  alignOffset,
  align = "start",
  anchor: anchorProp,
  portalProps,
  className,
  ...props
}: ComboboxPrimitive.Popup.Props & {
  align?: ComboboxPrimitive.Positioner.Props["align"];
  sideOffset?: ComboboxPrimitive.Positioner.Props["sideOffset"];
  alignOffset?: ComboboxPrimitive.Positioner.Props["alignOffset"];
  side?: ComboboxPrimitive.Positioner.Props["side"];
  anchor?: ComboboxPrimitive.Positioner.Props["anchor"];
  portalProps?: ComboboxPrimitive.Portal.Props;
}): React.ReactElement {
  const { chipsRef } = React.useContext(ComboboxContext);
  const anchor = anchorProp ?? chipsRef;

  return (
    <ComboboxPrimitive.Portal {...portalProps}>
      <ComboboxPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className={positioner}
        data-slot="combobox-positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <span className={clsx(popupShell, className)}>
          <ComboboxPrimitive.Popup className={popup} data-slot="combobox-popup" {...props}>
            {children}
          </ComboboxPrimitive.Popup>
        </span>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

export function ComboboxItem({
  children,
  className,
  ...props
}: ComboboxPrimitive.Item.Props): React.ReactElement {
  return (
    <ComboboxPrimitive.Item className={clsx(item, className)} data-slot="combobox-item" {...props}>
      <ComboboxPrimitive.ItemIndicator className={itemIndicator}>
        <CheckIcon size={16} weight="bold" />
      </ComboboxPrimitive.ItemIndicator>
      <div className={itemContent}>{children}</div>
    </ComboboxPrimitive.Item>
  );
}

export function ComboboxSeparator(props: ComboboxPrimitive.Separator.Props): React.ReactElement {
  return (
    <ComboboxPrimitive.Separator className={separator} data-slot="combobox-separator" {...props} />
  );
}

export function ComboboxGroup(props: ComboboxPrimitive.Group.Props): React.ReactElement {
  return <ComboboxPrimitive.Group className={group} data-slot="combobox-group" {...props} />;
}

export function ComboboxGroupLabel(props: ComboboxPrimitive.GroupLabel.Props): React.ReactElement {
  return (
    <ComboboxPrimitive.GroupLabel
      className={groupLabel}
      data-slot="combobox-group-label"
      {...props}
    />
  );
}

export function ComboboxEmpty(props: ComboboxPrimitive.Empty.Props): React.ReactElement {
  return <ComboboxPrimitive.Empty className={empty} data-slot="combobox-empty" {...props} />;
}

export function ComboboxRow(props: ComboboxPrimitive.Row.Props): React.ReactElement {
  return <ComboboxPrimitive.Row className={row} data-slot="combobox-row" {...props} />;
}

export function ComboboxValue(props: ComboboxPrimitive.Value.Props): React.ReactElement {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

export function ComboboxList(props: ComboboxPrimitive.List.Props): React.ReactElement {
  return (
    <ScrollArea scrollbarGutter scrollFade>
      <ComboboxPrimitive.List className={list} data-slot="combobox-list" {...props} />
    </ScrollArea>
  );
}

export function ComboboxStatus(props: ComboboxPrimitive.Status.Props): React.ReactElement {
  return <ComboboxPrimitive.Status className={status} data-slot="combobox-status" {...props} />;
}

export function ComboboxCollection(props: ComboboxPrimitive.Collection.Props): React.ReactElement {
  return <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />;
}

export function ComboboxChips({
  children,
  startAddon: startAddonNode,
  className,
  ...props
}: ComboboxPrimitive.Chips.Props & {
  startAddon?: React.ReactNode;
}): React.ReactElement {
  const { chipsRef } = React.useContext(ComboboxContext);

  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      ref={chipsRef as React.Ref<HTMLDivElement> | null}
      className={clsx(chips, className)}
      {...props}
    >
      {startAddonNode && (
        <div aria-hidden="true" data-slot="combobox-start-addon" className={chipsStartAddon}>
          {startAddonNode}
        </div>
      )}
      {children}
    </ComboboxPrimitive.Chips>
  );
}

export function ComboboxChip({
  children,
  removeProps,
  className,
  ...props
}: ComboboxPrimitive.Chip.Props & {
  removeProps?: ComboboxPrimitive.ChipRemove.Props;
}): React.ReactElement {
  return (
    <ComboboxPrimitive.Chip className={clsx(chip, className)} data-slot="combobox-chip" {...props}>
      {children}
      <ComboboxChipRemove {...removeProps} />
    </ComboboxPrimitive.Chip>
  );
}

function ComboboxChipRemove({
  className,
  ...props
}: ComboboxPrimitive.ChipRemove.Props): React.ReactElement {
  return (
    <ComboboxPrimitive.ChipRemove
      aria-label="Remove"
      className={clsx(chipRemove, className)}
      data-slot="combobox-chip-remove"
      {...props}
    >
      <XIcon size={16} weight="regular" />
    </ComboboxPrimitive.ChipRemove>
  );
}

export const useComboboxFilter: typeof ComboboxPrimitive.useFilter = ComboboxPrimitive.useFilter;

export { ComboboxChipRemove };
