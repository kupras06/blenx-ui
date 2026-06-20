---
title: "Sheet"
description: "Sheet provides a lightweight slide-in panel for secondary content that does not require the full commitment of a modal dialog."
navigation:
  group: components
  order: 37
---

## Overview

Sheet provides a lightweight slide-in panel for secondary content that does not require the full commitment of a modal dialog. It slides in from the edge of the viewport and overlays the page content with an optional backdrop. Use sheets for mobile navigation menus, contextual settings panels, notification feeds, filter panels, and quick-edit interfaces.

## Demo

<DemoRenderer registryName="sheet" />

## Installation

<Installation registryName="sheet" />

## Source Code

<SourceCode registryName="sheet" />

## Usage

<Spinner name="sheet-default" />

Sheet is built on Base UI Dialog primitives, inheriting focus trapping, dismiss-on-Escape, and backdrop click behavior. The `side` prop controls the slide-in direction — `left` or `right` for side panels, `top` or `bottom` for notification-style panels. The `size` prop controls the panel width for left/right sheets or height for top/bottom sheets, with preset values matching the spacing scale. The component handles body scroll locking when open, preventing background content from scrolling while the sheet is active.

## Composition

Sheets contain any combination of Blenx components — Text for headers, Icon Buttons for close controls, Menu items for navigation, Form controls for settings, and Stack for layout. A typical sheet layout includes a header with title and close button, a scrollable content area using Scroll Area, and an optional footer with action buttons. The backdrop component can be customized for opacity and dismiss behavior. Multiple sheets can stack, but nesting beyond two levels is not recommended.

## Design Guidelines

The sheet surface uses the highest elevation token to visually separate it from page content. The slide-in animation should be smooth and fast, completing in 200-300 milliseconds. The backdrop uses a semi-transparent overlay that darkens the page content to focus attention on the sheet. The panel width follows the spacing scale: small for compact forms, medium for standard content, and large for content-heavy panels. Left and right sheets should use consistent width across the application.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Escape"]} aria={["role", "aria-modal", "aria-labelledby", "aria-describedby"]} />

## Limitations

Sheet does not support resizing — if adjustable panels are needed, use Splitter instead. The component does not support multiple visible sheets simultaneously by design. Sheet cannot be used as a persistent layout element because it closes when the user navigates away or dismisses it. Performance may degrade with very large content trees inside the sheet due to the animation and focus management overhead.
