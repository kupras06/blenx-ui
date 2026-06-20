---
title: "Field"
description: "Field wraps form controls with label, help text, and error message layout, providing consistent form structure and accessible associations."
navigation:
  group: components
  order: 22
---

## Overview

Field wraps form controls with label, help text, and error message layout, providing consistent form structure and accessible associations.  It acts as the single source of truth for form field metadata — every interactive input in a form should be wrapped in Field to ensure proper labeling and validation feedback.  Use Field everywhere you place a form control — text inputs, selects, checkboxes, radio groups, date pickers, and custom form widgets.

## Installation

<Installation registryName="field" />

## Source Code

<SourceCode registryName="field" />

## Usage

Pass the `label` prop for the visible label text and `name` for the form control's identifier. Use `helpText` for descriptive guidance that appears below the control, and `errorMessage` for validation errors. The `required` prop adds a visual indicator (typically an asterisk) to the label and sets `aria-required` on the control. Field uses `FieldLabel`, `FieldHelpText`, and `FieldError` sub-components internally but renders them automatically based on the props. The `layout` prop switches between vertical (label above control) and horizontal (label beside control) orientations. For horizontal layouts, `labelWidth` controls the label column width. Field wraps its children in a structure that maintains consistent spacing and alignment regardless of the child component.

## Composition

Field is the parent wrapper for every form control in Blenx: `Input`, `Select`, `Checkbox`, `Radio`, `Switch`, `DatePicker`, `ColorPicker`, `Combobox`, and `Autocomplete`. It also wraps custom form components built from Box primitives. Multiple Field instances are typically arranged inside `Form` with `Grid` or `Stack` for multi-column layouts. Field composes with `Tooltip` for additional label context without cluttering the visible label text. Do not nest Field inside other Field — the label association becomes ambiguous. Field error states integrate with form-level validation libraries through the `errorMessage` prop passed from the parent form state.

## Design Guidelines

Labels should use a font weight that is distinct from the input text — typically semibold or medium. The label and control should be vertically aligned when using horizontal layout. The space between the label and the control should be consistent across all field types. Error messages should use the danger intent color with an icon, and should appear in the same position for every field to prevent layout shift. Help text should use a smaller font size and a muted color. The required indicator (asterisk) should be the same color as the label and positioned immediately after the label text.

## API Reference

<ApiReference />

## Limitations

Field does not support inline validation with real-time error display as the user types — error messages are set externally. The component does not handle form-level validation logic or submission. Field also does not manage field grouping for radio groups or checkbox groups beyond wrapping each individual control — use a parent container with a group label for grouped controls. The horizontal layout may not be suitable for narrow viewports; responsive adjustments must be managed by the parent form layout.
