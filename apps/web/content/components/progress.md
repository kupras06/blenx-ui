---
title: "Progress"
description: "Progress visualizes the completion status of an ongoing operation."
navigation:
  group: components
  order: 31
---

## Overview

Progress visualizes the completion status of an ongoing operation. It supports determinate mode for known progress values and indeterminate mode for operations of unknown duration. Use progress bars for file uploads, multi-step form submissions, data loading, export generation, and any process where the user benefits from knowing that work is progressing.

## Installation

<Installation registryName="progress" />

## Source Code

<SourceCode registryName="progress" />

## Usage

<Spinner name="progress-default" />

In determinate mode, the `value` prop accepts a number between 0 and `max` (default 100), and the bar fills proportionally. The component renders a native `<progress>` element for semantic HTML and accessibility. Indeterminate mode is activated by omitting the `value` prop or setting it to `null`, rendering an animated stripe pattern that loops continuously. The `size` prop controls thickness, with options matching the system's spacing scale.

## Composition

Progress bars are placed inside Surface containers or Cards to provide context for the loading operation. They can appear alongside Text explaining the current step, a Spinner for supplemental visual feedback, or a Button to cancel the operation. In form submission flows, the Progress component replaces or overlays the Submit Button after the user triggers the action. Multiple Progress bars in a dashboard layout can be organized using the Stack component.

## Design Guidelines

The track color should use the lowest emphasis token to avoid competing with content. The fill color uses the brand or success token for positive connotation. Animation speed for indeterminate mode should be calm — fast animations create a sense of urgency. The corner radius of both track and fill should match to maintain a unified appearance. Border radius on the bar should be half the height for a pill shape.

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["role", "aria-valuenow", "aria-valuemin", "aria-valuemax"]} />

## Limitations

Progress does not support stacked or segmented progress bars — each instance tracks a single operation. The component does not provide built-in cancel or pause controls. Real-time progress updates require external state management; the component merely reflects the value it receives.
