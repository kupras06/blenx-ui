---
title: "Color Swatch"
description: "Color Swatch is a presentational element that displays a color value as a small circular preview."
navigation:
  group: components
  order: 14
---

## Overview

Color Swatch is a presentational element that displays a color value as a small circular preview.  It serves as a building block for color-related interfaces and is commonly used within Color Picker, but also stands alone for displaying theme colors, status indicators, or category markers.  Use Color Swatch when you need to show a color value inline — in a list of named colors, as a legend indicator on a chart, or as a category badge in a data table.

## Installation

<Installation registryName="color-swatch" />

## Source Code

<SourceCode registryName="color-swatch" />

## Usage

Pass a `color` prop as a CSS color string — HEX, RGB, HSL, or named colors. The `size` prop controls the diameter of the circle. An optional `border` prop adds a subtle ring around the swatch, useful when the color is white or very light. Swatches can be grouped as children of a `Box` with flex layout for swatch lists. The component does not handle click events directly; wrap it in a `Button` or clickable container if interactivity is needed. Color Swatch accepts an optional `aria-label` for accessible naming when used without accompanying text.

## Composition

Color Swatch is the visual output component inside `ColorPicker` and appears in `DataTable` cells for color-coded categories. Use it alongside `Badge` for status indicators that combine a colored swatch with a text label. In theme configuration panels, render a list of Color Swatches with their names in a `Card`. Color Swatch can also serve as the leading visual in `Select` options for color-related choices. Multiple swatches displayed together should use consistent sizing for visual harmony.

## Design Guidelines

The circular shape should have a consistent diameter relative to the accompanying text — typically the same height as the text or slightly larger. Borders on light colors should use a neutral gray that provides contrast without competing with the swatch color. Multiple swatches in a row should have equal gaps between them, typically matching the swatch radius. The swatch should be perfectly round — maintain a 1:1 aspect ratio. For a transparent or no-color state, display a subtle checkerboard pattern or a dashed outline.

## API Reference

<ApiReference />

## Limitations

Color Swatch does not support custom shapes beyond the default circle. It cannot display gradients or patterns — only solid colors. There is no built-in color format conversion; the component renders whatever CSS color string is provided. Color Swatch also does not validate color strings — invalid values render as transparent. The component has no interactive capabilities and no state management for selection or hover states.
