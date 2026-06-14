"use client";

import { CaretLeftIcon, CaretRightIcon, CaretUpDownIcon } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { useEffect, useRef } from "react";
import { DayPicker, type DayPickerProps } from "react-day-picker";
import { Button } from "../Button/button";
import { calendarStyles } from "./calendar.styles";

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

  const composed = stylex.props(
    calendarStyles.dayButton,
    isSelected && calendarStyles.dayButtonSelected,
    isToday && calendarStyles.dayButtonToday,
    isDisabled && calendarStyles.dayButtonDisabled,
    isOutside && calendarStyles.dayButtonOutside,
  );

  const combinedClassName = [className, composed.className].filter(Boolean).join(" ");

  return <button ref={ref} className={combinedClassName} {...props} />;
}

function Calendar({ className, components: userComponents, ...props }: DayPickerProps) {
  const rootClassName = stylex.props(calendarStyles.root).className;
  const root = [rootClassName, className].filter(Boolean).join(" ");

  const classNames = {
    root,
    months: stylex.props(calendarStyles.months).className,
    month: stylex.props(calendarStyles.month).className,
    month_caption: stylex.props(calendarStyles.monthCaption).className,
    caption_label: stylex.props(calendarStyles.captionLabel).className,
    nav: stylex.props(calendarStyles.nav).className,
    button_previous: stylex.props(calendarStyles.buttonNav).className,
    button_next: stylex.props(calendarStyles.buttonNav).className,
    chevron: stylex.props(calendarStyles.chevron).className,
    month_grid: stylex.props(calendarStyles.monthGrid).className,
    weekdays: "",
    weekday: stylex.props(calendarStyles.weekday).className,
    weeks: "",
    week: "",
    day: stylex.props(calendarStyles.day).className,
    day_button: "",
    footer: stylex.props(calendarStyles.footer).className,
    dropdowns: stylex.props(calendarStyles.dropdowns).className,
    dropdown: stylex.props(calendarStyles.dropdown).className,
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
      ...props
    }: {
      orientation?: "left" | "right" | "up" | "down";
    }): React.ReactElement => {
      if (orientation === "left") {
        return (
          <Button size="icon" variant="ghost">
            <CaretLeftIcon {...props} aria-hidden="true" />
          </Button>
        );
      }
      if (orientation === "right") {
        return (
          <Button size="icon" variant="ghost">
            <CaretRightIcon {...props} aria-hidden="true" />
          </Button>
        );
      }
      return (
        <Button size="icon" variant="ghost">
          <CaretUpDownIcon {...props} aria-hidden="true" />
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
