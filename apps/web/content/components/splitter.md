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

## Source Code

<SourceCode registryName="splitter" />

## Usage

<Spinner name="splitter-default" />

The component renders two panels separated by a draggable handle. The `defaultSize` prop controls the initial split ratio, accepting a percentage or pixel value for the primary panel. The `minSize` and `maxSize` props constrain panel dimensions to prevent unusably small or impractically large panels. Dragging the handle updates the panel sizes in real time, with optional snap behavior at defined breakpoints. The handle includes visual affordance through a narrow grip indicator and cursor change on hover. Double-clicking the handle resets the split to the default size.

## Composition

Splitter panels contain any Blenx components — Scroll Area for scrollable content, Text for headers, Tables for data, or Surface containers for grouped content. Each panel typically wraps its content in a Scroll Area to handle overflow gracefully. In complex layouts, splitters can be nested: a vertical splitter containing a horizontal splitter in one panel creates a three-panel layout. The handle area can optionally include a toolbar with collapse buttons for panels.

## Design Guidelines

The handle width should be generous enough to target easily — at least 8px for cursor-based interaction, wider for touch targets. The grip indicator should be subtle: a small ridge or dotted line centered in the handle area. The handle hover state should use a highlight color that indicates interactivity without being distracting. Panel backgrounds can optionally differ to visually distinguish content areas, especially in code-preview layouts. The collapse and expand animation should complete within 200 milliseconds.

## API Reference

<ApiReference />

## Limitations

Splitter only supports two panels at a time. Multi-panel layouts must be constructed through nesting, which can complicate state management. The component does not provide built-in responsive behavior — panels do not automatically stack on narrow viewports. Touch interaction with the handle can be imprecise on mobile devices due to the fine motor control required.
