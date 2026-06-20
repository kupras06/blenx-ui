---
navigation:
  group: components
  order: 9
---

## Overview

Button triggers actions and is the most frequently used interactive element in any application. It supports multiple variants (solid, outline, ghost, soft, link), intents (primary, neutral, success, warning, danger, info), sizes, a loading state, and named icon slots (start, end). Use Button for form submissions, dialog triggers, navigation actions, and any click-initiated operation. The variant and intent system maps visual weight to action importance: solid primary for primary actions, ghost for low-priority actions, and danger for destructive operations. Do not use Button for navigation between pages when a semantic link element is more appropriate — use Link for actual URL navigation. Buttons are also inappropriate for toggling persistent states; use Toggle for that pattern.

## Demo

<DemoRenderer registryName="button" />

## Installation

<Installation registryName="button" />

## Usage

Set `variant` and `intent` to select the visual combination. The `size` prop (sm, md, lg) scales padding, font size, and icon spacing proportionally. For actions that trigger asynchronous operations, use the `loading` prop to disable interaction and show a spinner in place of the start icon. The `startIcon` and `endIcon` slots accept Icon components that inherit the button's size and color. A button with an icon only (no visible children) renders as a square icon button with equal width and height, suitable for toolbars and action bars. The `disabled` prop prevents interaction and applies reduced opacity.

## Composition

Button is the primary action trigger for `Dialog`, `Drawer`, `AlertDialog`, and `Card` footers. Use it inside `Field` for submit actions, next to `Input` for search or add-on actions, and inside `DataTable` toolbar areas for bulk operations. Button groups can be created by wrapping multiple buttons in a `Box` with `display="flex"` and `gap` equal to the negative of the button margin, but dedicated button group patterns should use consistent sizes and variants. Avoid placing interactive buttons inside other buttons or wrapping buttons in clickable containers.

## Best Practices

Label buttons with verbs that describe the action — "Save changes", "Delete user", "Create project". Do not use "Submit" alone when a more specific label communicates the outcome. Choose variant and intent strategically: use solid sparingly for the single most important action on a surface, outline for secondary actions, and ghost for tertiary actions. Loading states should preserve the button width so the layout does not shift when the spinner replaces the label. Disabled buttons should include a tooltip or nearby text explaining why the action is unavailable.

## Common Mistakes

Using too many solid buttons on one page creates visual competition — only one primary action per surface should use the solid primary variant. Another mistake is omitting loading state handling for async actions, causing users to click multiple times and trigger duplicate submissions. Icon-only buttons without accessible labels (missing `aria-label`) are invisible to screen readers. Using the danger intent for non-destructive actions like "Cancel" desensitizes users to red-colored buttons.

## Design Guidelines

Button height should be consistent at each size tier across the entire application — all md buttons must be the same height regardless of label length. The loading spinner should use a circular indeterminate animation centered where the start icon would appear. Focus outlines must be visible and high-contrast, not relying solely on color changes. Icon-only buttons should have the same dimensions as text buttons at the same size to maintain alignment in toolbars. Disabled state opacity should be uniform across all variants.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Enter", "Space"]} aria={["aria-disabled", "aria-label", "aria-describedby"]} />

## Limitations

Button does not support `as` prop polymorphism. It always renders as a `<button>` element. If you need a link styled as a button, compose a Link with button styling manually. The loading state does not prevent the component from unmounting during navigation — handle cleanup in your mutation handlers. Button also does not support dropdown or split button patterns natively; those require composition with Popover or Select components.
