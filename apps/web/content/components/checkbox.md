---
title: "Checkbox"
description: "Checkbox presents a binary choice with an associated label, supporting checked, unchecked, and indeterminate states."
navigation:
  group: components
  order: 12
---

## Overview

Checkbox presents a binary choice with an associated label, supporting checked, unchecked, and indeterminate states.  It includes built-in validation support and accessible labeling.  Use checkboxes for multi-select scenarios where users can choose zero, one, or many options from a set — settings panels, permission tables, filter lists, and terms acceptance.

## Installation

<Installation registryName="checkbox" />

## Source Code

<SourceCode registryName="checkbox" />

## Usage

Control the checked state with `checked` and `onChange` props. Pass `indeterminate` to render the minus icon for partial selection in tree hierarchies — this is a visual-only state and does not affect the boolean value. Use `invalid` and `required` props for validation feedback. The label is passed as `children` or via the `label` prop, and clicking the label toggles the checkbox. For checkbox groups, wrap multiple checkboxes in a `Field` with a group label and use `FieldError` for validation messages. The `size` prop adjusts the checkbox box dimensions and label font size proportionally.

## Composition

Checkbox groups live inside `Field` for labeled form sections with validation. Use Checkbox inside `DataTable` rows for row selection, where a header checkbox controls the indeterminate and all-checked states. Checkbox also appears inside `Card` for permission panels and inside `Dialog` for multi-select confirmation dialogs. For accessibility, each Checkbox must have an associated label — do not use Checkbox without label text unless you provide `aria-label` directly. Pair with `Tooltip` when the checkbox label needs additional explanation.

## Design Guidelines

The checkbox box should be large enough to be easily clickable — minimum 20px by 20px at the default size. The checked and indeterminate states should use the primary intent color with a white checkmark or dash for contrast. Focus outlines should be visible around the entire control including the label, not just the box. Disabled checkboxes should reduce opacity but remain legible — the label should still be readable. Validation error styling should wrap both the checkbox and its label with a colored border or background rather than just the box.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Space"]} aria={["aria-checked", "aria-labelledby"]} />

## Limitations

Checkbox does not support a tri-state value API — the `checked` prop remains boolean, and indeterminate is managed separately. The component does not include a group-level state manager; you must manage the selected set in your parent component. Checkbox also does not handle native form submission — serialize state manually for form integration. The indeterminate state is purely visual and cannot be set as the default for an uncontrolled checkbox.
