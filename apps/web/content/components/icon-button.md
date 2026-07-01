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

## Usage

Icon buttons are built on the Button component with enforced square aspect ratio and default size that matches the standard button height. The variant, size, and color props map directly to Button semantics, ensuring visual consistency across the system. Unlike standard buttons, icon buttons do not accept children as text — only render an icon element. An accessible label must always be provided through `aria-label` for screen readers.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Enter", "Space"]} aria={["aria-label", "aria-disabled"]} />

## Limitations

Icon buttons cannot accommodate text labels, making them unsuitable for actions that require verbal clarification. The fixed square aspect ratio may cause layout issues in containers with non-standard heights. Complex or multi-step actions should not be hidden behind an icon-only trigger.
