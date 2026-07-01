---
title: "Radio"
description: "Radio renders a group of radio buttons where exactly one option can be selected at a time."
navigation:
  group: components
  order: 32
---

## Overview

Radio renders a group of radio buttons where exactly one option can be selected at a time. It handles selection state, keyboard navigation, focus management, and form integration. Use radios when the user must choose exactly one option from a small set (fewer than six), and the options benefit from being visible simultaneously for comparison.

## Installation

<Installation registryName="radio" />

## Usage

A Radio Group wraps individual Radio items and manages the selected value. The group accepts a `value` and `onChange` prop, behaving as a controlled component. Each radio renders a native `<input type="radio">` underneath, ensuring form submission compatibility and accessibility. Keyboard navigation follows the roving tabindex pattern: Tab enters and exits the group, arrow keys move between options within the group, and Space selects the focused option.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["ArrowUp", "ArrowDown"]} aria={["aria-checked", "aria-labelledby"]} />

## Limitations

Radio does not support deselection — once an option is selected, it cannot be unselected without selecting another option or explicitly resetting the group value. The component does not support inline error messages for individual radio options; validation is communicated at the group level. Custom radio indicator rendering is not supported; only the built-in circle indicator is available.
