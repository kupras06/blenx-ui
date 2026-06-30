"use client";

import clsx from "clsx";
import { useEffect, useRef } from "react";
import { DayPicker, type DayPickerProps } from "react-day-picker";
import {
  root,
  months,
  monthCaption,
  captionLabel,
  nav,
  buttonNav,
  monthGrid,
  weekday,
  day,
  dayButton,
  dayButtonSelected,
  dayButtonToday,
  dayButtonDisabled,
  dayButtonOutside,
  footer,
  dropdowns,
  dropdown,
} from "./calendar.css";
import { IconButton } from "@blenx-dev/core";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "@blenx-dev/core/icons";

function StyledDayButton({
  day: _day,
  modifiers,
  className,
  ...props
}: {
  day: object;
  modifiers: Record<string, boolean>;
} & React.ComponentPropsWithoutRef<"button">) {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (modifiers.focused) {
      ref.current?.focus();
    }
  }, [modifiers.focused]);

  const isSelected = modifiers.selected;
  const isToday = modifiers.today;
  const isDisabled = modifiers.disabled;
  const isOutside = modifiers.outside;

  const composed = clsx(
    dayButton,
    isSelected && dayButtonSelected,
    isToday && dayButtonToday,
    isDisabled && dayButtonDisabled,
    isOutside && dayButtonOutside,
    className,
  );

  return <button ref={ref} className={composed} {...props} />;
}

function Calendar({ className, components: userComponents, ...props }: DayPickerProps) {
  const classNames = {
    root: clsx(root, className),
    months: months,
    month: "",
    month_caption: monthCaption,
    caption_label: captionLabel,
    nav: nav,
    button_previous: buttonNav,
    button_next: buttonNav,
    chevron: "",
    month_grid: monthGrid,
    weekdays: "",
    weekday: weekday,
    weeks: "",
    week: "",
    day: day,
    day_button: "",
    footer: footer,
    dropdowns: dropdowns,
    dropdown: dropdown,
    dropdown_root: "",
    months_dropdown: "",
    years_dropdown: "",
    week_number: "",
    week_number_header: "",
    selected: "",
    today: "",
    disabled: "",
    hidden: "",
    outside: "",
    focused: "",
    range_start: "",
    range_end: "",
    range_middle: "",
    weeks_before_enter: "",
    weeks_before_exit: "",
    weeks_after_enter: "",
    weeks_after_exit: "",
    caption_after_enter: "",
    caption_after_exit: "",
    caption_before_enter: "",
    caption_before_exit: "",
  };
  const defaultComponents = {
    Chevron: ({
      orientation,
    }: {
      orientation?: "left" | "right" | "up" | "down";
    }): React.ReactElement => {
      if (orientation === "left") {
        return (
          <IconButton variant="ghost">
            <ChevronLeftIcon />
          </IconButton>
        );
      }
      if (orientation === "right") {
        return (
          <IconButton variant="ghost">
            <ChevronRightIcon />
          </IconButton>
        );
      }
      return (
        <IconButton variant="ghost">
          <ChevronDownIcon />
        </IconButton>
      );
    },
  };
  const mergedComponents = {
    ...defaultComponents,
    ...userComponents,
    DayButton: StyledDayButton,
  };

  return <DayPicker classNames={classNames} components={mergedComponents} {...props} />;
}

export { Calendar };
