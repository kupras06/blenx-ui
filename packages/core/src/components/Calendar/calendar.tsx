"use client";

import { CaretLeftIcon, CaretRightIcon, CaretUpDownIcon } from "@phosphor-icons/react";
import clsx from "clsx";
import { useEffect, useRef } from "react";
import { DayPicker, type DayPickerProps } from "react-day-picker";
import { Button } from "../Button/button";
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
      ...chevronProps
    }: {
      orientation?: "left" | "right" | "up" | "down";
    }): React.ReactElement => {
      if (orientation === "left") {
        return (
          <Button size="icon" variant="ghost">
            <CaretLeftIcon {...chevronProps} aria-hidden="true" />
          </Button>
        );
      }
      if (orientation === "right") {
        return (
          <Button size="icon" variant="ghost">
            <CaretRightIcon {...chevronProps} aria-hidden="true" />
          </Button>
        );
      }
      return (
        <Button size="icon" variant="ghost">
          <CaretUpDownIcon {...chevronProps} aria-hidden="true" />
        </Button>
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
