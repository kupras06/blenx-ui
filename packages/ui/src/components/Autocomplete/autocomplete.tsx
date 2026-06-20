import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import { mergeProps } from "@base-ui/react/merge-props";
import { CaretUpDownIcon, XIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import type { PropsWithStylex } from "@blenx-dev/ui/utils/stylex.utils";
import { Input } from "../Input/input";
import { ScrollArea } from "../ScrollArea/scroll-area";
import { autoCompleteInputSize, autoCompleteStyles } from "./autocomplete.styles";

const Autocomplete: typeof AutocompletePrimitive.Root = AutocompletePrimitive.Root;

export function AutocompleteItem(props: AutocompletePrimitive.Item.Props): React.ReactElement {
  const itemProps = mergeProps(props, stylex.props(autoCompleteStyles.item));
  return <AutocompletePrimitive.Item data-slot="autocomplete-item" {...itemProps} />;
}

export function AutocompleteSeparator({
  style,
  ...props
}: PropsWithStylex<AutocompletePrimitive.Separator.Props>): React.ReactElement {
  const separatorProps = mergeProps(props, stylex.props(autoCompleteStyles.separator, style));
  return <AutocompletePrimitive.Separator data-slot="autocomplete-separator" {...separatorProps} />;
}

export function AutocompleteGroup({
  style,
  ...props
}: PropsWithStylex<AutocompletePrimitive.Group.Props>): React.ReactElement {
  const groupProps = mergeProps(props, stylex.props(autoCompleteStyles.group, style));
  return <AutocompletePrimitive.Group data-slot="autocomplete-group" {...groupProps} />;
}

function AutocompleteInput({
  showTrigger = false,
  showClear = false,
  style,
  startAddon,
  size,
  triggerProps,
  clearProps,
  render: renderProp,
  ...props
}: PropsWithStylex<
  Omit<AutocompletePrimitive.Input.Props, "size"> & {
    showTrigger?: boolean;
    showClear?: boolean;
    startAddon?: React.ReactNode;
    size?: "sm" | "default" | "lg";
    ref?: React.Ref<HTMLInputElement>;
    triggerProps?: AutocompletePrimitive.Trigger.Props;
    clearProps?: AutocompletePrimitive.Clear.Props;
  }
>): React.ReactElement {
  const resolvedSize = size ?? "default";
  const inputProps = mergeProps(
    props,
    stylex.props(
      resolvedSize === "sm"
        ? autoCompleteInputSize.sm
        : resolvedSize === "lg"
          ? autoCompleteInputSize.lg
          : autoCompleteInputSize.defaultSize,
      style,
    ),
  );
  const triggerButtonProps = mergeProps(
    triggerProps ?? {},
    stylex.props(
      autoCompleteStyles.adornment,
      resolvedSize === "sm"
        ? autoCompleteStyles.adornmentSmall
        : autoCompleteStyles.adornmentDefault,
      resolvedSize === "sm"
        ? autoCompleteStyles.adornmentEndSmall
        : autoCompleteStyles.adornmentEndDefault,
      autoCompleteStyles.adornmentHiddenWhenClear,
    ),
  );
  const clearButtonProps = mergeProps(
    clearProps ?? {},
    stylex.props(
      autoCompleteStyles.adornment,
      resolvedSize === "sm"
        ? autoCompleteStyles.adornmentSmall
        : autoCompleteStyles.adornmentDefault,
      resolvedSize === "sm"
        ? autoCompleteStyles.adornmentEndSmall
        : autoCompleteStyles.adornmentEndDefault,
    ),
  );

  return (
    <AutocompletePrimitive.InputGroup
      {...stylex.props(autoCompleteStyles.inputGroup, style)}
      data-slot="autocomplete-input-group"
    >
      {startAddon && (
        <div
          aria-hidden="true"
          {...stylex.props(
            autoCompleteStyles.startAddon,
            resolvedSize === "sm"
              ? autoCompleteStyles.startAddonSmall
              : autoCompleteStyles.startAddonDefault,
          )}
          data-slot="autocomplete-start-addon"
        >
          {startAddon}
        </div>
      )}
      <AutocompletePrimitive.Input
        data-slot="autocomplete-input"
        render={renderProp ?? <Input />}
        {...inputProps}
      />
      {showTrigger && (
        <AutocompleteTrigger {...triggerButtonProps}>
          <CaretUpDownIcon size={resolvedSize === "sm" ? 16 : 18} weight="regular" />
        </AutocompleteTrigger>
      )}
      {showClear && (
        <AutocompleteClear {...clearButtonProps}>
          <XIcon size={resolvedSize === "sm" ? 16 : 18} weight="regular" />
        </AutocompleteClear>
      )}
    </AutocompletePrimitive.InputGroup>
  );
}

export function AutocompletePopup({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  alignOffset,
  align = "start",
  anchor,
  portalProps,
  ...props
}: AutocompletePrimitive.Popup.Props & {
  align?: AutocompletePrimitive.Positioner.Props["align"];
  sideOffset?: AutocompletePrimitive.Positioner.Props["sideOffset"];
  alignOffset?: AutocompletePrimitive.Positioner.Props["alignOffset"];
  side?: AutocompletePrimitive.Positioner.Props["side"];
  anchor?: AutocompletePrimitive.Positioner.Props["anchor"];
  portalProps?: AutocompletePrimitive.Portal.Props;
}): React.ReactElement {
  const shellClassName = [stylex.props(autoCompleteStyles.popupShell).className, className]
    .filter(Boolean)
    .join(" ");
  const popupProps = mergeProps(props, stylex.props(autoCompleteStyles.popup));

  return (
    <AutocompletePrimitive.Portal {...portalProps}>
      <AutocompletePrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        data-slot="autocomplete-positioner"
        side={side}
        sideOffset={sideOffset}
        {...stylex.props(autoCompleteStyles.positioner)}
      >
        <span className={shellClassName}>
          <AutocompletePrimitive.Popup data-slot="autocomplete-popup" {...popupProps}>
            {children}
          </AutocompletePrimitive.Popup>
        </span>
      </AutocompletePrimitive.Positioner>
    </AutocompletePrimitive.Portal>
  );
}

export function AutocompleteGroupLabel({
  className,
  ...props
}: AutocompletePrimitive.GroupLabel.Props): React.ReactElement {
  const groupLabelProps = mergeProps(props, stylex.props(autoCompleteStyles.groupLabel));
  const { className: mergedClassName, ...groupLabelRest } = groupLabelProps;
  const combinedClassName = [mergedClassName, className].filter(Boolean).join(" ");
  return (
    <AutocompletePrimitive.GroupLabel
      className={combinedClassName}
      data-slot="autocomplete-group-label"
      {...groupLabelRest}
    />
  );
}

export function AutocompleteEmpty({
  className,
  ...props
}: AutocompletePrimitive.Empty.Props): React.ReactElement {
  const emptyProps = mergeProps(props, stylex.props(autoCompleteStyles.empty));
  const { className: mergedClassName, ...emptyRest } = emptyProps;
  const combinedClassName = [mergedClassName, className].filter(Boolean).join(" ");
  return (
    <AutocompletePrimitive.Empty
      className={combinedClassName}
      data-slot="autocomplete-empty"
      {...emptyRest}
    />
  );
}

export function AutocompleteRow({
  className,
  ...props
}: AutocompletePrimitive.Row.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.Row className={className} data-slot="autocomplete-row" {...props} />
  );
}

