---
navigation:
  group: components
  order: 22
---

## Overview

Field wraps form controls with label, help text, and error message layout, providing consistent form structure and accessible associations. It acts as the single source of truth for form field metadata — every interactive input in a form should be wrapped in Field to ensure proper labeling and validation feedback. Use Field everywhere you place a form control — text inputs, selects, checkboxes, radio groups, date pickers, and custom form widgets. Field handles the layout and accessibility wiring so each form control component can focus on its own concern. Do not use Field for non-form content like buttons or display-only text. Field is also unnecessary when you need a label that is not associated with a form control, such as a section heading.

## Usage

Pass the `label` prop for the visible label text and `name` for the form control's identifier. Use `helpText` for descriptive guidance that appears below the control, and `errorMessage` for validation errors. The `required` prop adds a visual indicator (typically an asterisk) to the label and sets `aria-required` on the control. Field uses `FieldLabel`, `FieldHelpText`, and `FieldError` sub-components internally but renders them automatically based on the props. The `layout` prop switches between vertical (label above control) and horizontal (label beside control) orientations. For horizontal layouts, `labelWidth` controls the label column width. Field wraps its children in a structure that maintains consistent spacing and alignment regardless of the child component.

## Composition

Field is the parent wrapper for every form control in Blenx: `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `DatePicker`, `ColorPicker`, `Combobox`, and `Autocomplete`. It also wraps custom form components built from Box primitives. Multiple Field instances are typically arranged inside `Form` with `Grid` or `Stack` for multi-column layouts. Field composes with `Tooltip` for additional label context without cluttering the visible label text. Do not nest Field inside other Field — the label association becomes ambiguous. Field error states integrate with form-level validation libraries through the `errorMessage` prop passed from the parent form state.

## Best Practices

Write labels as clear nouns or short noun phrases — "Email address" rather than "Enter your email address". Help text should explain the format or reason for the field, not restate the label. Error messages should tell the user what went wrong and how to fix it — "Password must be at least 8 characters" rather than "Invalid password". Use horizontal layout for compact forms like search filters or inline editing, and vertical layout for detailed forms. Always provide a label — a form control without a label is inaccessible. Use the `required` prop consistently across the form so users learn the pattern.

## Common Mistakes

Omitting the `name` prop breaks form serialization and accessibility references. Another mistake is putting the error message in the help text slot instead of the error slot — help text should not change color or meaning when validation fails. Nesting Field inside grid columns without adjusting the label layout can produce misaligned forms. Using Field for a single checkbox in isolation when the label semantics are handled by the checkbox itself (though Field is still recommended for consistency). Applying help text that disappears when an error appears — help text and error messages can coexist when the help provides format guidance and the error explains the specific violation.

## Design Guidelines

Labels should use a font weight that is distinct from the input text — typically semibold or medium. The label and control should be vertically aligned when using horizontal layout. The space between the label and the control should be consistent across all field types. Error messages should use the danger intent color with an icon, and should appear in the same position for every field to prevent layout shift. Help text should use a smaller font size and a muted color. The required indicator (asterisk) should be the same color as the label and positioned immediately after the label text.

## Limitations

Field does not support inline validation with real-time error display as the user types — error messages are set externally. The component does not handle form-level validation logic or submission. Field also does not manage field grouping for radio groups or checkbox groups beyond wrapping each individual control — use a parent container with a group label for grouped controls. The horizontal layout may not be suitable for narrow viewports; responsive adjustments must be managed by the parent form layout.
