import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";
import { mergeProps } from "@base-ui/react/merge-props";
import { CaretUpDownIcon, CheckIcon, XIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import * as React from "react";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { Input } from "../Input/input";
import { ScrollArea } from "../ScrollArea/scroll-area";
import { comboboxStyles } from "./combobox.styles";

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
  return (
    <ComboboxContext.Provider value={{ chipsRef, multiple: !!props.multiple }}>
      <ComboboxPrimitive.Root {...props} />
    </ComboboxContext.Provider>
  );
}

export function ComboboxChipsInput({
  style,
  size,
  ...props
}: PropsWithStylex<
  ComboboxPrimitive.Input.Props & {
    size?: InputSize;
    ref?: React.Ref<HTMLInputElement>;
  }
>): React.ReactElement {
  const resolvedSize = size ?? "default";
  const inputProps = mergeProps(props, stylex.props(comboboxStyles.chipsInput, style));
  return (
    <ComboboxPrimitive.Input
      data-size={typeof resolvedSize === "string" ? resolvedSize : undefined}
      data-slot="combobox-chips-input"
      size={typeof resolvedSize === "number" ? resolvedSize : undefined}
      {...inputProps}
    />
  );
}
type ComboboxTriggerProps = PropsWithStylex<ComboboxPrimitive.Trigger.Props>;
export function ComboboxTrigger({ ...props }: ComboboxTriggerProps): React.ReactElement {
  const styleProps = stylex.props(props.style);
  return (
    <ComboboxPrimitive.Trigger data-slot="combobox-trigger" {...mergeProps(props, styleProps)} />
  );
}
type ComboboxClearProps = PropsWithStylex<ComboboxPrimitive.Clear.Props>;
export function ComboboxClear({
  style,
  children,
  ...props
}: ComboboxClearProps): React.ReactElement {
  const clearProps = mergeProps(props, stylex.props(comboboxStyles.adornment, style));
  return (
    <ComboboxPrimitive.Clear data-slot="combobox-clear" {...clearProps}>
      {children ?? <XIcon size={18} weight="regular" />}
    </ComboboxPrimitive.Clear>
  );
}

export function ComboboxInput({
  showTrigger = true,
  showClear = false,
  startAddon,
  size,
  style,
  triggerProps,
  clearProps,
  render: renderProp,
  ...props
}: PropsWithStylex<
  Omit<ComboboxPrimitive.Input.Props, "size"> & {
    showTrigger?: boolean;
    showClear?: boolean;
    startAddon?: React.ReactNode;
    size?: InputSize;
    ref?: React.Ref<HTMLInputElement>;
    triggerProps?: ComboboxTriggerProps;
    clearProps?: ComboboxClearProps;
  }
>): React.ReactElement {
  const resolvedSize = size ?? "default";
  const renderSize = resolvedSize === "sm" || resolvedSize === "lg" ? resolvedSize : "default";
  const inputProps = mergeProps(
    props,
    stylex.props(
      resolvedSize === "sm"
        ? comboboxStyles.inputSm
        : resolvedSize === "lg"
          ? comboboxStyles.inputLg
          : comboboxStyles.inputDefault,
      style,
    ),
  );
  const triggerStyleProps = stylex.props(
    comboboxStyles.adornment,
    resolvedSize === "sm" ? comboboxStyles.adornmentSm : comboboxStyles.adornmentDefault,
    resolvedSize === "sm" ? comboboxStyles.adornmentEndSm : comboboxStyles.adornmentEndDefault,
    comboboxStyles.adornmentHiddenWhenClear,
    triggerProps?.style,
  );
  const clearStyleProps = stylex.props(
    comboboxStyles.adornment,
    resolvedSize === "sm" ? comboboxStyles.adornmentSm : comboboxStyles.adornmentDefault,
    resolvedSize === "sm" ? comboboxStyles.adornmentEndSm : comboboxStyles.adornmentEndDefault,
    clearProps?.style,
  );
  const startAddonStyleProps = stylex.props(
    comboboxStyles.startAddon,
    resolvedSize === "sm" ? comboboxStyles.startAddonSm : comboboxStyles.startAddonDefault,
  );

  return (
    <ComboboxPrimitive.InputGroup
      {...stylex.props(comboboxStyles.inputGroup)}
      data-slot="combobox-input-group"
    >
      {startAddon && (
        <div aria-hidden="true" {...startAddonStyleProps} data-slot="combobox-start-addon">
          {startAddon}
        </div>
      )}
      <ComboboxPrimitive.Input
        data-slot="combobox-input"
        render={renderProp ?? <Input size={renderSize} />}
        {...inputProps}
      />
      {showTrigger && (
        <ComboboxTrigger {...mergeProps(triggerProps, triggerStyleProps)}>
          <CaretUpDownIcon size={resolvedSize === "sm" ? 16 : 18} weight="regular" />
        </ComboboxTrigger>
      )}
      {showClear && (
        <ComboboxClear {...mergeProps(clearProps, clearStyleProps)}>
          <XIcon size={resolvedSize === "sm" ? 16 : 18} weight="regular" />
        </ComboboxClear>
      )}
    </ComboboxPrimitive.InputGroup>
  );
}

