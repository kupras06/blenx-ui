---
navigation:
  group: components
  order: 46
---

## Overview

Text provides the typography primitive for rendering all textual content in the Blenx system. It offers a range of semantic variants from heading levels h1 through h6, body text variants, captions, and code snippets, with props for color, alignment, and truncation. Use Text for every visible text node in the application to ensure consistent typography, responsive scaling, and theme compliance. Avoid applying raw font styles or HTML heading elements outside of the Text component — doing so bypasses theme tokens and creates visual inconsistency.

## Usage

<Spinner name="text-default" />

Text renders as a `<p>`, `<span>`, `<h1>` through `<h6>`, or `<code>` element depending on the variant and element props. The `variant` prop selects the typographic style: `h1` through `h6` for headings, `body1` and `body2` for standard text, `caption` for smaller supporting text, and `code` for inline code. The `color` prop maps to theme color tokens, with options for default, subtle, disabled, brand, danger, success, and warning. The `align` prop applies text alignment, and the `truncate` prop enables single-line truncation with ellipsis. The `as` prop overrides the rendered element while preserving the variant's visual style, which is essential when a visual heading should be a semantic `<span>` or vice versa.

## Composition

Text is the atomic unit of content across every Blenx component. Buttons use Text for labels, Forms use Text for labels and helper messages, Cards use Text for titles and descriptions, and Tables use Text in every cell. Text composes with Icon components for inline icon-label pairs. Stack and Text together form the basis of most content layouts. The color prop enables Text to adapt to its container's context — a brand-colored heading in a Card, a danger-colored error message in a Form, a subtle caption below a Figure.

## Best Practices

Use semantic heading levels (h1-h6) to create a meaningful document outline, not just for visual size. Each page should have exactly one h1. Use the `as` prop when the visual style needs to differ from the semantic level — for example, a visual h2 that is semantically an h3 for outline correctness. Prefer `body2` for dense content and `body1` for relaxed reading experiences. Always set `truncate` with a defined `maxWidth` on the container when text may overflow in constrained layouts.

## Common Mistakes

Using heading variants for text that is not a heading inflates the document outline and harms screen reader navigation. Overusing the `brand` color for body text dilutes its impact and reduces readability. A common oversight is not providing a fallback font stack — the Text component handles this, but custom text outside of Text will not. Using `truncate` without specifying an appropriate width or container constraint results in the text not truncating at all.

## Design Guidelines

The type scale uses a modular scale with consistent ratios between levels. Line height decreases as font size decreases: headings use tighter line height, body text uses more generous line height for readability. Font weight follows convention: headings use bold (600-700), body text uses regular (400), and captions may use medium (500) for readability at small sizes. Color contrast against all possible background surfaces must meet WCAG AA standards.

## Installation

<Installation registryName="text" />

## API Reference

<ApiReference />

## Limitations

Text does not support multi-line clamping for truncation — only single-line truncation with ellipsis is available. The component does not handle rich text, markdown rendering, or HTML content. For formatted text blocks, render HTML or markdown separately and use Text for individual styled segments. Text cannot automatically detect and style links, emails, or phone numbers within content — external parsing is required.
