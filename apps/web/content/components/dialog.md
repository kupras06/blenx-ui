---
title: "Dialog"
description: "Dialog is a modal overlay that presents content requiring user attention or input while blocking interaction with the rest of the page."
navigation:
  group: components
  order: 20
---

## Overview

Dialog is a modal overlay that presents content requiring user attention or input while blocking interaction with the rest of the page.  It is built on Base UI Dialog primitives for accessible focus trapping, dismiss handling, and backdrop management.  Use Dialog for forms, confirmations, detail views, and any workflow where the user should focus on a single task before returning to the main interface.

## Demo

<DemoRenderer registryName="dialog" />

## Installation

<Installation registryName="dialog" />

## Source Code

<SourceCode registryName="dialog" />

## Usage

Dialog consists of `DialogTrigger`, `DialogContent`, `DialogHeader`, `DialogBody`, `DialogFooter`, `DialogTitle`, and `DialogDescription` sub-components. Trigger the dialog via `DialogTrigger`, which can be any interactive element. `DialogContent` renders the modal surface with the backdrop. `DialogTitle` provides the accessible name for the dialog, and `DialogDescription` provides additional context. The dialog traps focus within its content when open, returns focus to the trigger on close, and dismisses on Escape or backdrop click. Control open state with `open` and `onOpenChange` for controlled usage, or use `defaultOpen` for uncontrolled. The `size` prop adjusts the dialog width — `sm`, `md`, `lg`, `xl`, and `fullscreen`.

## Composition

Dialog wraps any content, but its sub-components enforce a consistent layout structure. `DialogHeader` contains the title and close button. `DialogBody` holds the main content and is scrollable when content overflows. `DialogFooter` houses action buttons. Use `Button` in the footer following the primary/secondary action pattern — the primary action on the right, the secondary or cancel action on the left. Do not nest Dialog inside another Dialog; stacked modals create confusing focus management. For urgent confirmations, use AlertDialog instead of a plain Dialog. Dialog content can include `Form`, `DataTable` (for selection dialogs), `Field`, and `Select` components.

## Design Guidelines

The backdrop should be semi-transparent, dark enough to provide visual separation but light enough that users can still perceive the page context. Dialog content should have consistent padding across header, body, and footer. The header border-bottom and footer border-top visually separate the content sections. The close button should be positioned in the top-right corner of the dialog header. Border radius should match other surface components. The dialog should be vertically centered in the viewport with a maximum height that leaves margin from the top and bottom edges.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Escape"]} aria={["role", "aria-modal", "aria-labelledby", "aria-describedby"]} />

## Limitations

Dialog does not support resizing or dragging. It cannot be minimized to reveal underlying content. Stacking multiple dialogs is not supported — only one dialog can be open at a time. Dialog also does not manage unsaved changes detection; implement before-close confirmation logic using `onOpenChange` if needed. The component renders in a portal and may require additional z-index configuration when used alongside other portal-based components.