export function ComboboxPopup({
  style,
  children,
  side = "bottom",
  sideOffset = 4,
  alignOffset,
  align = "start",
  anchor: anchorProp,
  portalProps,
  ...props
}: PropsWithStylex<ComboboxPrimitive.Popup.Props> & {
  align?: ComboboxPrimitive.Positioner.Props["align"];
  sideOffset?: ComboboxPrimitive.Positioner.Props["sideOffset"];
  alignOffset?: ComboboxPrimitive.Positioner.Props["alignOffset"];
  side?: ComboboxPrimitive.Positioner.Props["side"];
  anchor?: ComboboxPrimitive.Positioner.Props["anchor"];
  portalProps?: ComboboxPrimitive.Portal.Props;
}): React.ReactElement {
  const { chipsRef } = React.useContext(ComboboxContext);
  const anchor = anchorProp ?? chipsRef;
  const shellProps = stylex.props(comboboxStyles.popupShell, style);
  const popupProps = mergeProps(props, stylex.props(comboboxStyles.popup));

  return (
    <ComboboxPrimitive.Portal {...portalProps}>
      <ComboboxPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        data-slot="combobox-positioner"
        side={side}
        sideOffset={sideOffset}
        {...stylex.props(comboboxStyles.positioner)}
      >
        <span {...shellProps}>
          <ComboboxPrimitive.Popup data-slot="combobox-popup" {...popupProps}>
            {children}
          </ComboboxPrimitive.Popup>
        </span>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  );
}

export function ComboboxItem({
  style,
  children,
  ...props
}: PropsWithStylex<ComboboxPrimitive.Item.Props>): React.ReactElement {
  const itemProps = mergeProps(props, stylex.props(comboboxStyles.item, style));
  return (
    <ComboboxPrimitive.Item data-slot="combobox-item" {...itemProps}>
      <ComboboxPrimitive.ItemIndicator {...stylex.props(comboboxStyles.itemIndicator)}>
        <CheckIcon size={16} weight="bold" />
      </ComboboxPrimitive.ItemIndicator>
      <div {...stylex.props(comboboxStyles.itemContent)}>{children}</div>
    </ComboboxPrimitive.Item>
  );
}

export function ComboboxSeparator({
  style,
  ...props
}: PropsWithStylex<ComboboxPrimitive.Separator.Props>): React.ReactElement {
  const separatorProps = mergeProps(props, stylex.props(comboboxStyles.separator, style));
  return <ComboboxPrimitive.Separator data-slot="combobox-separator" {...separatorProps} />;
}

export function ComboboxGroup({
  style,
  ...props
}: PropsWithStylex<ComboboxPrimitive.Group.Props>): React.ReactElement {
  const groupProps = mergeProps(props, stylex.props(comboboxStyles.group, style));
  return <ComboboxPrimitive.Group data-slot="combobox-group" {...groupProps} />;
}

