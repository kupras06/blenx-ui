---
title: "Box"
description: "Box is the lowest-level layout primitive in Blenx."
navigation:
  group: components
  order: 7
---

## Overview

Box is the lowest-level layout primitive in Blenx. It renders a single DOM element with access to style props for padding, margin, display, and other common CSS properties through vanilla-extract sprinkles. Every other layout component — Grid, Container, Card — is composed on top of Box.

## Installation

<Installation registryName="box" />

## Usage

Box renders a `div` by default but accepts an `as` prop to change the underlying element to any valid HTML tag. Style props are passed directly as props on the component — `padding="md"`, `marginBlockStart="lg"`, `display="flex"`, etc. The style prop system maps design tokens to CSS values, ensuring consistency with the theme. Box does not apply any default styles other than `box-sizing: border-box`. Use it for element-level adjustments like spacing a button group, centering content with `marginInline="auto"`, or applying a background color to a section. For responsive values, pass an object keyed by breakpoint.

## API Reference

<ApiReference />

## Limitations

Box provides no layout logic of its own. It does not handle overflow, scrolling, or content visibility. Complex layouts with conditional rendering, sticky positioning, or overflow behavior require additional configuration. Box does not enforce accessibility requirements — a `div` with `onClick` is not a button. For interactive containers, use the appropriate semantic component instead. Box also does not participate in any state management or lifecycle patterns.
