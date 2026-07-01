---
title: "Icon"
description: "Icon is a wrapper component for Phosphor icons that provides consistent sizing, coloring, and accessibility defaults."
navigation:
  group: components
  order: 24
---

## Overview

Icon is a wrapper component for Phosphor icons that provides consistent sizing, coloring, and accessibility defaults. It renders the specified icon with the correct viewBox and stroke weight, inheriting or overriding color and size from props. Use Icon whenever you need a visual symbol in the interface — navigation items, button slots, status indicators, empty state illustrations, and decorative elements.

## Demo

<DemoRenderer registryName="icon" />

## Installation

<Installation registryName="icon" />

## Usage

Pass the Phosphor icon component as a child to Icon, or use the `name` prop with the icon's string identifier. Set `size` to one of the theme size tokens to match the surrounding text scale. The `color` prop accepts theme color tokens or raw CSS color values. By default, Icon inherits the current text color via `currentColor`, ensuring it matches adjacent text without explicit color configuration. The `weight` prop maps to Phosphor's built-in weight variants (regular, bold, fill, duotone, thin) for visual emphasis. Use `aria-hidden="true"` when the icon is decorative and `aria-label` when it serves as the sole identifier of an action.

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["aria-hidden"]} />

## Limitations

Icon only supports Phosphor icon library. Non-Phosphor SVGs cannot be used through the Icon component. The component does not support animated icons or icon spritesheets. Custom icon sizes outside the defined theme tokens must use raw CSS values and may not align with typography consistently. Icon also does not support multi-color icons beyond the single `color` prop — duotone and fill weights that use multiple colors are rendered as a single color override. For complex multi-color icons, render the SVG directly.
