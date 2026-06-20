---
navigation:
  group: components
  order: 2
---

## Overview

The Alert component delivers contextual feedback messages to users in response to an action or system event. It supports four intents — info, success, warning, and error — each with distinct color mapping and iconography to communicate severity at a glance. Use alerts to confirm successful operations, warn about potential issues, notify users of state changes, or surface errors that need attention. Alerts are persistent, non-modal elements that appear inline within the page layout. Do not use alerts for time-sensitive notifications that require dismissal — that is the domain of toasts or snackbars. Alerts are also inappropriate for critical system errors that block the user from proceeding; those should use Alert Dialog or a dedicated error boundary.

## Usage

Render an Alert with the `intent` prop to select the visual variant. Each intent automatically applies the corresponding icon (checkmark for success, exclamation for warning, etc.), but you can override it with the `icon` slot if your messaging requires a custom graphic. Alerts can optionally render a title via the `title` prop to summarize the message, followed by children for the detailed body. The component accepts an `onClose` callback and a dismiss button when closable behavior is needed. Alerts participate in the document flow and will push sibling content, so place them near the surface they relate to — typically at the top of a form, card, or page section.

## Composition

Use Alert inside `Field` to show per-field validation messages only when an error or warning is present. Pair Alert with `Card` when you need to surface a persistent message within a contained area. For multi-step flows, Alert inside `Dialog` or `Drawer` provides feedback without disrupting the modal context. Alerts are also effective inside `DataTable` empty states to explain why no data is shown. Avoid nesting alerts inside other alerts — the visual hierarchy becomes muddled and screen reader announcements overlap.

## Best Practices

Match the intent to the severity of the message, not the desired emotional reaction. A successful save is info, not success; a deleted record is warning, not error. Keep alert text concise and actionable — tell the user what happened and, if applicable, what they should do next. Use the title prop for a bold summary and reserve children for details. Do not rely solely on color to convey intent; the icon and visible text must communicate severity for accessibility. Place alerts above the content they reference so users encounter the message before acting on the related controls.

## Common Mistakes

Overusing alerts dilutes their impact. If every form submission produces an alert, users learn to ignore them. Another mistake is placing alerts in locations users cannot easily associate with the triggering action — an alert at the top of the page for an error at the bottom of a long form forces the user to scroll back and forth. Using alerts for non-critical information also causes alert fatigue; reserve them for meaningful state changes only.

## Design Guidelines

Alerts should occupy the full width of their container with sufficient padding to distinguish them from surrounding content. The left border accent and icon color should match the intent — green for success, amber for warning, red for error, blue for info. Text contrast within alerts must meet WCAG AA standards; do not reduce opacity on alert text for visual effect. Dismissible alerts should place the close button in the top-right corner, visually separated from the message content.

## Installation

<Installation registryName="alert" />

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["role", "aria-live"]} />

## Limitations

Alert does not support auto-dismiss behavior. If you need a notification that disappears after a timeout, use a toast implementation instead. Alerts do not stack; if multiple alerts need to appear simultaneously, render them as siblings in a container and manage layout manually. The component does not manage focus — when an alert appears dynamically, you must handle focus management yourself if the alert is critical.
