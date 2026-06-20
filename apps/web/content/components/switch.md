---
navigation:
  group: components
  order: 43
---

## Overview

Switch provides a binary toggle control for turning a setting on or off. It renders with a visual track and thumb that animate between checked and unchecked states, clearly communicating the current boolean value. Use switches for settings and preferences — notifications on or off, dark mode toggle, feature enablement, and any binary configuration where the effect is immediate. Do not use switches for actions that require confirmation, form submission, or cases where the off state represents a negative or dangerous action.

## Usage

<Spinner name="switch-default" />

Switch is built on Base UI Switch primitives, inheriting full WAI-ARIA switch pattern compliance. The component renders a native `<button>` element with `role="switch"` and `aria-checked` attributes managed automatically. The `checked` and `onCheckedChange` props control the toggle state. The disabled state reduces opacity and removes interaction. The `size` prop offers standard and compact variants to match the application's density requirements. The label is provided externally and associated with the switch via `htmlFor` and `id`.

## Composition

Switches sit inside form rows alongside descriptive Text that explains what the setting controls. In settings panels, multiple switches are arranged using VStack with consistent spacing, each switch paired with a label and optional supporting description. Switches appear inside Surface containers that group related settings. A switch can be placed in a Table cell for per-row toggleable settings, though this pattern requires careful accessibility implementation.

## Best Practices

Always provide a clear, concise label that describes what the switch controls — the label should complete the sentence "Turn on \_\_\_". Use a supporting description when the effect of the toggle is not immediately obvious. Group related switches under a common heading using Text components. The switch's effect should be immediate: do not use a switch to stage a change that requires a separate save action.

## Common Mistakes

Using a switch for a non-binary choice or for an action that triggers navigation is a misuse of the pattern. A common accessibility failure is placing the label to the left of the switch rather than the right, which conflicts with platform conventions. Omitting the visible label and relying solely on the switch's visual state forces users to rely on color alone to understand the current setting.

## Design Guidelines

The switch track should be wide enough to clearly accommodate the thumb in both positions with visible padding. The checked state uses the brand color for the track, while the unchecked state uses a low-emphasis neutral color. The thumb is always white or the surface background color, creating a clear contrast with the track. The transition animation between states should be smooth but fast — 200 milliseconds is the target. The label should use the body text size and be positioned to the right of the switch in left-to-right layouts.

## Common Mistakes

Applying a Switch to control a single item within a list while the list also has a master toggle creates ambiguous parent-child relationships. Using a Switch without a label for icon-only settings panels assumes the icon alone communicates the setting's purpose.

## Demo

<DemoRenderer registryName="switch" />

## Installation

<Installation registryName="switch" />

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Enter", "Space"]} aria={["aria-checked", "aria-labelledby"]} />

## Limitations

Switch does not support an indeterminate or mixed state — it is strictly binary. The component does not provide built-in label rendering; labels must be provided externally. Switch does not support form validation or error states since it represents a preference rather than validated input.
