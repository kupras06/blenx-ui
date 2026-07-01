---
title: "Dialog"
description: "Dialog is a modal overlay that presents content requiring user attention or input while blocking interaction with the rest of the page."
navigation:
  group: components
  order: 20
---

## Overview

Dialog is a modal overlay that presents content requiring user attention or input while blocking interaction with the rest of the page. It is built on Base UI Dialog primitives for accessible focus trapping, dismiss handling, and backdrop management. Use Dialog for forms, confirmations, detail views, and any workflow where the user should focus on a single task before returning to the main interface.

## Demo

<DemoRenderer registryName="dialog" />

## Installation

<Installation registryName="dialog" />

## Usage

Dialog consists of `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogBody`, `DialogFooter`, `DialogTitle`, and `DialogDescription` sub-components. Trigger the dialog via `DialogTrigger`, which can be any interactive element. `DialogContent` renders the modal surface with the backdrop. `DialogTitle` provides the accessible name for the dialog, and `DialogDescription` provides additional context. The dialog traps focus within its content when open, returns focus to the trigger on close, and dismisses on Escape or backdrop click. Control open state with `open` and `onOpenChange` for controlled usage, or use `defaultOpen` for uncontrolled. The `size` prop adjusts the dialog width — `sm`, `md`, `lg`, `xl`, and `fullscreen`.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Escape"]} aria={["role", "aria-modal", "aria-labelledby", "aria-describedby"]} />

## Limitations

Dialog does not support resizing or dragging. It cannot be minimized to reveal underlying content. Stacking multiple dialogs is not supported — only one dialog can be open at a time. Dialog also does not manage unsaved changes detection; implement before-close confirmation logic using `onOpenChange` if needed. The component renders in a portal and may require additional z-index configuration when used alongside other portal-based components.
