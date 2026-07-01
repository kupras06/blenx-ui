---
title: "Stack"
description: "Stack is a flexbox layout primitive that arranges children in a single direction with consistent spacing."
navigation:
  group: components
  order: 41
---

## Overview

Stack is a flexbox layout primitive that arranges children in a single direction with consistent spacing. It provides HStack for horizontal layouts and VStack for vertical layouts, with props for gap, alignment, distribution, and wrapping. Use stack as the primary building block for page sections, form layouts, toolbar arrangements, card content, and any linear arrangement of components.

## Installation

<Installation registryName="stack" />

## Usage

HStack and VStack render as flex containers with `flex-direction: row` and `flex-direction: column` respectively. The `gap` prop accepts values from the spacing scale, ensuring consistent whitespace throughout the application. The `align` prop maps to `align-items` for cross-axis alignment, and `justify` maps to `justify-content` for main-axis distribution. The `wrap` prop enables flex-wrap for responsive horizontal layouts that flow to multiple rows. The `inline` prop switches from block-level flex to inline-flex for compact layouts.

## API Reference

<ApiReference />

## Limitations

Stack does not support responsive direction changes — an HStack cannot automatically become a VStack at a breakpoint. For that behavior, compose two Stack instances and show them conditionally or use CSS media queries externally. Stack does not provide grid capabilities; use CSS Grid or a grid component for two-dimensional layouts. The gap prop applies uniformly between all children — individual child spacing differences require wrapping children in intermediate containers.
