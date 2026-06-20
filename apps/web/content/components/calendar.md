## Overview

Calendar renders a date grid with month navigation, supporting single date, date range, and multiple date selection modes. It provides keyboard navigation for power users and accessible announcements for screen readers. Use Calendar when users need to view or select dates within a structured monthly layout — booking systems, scheduling interfaces, date-filtered reports, and birth date pickers. Calendar is designed as a standalone date view; for text-input-based date selection, use DatePicker which composes Calendar with a Popover. Do not use Calendar when the user needs to pick a date within a limited range that fits on screen — consider a compact date input instead. Calendar is also inappropriate for selecting times; combine it with a TimeInput for datetime selection.

## Usage

Configure `selectionMode` as `"single"`, `"range"`, or `"multiple"`. In single mode, clicking a date selects it and calls `onDateChange`. In range mode, clicking a start date then an end date selects the range, with visual highlighting between them. The `minDate` and `maxDate` props constrain the selectable range, graying out disabled dates. Month navigation occurs via previous and next arrow buttons, with optional month and year dropdowns for rapid navigation when `showMonthYearPicker` is enabled. The component accepts a `defaultMonth` to set the initially visible month without setting a selected date. Use `isDateUnavailable` for custom date disabling logic beyond simple range constraints.

## Composition

Calendar is the core date rendering surface used inside `DatePicker`. It can also appear inline on pages where date visibility is persistent — for example, a dashboard sidebar showing the current month. Pair Calendar with `Popover` for ad-hoc date selection triggers. Inside `DataTable` filter bars, Calendar provides date range filtering when combined with filter state management. Calendar does not compose well inside narrow containers like `Drawer` or `Dialog` sidebars; use DatePicker instead for constrained spaces.

## Best Practices

Always set `minDate` and `maxDate` to prevent selection of clearly invalid dates — past-due invoices cannot be dated in the future, birth dates cannot be in the past. For range selection, provide visual feedback on the start and end dates with distinct styling (filled circle for start/end, shaded background between). Announce date selection changes via `onDateChange` for screen readers. Use keyboard shortcuts: arrow keys navigate days, Enter selects, Escape closes the popover when used inside DatePicker. Show a "Today" button for quick navigation back to the current date.

## Common Mistakes

Assuming Calendar handles time zones. Calendar operates in the local time zone of the browser. If you need consistent UTC dates, convert on input and output. Another mistake is allowing dates without constraints in contexts where only future dates are valid — this forces users to navigate to valid dates manually. Selecting a range with no visible end date indicator confuses users; always highlight both endpoints distinctly. Omitting month and year navigation for power users also leads to frustration when navigating to distant dates.

## Design Guidelines

The date grid should use a clean, scannable layout with consistent cell sizes. Today's date should be visually distinct (e.g., outlined circle) without being confused with the selected date. Selected dates use the primary intent color, range selections use a lighter tint with the endpoints emphasized. Disabled dates should have reduced opacity without disappearing entirely — users need to understand the grid pattern. Month navigation controls should be prominent enough for easy access but not overpower the date grid itself.

## Limitations

Calendar does not support week number display, ISO week numbering, or custom first-day-of-week per locale beyond the system setting. Time selection is not supported — combine with TimePicker for datetime inputs. The component renders all days in the visible month upfront; for extremely large date ranges or infinite scrolling through months, consider a custom virtualized implementation. Calendar also does not support drag-to-select for range selection; ranges must be selected via two clicks.
