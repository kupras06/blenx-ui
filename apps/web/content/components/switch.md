---
title: "Switch"
description: "Switch provides a binary toggle control for turning a setting on or off."
navigation:
  group: components
  order: 43
---

## Overview

Switch provides a binary toggle control for turning a setting on or off. It renders with a visual track and thumb that animate between checked and unchecked states, clearly communicating the current boolean value. Use switches for settings and preferences — notifications on or off, dark mode toggle, feature enablement, and any binary configuration where the effect is immediate.

## Demo

<DemoRenderer registryName="switch" />

## Installation

<Installation registryName="switch" />

## Source Code

<SourceCode registryName="switch" />

## Usage

<Spinner name="switch-default" />

Switch is built on Base UI Switch primitives, inheriting full WAI-ARIA switch pattern compliance. The component renders a native `<button>` element with `role="switch"` and `aria-checked` attributes managed automatically. The `checked` and `onCheckedChange` props control the toggle state. The disabled state reduces opacity and removes interaction. The `size` prop offers standard and compact variants to match the application's density requirements. The label is provided externally and associated with the switch via `htmlFor` and `id`.

## Composition

Switches sit inside form rows alongside descriptive Text that explains what the setting controls. In settings panels, multiple switches are arranged using VStack with consistent spacing, each switch paired with a label and optional supporting description. Switches appear inside Surface containers that group related settings. A switch can be placed in a Table cell for per-row toggleable settings, though this pattern requires careful accessibility implementation.

## Design Guidelines

The switch track should be wide enough to clearly accommodate the thumb in both positions with visible padding. The checked state uses the brand color for the track, while the unchecked state uses a low-emphasis neutral color. The thumb is always white or the surface background color, creating a clear contrast with the track. The transition animation between states should be smooth but fast — 200 milliseconds is the target. The label should use the body text size and be positioned to the right of the switch in left-to-right layouts.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Enter", "Space"]} aria={["aria-checked", "aria-labelledby"]} />

## Limitations

Switch does not support an indeterminate or mixed state — it is strictly binary. The component does not provide built-in label rendering; labels must be provided externally. Switch does not support form validation or error states since it represents a preference rather than validated input.
