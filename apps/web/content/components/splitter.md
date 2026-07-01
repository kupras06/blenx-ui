---
title: "Splitter"
description: "Splitter creates resizable panel layouts where users can adjust the relative size of adjacent content areas by dragging a divider handle."
navigation:
  group: components
  order: 40
---

## Overview

Splitter creates resizable panel layouts where users can adjust the relative size of adjacent content areas by dragging a divider handle. It supports horizontal and vertical splitting, initial panel sizes, minimum and maximum size constraints, and collapsed states. Use splitters in code editors with preview panes, email clients with list and detail views, dashboard layouts with adjustable widget areas, and any interface where users benefit from controlling content distribution.

## Installation

<Installation registryName="splitter" />

## Usage

The component renders two panels separated by a draggable handle. The `defaultSize` prop controls the initial split ratio, accepting a percentage or pixel value for the primary panel. The `minSize` and `maxSize` props constrain panel dimensions to prevent unusably small or impractically large panels. Dragging the handle updates the panel sizes in real time, with optional snap behavior at defined breakpoints. The handle includes visual affordance through a narrow grip indicator and cursor change on hover. Double-clicking the handle resets the split to the default size.

## API Reference

<ApiReference />

## Limitations

Splitter only supports two panels at a time. Multi-panel layouts must be constructed through nesting, which can complicate state management. The component does not provide built-in responsive behavior — panels do not automatically stack on narrow viewports. Touch interaction with the handle can be imprecise on mobile devices due to the fine motor control required.
