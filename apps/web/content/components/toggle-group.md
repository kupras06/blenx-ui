---
title: "Toggle Group"
description: "Toggle Group manages a collection of toggle buttons where users can select multiple options within a category."
navigation:
  group: components
  order: 49
---

## Overview

Toggle Group manages a collection of toggle buttons where users can select multiple options within a category. It supports both enforced minimum selection and unconstrained multiple selection. Use toggle groups for filter categories where multiple filters can be active simultaneously, feature tag selection, multi-criteria view customization, and any scenario where users need to select several options from a related set.

## Installation

<Installation registryName="togglegroup" />

## Usage

Toggle Group wraps individual Toggle components and manages the array of selected values. The `value` and `onValueChange` props work with an array of selected item values. The `selection` prop controls the behavior: `multiple` allows any number of selected items, and `single` enforces exactly one selected item. The `orientation` prop arranges toggles horizontally or vertically. The `loop` prop controls whether keyboard focus wraps from the last toggle to the first. Child toggles inherit size and variant from the group for consistency.

## API Reference

<ApiReference />

## Limitations

Toggle Group does not support draggable reordering of its items. The component does not provide a select-all or deselect-all behavior — this must be implemented externally. The `single` selection mode does not allow deselection of the only selected item, which differs from Radio Group behavior. The group does not support mixed or indeterminate selection states.
