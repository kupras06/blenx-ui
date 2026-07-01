---
title: "Toggle"
description: "Toggle provides a two-state button that switches between active and inactive visual states."
navigation:
  group: components
  order: 48
---

## Overview

Toggle provides a two-state button that switches between active and inactive visual states. It communicates whether a feature, filter, or mode is currently enabled. Use toggles for toolbar mode switches, filter enablement, view option toggles, and feature flags in settings interfaces.

## Installation

<Installation registryName="toggle" />

## Usage

Toggle renders as a button element that maintains a pressed state through `aria-pressed`. The `pressed` and `onPressedChange` props control the toggle state in controlled mode, or the component can manage its own state internally. The visual treatment switches between a default button appearance and an active appearance that uses the brand color or a filled background, depending on the variant. The `size` prop matches the Button component's size scale for consistent spacing in toolbars. The disabled state removes interaction and reduces visual emphasis.

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["aria-pressed"]} />

## Limitations

Toggle does not support intermediate or indeterminate states. The component does not provide a built-in label — labels must be provided externally as children or adjacent elements. Toggle is not suitable for mutually exclusive options within a group; use Toggle Group or Segmented Control for that pattern.
