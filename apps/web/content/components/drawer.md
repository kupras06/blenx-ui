---
title: "Drawer"
description: "Drawer is a slide-in panel that emerges from any edge of the viewport — left, right, top, or bottom — providing a secondary surface for content and actions."
navigation:
  group: components
  order: 21
---

## Overview

Drawer is a slide-in panel that emerges from any edge of the viewport — left, right, top, or bottom — providing a secondary surface for content and actions. It is built on Base UI Dialog primitives, inheriting accessible focus trapping and backdrop management. Use Drawer for navigation menus on mobile, detail panels that reference data on the current page, filter panels, and multi-step workflows that benefit from staying in context.

## Demo

<DemoRenderer registryName="drawer" />

## Installation

<Installation registryName="drawer" />

## Usage

Set the `placement` prop to `"left"`, `"right"`, `"top"`, or `"bottom"` to control the entry direction. The `size` prop controls the drawer width for left/right placements and height for top/bottom placements. Control open state with `open` and `onOpenChange`. Drawer accepts the same sub-component structure as Dialog: `DrawerTrigger`, `DrawerContent`, `DrawerHeader`, `DrawerBody`, `DrawerFooter`, `DrawerTitle`, and `DrawerDescription`. The content area scrolls independently when overflow occurs. Drawer traps focus and dismisses on Escape or backdrop click. The `closeOnOutsideClick` prop can be disabled for workflows that require persistent attention.

## API Reference

<ApiReference />

## Limitations

Drawer does not support resizing by the user. It cannot be converted to a floating panel or undocked from the viewport edge. Nesting drawers is not supported. Drawer does not persist open state across navigation — it must be managed at the page level. The slide animation uses CSS transforms and may conflict with other animated elements on the same compositing layer. Drawer also does not support swipe-to-dismiss gestures on touch devices; dismissal requires the close button, Escape key, or backdrop click.
