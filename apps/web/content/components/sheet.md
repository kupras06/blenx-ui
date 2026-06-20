---
navigation:
  group: components
  order: 37
---

## Overview

Sheet provides a lightweight slide-in panel for secondary content that does not require the full commitment of a modal dialog. It slides in from the edge of the viewport and overlays the page content with an optional backdrop. Use sheets for mobile navigation menus, contextual settings panels, notification feeds, filter panels, and quick-edit interfaces. Do not use sheets for critical confirmations, forms that require full attention, or content that needs to remain open across page navigation — those scenarios call for Dialog or a dedicated page.

## Usage

<Spinner name="sheet-default" />

Sheet is built on Base UI Dialog primitives, inheriting focus trapping, dismiss-on-Escape, and backdrop click behavior. The `side` prop controls the slide-in direction — `left` or `right` for side panels, `top` or `bottom` for notification-style panels. The `size` prop controls the panel width for left/right sheets or height for top/bottom sheets, with preset values matching the spacing scale. The component handles body scroll locking when open, preventing background content from scrolling while the sheet is active.

## Composition

Sheets contain any combination of Blenx components — Text for headers, Icon Buttons for close controls, Menu items for navigation, Form controls for settings, and Stack for layout. A typical sheet layout includes a header with title and close button, a scrollable content area using Scroll Area, and an optional footer with action buttons. The backdrop component can be customized for opacity and dismiss behavior. Multiple sheets can stack, but nesting beyond two levels is not recommended.

## Best Practices

Provide a visible close button in the sheet header in addition to the Escape key and backdrop click dismissals. Set a descriptive `aria-label` on the sheet for screen readers, typically matching the sheet's title. Keep sheet content focused on a single task or context — switching between multiple tasks inside a sheet creates a confusing user experience. Use the appropriate side based on the content type: left for navigation, right for contextual panels, bottom for mobile-friendly actions.

## Common Mistakes

Using a sheet for content that should remain persistent, like a sidebar navigation, forces users to re-open it on every page visit. A common oversight is failing to manage focus when the sheet opens — focus should move to the first focusable element inside the sheet. Placing a sheet trigger inside scrollable content without considering the sheet's position relative to the viewport can result in the sheet appearing far from its trigger.

## Design Guidelines

The sheet surface uses the highest elevation token to visually separate it from page content. The slide-in animation should be smooth and fast, completing in 200-300 milliseconds. The backdrop uses a semi-transparent overlay that darkens the page content to focus attention on the sheet. The panel width follows the spacing scale: small for compact forms, medium for standard content, and large for content-heavy panels. Left and right sheets should use consistent width across the application.

## Limitations

Sheet does not support resizing — if adjustable panels are needed, use Splitter instead. The component does not support multiple visible sheets simultaneously by design. Sheet cannot be used as a persistent layout element because it closes when the user navigates away or dismisses it. Performance may degrade with very large content trees inside the sheet due to the animation and focus management overhead.
