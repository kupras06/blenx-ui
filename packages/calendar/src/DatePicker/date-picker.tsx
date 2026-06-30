"use client";

import {
  Button,
  Field,
  FieldError,
  FieldLabel,
  Icon,
  Popover,
  PopoverPopup,
  PopoverPortal,
  PopoverPositioner,
  PopoverTrigger,
} from "@blenx-dev/core";
import { useState, useRef, type ReactNode } from "react";
import { Calendar } from "../Calendar";
import { CalendarIcon } from "@blenx-dev/core/icons";
type Props = {
  value: Date | undefined;
  triggerIcon?: ReactNode;
  onChange: (date: Date | undefined) => void;
  format?: (date: Date | undefined) => string;
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
};

export function DatePicker({
  value,
  onChange,
  label,
  format,
  placeholder = "Pick a date",
  error,
  triggerIcon,
  disabled,
}: Props) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleSelect = (date: Date | undefined) => {
    onChange(date);
    setOpen(false);
  };

  return (
    <Field>
      <Popover open={open} onOpenChange={setOpen}>
        {label && (
          <FieldLabel
            onClick={() => {
              triggerRef.current?.click();
              triggerRef.current?.focus();
            }}
          >
            {label}
          </FieldLabel>
        )}
        <PopoverTrigger
          ref={triggerRef}
          disabled={disabled}
          render={<Button type="button" variant="outline" fullWidth />}
        >
          <Icon size="md">{triggerIcon ? triggerIcon : <CalendarIcon />}</Icon>
          {value ? (format?.(value) ?? value.toString()) : placeholder}
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverPositioner sideOffset={6} side="bottom" align="start">
            <PopoverPopup>
              <Calendar mode="single" selected={value} onSelect={handleSelect} />
            </PopoverPopup>
          </PopoverPositioner>
        </PopoverPortal>
      </Popover>
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
}
