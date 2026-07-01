---
title: "Date Picker"
description: "DatePicker combines the Calendar component with a Popover and a text input trigger, enabling users to select a date through either visual calendar navigation or direct text input."
navigation:
  group: components
  order: 19
---

## Overview

DatePicker combines the Calendar component with a Popover and a text input trigger, enabling users to select a date through either visual calendar navigation or direct text input. It displays the selected date in a formatted input field and opens the calendar on click or focus. Use DatePicker when users need to enter a date within a form context — booking systems, date-of-birth fields, scheduling interfaces, and date range filters.

## Installation

<Installation registryName="datepicker" />

## Usage

Control the selected date with `value` (a Date object) and `onChange`. The `format` prop defines the display format in the input field. The popover opens when the user clicks the input or the calendar icon. Use `minDate` and `maxDate` to constrain the selectable range, disabling invalid dates in the calendar. The `selectionMode` prop supports single, range, and multiple modes, mirroring Calendar's capabilities. In range mode, the input shows the start and end dates separated by a dash. The component handles date parsing from text input — invalid text entries trigger validation errors without closing the popover. The `defaultMonth` prop sets the initially visible month in the calendar, independent of the selected date.

## API Reference

<ApiReference />

## Limitations

DatePicker does not support time selection — datetime inputs require composing DatePicker with a separate TimeInput. The component operates in the browser's local time zone; dates are always represented as local Date objects. The popover position is fixed and may overflow on small viewports if not configured with appropriate placement. DatePicker also does not support non-Gregorian calendars. The range selection mode requires two clicks for each range; drag-to-select is not supported.
