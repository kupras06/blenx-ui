---
navigation:
  group: components
  order: 36
---

## Overview

Separator renders a visual dividing line that distinguishes content sections, groups related elements, or creates visual hierarchy within layouts. It supports horizontal and vertical orientations with configurable tone variants. Use separators to divide form sections, separate menu item groups, distinguish sidebar navigation categories, or split content regions within a Surface or Card. Avoid using separators as the sole means of creating visual distinction — rely primarily on spacing and typography, and only add a separator as a secondary visual cue.

## Usage

<Spinner name="separator-default" />

The component renders a native `<hr>` element in horizontal mode and a styled `<div>` with a vertical border in vertical mode. It is accessible by default, communicating a thematic break to screen readers. The `orientation` prop toggles between `horizontal` and `vertical`. The `tone` prop controls the color strength: `subtle` for low-emphasis dividers in dense layouts, `default` for standard dividers, and `strong` for high-contrast divisions in critical layout sections. The decorative variant sets `aria-hidden="true"` for purely visual separators.

## Composition

Separators are placed inside Stack components to divide stacked content groups, within Menu components to separate item categories, inside Surface containers to split content regions, and between Cards to create visual breathing room. In toolbar layouts, a vertical Separator groups related icon buttons by function. The component does not accept children — it is purely a visual element that occupies space along its primary axis.

## Best Practices

Use separators sparingly — excessive dividing lines create visual noise and imply fragmentation where unity is preferable. Prefer spacing over lines for most content separation; add a separator only when the relationship between sections needs explicit visual delineation. In vertical navigation, use separators to group related links, with a maximum of two separators per panel to avoid over-fragmentation. Set `decorative` to `true` when the separator exists purely for visual structure and carries no semantic meaning.

## Common Mistakes

Using a horizontal separator as a heading underline rather than dedicated typography creates visual confusion about which content the line belongs to. Placing separators after every item in a list rather than grouping items into categories produces excessive visual noise. Relying on a vertical separator alone to distinguish adjacent interactive elements in a toolbar fails accessibility requirements — the separation must also be perceivable through focus order or spacing.

## Design Guidelines

The separator line width follows the theme's border-width token. Color uses the border color token at the appropriate emphasis level for the chosen tone. Horizontal separators should span the full width of their container by default, with optional `inset` or `insetStart`/`insetEnd` margin variants. Vertical separators match the height of their container or a specified `length`. Margins above and below the separator should be consistent with the spacing scale relative to the content it divides.

## Installation

<Installation registryName="separator" />

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["role", "aria-orientation"]} />

## Limitations

Separator does not render a visible line when the container has no explicit height (vertical) or width (horizontal). The component does not support labels, icons, or text within the separator line — use a different pattern for titled dividers. The separator is purely visual and does not affect layout spacing; margins must be handled by the parent container.
