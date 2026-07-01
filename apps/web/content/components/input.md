---
title: "Input"
description: "Input component captures single-line text from users."
navigation:
  group: components
  order: 26
---

## Overview

The Input component captures single-line text from users. It serves as the foundational form control in Blenx, supporting variants, sizes, placeholder text, disabled state, and validation feedback. Use inputs for any scenario requiring short-form text entry — names, email addresses, search queries, URLs, or numeric values.

## Demo

<DemoRenderer registryName="input" />

## Installation

<Installation registryName="input" />

## Usage

Input renders a native `<input>` element underneath with consistent styling applied through the theme system. The variant prop controls the visual treatment: outlined is the default for most forms, underlined suits inline editing contexts, and filled works well in toolbars or dense layouts. Validation state is communicated through color (red for error, green for success) and an optional supporting message rendered below the input. The disabled state reduces contrast and removes interactive feedback.

## API Reference

<ApiReference />

## Limitations

Input renders a single native `<input>` element and does not support masking, formatting, or complex input composition out of the box. For password fields with visibility toggles, compose Input with an Icon Button inside an Input Group rather than relying on built-in functionality. The underlying DOM element is not abstracted, so native browser behaviors like autofill and spellcheck remain controlled by the browser.
