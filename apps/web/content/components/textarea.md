## Overview

Textarea provides a multi-line text input for longer-form content entry. It supports resizing, placeholder text, disabled state, character count, and validation styling consistent with the Input component. Use textareas for comments, descriptions, bio fields, message composition, address entry, and any scenario where the input text is expected to exceed a single line. Avoid textareas for short single-line inputs, structured data entry, or code editing — use Input or a dedicated code editor component for those cases.

## Usage

<Spinner name="textarea-default" />

Textarea renders a native `<textarea>` element with consistent styling applied through the theme system. The `rows` prop controls the initial visible height, with `minRows` and `maxRows` boundaries when auto-resize is enabled. The `resize` prop accepts `none`, `vertical`, `horizontal`, or `both` to control the user's ability to resize the element. Validation state is communicated through border color and an optional supporting message, matching the Input component's pattern. Auto-resize grows the textarea as the user types, up to the `maxRows` limit, at which point scrolling begins.

## Composition

Textarea sits inside Form layouts alongside Label and helper Text components. In comment or messaging interfaces, Textarea pairs with a Send Button placed below or to the right of the field. Character count display is rendered as a Text component with the `caption` variant, positioned below the textarea and aligned to the right. The Surface component can wrap a Textarea for contextual backgrounds in modal or sheet forms. Stack aligns Textarea with other form controls in multi-field layouts.

## Best Practices

Set `minRows` to a value that shows the expected content length — three rows for short descriptions, six or more for substantial content. Enable auto-resize by default unless the layout requires a fixed height. Display a character count when there is a limit, and show a warning state when the user approaches the limit rather than only showing an error when the limit is exceeded. Always associate a label with the textarea using `htmlFor` and `id`.

## Common Mistakes

Setting `rows` to a single row defeats the purpose of a textarea and confuses users about whether multi-line input is accepted. Disabling resize entirely frustrates users who need more space to review their input. A common oversight is not handling paste events properly — pasted content with line breaks should be preserved, not stripped. Using placeholder text as a substitute for a label forces users to remember the expected content after the placeholder disappears.

## Design Guidelines

The textarea height should be sufficient to display at least three lines of text at the chosen font size. The padding and font size match the Input component of the corresponding size for consistency within forms. The resize handle should be visible and located at the bottom-right corner in left-to-right layouts. Validation colors and focus ring treatment match the Input component exactly, ensuring visual consistency across all form controls.

## Limitations

Textarea does not support rich text formatting, markdown preview, or WYSIWYG editing. The auto-resize feature may cause layout shifts when the textarea grows beyond its initial boundaries. Character count display does not enforce the limit — validation must be handled externally. The component renders a native `<textarea>` element, so browser-specific behaviors like spellcheck and autocorrect remain controlled by the user's browser settings.
