---
title: "Toggle"
description: "Toggle provides a two-state button that switches between active and inactive visual states."
navigation:
  group: components
  order: 48
---

## Overview

Toggle provides a two-state button that switches between active and inactive visual states.  It communicates whether a feature, filter, or mode is currently enabled.  Use toggles for toolbar mode switches, filter enablement, view option toggles, and feature flags in settings interfaces.

## Installation

<Installation registryName="toggle" />

## Source Code

<SourceCode registryName="toggle" />

## Usage

<Spinner name="toggle-default" />

Toggle renders as a button element that maintains a pressed state through `aria-pressed`. The `pressed` and `onPressedChange` props control the toggle state in controlled mode, or the component can manage its own state internally. The visual treatment switches between a default button appearance and an active appearance that uses the brand color or a filled background, depending on the variant. The `size` prop matches the Button component's size scale for consistent spacing in toolbars. The disabled state removes interaction and reduces visual emphasis.

## Composition

Toggles frequently appear inside Toggle Groups for multi-selection patterns. In toolbar layouts, individual Toggles sit beside other toolbar controls like Icon Buttons and Selects. A single Toggle paired with a Text label forms a simplified Switch alternative for inline settings. Toggles are used inside Surface containers for filter panels, where each Toggle represents an active filter category. The HStack component arranges multiple toggles with consistent spacing.

## Design Guidelines

The pressed state should use a filled or colored treatment that clearly differentiates from the unpressed outline or ghost treatment. The transition between states should be instant since it represents an immediate mode change. Toggle height and width should match adjacent toolbar buttons for alignment. The active state should be visually contained within the button bounds, not expanding beyond the pressed state's footprint.

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["aria-pressed"]} />

## Limitations

Toggle does not support intermediate or indeterminate states. The component does not provide a built-in label — labels must be provided externally as children or adjacent elements. Toggle is not suitable for mutually exclusive options within a group; use Toggle Group or Segmented Control for that pattern.
