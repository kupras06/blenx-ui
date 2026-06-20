---
title: "Spinner"
description: "Spinner communicates ongoing loading activity through a rotating indicator animation."
navigation:
  group: components
  order: 39
---

## Overview

Spinner communicates ongoing loading activity through a rotating indicator animation.  It provides size variants and optional label support for accessible loading announcements.  Use spinners for content loading, form submission feedback, page transitions, and any asynchronous operation where a determinate progress indicator is not appropriate.

## Installation

<Installation registryName="spinner" />

## Source Code

<SourceCode registryName="spinner" />

## Usage

<Spinner name="spinner-default" />

The component renders an animated SVG circle that rotates continuously. The `size` prop maps to the system's spacing scale, providing consistent dimensions across the application. The optional `label` prop renders a text node that is visually hidden but available to screen readers via `aria-label` on the svg element. When no label is provided, the spinner is marked as `aria-hidden` to avoid announcing meaningless rotation to assistive technology. The animation speed is calibrated to feel calm but purposeful — approximately one rotation per second.

## Composition

Spinners are placed inside Button components during loading states, replacing the button text while maintaining the button dimensions. They appear centered within Surface or Card containers that are waiting for data, inside Table cells during row loading, and alongside Text components that describe what is loading. The Stack component can align a Spinner with descriptive loading text for a complete loading state. Spinners are frequently used as the loading indicator inside Suspense fallbacks.

## Design Guidelines

The spinner color uses the current text color by default, adapting to the parent element's color context. The stroke width should be proportional to the size — thinner for small spinners, slightly thicker for large ones. The animation should use CSS transforms rather than animating SVG attributes for better performance. The spinner must not flicker or pulse — only rotation is permitted. The component should not have any background or padding of its own, fitting naturally within its parent.

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["role", "aria-label"]} />

## Limitations

Spinner does not display determinate progress — use Progress for percentage-based indicators. The animation cannot be paused or stopped programmatically; visibility and rendering are controlled by the parent. The component does not provide built-in overlay or centering behavior — those must be handled by the parent layout container.
