---
navigation:
  group: components
  order: 14
---

## Overview

Color Swatch is a presentational element that displays a color value as a small circular preview. It serves as a building block for color-related interfaces and is commonly used within Color Picker, but also stands alone for displaying theme colors, status indicators, or category markers. Use Color Swatch when you need to show a color value inline — in a list of named colors, as a legend indicator on a chart, or as a category badge in a data table. The component accepts any valid CSS color string and renders it as a filled circle with optional border. Do not use Color Swatch for interactive color selection; use Color Picker when the user needs to change the color. Color Swatch is also inappropriate as the sole indicator of status — pair it with text labels for accessibility.

## Usage

Pass a `color` prop as a CSS color string — HEX, RGB, HSL, or named colors. The `size` prop controls the diameter of the circle. An optional `border` prop adds a subtle ring around the swatch, useful when the color is white or very light. Swatches can be grouped as children of a `Box` with flex layout for swatch lists. The component does not handle click events directly; wrap it in a `Button` or clickable container if interactivity is needed. Color Swatch accepts an optional `aria-label` for accessible naming when used without accompanying text.

## Composition

Color Swatch is the visual output component inside `ColorPicker` and appears in `DataTable` cells for color-coded categories. Use it alongside `Badge` for status indicators that combine a colored swatch with a text label. In theme configuration panels, render a list of Color Swatches with their names in a `Card`. Color Swatch can also serve as the leading visual in `Select` options for color-related choices. Multiple swatches displayed together should use consistent sizing for visual harmony.

## Best Practices

Always provide a text label alongside the swatch for accessibility — screen readers cannot interpret a colored circle. Use the `border` prop when displaying white or very light colors so the swatch has a visible boundary against any background. Keep swatch sizes consistent within a single context; mixing 16px and 24px swatches in the same list looks unprofessional. For interactive swatches (e.g., clicking to select a color), wrap in a `Button` with visible hover and focus states rather than attaching click handlers directly.

## Common Mistakes

Relying on Color Swatch alone to convey information is the most common mistake. A user with color vision deficiency cannot distinguish between red and green swatches — always include text. Another mistake is using inconsistent sizes or shapes for the same type of information, which undermines the visual language. Applying swatches without sufficient contrast against the background renders them invisible. Using Color Swatch for large decorative elements wastes its purpose — for decorative color blocks, use Box with background color instead.

## Design Guidelines

The circular shape should have a consistent diameter relative to the accompanying text — typically the same height as the text or slightly larger. Borders on light colors should use a neutral gray that provides contrast without competing with the swatch color. Multiple swatches in a row should have equal gaps between them, typically matching the swatch radius. The swatch should be perfectly round — maintain a 1:1 aspect ratio. For a transparent or no-color state, display a subtle checkerboard pattern or a dashed outline.

## Limitations

Color Swatch does not support custom shapes beyond the default circle. It cannot display gradients or patterns — only solid colors. There is no built-in color format conversion; the component renders whatever CSS color string is provided. Color Swatch also does not validate color strings — invalid values render as transparent. The component has no interactive capabilities and no state management for selection or hover states.
