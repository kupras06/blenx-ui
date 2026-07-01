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

## Usage

The component wraps content inside a container that hides the native scrollbar and renders a custom scrollbar track and thumb overlay. The thumb size is proportional to the visible content ratio. The scrollbar track appears on hover over the scroll area or when the user is actively scrolling, and fades out after a configurable delay when idle. The `orientation` prop supports both vertical and horizontal scrolling independently. The scrollbar visibility is controlled through CSS custom properties for the thumb opacity and track display.

## API Reference

<ApiReference />

## Limitations

Scroll Area does not support touch-device scrollbar customization on most mobile browsers, which ignore CSS scrollbar customization. The component does not provide scroll-to, scroll-into-view, or animated scrolling APIs — those must be implemented with the underlying DOM element ref. Custom scrollbar implementations can interfere with browser-level scrolling optimizations on some platforms.
