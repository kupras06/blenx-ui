---
title: "Input Group"
description: "Input Group extends a standard Input with prefix or suffix adornments — icons, buttons, text labels, or dropdown triggers."
navigation:
  group: components
  order: 27
---

## Overview

Input Group extends a standard Input with prefix or suffix adornments — icons, buttons, text labels, or dropdown triggers. It solves the problem of composite input fields where additional context or actions are necessary within the same visual boundary. Use input groups for search fields with submit buttons, password fields with visibility toggles, amount fields with currency indicators, and URL inputs with protocol prefixes.

## Demo

<DemoRenderer registryName="inputgroup" />
## Installation

<Installation registryName="inputgroup" />

## Usage

The component wraps an Input and positions adornment elements in the leading or trailing slots. Adornments are rendered inline within the input's visual container, using the same border, background, and height to create a seamless appearance. The Input Group manages focus states so that clicking an adornment does not remove focus from the input itself. When an adornment is interactive, such as a button, the interactive element must handle its own focus and click events.

## API Reference

<ApiReference />

## Limitations

Input Group does not support adornments on both sides when the input is in a dense or compact size — the resulting field width is insufficient for meaningful text entry. The component does not handle adornment overflow: if the combined width of adornments and input exceeds the container, clipping occurs without scroll behavior.
