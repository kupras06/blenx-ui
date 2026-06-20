---
title: "Card"
description: "Card is a surface-level container that groups related content and actions into a single visual unit."
navigation:
  group: components
  order: 11
---

## Overview

Card is a surface-level container that groups related content and actions into a single visual unit. It provides sub-components for header, body, footer, title, and description, enabling structured layouts without manual arrangement. Use cards to present discrete pieces of content — user profiles, dashboard widgets, product listings, and detail panels.

## Demo

<DemoRenderer registryName="card" />

## Installation

<Installation registryName="card" />

## Source Code

<SourceCode registryName="card" />

## Usage

Wrap content in Card, then compose with `CardHeader`, `CardBody`, and `CardFooter` as needed. `CardTitle` and `CardDescription` go inside `CardHeader` to establish the card's heading hierarchy and supplementary text. The header typically contains the title and any primary actions, the body holds the main content, and the footer houses secondary actions or metadata. Card applies consistent padding, border radius, and background color through theme tokens. You can apply an `intent` prop for colored left borders or accent headers, useful for distinguishing card types in a dashboard context.

## Composition

Card is a container for virtually any other component. Use it with `DataTable` inside the body for data-dense cards, with `Field` for form cards, and with `Button` in the footer for action cards. Multiple cards should be laid out using `Grid` for responsive columns or `Stack` for vertical lists. Card composes with `Badge` in the header or footer for status indicators, and with `Avatar` in the header for user cards. Avoid nesting cards inside cards — the visual hierarchy becomes ambiguous and border stacking looks unpolished.

## Design Guidelines

Card borders should be subtle enough to define boundaries without competing with content. The border radius should match other surface-level components for consistency. Padding inside cards should follow a consistent rhythm — use the same token for header, body, and footer padding. Elevation (box-shadow) should be reserved for interactive cards that lift on hover; static informational cards should use a border instead. The title-to-description spacing should be tighter than the card's outer padding to reinforce the heading hierarchy.

## API Reference

<ApiReference />

## Limitations

Card does not support collapsible or expandable sections internally — use Accordion within the body for that pattern. Cards have a fixed layout within their container; they do not reflow content based on viewport beyond standard responsive breakpoints. Card also does not manage overflow behavior — if content exceeds the card bounds, implement scrolling or truncation manually. Cards are not interactive by default; adding click handlers requires managing focus and keyboard interaction externally.
