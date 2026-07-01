---
title: "Text"
description: "Text provides the typography primitive for rendering all textual content in the Blenx system."
navigation:
  group: components
  order: 46
---

## Overview

Text provides the typography primitive for rendering all textual content in the Blenx system. It offers a range of semantic variants from heading levels h1 through h6, body text variants, captions, and code snippets, with props for color, alignment, and truncation. Use Text for every visible text node in the application to ensure consistent typography, responsive scaling, and theme compliance.

## Installation

<Installation registryName="text" />

## Usage

Text renders as a `<p>`, `<span>`, `<h1>` through `<h6>`, or `<code>` element depending on the variant and element props. The `variant` prop selects the typographic style: `h1` through `h6` for headings, `body1` and `body2` for standard text, `caption` for smaller supporting text, and `code` for inline code. The `color` prop maps to theme color tokens, with options for default, subtle, disabled, brand, danger, success, and warning. The `align` prop applies text alignment, and the `truncate` prop enables single-line truncation with ellipsis. The `as` prop overrides the rendered element while preserving the variant's visual style, which is essential when a visual heading should be a semantic `<span>` or vice versa.

## API Reference

<ApiReference />

## Limitations

Text does not support multi-line clamping for truncation — only single-line truncation with ellipsis is available. The component does not handle rich text, markdown rendering, or HTML content. For formatted text blocks, render HTML or markdown separately and use Text for individual styled segments. Text cannot automatically detect and style links, emails, or phone numbers within content — external parsing is required.
