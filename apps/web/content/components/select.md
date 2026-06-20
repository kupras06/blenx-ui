---
navigation:
  group: components
  order: 35
---

## Overview

Select presents a list of options from which the user chooses one value. It supports both native browser select rendering and a custom dropdown implementation with option groups, placeholder text, disabled states, and validation feedback. Use selects when the user must choose from multiple options (typically more than five) and space constraints make radio buttons or segmented controls impractical. Avoid selects for options that are easily scannable at a glance — two to four options are better presented as radios or a segmented control.

## Usage

<Spinner name="select-default" />

The native variant renders a stylized `<select>` element with custom chevron icon, preferred for form compatibility and mobile experience where the OS provides a native picker. The custom variant renders a trigger button with a dropdown menu built on the Popover component, offering richer styling control. Both variants support `<optgroup>` for categorizing options with group labels. The placeholder prop displays instructional text when no option is selected, though it is not a substitute for a visible label. Validation styling mirrors the Input component's error state treatment.

## Composition

Select components integrate with Form layouts, appearing alongside Text for labels and helper messages. In filter toolbars, a Select can combine with other Selects or Inputs to build complex query interfaces. The custom variant uses the Menu component internally for the dropdown, meaning menu items, separators, and disabled items are all supported. A Select inside an Input Group as a prefix or suffix allows for compound controls like unit selectors paired with numeric inputs.

## Best Practices

Always provide a visible label — placeholder text is not accessible and disappears on selection. Group related options using option groups when the list exceeds ten items. Order options deliberately: alphabetical for known datasets, frequency-based for user-facing preferences, and logical for sequential choices. Avoid using placeholder text as the sole instruction for what to select. The selected value should always be visible in the trigger after selection.

## Common Mistakes

Using the placeholder as a de facto label leaves screen reader users without context. Dynamically reordering options after selection causes disorientation — users who selected an option cannot find it again in the same position. Providing too many options without grouping creates a wall of text that is difficult to scan. Not specifying an `id` on the select that matches a label's `htmlFor` breaks form accessibility.

## Design Guidelines

The chevron icon uses the system's low-emphasis color to avoid competing with the selected value text. The custom dropdown surface elevation matches Menu and Popover for consistent layering. Option height is calibrated for comfortable touch targeting at the medium size. The focus ring applies to the trigger element and matches the Input focus ring treatment for visual consistency within forms.

## Limitations

The native variant offers limited customization — chevron icon and some padding are adjustable, but the dropdown appearance is controlled by the operating system. Multi-select is not supported; for multiple selections, use a Checkbox group or a Tag-based multi-select pattern. The custom variant does not support search or filtering of options, making it unsuitable for lists exceeding 30 items without an external search mechanism.
