---
navigation:
  group: components
  order: 1
---

## Overview

The Accordion component organizes content into collapsible sections, letting users disclose information progressively. It is built on Base UI Accordion primitives for accessible expand/collapse behavior with proper ARIA attributes and keyboard navigation. Use accordions to reduce vertical space when presenting heterogeneous content that users can choose to engage with — common use cases include FAQ sections, settings panels, and multi-step form summaries. Do not use an accordion when users need to see all content simultaneously or when the content is critical to the page's primary action. If every section must be read for the user to complete a task, a flat layout is more appropriate. Accordions hide content by nature, so they should never wrap essential information that users cannot afford to miss.

## Usage

Accordion exposes a controlled and uncontrolled API via `defaultValue` for the expanded item keys. Each child section uses `AccordionItem` wrapping `AccordionTrigger` and `AccordionPanel`. The trigger is the clickable header that controls visibility of its corresponding panel. You can allow multiple panels to be open simultaneously by configuring the component to support multi-open behavior, but single-open (default) is the more common pattern. Changing the expanded item programmatically is straightforward via the `value` prop in controlled mode. The component handles collapse animations internally, so you can rely on smooth transitions without additional wiring.

## Composition

Accordion pairs naturally with `Field` when used inside forms, and with `Card` when grouping related accordion groups on a page. The `AccordionPanel` accepts any valid React children, including `Text`, `Input`, or even nested components like `DataTable` for tabular data inside expandable sections. When building a settings page, place each Accordion section inside a `Card` for clear visual grouping. Avoid nesting accordions inside other accordions — the interaction model becomes confusing and keyboard navigation suffers.

## Best Practices

Keep trigger labels concise and descriptive — users scanning a page should understand what each section contains from the trigger text alone. Avoid mixing single and multi-open behaviors within the same page; inconsistency confuses users' mental model. Set explicit `id` values on items when you need server-side rendering or deep-linking to a specific section. Always test with screen readers to confirm that expanded/collapsed state announcements are clear. Reserve accordion use for content that benefits from progressive disclosure — never use it as a bandwidth-saving tactic for content that users will open anyway.

## Common Mistakes

Putting essential CTAs inside collapsed panels is the most common misuse. Users navigating by keyboard or screen reader may never discover those actions. Another frequent error is nesting interactive elements inside triggers — buttons or links within `AccordionTrigger` create ambiguous click targets. The trigger should only control expand/collapse. Overusing accordions on a single page also degrades performance when animations are complex; batch renders can cause jank if dozens of panels mount simultaneously.

## Design Guidelines

Use the accordion as a scannable content structure rather than a content-hiding mechanism. The visual design should distinguish between collapsed and expanded states through rotation of the chevron icon and subtle background or border changes on the active item. Padding inside panels should be generous enough to accommodate content without feeling cramped when expanded. Maintain consistent spacing between items — typically equal to or greater than the internal padding of a panel to reinforce the grouping.

## Demo

<DemoRenderer registryName="accordion" />

## Installation

<Installation registryName="accordion" />

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Enter", "Space"]} aria={["aria-expanded", "aria-controls", "aria-labelledby"]} />

## Limitations

Accordion does not support virtualized panels. Rendering hundreds of sections with complex children will degrade performance, as all panel content mounts and unmounts based on open state. If you need to render a large list, prefer alternatives like tabs or a scrollable flat layout. The animation system relies on a known height for smooth transitions; dynamically sized content that changes after mount may cause visual jumps. In rare cases, you may need to trigger a remount to recalculate the animation bounds.
