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

Wrap content in `Card`, then compose with `CardHeader`, `CardBody`, and `CardFooter` as needed. `CardTitle` and `CardDescription` go inside `CardHeader` to establish the card's heading hierarchy and supplementary text. The header typically contains the title and any primary actions, the body holds the main content, and the footer houses secondary actions or metadata.

`Card` renders a `Surface` with `variant="sunken"`, a border, and `p="md"` padding by default. `CardHeader`, `CardBody`, and `CardFooter` also apply `p="md"` padding automatically. Pass the `variant` prop to switch between surface styles — `"default"`, `"outline"`, `"raised"`, or `"sunken"`. Set `interactive` to add hover and focus-visible styles for clickable cards. All sub-components forward their underlying element props (`BoxProps` for header/body, `HStackProps` for footer, `TextProps` for title/description), giving you access to spacing, layout, and color sprinkles.

## API Reference

<ApiReference />

## Limitations

Card does not support collapsible or expandable sections internally — use Accordion within the body for that pattern. Cards have a fixed layout within their container; they do not reflow content based on viewport beyond standard responsive breakpoints. Card also does not manage overflow behavior — if content exceeds the card bounds, implement scrolling or truncation manually. Cards are not interactive by default; pass the `interactive` prop to add hover background and focus-visible styles, then wire up click handlers externally.
