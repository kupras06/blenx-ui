---
navigation:
  group: components
  order: 21
---

## Overview

Drawer is a slide-in panel that emerges from any edge of the viewport — left, right, top, or bottom — providing a secondary surface for content and actions. It is built on Base UI Dialog primitives, inheriting accessible focus trapping and backdrop management. Use Drawer for navigation menus on mobile, detail panels that reference data on the current page, filter panels, and multi-step workflows that benefit from staying in context. Drawer keeps users anchored to the current page while providing access to supplementary content. Do not use Drawer for confirmations or alerts — use Dialog or AlertDialog instead. Drawer is also inappropriate for content that requires the full viewport width, such as complex forms or data tables; a full Dialog or dedicated page is better suited.

## Usage

Set the `placement` prop to `"left"`, `"right"`, `"top"`, or `"bottom"` to control the entry direction. The `size` prop controls the drawer width for left/right placements and height for top/bottom placements. Control open state with `open` and `onOpenChange`. Drawer accepts the same sub-component structure as Dialog: `DrawerTrigger`, `DrawerContent`, `DrawerHeader`, `DrawerBody`, `DrawerFooter`, `DrawerTitle`, and `DrawerDescription`. The content area scrolls independently when overflow occurs. Drawer traps focus and dismisses on Escape or backdrop click. The `closeOnOutsideClick` prop can be disabled for workflows that require persistent attention.

## Composition

Drawer uses the same layout sub-components as Dialog, making it easy to switch between the two patterns. Right-placed drawers are common for detail panels — clicking a row in `DataTable` opens the record details in a sliding panel without losing table context. Left-placed drawers work well for navigation menus on mobile. Bottom-placed drawers resemble mobile action sheets. Use Drawer inside the page layout, not inside other Drawer, Dialog, or Popover instances — stacking portal-based components creates accessibility and z-index issues. Drawer content can include `Form`, `Field`, `Button`, `Select`, and `DataTable` components.

## Best Practices

Match the placement to the content purpose: right for detail panels and filters, left for navigation, bottom for mobile actions. Keep DrawerHeader concise — the title should reference the context that triggered the drawer, such as the selected row's name. For forms inside drawers, use DrawerFooter for Save and Cancel buttons. Avoid placing primary actions inside the scrollable body where users may not see them without scrolling. Drawer should feel contextual, not modal — preserve the underlying page state so users do not lose their place on dismissal.

## Common Mistakes

Using Drawer for content that is better suited to Dialog — long forms with many fields are cramped in a drawer and require excessive scrolling. Another mistake is inconsistent placement across the application; choose a convention (e.g., right drawer for details, left drawer for nav) and apply it uniformly. Opening a drawer from within another drawer creates nested scrolling and focus issues. Forgetting to set a reasonable `size` — a narrow drawer with dense content is frustrating to use. Using drawers on desktop for navigation when a persistent sidebar is more appropriate.

## Design Guidelines

The drawer should slide in with a smooth animation over 200–300ms. The backdrop should be present for right, left, and bottom drawers but can be omitted for top drawers used as notification panels. The content area should have adequate padding consistent with other Blenx surfaces. A subtle border or shadow on the leading edge of the drawer helps it feel like a surface sliding over the page. The close button should be in the header, consistent with Dialog placement. On mobile, drawers should typically use the full viewport width or height minus safe area insets.

## Demo

<DemoRenderer registryName="drawer" />

## Installation

<Installation registryName="drawer" />

## API Reference

<ApiReference />

## Limitations

Drawer does not support resizing by the user. It cannot be converted to a floating panel or undocked from the viewport edge. Nesting drawers is not supported. Drawer does not persist open state across navigation — it must be managed at the page level. The slide animation uses CSS transforms and may conflict with other animated elements on the same compositing layer. Drawer also does not support swipe-to-dismiss gestures on touch devices; dismissal requires the close button, Escape key, or backdrop click.
