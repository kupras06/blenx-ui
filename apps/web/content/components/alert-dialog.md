---
title: "Alert Dialog"
description: "Alert Dialog is a modal dialog variant designed for urgent confirmations and critical actions that require the user's immediate attention."
navigation:
  group: components
  order: 3
---

## Overview

Alert Dialog is a modal dialog variant designed for urgent confirmations and critical actions that require the user's immediate attention.  It is built on Base UI Dialog primitives with the AlertDialog pattern, ensuring proper focus trapping, backdrop blocking, and dismiss prevention.  Use Alert Dialog when an action has destructive or irreversible consequences — deleting a resource, discarding unsaved changes, or confirming a payment.

## Demo

<DemoRenderer registryName="alert-dialog" />

## Installation

<Installation registryName="alert-dialog" />

## Source Code

<SourceCode registryName="alert-dialog" />

## Usage

Alert Dialog renders with a title describing the consequence, a body providing context, and two action buttons — typically a cancel and a confirm. The confirm action uses the `actionIntent` prop to define its visual weight, defaulting to danger for destructive operations. The dialog traps focus and blocks interaction with the rest of the page until dismissed. Pressing Escape or clicking the backdrop dismisses the dialog without committing the action. The component accepts `onConfirm` and `onCancel` callbacks. For destructive actions, include the resource name in the title (e.g., "Delete invoice INV-042") so users know exactly what they are confirming.

## Composition

Alert Dialog renders as a standalone overlay and should not be nested inside other dialogs, drawers, or popovers. Doing so creates a stacked modal experience that confuses focus management and degrades accessibility. Trigger the Alert Dialog from a `Button` inside a `DataTable` row action menu, a `Card` footer, or a form's delete button. The Alert Dialog itself contains only `DialogTitle`, `DialogDescription`, and action buttons — do not insert complex forms, data tables, or other interactive widgets inside the alert body.

## Design Guidelines

The Alert Dialog backdrop should be darker and less transparent than a standard Dialog backdrop to convey urgency. Center the dialog in the viewport and cap its width to prevent long line lengths that hinder readability of the message. The confirm button should align to the right, following the action—cancel order convention. Use danger color for the confirm button only when the action is destructive; for non-destructive confirmations, use the primary intent instead. Maintain generous padding around the message to give users space to read before acting.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Escape"]} aria={["role", "aria-modal", "aria-labelledby", "aria-describedby"]} />

## Limitations

Alert Dialog does not support nested interactive elements beyond the confirm and cancel buttons. It cannot be dismissed by clicking outside — only by explicit cancel or confirm actions. The component does not include an undo mechanism; if you need undo, design that into the underlying action rather than the dialog. Alert Dialog also requires a visible cancel option; a dialog with only a confirm button is a blocking modal and should be audited for accessibility compliance.
