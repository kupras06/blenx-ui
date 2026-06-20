## Overview

Radio renders a group of radio buttons where exactly one option can be selected at a time. It handles selection state, keyboard navigation, focus management, and form integration. Use radios when the user must choose exactly one option from a small set (fewer than six), and the options benefit from being visible simultaneously for comparison. For larger sets, consider Select. For mutually exclusive options in a compact layout, consider Segmented Control or Toggle Group.

## Usage

<Spinner name="radio-default" />

A Radio Group wraps individual Radio items and manages the selected value. The group accepts a `value` and `onChange` prop, behaving as a controlled component. Each radio renders a native `<input type="radio">` underneath, ensuring form submission compatibility and accessibility. Keyboard navigation follows the roving tabindex pattern: Tab enters and exits the group, arrow keys move between options within the group, and Space selects the focused option.

## Composition

Radio Groups sit inside Form layouts alongside Labels for each option, Text for group instructions, and validation messages below the group. The Surface component can wrap a Radio Group to visually group options in filter panels or preference screens. The inline variant places radios horizontally for space-efficient layouts, while the stacked variant aligns them vertically for readability. Each radio item can contain nested Text or supporting content.

## Best Practices

Always provide a group-level label using `aria-labelledby` or `aria-label`. Each option should have a concise, unambiguous label. Pre-select a value when there is a sensible default; leaving a radio group with no selection forces an extra interaction on the user. Ensure that clicking the label text toggles the radio — associate each label with its input via `htmlFor` and `id`.

## Common Mistakes

Using radios for a binary choice that could be a Switch is a missed opportunity for simpler interaction. Dynamically changing the options in a radio group without preserving the selected value can reset user selections unexpectedly. Placing radio groups too close together without sufficient visual separation or group labels causes confusion about which options belong to which group.

## Design Guidelines

The radio indicator uses a filled circle for the selected state and an empty circle for the unselected state, following platform convention. The label text should be placed to the right of the indicator in left-to-right locales. Disabled radios reduce opacity and suppress the hover state. Focus-visible styles appear on the radio indicator, not the label, to follow native form control behavior.

## Limitations

Radio does not support deselection — once an option is selected, it cannot be unselected without selecting another option or explicitly resetting the group value. The component does not support inline error messages for individual radio options; validation is communicated at the group level. Custom radio indicator rendering is not supported; only the built-in circle indicator is available.