export function AutocompleteValue({
  ...props
}: AutocompletePrimitive.Value.Props): React.ReactElement {
  return <AutocompletePrimitive.Value data-slot="autocomplete-value" {...props} />;
}

export function AutocompleteList({
  className,
  ...props
}: AutocompletePrimitive.List.Props): React.ReactElement {
  const listProps = mergeProps(props, stylex.props(autoCompleteStyles.list));
  const { className: mergedClassName, ...listRest } = listProps;
  const combinedClassName = [mergedClassName, className].filter(Boolean).join(" ");
  return (
    <ScrollArea scrollbarGutter scrollFade>
      <AutocompletePrimitive.List
        className={combinedClassName}
        data-slot="autocomplete-list"
        {...listRest}
      />
    </ScrollArea>
  );
}

export function AutocompleteClear({
  ...props
}: AutocompletePrimitive.Clear.Props): React.ReactElement {
  return <AutocompletePrimitive.Clear data-slot="autocomplete-clear" {...props} />;
}

export function AutocompleteStatus({
  className,
  ...props
}: AutocompletePrimitive.Status.Props): React.ReactElement {
  const statusProps = mergeProps(props, stylex.props(autoCompleteStyles.status));
  const { className: mergedClassName, ...statusRest } = statusProps;
  const combinedClassName = [mergedClassName, className].filter(Boolean).join(" ");
  return (
    <AutocompletePrimitive.Status
      className={combinedClassName}
      data-slot="autocomplete-status"
      {...statusRest}
    />
  );
}

export function AutocompleteCollection({
  ...props
}: AutocompletePrimitive.Collection.Props): React.ReactElement {
  return <AutocompletePrimitive.Collection data-slot="autocomplete-collection" {...props} />;
}

export function AutocompleteTrigger({
  children,
  ...props
}: AutocompletePrimitive.Trigger.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.Trigger data-slot="autocomplete-trigger" {...props}>
      {children}
    </AutocompletePrimitive.Trigger>
  );
}

export const useAutocompleteFilter: typeof AutocompletePrimitive.useFilter =
  AutocompletePrimitive.useFilter;

export { Autocomplete, AutocompleteInput };
