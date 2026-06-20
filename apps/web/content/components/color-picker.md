---
title: "Color Picker"
description: "Color Picker provides a popover-based color selection interface with a swatch preview, HEX and RGB input fields, and a grid of preset colors."
navigation:
  group: components
  order: 13
---

## Overview

Color Picker provides a popover-based color selection interface with a swatch preview, HEX and RGB input fields, and a grid of preset colors. Use it when users need to specify a color value for customization tools — theme builders, branding settings, chart color configuration, and UI personalization panels. The component abstracts the complexity of color space representation while giving power users direct input for precise values.

## Installation

<Installation registryName="colorpicker" />

## Source Code

<SourceCode registryName="colorpicker" />

## Usage

Control the selected color with `value` (a string in HEX, RGB, HSL, or named color format) and `onChange`. The popover opens on click of the trigger button, which displays the current color as a swatch. Within the popover, users can click a preset color, drag in the saturation-brightness panel, adjust the hue slider, or type values into HEX/RGB input fields. Changes in any input method update all other representations in real time. The `presetColors` prop accepts an array of color strings to display as quick-select swatches at the top of the popover. The component returns color values in the format specified by the `format` prop, defaulting to HEX.

## Composition

Color Picker is typically triggered from a `Button` styled with the current color swatch. Use it inside `Field` for labeled form controls, inside `Dialog` for settings panels, and inside `Card` for theme configuration sections. The popover uses the same portal as other Blenx popovers, ensuring correct z-index stacking. Pair Color Picker with `ColorSwatch` for displaying selected colors outside the picker context — for example, in a list of theme colors. Avoid nesting Color Picker inside other popover-based components to prevent stacking context conflicts.

## Design Guidelines

The popover should be wide enough to comfortably accommodate the saturation panel, hue slider, and input fields without scrolling. Preset swatches should be arranged in a grid with equal spacing and a visible border for white or light colors. The saturation-brightness panel should have a crosshair cursor indicating the current position. Input labels for HEX and RGB should be compact but clear. The trigger button should clearly display the current color with a checkerboard pattern for transparency if supported. All interactive elements within the popover should be keyboard accessible.

## API Reference

<ApiReference />

## Limitations

Color Picker does not support alpha/opacity channels. If you need transparency, extend the component externally or accept the color as RGBA with a separate opacity slider. The saturation-brightness panel uses a fixed gradient map and does not support custom gamuts or color spaces like LAB or CMYK. The component also does not provide color contrast ratio calculations or palette generation. For color blindness simulation or accessibility checking, the consumer must implement those features separately.
