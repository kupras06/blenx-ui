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

## Usage

Sheet is built on Base UI Dialog primitives, inheriting focus trapping, dismiss-on-Escape, and backdrop click behavior. The `side` prop controls the slide-in direction — `left` or `right` for side panels, `top` or `bottom` for notification-style panels. The `size` prop controls the panel width for left/right sheets or height for top/bottom sheets, with preset values matching the spacing scale. The component handles body scroll locking when open, preventing background content from scrolling while the sheet is active.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Escape"]} aria={["role", "aria-modal", "aria-labelledby", "aria-describedby"]} />

## Limitations

Sheet does not support resizing — if adjustable panels are needed, use Splitter instead. The component does not support multiple visible sheets simultaneously by design. Sheet cannot be used as a persistent layout element because it closes when the user navigates away or dismisses it. Performance may degrade with very large content trees inside the sheet due to the animation and focus management overhead.
