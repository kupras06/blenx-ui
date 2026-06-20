---
title: "Scroll Area"
description: "Scroll Area provides a custom scrollbar wrapper that delivers consistent scrolling behavior and appearance across browsers and operating systems."
navigation:
  group: components
  order: 33
---

## Overview

Scroll Area provides a custom scrollbar wrapper that delivers consistent scrolling behavior and appearance across browsers and operating systems. It addresses the problem of native scrollbar inconsistency — macOS overlays thin scrollbars that can be difficult to discover, while Windows renders wide, obtrusive scrollbars that disrupt layout. Use Scroll Area in code editors, chat panels, long lists, data tables, and any container where scrollable content meets custom-styled surfaces.

## Installation

<Installation registryName="scroll-area" />

## Source Code

<SourceCode registryName="scroll-area" />

## Usage

<Spinner name="scroll-area-default" />

The component wraps content inside a container that hides the native scrollbar and renders a custom scrollbar track and thumb overlay. The thumb size is proportional to the visible content ratio. The scrollbar track appears on hover over the scroll area or when the user is actively scrolling, and fades out after a configurable delay when idle. The `orientation` prop supports both vertical and horizontal scrolling independently. The scrollbar visibility is controlled through CSS custom properties for the thumb opacity and track display.

## Composition

Scroll Area wraps practically any block-level content — Text blocks, Tables, Data lists, Chat message groups, and Code blocks. It is frequently used inside Surface containers where the native scrollbar would break the visual consistency of the border. In layout patterns with Splitter, both panels typically use Scroll Area to ensure consistent scroll behavior. The component does not affect layout sizing; it scrolls when the content overflows the defined dimensions.

## Design Guidelines

The scrollbar thumb should use a low-emphasis color token with rounded corners for a polished appearance. Track width should be narrow — 6px to 8px — to minimize content occlusion. The hover state of the thumb should be slightly wider and more opaque to improve targeting. The corner where horizontal and vertical scrollbars meet should be visually handled, either by hiding it or rendering a consistent corner element.

## API Reference

<ApiReference />

## Limitations

Scroll Area does not support touch-device scrollbar customization on most mobile browsers, which ignore CSS scrollbar customization. The component does not provide scroll-to, scroll-into-view, or animated scrolling APIs — those must be implemented with the underlying DOM element ref. Custom scrollbar implementations can interfere with browser-level scrolling optimizations on some platforms.
