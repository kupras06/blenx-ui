---
navigation:
  group: components
  order: 38
---

## Overview

Slider allows users to select a value or range of values from a continuous or discrete scale by dragging a thumb along a track. It supports single thumb for single-value selection and dual thumb for range selection, with configurable step intervals, minimum and maximum constraints, and optional tick marks. Use sliders for volume controls, price range filters, rating selectors, font size adjustment, and any numeric input where the relative position within a range is more meaningful than the exact value. Avoid sliders when precise numeric input is required, when the range exceeds an order of magnitude, or when the available screen space cannot accommodate a comfortably sizable track.

## Usage

<Spinner name="slider-default" />

The slider renders a horizontal track by default, with vertical orientation available through the `orientation` prop. The `value` and `onChange` props manage the controlled value, which can be a single number or a two-element array for range mode. The `step` prop defines the increment granularity, with `min` and `max` bounding the range. Ticks are rendered at interval positions when the `marks` prop is provided. The track is divided visually into the filled portion (before the thumb) and the unfilled portion (after the thumb), with color indicating the active range.

## Composition

Sliders appear in filter panels alongside Text labels for the range name and numeric Inputs or badges showing the current value. In settings panels, a Slider pairs with a reset Button to restore default values. The Surface component can wrap a slider group to visually contain the control within a settings section. Stack alignment ensures the slider track, label, and value display are properly spaced.

## Best Practices

Always display the current numeric value alongside the slider, either as a tooltip on the thumb or as static text adjacent to the track. Provide visible min and max labels to give context to the slider's range. For range sliders, ensure the minimum thumb cannot cross the maximum thumb and vice versa. Use discrete steps with visible tick marks when the slider has fewer than 20 distinct values to help users understand the available positions.

## Common Mistakes

Using a slider for a binary or trinary choice wastes interaction effort — a Segmented Control or Switch is more appropriate. Setting the step value too small relative to the track length makes the thumb appear to not move smoothly. Failing to provide keyboard accessibility — left and right arrow keys should adjust the value by one step, and Home and End should jump to the min and max — excludes keyboard users from precise control.

## Design Guidelines

The track height should be thin relative to the thumb size so the thumb is the primary interactive target. The filled portion of the track uses the brand color to indicate the active selection, while the unfilled portion uses a low-emphasis surface color. The thumb should be large enough for touch interaction — at least 44x44 points. Focus-visible rings appear around the thumb during keyboard interaction. Tick marks should align with step positions and use a consistent height and color.

## Limitations

Slider does not support non-linear scales or logarithmic ranges — the value distribution is always linear. Range mode cannot accommodate more than two thumbs. The component is not suitable for very large ranges where the user cannot meaningfully distinguish between adjacent values. Touch interaction can be imprecise on small screens, making the slider better suited for desktop and tablet viewports.
