---
title: "Stack"
description: "Stack is a flexbox layout primitive that arranges children in a single direction with consistent spacing."
navigation:
  group: components
  order: 41
---

## Overview

Stack is a flexbox layout primitive that arranges children in a single direction with consistent spacing.  It provides HStack for horizontal layouts and VStack for vertical layouts, with props for gap, alignment, distribution, and wrapping.  Use stack as the primary building block for page sections, form layouts, toolbar arrangements, card content, and any linear arrangement of components.

## Installation

<Installation registryName="stack" />

## Source Code

<SourceCode registryName="stack" />

## Usage

<Spinner name="stack-default" />

HStack and VStack render as flex containers with `flex-direction: row` and `flex-direction: column` respectively. The `gap` prop accepts values from the spacing scale, ensuring consistent whitespace throughout the application. The `align` prop maps to `align-items` for cross-axis alignment, and `justify` maps to `justify-content` for main-axis distribution. The `wrap` prop enables flex-wrap for responsive horizontal layouts that flow to multiple rows. The `inline` prop switches from block-level flex to inline-flex for compact layouts.

## Composition

Stack is the universal container in the Blenx system. Every component that arranges multiple children — buttons in a toolbar, form fields in a row, cards in a grid-like row, text with icons — uses Stack as its layout foundation. Surface components wrap Stack to provide themed backgrounds and padding. Stack composes with Separator to divide groups, with Spinner and Text for loading states, and with all form controls for field layouts. Nesting stacks — a VStack containing HStacks — creates virtually any layout without additional CSS.

## Design Guidelines

Stack uses no background, border, or padding of its own — it is purely a layout container. Spacing gaps should follow the 4px or 8px grid system used throughout the theme. Wrapped HStacks should have consistent row gap and column gap values, not mixing gap values between the two axes. The default alignment is `center` for HStack (aligning items vertically) and `stretch` for VStack (making children fill the cross-axis width).

## API Reference

<ApiReference />

## Limitations

Stack does not support responsive direction changes — an HStack cannot automatically become a VStack at a breakpoint. For that behavior, compose two Stack instances and show them conditionally or use CSS media queries externally. Stack does not provide grid capabilities; use CSS Grid or a grid component for two-dimensional layouts. The gap prop applies uniformly between all children — individual child spacing differences require wrapping children in intermediate containers.
