## Overview

Checkbox presents a binary choice with an associated label, supporting checked, unchecked, and indeterminate states. It includes built-in validation support and accessible labeling. Use checkboxes for multi-select scenarios where users can choose zero, one, or many options from a set — settings panels, permission tables, filter lists, and terms acceptance. The indeterminate state represents a parent checkbox in a tree where some children are selected and others are not. Do not use Checkbox for mutually exclusive options where only one choice is valid; use Radio for that pattern. Checkbox is also inappropriate for toggling a single setting on or off; use Switch instead, as it better communicates immediate activation.

## Usage

Control the checked state with `checked` and `onChange` props. Pass `indeterminate` to render the minus icon for partial selection in tree hierarchies — this is a visual-only state and does not affect the boolean value. Use `invalid` and `required` props for validation feedback. The label is passed as `children` or via the `label` prop, and clicking the label toggles the checkbox. For checkbox groups, wrap multiple checkboxes in a `Field` with a group label and use `FieldError` for validation messages. The `size` prop adjusts the checkbox box dimensions and label font size proportionally.

## Composition

Checkbox groups live inside `Field` for labeled form sections with validation. Use Checkbox inside `DataTable` rows for row selection, where a header checkbox controls the indeterminate and all-checked states. Checkbox also appears inside `Card` for permission panels and inside `Dialog` for multi-select confirmation dialogs. For accessibility, each Checkbox must have an associated label — do not use Checkbox without label text unless you provide `aria-label` directly. Pair with `Tooltip` when the checkbox label needs additional explanation.

## Best Practices

Labels should be concise statements of what enabling the option does — "Send email notifications" rather than "Email". Group related checkboxes under a clear group label so users understand the category. Manage the indeterminate state manually based on child checkbox states — the component does not compute it automatically. For large checkbox groups (more than eight options), consider a different interaction pattern like a multi-select Combobox or a transfer list. Use Checkbox for required legal consent with explicit label text that references what the user is agreeing to.

## Common Mistakes

Using Checkbox for a single binary option that takes immediate effect, like enabling dark mode. Switch is the correct pattern there. Another mistake is forgetting to handle the indeterminate state in the change handler — clicking an indeterminate checkbox typically selects all children and transitions to checked. Placing checkboxes too far from their labels creates ambiguity, especially on dense forms. Nesting checkboxes too deeply in a tree hierarchy without visual indentation makes the relationship between parent and child options unclear.

## Design Guidelines

The checkbox box should be large enough to be easily clickable — minimum 20px by 20px at the default size. The checked and indeterminate states should use the primary intent color with a white checkmark or dash for contrast. Focus outlines should be visible around the entire control including the label, not just the box. Disabled checkboxes should reduce opacity but remain legible — the label should still be readable. Validation error styling should wrap both the checkbox and its label with a colored border or background rather than just the box.

## Limitations

Checkbox does not support a tri-state value API — the `checked` prop remains boolean, and indeterminate is managed separately. The component does not include a group-level state manager; you must manage the selected set in your parent component. Checkbox also does not handle native form submission — serialize state manually for form integration. The indeterminate state is purely visual and cannot be set as the default for an uncontrolled checkbox.
