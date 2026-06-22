import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete";
import { CaretUpDownIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import type React from "react";
import { Input } from "../Input/input";
import { ScrollArea } from "../ScrollArea/scroll-area";
import {
  inputGroup,
  inputSizeSm,
  inputSizeDefault,
  inputSizeLg,
  startAddon,
  startAddonDefault,
  startAddonSmall,
  adornment,
  adornmentSmall,
  adornmentDefault,
  adornmentEndSmall,
  adornmentEndDefault,
  positioner,
  popupShell,
  popup,
  group,
  separator,
  groupLabel,
  empty,
  list,
  status,
  item,
} from "./autocomplete.css";
import { CloseButton } from "../CloseButton";

const Autocomplete: typeof AutocompletePrimitive.Root = AutocompletePrimitive.Root;

export function AutocompleteItem(props: AutocompletePrimitive.Item.Props): React.ReactElement {
  return <AutocompletePrimitive.Item className={item} data-slot="autocomplete-item" {...props} />;
}

export function AutocompleteSeparator(
  props: AutocompletePrimitive.Separator.Props,
): React.ReactElement {
  return (
    <AutocompletePrimitive.Separator
      className={separator}
      data-slot="autocomplete-separator"
      {...props}
    />
  );
}

export function AutocompleteGroup(props: AutocompletePrimitive.Group.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.Group className={group} data-slot="autocomplete-group" {...props} />
  );
}

function AutocompleteInput({
  showTrigger = false,
  showClear = false,
  startAddon: startAddonNode,
  size,
  triggerProps,
  clearProps,
  render: renderProp,
  className,
  ...props
}: Omit<AutocompletePrimitive.Input.Props, "size"> & {
  showTrigger?: boolean;
  showClear?: boolean;
  startAddon?: React.ReactNode;
  size?: "sm" | "default" | "lg";
  ref?: React.Ref<HTMLInputElement>;
  triggerProps?: AutocompletePrimitive.Trigger.Props;
  clearProps?: AutocompletePrimitive.Clear.Props;
}): React.ReactElement {
  const resolvedSize = size ?? "default";
  const inputCls = clsx(
    resolvedSize === "sm" ? inputSizeSm : resolvedSize === "lg" ? inputSizeLg : inputSizeDefault,
    className,
  );

  return (
    <AutocompletePrimitive.InputGroup className={inputGroup} data-slot="autocomplete-input-group">
      {startAddonNode && (
        <div
          aria-hidden="true"
          className={clsx(startAddon, resolvedSize === "sm" ? startAddonSmall : startAddonDefault)}
          data-slot="autocomplete-start-addon"
        >
          {startAddonNode}
        </div>
      )}
      <AutocompletePrimitive.Input
        data-slot="autocomplete-input"
        render={renderProp ?? <Input />}
        className={inputCls}
        {...props}
      />
      {showTrigger && (
        <AutocompletePrimitive.Trigger
          className={clsx(
            adornment,
            resolvedSize === "sm" ? adornmentSmall : adornmentDefault,
            resolvedSize === "sm" ? adornmentEndSmall : adornmentEndDefault,
          )}
          data-slot="autocomplete-trigger"
          {...triggerProps}
        >
          <CaretUpDownIcon size={resolvedSize === "sm" ? 16 : 18} weight="regular" />
        </AutocompletePrimitive.Trigger>
      )}
      {showClear && (
        <AutocompletePrimitive.Clear
          className={clsx(
            adornment,
            resolvedSize === "sm" ? adornmentSmall : adornmentDefault,
            resolvedSize === "sm" ? adornmentEndSmall : adornmentEndDefault,
          )}
          data-slot="autocomplete-clear"
          render={<CloseButton />}
          {...clearProps}
        />
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
  return (
    <AutocompletePrimitive.Portal {...portalProps}>
      <AutocompletePrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        anchor={anchor}
        className={positioner}
        data-slot="autocomplete-positioner"
        side={side}
        sideOffset={sideOffset}
      >
        <span className={clsx(popupShell, className)}>
          <AutocompletePrimitive.Popup className={popup} data-slot="autocomplete-popup" {...props}>
            {children}
          </AutocompletePrimitive.Popup>
        </span>
      </AutocompletePrimitive.Positioner>
    </AutocompletePrimitive.Portal>
  );
}

export function AutocompleteGroupLabel(
  props: AutocompletePrimitive.GroupLabel.Props,
): React.ReactElement {
  return (
    <AutocompletePrimitive.GroupLabel
      className={groupLabel}
      data-slot="autocomplete-group-label"
      {...props}
    />
  );
}

export function AutocompleteEmpty(props: AutocompletePrimitive.Empty.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.Empty className={empty} data-slot="autocomplete-empty" {...props} />
  );
}

export function AutocompleteRow(props: AutocompletePrimitive.Row.Props): React.ReactElement {
  return <AutocompletePrimitive.Row data-slot="autocomplete-row" {...props} />;
}

export function AutocompleteValue(props: AutocompletePrimitive.Value.Props): React.ReactElement {
  return <AutocompletePrimitive.Value data-slot="autocomplete-value" {...props} />;
}

export function AutocompleteList(props: AutocompletePrimitive.List.Props): React.ReactElement {
  return (
    <ScrollArea scrollbarGutter scrollFade>
      <AutocompletePrimitive.List className={list} data-slot="autocomplete-list" {...props} />
    </ScrollArea>
  );
}

export function AutocompleteClear(props: AutocompletePrimitive.Clear.Props): React.ReactElement {
  return <AutocompletePrimitive.Clear data-slot="autocomplete-clear" {...props} />;
}

export function AutocompleteStatus(props: AutocompletePrimitive.Status.Props): React.ReactElement {
  return (
    <AutocompletePrimitive.Status className={status} data-slot="autocomplete-status" {...props} />
  );
}

export function AutocompleteCollection(
  props: AutocompletePrimitive.Collection.Props,
): React.ReactElement {
  return <AutocompletePrimitive.Collection data-slot="autocomplete-collection" {...props} />;
}

export function AutocompleteTrigger(
  props: AutocompletePrimitive.Trigger.Props,
): React.ReactElement {
  return <AutocompletePrimitive.Trigger data-slot="autocomplete-trigger" {...props} />;
}

export const useAutocompleteFilter: typeof AutocompletePrimitive.useFilter =
  AutocompletePrimitive.useFilter;

export { Autocomplete, AutocompleteInput };
