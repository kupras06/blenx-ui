"use client";

import { CalendarBlankIcon } from "@phosphor-icons/react";
import { format } from "date-fns";
import { useRef, useState } from "react";
import { Button } from "../Button/button";
import { Calendar } from "../Calendar/calendar";
import { Field, FieldError, FieldLabel } from "../Field/field";
import {
  Popover,
  PopoverCompound,
  PopoverPopup,
  PopoverPositioner,
  PopoverTrigger,
} from "../Popover/popover";

type Props = {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  label?: string;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
};

export function DatePicker({
  value,
  onChange,
  label,
  placeholder = "Pick a date",
  error,
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
          <CalendarBlankIcon size={18} />
          {value ? format(value, "PPP") : placeholder}
        </PopoverTrigger>
        <PopoverCompound.Portal>
          <PopoverPositioner sideOffset={6} side="bottom" align="start">
            <PopoverPopup>
              <Calendar mode="single" selected={value} onSelect={handleSelect} />
            </PopoverPopup>
          </PopoverPositioner>
        </PopoverCompound.Portal>
      </Popover>
      {error && <FieldError>{error}</FieldError>}
    </Field>
  );
}
