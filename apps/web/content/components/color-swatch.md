---
title: "Color Swatch"
description: "Color Swatch is a presentational element that displays a color value as a small circular preview."
navigation:
  group: components
  order: 14
---

## Overview

Color Swatch is a presentational element that displays a color value as a small circular preview. It serves as a building block for color-related interfaces and is commonly used within Color Picker, but also stands alone for displaying theme colors, status indicators, or category markers. Use Color Swatch when you need to show a color value inline — in a list of named colors, as a legend indicator on a chart, or as a category badge in a data table.

## Installation

<Installation registryName="color-swatch" />

## Usage

Pass a `color` prop as a CSS color string — HEX, RGB, HSL, or named colors. The `size` prop controls the diameter of the circle. An optional `border` prop adds a subtle ring around the swatch, useful when the color is white or very light. Swatches can be grouped as children of a `Box` with flex layout for swatch lists. The component does not handle click events directly; wrap it in a `Button` or clickable container if interactivity is needed. Color Swatch accepts an optional `aria-label` for accessible naming when used without accompanying text.

## API Reference

<ApiReference />

## Limitations

Color Swatch does not support custom shapes beyond the default circle. It cannot display gradients or patterns — only solid colors. There is no built-in color format conversion; the component renders whatever CSS color string is provided. Color Swatch also does not validate color strings — invalid values render as transparent. The component has no interactive capabilities and no state management for selection or hover states.
