---
title: "Separator"
description: "Separator renders a visual dividing line that distinguishes content sections, groups related elements, or creates visual hierarchy within layouts."
navigation:
  group: components
  order: 36
---

## Overview

Separator renders a visual dividing line that distinguishes content sections, groups related elements, or creates visual hierarchy within layouts. It supports horizontal and vertical orientations with configurable tone variants. Use separators to divide form sections, separate menu item groups, distinguish sidebar navigation categories, or split content regions within a Surface or Card.

## Installation

<Installation registryName="separator" />

## Usage

The component renders a native `<hr>` element in horizontal mode and a styled `<div>` with a vertical border in vertical mode. It is accessible by default, communicating a thematic break to screen readers. The `orientation` prop toggles between `horizontal` and `vertical`. The `tone` prop controls the color strength: `subtle` for low-emphasis dividers in dense layouts, `default` for standard dividers, and `strong` for high-contrast divisions in critical layout sections. The decorative variant sets `aria-hidden="true"` for purely visual separators.

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["role", "aria-orientation"]} />

## Limitations

Separator does not render a visible line when the container has no explicit height (vertical) or width (horizontal). The component does not support labels, icons, or text within the separator line — use a different pattern for titled dividers. The separator is purely visual and does not affect layout spacing; margins must be handled by the parent container.
