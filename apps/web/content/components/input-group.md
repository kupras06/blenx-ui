---
navigation:
  group: components
  order: 27
---

## Overview

Input Group extends a standard Input with prefix or suffix adornments — icons, buttons, text labels, or dropdown triggers. It solves the problem of composite input fields where additional context or actions are necessary within the same visual boundary. Use input groups for search fields with submit buttons, password fields with visibility toggles, amount fields with currency indicators, and URL inputs with protocol prefixes.

## Usage

<Spinner name="input-group-default" />

The component wraps an Input and positions adornment elements in the leading or trailing slots. Adornments are rendered inline within the input's visual container, using the same border, background, and height to create a seamless appearance. The Input Group manages focus states so that clicking an adornment does not remove focus from the input itself. When an adornment is interactive, such as a button, the interactive element must handle its own focus and click events.

## Composition

Input Group composes Input in its default form, accepting all the same props while adding `prefix` and `suffix` slots. Icon Buttons are the most common adornments, but Text components, Select dropdowns, and Button components also fit naturally. The group integrates with Form components for validation display: error messages render below the entire group, not per-adornment. Adjacent Input Groups in a form should use consistent sizing and variant props.

## Best Practices

Adornments should be visually distinct from the input value without competing for attention. Icons used as prefixes should have low contrast to avoid drawing focus away from the typed content. Interactive suffixes, like a clear button, must have appropriate `aria-label` values. Avoid stacking more than two adornments on the same side — the input area becomes too narrow and the purpose of the field becomes unclear.

## Common Mistakes

Placing interactive elements inside the prefix or suffix that trigger unexpected actions without warning the user is problematic. A common error is failing to handle keyboard focus order: a suffix button should be reachable via Tab after the input. Using Input Group for a single adornment when a standard Input with an adjacent Button would be more appropriate can overcomplicate the layout.

## Design Guidelines

The group container uses the same border radius and stroke color as the inner Input, with adornments visually inset to avoid doubling borders. The height of the group is determined by the Input size prop, and adornments are vertically centered. Padding inside adornments is tighter than the Input itself — typically 8px horizontal versus 12px for the input text area.

## Installation

<Installation registryName="inputgroup" />

## API Reference

<ApiReference />

## Limitations

Input Group does not support adornments on both sides when the input is in a dense or compact size — the resulting field width is insufficient for meaningful text entry. The component does not handle adornment overflow: if the combined width of adornments and input exceeds the container, clipping occurs without scroll behavior.
