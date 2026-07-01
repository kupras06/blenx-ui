---
title: "Alert Dialog"
description: "Alert Dialog is a modal dialog variant designed for urgent confirmations and critical actions that require the user's immediate attention."
navigation:
  group: components
  order: 3
---

## Overview

Alert Dialog is a modal dialog variant designed for urgent confirmations and critical actions that require the user's immediate attention. It is built on Base UI Dialog primitives with the AlertDialog pattern, ensuring proper focus trapping, backdrop blocking, and dismiss prevention. Use Alert Dialog when an action has destructive or irreversible consequences — deleting a resource, discarding unsaved changes, or confirming a payment.

## Demo

<DemoRenderer registryName="alert-dialog" />

## Installation

<Installation registryName="alert-dialog" />

## Usage

Alert Dialog renders with a title describing the consequence, a body providing context, and two action buttons — typically a cancel and a confirm. The confirm action uses the `actionIntent` prop to define its visual weight, defaulting to danger for destructive operations. The dialog traps focus and blocks interaction with the rest of the page until dismissed. Pressing Escape or clicking the backdrop dismisses the dialog without committing the action. The component accepts `onConfirm` and `onCancel` callbacks. For destructive actions, include the resource name in the title (e.g., "Delete invoice INV-042") so users know exactly what they are confirming.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Escape"]} aria={["role", "aria-modal", "aria-labelledby", "aria-describedby"]} />

## Limitations

Alert Dialog does not support nested interactive elements beyond the confirm and cancel buttons. It cannot be dismissed by clicking outside — only by explicit cancel or confirm actions. The component does not include an undo mechanism; if you need undo, design that into the underlying action rather than the dialog. Alert Dialog also requires a visible cancel option; a dialog with only a confirm button is a blocking modal and should be audited for accessibility compliance.
