---
navigation:
  group: components
  order: 26
---

## Overview

The Input component captures single-line text from users. It serves as the foundational form control in Blenx, supporting variants, sizes, placeholder text, disabled state, and validation feedback. Use inputs for any scenario requiring short-form text entry — names, email addresses, search queries, URLs, or numeric values. Avoid inputs for multi-line content, formatted text, or cases requiring rich input masking beyond basic constraints.

## Usage

<Spinner name="input-default" />

Input renders a native `<input>` element underneath with consistent styling applied through the theme system. The variant prop controls the visual treatment: outlined is the default for most forms, underlined suits inline editing contexts, and filled works well in toolbars or dense layouts. Validation state is communicated through color (red for error, green for success) and an optional supporting message rendered below the input. The disabled state reduces contrast and removes interactive feedback.

## Composition

Inputs are frequently paired with Input Group to add prefix or suffix adornments such as icons, buttons, or text labels. They work with the Surface component to provide contextual backgrounds in filters and search panels. Within forms, Inputs sit inside label-element wrappers and are often accompanied by Text components for hints or error messages. The `id` prop should match a corresponding `htmlFor` on the label for accessibility.

## Best Practices

Always associate a visible label with each input using the `id` and `htmlFor` pattern — placeholder text is not a substitute for a label. Use the appropriate `type` attribute (`email`, `url`, `tel`, `number`) to enable mobile keyboards and browser autofill. Maintain consistent sizing across a form by using the same `size` prop on all inputs in a group. Provide clear error messages that explain how to fix the problem, not just that a problem exists.

## Common Mistakes

Relying on placeholder text as the sole label forces users to remember the expected value after the placeholder disappears on input. Overriding browser-native validation with custom logic without considering accessibility is another common issue. Using the `number` type without handling the implications of `step`, `min`, and `max` values can produce unexpected form behavior.

## Design Guidelines

The input height and padding are calibrated to match Button heights of the corresponding size, ensuring alignment when the two appear side by side. Validation colors use the same token palette as Alert components, maintaining visual consistency across feedback surfaces. Focus rings use a 2px offset outline with the theme's focus-ring color and should never be removed — they are critical for keyboard accessibility.

## Limitations

Input renders a single native `<input>` element and does not support masking, formatting, or complex input composition out of the box. For password fields with visibility toggles, compose Input with an Icon Button inside an Input Group rather than relying on built-in functionality. The underlying DOM element is not abstracted, so native browser behaviors like autofill and spellcheck remain controlled by the browser.
