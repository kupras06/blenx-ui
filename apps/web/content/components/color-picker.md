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

## Usage

Control the selected color with `value` (a string in HEX, RGB, HSL, or named color format) and `onChange`. The popover opens on click of the trigger button, which displays the current color as a swatch. Within the popover, users can click a preset color, drag in the saturation-brightness panel, adjust the hue slider, or type values into HEX/RGB input fields. Changes in any input method update all other representations in real time. The `presetColors` prop accepts an array of color strings to display as quick-select swatches at the top of the popover. The component returns color values in the format specified by the `format` prop, defaulting to HEX.

## API Reference

<ApiReference />

## Limitations

Color Picker does not support alpha/opacity channels. If you need transparency, extend the component externally or accept the color as RGBA with a separate opacity slider. The saturation-brightness panel uses a fixed gradient map and does not support custom gamuts or color spaces like LAB or CMYK. The component also does not provide color contrast ratio calculations or palette generation. For color blindness simulation or accessibility checking, the consumer must implement those features separately.
