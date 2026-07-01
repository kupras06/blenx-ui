---
title: "Spinner"
description: "Spinner communicates ongoing loading activity through a rotating indicator animation."
navigation:
  group: components
  order: 39
---

## Overview

Spinner communicates ongoing loading activity through a rotating indicator animation. It provides size variants and optional label support for accessible loading announcements. Use spinners for content loading, form submission feedback, page transitions, and any asynchronous operation where a determinate progress indicator is not appropriate.

## Demo

<DemoRenderer registryName="spinner" />

## Installation

<Installation registryName="spinner" />

## Usage

The component renders an animated SVG circle that rotates continuously. The `size` prop maps to the system's spacing scale, providing consistent dimensions across the application. The optional `label` prop renders a text node that is visually hidden but available to screen readers via `aria-label` on the svg element. When no label is provided, the spinner is marked as `aria-hidden` to avoid announcing meaningless rotation to assistive technology. The animation speed is calibrated to feel calm but purposeful — approximately one rotation per second.

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["role", "aria-label"]} />

## Limitations

Spinner does not display determinate progress — use Progress for percentage-based indicators. The animation cannot be paused or stopped programmatically; visibility and rendering are controlled by the parent. The component does not provide built-in overlay or centering behavior — those must be handled by the parent layout container.
