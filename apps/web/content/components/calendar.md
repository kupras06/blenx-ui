---
title: "Calendar"
description: "Calendar renders a date grid with month navigation, supporting single date, date range, and multiple date selection modes."
navigation:
  group: components
  order: 10
---

## Overview

Calendar renders a date grid with month navigation, supporting single date, date range, and multiple date selection modes. It provides keyboard navigation for power users and accessible announcements for screen readers. Use Calendar when users need to view or select dates within a structured monthly layout — booking systems, scheduling interfaces, date-filtered reports, and birth date pickers.

## Installation

<Installation registryName="calendar" />

## Usage

Configure `selectionMode` as `"single"`, `"range"`, or `"multiple"`. In single mode, clicking a date selects it and calls `onDateChange`. In range mode, clicking a start date then an end date selects the range, with visual highlighting between them. The `minDate` and `maxDate` props constrain the selectable range, graying out disabled dates. Month navigation occurs via previous and next arrow buttons, with optional month and year dropdowns for rapid navigation when `showMonthYearPicker` is enabled. The component accepts a `defaultMonth` to set the initially visible month without setting a selected date. Use `isDateUnavailable` for custom date disabling logic beyond simple range constraints.

## API Reference

<ApiReference />

## Limitations

Calendar does not support week number display, ISO week numbering, or custom first-day-of-week per locale beyond the system setting. Time selection is not supported — combine with TimePicker for datetime inputs. The component renders all days in the visible month upfront; for extremely large date ranges or infinite scrolling through months, consider a custom virtualized implementation. Calendar also does not support drag-to-select for range selection; ranges must be selected via two clicks.
