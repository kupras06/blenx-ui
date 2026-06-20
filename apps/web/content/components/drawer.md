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

## Source Code

<SourceCode registryName="drawer" />

## Usage

Set the `placement` prop to `"left"`, `"right"`, `"top"`, or `"bottom"` to control the entry direction. The `size` prop controls the drawer width for left/right placements and height for top/bottom placements. Control open state with `open` and `onOpenChange`. Drawer accepts the same sub-component structure as Dialog: `DrawerTrigger`, `DrawerContent`, `DrawerHeader`, `DrawerBody`, `DrawerFooter`, `DrawerTitle`, and `DrawerDescription`. The content area scrolls independently when overflow occurs. Drawer traps focus and dismisses on Escape or backdrop click. The `closeOnOutsideClick` prop can be disabled for workflows that require persistent attention.

## Composition

Drawer uses the same layout sub-components as Dialog, making it easy to switch between the two patterns. Right-placed drawers are common for detail panels — clicking a row in `DataTable` opens the record details in a sliding panel without losing table context. Left-placed drawers work well for navigation menus on mobile. Bottom-placed drawers resemble mobile action sheets. Use Drawer inside the page layout, not inside other Drawer, Dialog, or Popover instances — stacking portal-based components creates accessibility and z-index issues. Drawer content can include `Form`, `Field`, `Button`, `Select`, and `DataTable` components.

## Design Guidelines

The drawer should slide in with a smooth animation over 200–300ms. The backdrop should be present for right, left, and bottom drawers but can be omitted for top drawers used as notification panels. The content area should have adequate padding consistent with other Blenx surfaces. A subtle border or shadow on the leading edge of the drawer helps it feel like a surface sliding over the page. The close button should be in the header, consistent with Dialog placement. On mobile, drawers should typically use the full viewport width or height minus safe area insets.

## API Reference

<ApiReference />

## Limitations

Drawer does not support resizing by the user. It cannot be converted to a floating panel or undocked from the viewport edge. Nesting drawers is not supported. Drawer does not persist open state across navigation — it must be managed at the page level. The slide animation uses CSS transforms and may conflict with other animated elements on the same compositing layer. Drawer also does not support swipe-to-dismiss gestures on touch devices; dismissal requires the close button, Escape key, or backdrop click.
