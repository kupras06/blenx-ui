---
title: "Icon"
description: "Icon is a wrapper component for Phosphor icons that provides consistent sizing, coloring, and accessibility defaults."
navigation:
  group: components
  order: 24
---

## Overview

Icon is a wrapper component for Phosphor icons that provides consistent sizing, coloring, and accessibility defaults.  It renders the specified icon with the correct viewBox and stroke weight, inheriting or overriding color and size from props.  Use Icon whenever you need a visual symbol in the interface — navigation items, button slots, status indicators, empty state illustrations, and decorative elements.

## Demo

<DemoRenderer registryName="icon" />

## Installation

<Installation registryName="icon" />

## Source Code

<SourceCode registryName="icon" />

## Usage

Pass the Phosphor icon component as a child to Icon, or use the `name` prop with the icon's string identifier. Set `size` to one of the theme size tokens to match the surrounding text scale. The `color` prop accepts theme color tokens or raw CSS color values. By default, Icon inherits the current text color via `currentColor`, ensuring it matches adjacent text without explicit color configuration. The `weight` prop maps to Phosphor's built-in weight variants (regular, bold, fill, duotone, thin) for visual emphasis. Use `aria-hidden="true"` when the icon is decorative and `aria-label` when it serves as the sole identifier of an action.

## Composition

Icon is the primary graphic element inside `Button` start and end icon slots, `Alert` severity icons, `Badge` decorative elements, and `Command` item visuals. Use Icon inside `Box` for alignment-controlled icon containers, inside `Card` headers for decorative section icons, and inside `DataTable` cells for status or action icons. Icon composes with `Tooltip` for icon-only buttons where the icon alone does not convey the action. For icon groups, wrap multiple Icon components in a `Box` with flex layout and consistent gap spacing. Do not wrap Icon in additional divs for spacing — apply margin directly to Icon using its style props.

## Design Guidelines

Icons should align with the baseline of adjacent text. The icon bounding box should match the text line height at each size tier. Use consistent stroke weight across the same interface tier — toolbar icons should all use the same weight, as should navigation icons and inline indicators. Icon color should match the semantic intent of the surrounding text or control. Disabled icons should use the same reduced opacity as disabled text. The clickable area of an icon-only button should be larger than the icon itself, achieved through the parent Button's padding, not Icon's size.

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["aria-hidden"]} />

## Limitations

Icon only supports Phosphor icon library. Non-Phosphor SVGs cannot be used through the Icon component. The component does not support animated icons or icon spritesheets. Custom icon sizes outside the defined theme tokens must use raw CSS values and may not align with typography consistently. Icon also does not support multi-color icons beyond the single `color` prop — duotone and fill weights that use multiple colors are rendered as a single color override. For complex multi-color icons, render the SVG directly.
