## Overview

DatePicker combines the Calendar component with a Popover and a text input trigger, enabling users to select a date through either visual calendar navigation or direct text input. It displays the selected date in a formatted input field and opens the calendar on click or focus. Use DatePicker when users need to enter a date within a form context — booking systems, date-of-birth fields, scheduling interfaces, and date range filters. It provides the flexibility of keyboard entry for power users and visual selection for users who prefer calendar navigation. Do not use DatePicker when the user needs to select a time alongside the date; combine it with TimeInput for datetime picking. DatePicker is also inappropriate when users routinely need to select dates far in the past or future — Calendar's month-by-month navigation becomes tedious, and direct text input is more efficient.

## Usage

Control the selected date with `value` (a Date object) and `onChange`. The `format` prop defines the display format in the input field. The popover opens when the user clicks the input or the calendar icon. Use `minDate` and `maxDate` to constrain the selectable range, disabling invalid dates in the calendar. The `selectionMode` prop supports single, range, and multiple modes, mirroring Calendar's capabilities. In range mode, the input shows the start and end dates separated by a dash. The component handles date parsing from text input — invalid text entries trigger validation errors without closing the popover. The `defaultMonth` prop sets the initially visible month in the calendar, independent of the selected date.

## Composition

DatePicker is a form control and should be wrapped in `Field` for label, help text, and error state. It uses the same Calendar and Popover primitives as other Blenx components, ensuring consistent z-index stacking and portal behavior. Use DatePicker inside `Dialog` for form modals, inside `Card` for settings panels, and inside `DataTable` filter bars for date range filtering. DatePicker does not compose well inside narrow `Drawer` instances where the calendar popover would be cropped — adjust `Popover` placement or use a larger drawer width.

## Best Practices

Set `minDate` and `maxDate` based on the context — a birth date picker should not allow future dates, a delivery scheduler should not allow past dates. Use the `format` prop that matches your users' locale expectations. Provide clear placeholder text showing the expected format — "MM/DD/YYYY" or "DD/MM/YYYY" depending on locale. In range mode, indicate which date the user is currently selecting — "Start date" or "End date" — through the input label or placeholder. Close the popover after selection when the mode is single; keep it open for range selections until both dates are chosen.

## Common Mistakes

Forgetting to handle the case where the user types an invalid date — always validate and show an error message rather than silently failing. Another mistake is using DatePicker for year-only or month-only selection, which Calendar supports natively. For date ranges that span months or years, ensure the calendar allows forward month navigation without re-opening issues. Not accounting for time zone differences between selection and storage — Date objects are inherently local, which may differ from your server's time zone.

## Design Guidelines

The input field should clearly show its purpose with a calendar icon on the right side. The selected date should be formatted in a human-readable pattern that matches the rest of the application. The popover arrow should point to the input field, creating a clear visual connection. The calendar should align with the input's left edge or center, depending on available space. On mobile, consider the popover position to avoid the calendar being cropped by the viewport edge. The "Today" button should be prominent for quick reset navigation.

## Limitations

DatePicker does not support time selection — datetime inputs require composing DatePicker with a separate TimeInput. The component operates in the browser's local time zone; dates are always represented as local Date objects. The popover position is fixed and may overflow on small viewports if not configured with appropriate placement. DatePicker also does not support non-Gregorian calendars. The range selection mode requires two clicks for each range; drag-to-select is not supported.
