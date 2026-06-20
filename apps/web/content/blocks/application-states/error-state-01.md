---
title: Error State
group: application-states
order: 3
default: false
---

## Overview

Error-state-01 is a flexible error display block that communicates failure states to users with clarity and a path to recovery. It supports three visual variants — `card` for inline content areas, `page` for full-page errors, and `toast` for overlay notifications. At its core, the block shows an error icon, a succinct title, a descriptive message, and a retry button that invokes the `onRetry` callback. For debugging and support scenarios, an expandable details section can reveal technical error information such as status codes or stack traces without cluttering the primary interface. The block adapts its layout based on the variant: the `card` variant sits within a container and leaves surrounding navigation accessible, while the `page` variant centers in the viewport with no surrounding chrome interference.

## When To Use

Use error-state-01 whenever an operation fails and the user needs both awareness of the failure and a way to proceed. The `card` variant is ideal for inline failures such as a widget that could not load its data, a form submission that failed server-side, or a list that errored during fetch. The `page` variant suits full-page failures like 404 or 500 routes, broken authentication states, or network-offline pages. The `toast` variant works for transient failures that should not block the current view — a failed email send, a sync error, or a permission denial. Do not use this block for validation errors within forms (use inline field errors instead) or for informational states that are not actually errors (use empty-state-01 for empty results).

## Customization

The `variant` prop selects between `"card"`, `"page"`, and `"toast"`, changing padding, layout, and the presence of a dismiss action. The `title` and `message` props accept strings for the primary error headline and body text. The `onRetry` callback fires when the user clicks the retry button; omitting it hides the retry button entirely for unrecoverable errors. The `errorDetails` prop accepts an optional string or object that populates the expandable debug section, which is collapsed by default and toggled via a "Show details" link. The `icon` prop lets you substitute the default error icon with any Phosphor component, useful for distinguishing error categories — a `WifiSlash` icon for connectivity errors versus a `Lock` icon for authorization failures. The `dismissable` prop (only for `toast` variant) adds a close button.

## Accessibility Notes

The block renders with `role="alert"` on the `toast` variant and `role="region"` with `aria-labelledby` on the `card` and `page` variants, ensuring the error is announced appropriately. The retry button has a descriptive label referencing the failed action, such as "Retry loading projects" rather than a generic "Retry." When the error state appears dynamically (replacing an empty or loading state), focus moves to the error heading so screen reader users are immediately aware of the failure. The expandable error details section uses `aria-expanded` on the toggle button and is hidden with `hidden` attribute when collapsed, ensuring it is not traversed by screen readers until revealed. The dismiss button on the toast variant includes `aria-label="Dismiss error"`.

## Composition

Error-state-01 composes an `Icon` component for the error graphic, a `Heading` for the title, a `Text` component for the message, and a `Button` for the retry action. The expandable details section uses a `Collapsible` component with an internal `disclosure` pattern. The container adapts based on variant: `card` renders inside a `Card` wrapper, `page` renders in a full-viewport `Flex` with no wrapper, and `toast` renders in a `Toast` primitive with slide-in animation. The `Alert` semantic styling — background tint, border color, and icon color — follows your theme's danger or warning tokens, providing consistent visual communication across error instances.

## Best Practices

Write `title` and `message` in plain language that explains what happened and what the user can do about it — "Unable to load your projects. Check your connection and try again." is better than "Error 500: Internal Server Error." Only show error details in the expandable section; do not expose raw stack traces or SQL queries in the primary message. Always provide an `onRetry` handler when the error is transient (network failure, timeout, server error) but omit it for permanent errors (403 on a resource the user should not have access to). For the `toast` variant, set the `dismissable` prop and also auto-dismiss after a reasonable timeout (usually 8–10 seconds for errors) so it does not persist indefinitely.

## Limitations

Error-state-01 cannot automatically determine whether an error is recoverable — the caller must decide to show or hide the retry button by providing or omitting `onRetry`. The expandable details section is purely visual and does not include a "Copy error" button, which would require additional implementation. The toast variant supports only one action (retry or dismiss) and does not support stacked toasts; multiple simultaneous errors require external management. The block does not log errors to any monitoring service — error tracking integration is the caller's responsibility. Internationalization of error messages is also external; pass localized strings through `title` and `message`.
