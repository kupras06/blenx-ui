---
title: "Textarea"
description: "Textarea provides a multi-line text input for longer-form content entry."
navigation:
  group: components
  order: 47
---

## Overview

Textarea provides a multi-line text input for longer-form content entry. It supports resizing, placeholder text, disabled state, character count, and validation styling consistent with the Input component. Use textareas for comments, descriptions, bio fields, message composition, address entry, and any scenario where the input text is expected to exceed a single line.

## Installation

<Installation registryName="textarea" />

## Usage

Textarea renders a native `<textarea>` element with consistent styling applied through the theme system. The `rows` prop controls the initial visible height, with `minRows` and `maxRows` boundaries when auto-resize is enabled. The `resize` prop accepts `none`, `vertical`, `horizontal`, or `both` to control the user's ability to resize the element. Validation state is communicated through border color and an optional supporting message, matching the Input component's pattern. Auto-resize grows the textarea as the user types, up to the `maxRows` limit, at which point scrolling begins.

## API Reference

<ApiReference />

## Limitations

Textarea does not support rich text formatting, markdown preview, or WYSIWYG editing. The auto-resize feature may cause layout shifts when the textarea grows beyond its initial boundaries. Character count display does not enforce the limit — validation must be handled externally. The component renders a native `<textarea>` element, so browser-specific behaviors like spellcheck and autocorrect remain controlled by the user's browser settings.
