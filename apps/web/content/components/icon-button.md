---
title: "Icon Button"
description: "Icon buttons provide a compact trigger for actions where visual real estate is limited."
navigation:
  group: components
  order: 25
---

## Overview

Icon buttons provide a compact trigger for actions where visual real estate is limited. They use a square footprint with no visible text label, relying entirely on the icon to communicate intent. Use icon buttons in toolbars, table row actions, search fields, and notification controls where space is constrained and the icon meaning is self-evident.

## Demo

<DemoRenderer registryName="icon-button" />

## Installation

<Installation registryName="icon-button" />

## Source Code

<SourceCode registryName="icon-button" />

## Usage

<Spinner name="icon-button-default" />

Icon buttons are built on the Button component with enforced square aspect ratio and default size that matches the standard button height. The variant, size, and color props map directly to Button semantics, ensuring visual consistency across the system. Unlike standard buttons, icon buttons do not accept children as text — only render an icon element. An accessible label must always be provided through `aria-label` for screen readers.

## Composition

Icon buttons compose naturally inside Input Groups as suffix or prefix elements for actions like clearing input, toggling password visibility, or invoking a search. They also appear inside Menus as trigger handles, within Table rows for edit or delete actions, and alongside Text components for inline actions. When grouped, use the Stack component to control spacing and alignment between adjacent icon buttons.

## Design Guidelines

Icon buttons inherit the same color mapping as text buttons in the variant system. The default state uses a transparent background. The hover and active states apply a subtle background fill to indicate interactivity without competing with surrounding content. Danger variants use red tones only for destructive actions to preserve the semantic weight of the color. Disabled icon buttons reduce opacity uniformly and suppress all interactive feedback.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Enter", "Space"]} aria={["aria-label", "aria-disabled"]} />

## Limitations

Icon buttons cannot accommodate text labels, making them unsuitable for actions that require verbal clarification. The fixed square aspect ratio may cause layout issues in containers with non-standard heights. Complex or multi-step actions should not be hidden behind an icon-only trigger.
