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

## Usage

Switch is built on Base UI Switch primitives, inheriting full WAI-ARIA switch pattern compliance. The component renders a native `<button>` element with `role="switch"` and `aria-checked` attributes managed automatically. The `checked` and `onCheckedChange` props control the toggle state. The disabled state reduces opacity and removes interaction. The `size` prop offers standard and compact variants to match the application's density requirements. The label is provided externally and associated with the switch via `htmlFor` and `id`.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Enter", "Space"]} aria={["aria-checked", "aria-labelledby"]} />

## Limitations

Switch does not support an indeterminate or mixed state — it is strictly binary. The component does not provide built-in label rendering; labels must be provided externally. Switch does not support form validation or error states since it represents a preference rather than validated input.
