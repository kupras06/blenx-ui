---
navigation:
  group: components
  order: 39
---

## Overview

Spinner communicates ongoing loading activity through a rotating indicator animation. It provides size variants and optional label support for accessible loading announcements. Use spinners for content loading, form submission feedback, page transitions, and any asynchronous operation where a determinate progress indicator is not appropriate. Avoid spinners for operations that complete in under 300 milliseconds — the flash creates visual noise. For longer operations with known progress, prefer the Progress component.

## Usage

<Spinner name="spinner-default" />

The component renders an animated SVG circle that rotates continuously. The `size` prop maps to the system's spacing scale, providing consistent dimensions across the application. The optional `label` prop renders a text node that is visually hidden but available to screen readers via `aria-label` on the svg element. When no label is provided, the spinner is marked as `aria-hidden` to avoid announcing meaningless rotation to assistive technology. The animation speed is calibrated to feel calm but purposeful — approximately one rotation per second.

## Composition

Spinners are placed inside Button components during loading states, replacing the button text while maintaining the button dimensions. They appear centered within Surface or Card containers that are waiting for data, inside Table cells during row loading, and alongside Text components that describe what is loading. The Stack component can align a Spinner with descriptive loading text for a complete loading state. Spinners are frequently used as the loading indicator inside Suspense fallbacks.

## Best Practices

Always provide descriptive text in the `label` prop or as visible adjacent text so screen reader users understand what is loading. Match the spinner size to the context — use the `sm` size inside buttons and inline elements, `md` for standard content areas, and `lg` for full-page loading states. Never show a spinner without additional context for operations that take more than one second; pair it with a status message or progress indicator.

## Common Mistakes

Showing a spinner overlaid on the entire page for a small data fetch creates an unnecessarily disruptive experience — prefer inline spinners for granular loading. Using multiple spinners on the same page without coordinating their loading states creates visual chaos. A frequent accessibility failure is omitting the loading announcement, leaving screen reader users unaware that content is being loaded.

## Design Guidelines

The spinner color uses the current text color by default, adapting to the parent element's color context. The stroke width should be proportional to the size — thinner for small spinners, slightly thicker for large ones. The animation should use CSS transforms rather than animating SVG attributes for better performance. The spinner must not flicker or pulse — only rotation is permitted. The component should not have any background or padding of its own, fitting naturally within its parent.

## Limitations

Spinner does not display determinate progress — use Progress for percentage-based indicators. The animation cannot be paused or stopped programmatically; visibility and rendering are controlled by the parent. The component does not provide built-in overlay or centering behavior — those must be handled by the parent layout container.
