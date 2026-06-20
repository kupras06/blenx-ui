---
title: "Accordion"
description: "Accordion component organizes content into collapsible sections, letting users disclose information progressively."
navigation:
  group: components
  order: 1
---

## Overview

The Accordion component organizes content into collapsible sections, letting users disclose information progressively.  It is built on Base UI Accordion primitives for accessible expand/collapse behavior with proper ARIA attributes and keyboard navigation.  Use accordions to reduce vertical space when presenting heterogeneous content that users can choose to engage with — common use cases include FAQ sections, settings panels, and multi-step form summaries.

## Demo

<DemoRenderer registryName="accordion" />

## Installation

<Installation registryName="accordion" />

## Source Code

<SourceCode registryName="accordion" />

## Usage

Accordion exposes a controlled and uncontrolled API via `defaultValue` for the expanded item keys. Each child section uses `AccordionItem` wrapping `AccordionTrigger` and `AccordionPanel`. The trigger is the clickable header that controls visibility of its corresponding panel. You can allow multiple panels to be open simultaneously by configuring the component to support multi-open behavior, but single-open (default) is the more common pattern. Changing the expanded item programmatically is straightforward via the `value` prop in controlled mode. The component handles collapse animations internally, so you can rely on smooth transitions without additional wiring.

## Composition

Accordion pairs naturally with `Field` when used inside forms, and with `Card` when grouping related accordion groups on a page. The `AccordionPanel` accepts any valid React children, including `Text`, `Input`, or even nested components like `DataTable` for tabular data inside expandable sections. When building a settings page, place each Accordion section inside a `Card` for clear visual grouping. Avoid nesting accordions inside other accordions — the interaction model becomes confusing and keyboard navigation suffers.

## Design Guidelines

Use the accordion as a scannable content structure rather than a content-hiding mechanism. The visual design should distinguish between collapsed and expanded states through rotation of the chevron icon and subtle background or border changes on the active item. Padding inside panels should be generous enough to accommodate content without feeling cramped when expanded. Maintain consistent spacing between items — typically equal to or greater than the internal padding of a panel to reinforce the grouping.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Enter", "Space"]} aria={["aria-expanded", "aria-controls", "aria-labelledby"]} />

## Limitations

Accordion does not support virtualized panels. Rendering hundreds of sections with complex children will degrade performance, as all panel content mounts and unmounts based on open state. If you need to render a large list, prefer alternatives like tabs or a scrollable flat layout. The animation system relies on a known height for smooth transitions; dynamically sized content that changes after mount may cause visual jumps. In rare cases, you may need to trigger a remount to recalculate the animation bounds.