export function ComboboxGroupLabel({
  style,
  ...props
}: PropsWithStylex<ComboboxPrimitive.GroupLabel.Props>): React.ReactElement {
  const groupLabelProps = mergeProps(props, stylex.props(comboboxStyles.groupLabel, style));
  return <ComboboxPrimitive.GroupLabel data-slot="combobox-group-label" {...groupLabelProps} />;
}

export function ComboboxEmpty({
  style,
  ...props
}: PropsWithStylex<ComboboxPrimitive.Empty.Props>): React.ReactElement {
  const emptyProps = mergeProps(props, stylex.props(comboboxStyles.empty, style));
  return <ComboboxPrimitive.Empty data-slot="combobox-empty" {...emptyProps} />;
}

export function ComboboxRow({
  style,
  ...props
}: PropsWithStylex<ComboboxPrimitive.Row.Props>): React.ReactElement {
  const rowProps = mergeProps(props, stylex.props(comboboxStyles.row, style));
  return <ComboboxPrimitive.Row data-slot="combobox-row" {...rowProps} />;
}

export function ComboboxValue({ ...props }: ComboboxPrimitive.Value.Props): React.ReactElement {
  return <ComboboxPrimitive.Value data-slot="combobox-value" {...props} />;
}

export function ComboboxList({
  style,
  ...props
}: PropsWithStylex<ComboboxPrimitive.List.Props>): React.ReactElement {
  const listProps = mergeProps(props, stylex.props(comboboxStyles.list, style));
  return (
    <ScrollArea scrollbarGutter scrollFade>
      <ComboboxPrimitive.List data-slot="combobox-list" {...listProps} />
    </ScrollArea>
  );
}

export function ComboboxStatus({
  style,
  ...props
}: PropsWithStylex<ComboboxPrimitive.Status.Props>): React.ReactElement {
  const statusProps = mergeProps(props, stylex.props(comboboxStyles.status, style));
  return <ComboboxPrimitive.Status data-slot="combobox-status" {...statusProps} />;
}

export function ComboboxCollection({
  ...props
}: ComboboxPrimitive.Collection.Props): React.ReactElement {
  return <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />;
}

export function ComboboxChips({
  style,
  children,
  startAddon,
  ...props
}: PropsWithStylex<ComboboxPrimitive.Chips.Props> & {
  startAddon?: React.ReactNode;
}): React.ReactElement {
  const { chipsRef } = React.useContext(ComboboxContext);
  const chipsProps = mergeProps(props, stylex.props(comboboxStyles.chips, style));

  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      ref={chipsRef as React.Ref<HTMLDivElement> | null}
      {...chipsProps}
    >
      {startAddon && (
        <div
          aria-hidden="true"
          data-slot="combobox-start-addon"
          {...stylex.props(comboboxStyles.chipsStartAddon)}
        >
          {startAddon}
        </div>
      )}
      {children}
    </ComboboxPrimitive.Chips>
  );
}

export function ComboboxChip({
  style,
  children,
  removeProps,
  ...props
}: PropsWithStylex<ComboboxPrimitive.Chip.Props> & {
  removeProps?: PropsWithStylex<ComboboxPrimitive.ChipRemove.Props>;
}): React.ReactElement {
  const chipProps = mergeProps(props, stylex.props(comboboxStyles.chip, style));
  return (
    <ComboboxPrimitive.Chip data-slot="combobox-chip" {...chipProps}>
      {children}
      <ComboboxChipRemove {...removeProps} />
    </ComboboxPrimitive.Chip>
  );
}

export function ComboboxChipRemove({
  style,
  ...props
}: PropsWithStylex<ComboboxPrimitive.ChipRemove.Props>): React.ReactElement {
  const renderStyles = stylex.props(comboboxStyles.chipRemove, style);
  const chipRemoveProps = mergeProps(props, renderStyles);
  return (
    <ComboboxPrimitive.ChipRemove
      aria-label="Remove"
      data-slot="combobox-chip-remove"
      {...chipRemoveProps}
    >
      <XIcon size={16} weight="regular" />
    </ComboboxPrimitive.ChipRemove>
  );
}

export const useComboboxFilter: typeof ComboboxPrimitive.useFilter = ComboboxPrimitive.useFilter;

export { ComboboxPrimitive };
export default ComboboxInput;
