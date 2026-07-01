---
title: "Slider"
description: "Slider allows users to select a value or range of values from a continuous or discrete scale by dragging a thumb along a track."
navigation:
  group: components
  order: 38
---

## Overview

Slider allows users to select a value or range of values from a continuous or discrete scale by dragging a thumb along a track. It supports single thumb for single-value selection and dual thumb for range selection, with configurable step intervals, minimum and maximum constraints, and optional tick marks. Use sliders for volume controls, price range filters, rating selectors, font size adjustment, and any numeric input where the relative position within a range is more meaningful than the exact value.

## Installation

<Installation registryName="slider" />

## Usage

The slider renders a horizontal track by default, with vertical orientation available through the `orientation` prop. The `value` and `onChange` props manage the controlled value, which can be a single number or a two-element array for range mode. The `step` prop defines the increment granularity, with `min` and `max` bounding the range. Ticks are rendered at interval positions when the `marks` prop is provided. The track is divided visually into the filled portion (before the thumb) and the unfilled portion (after the thumb), with color indicating the active range.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"]} aria={["role", "aria-valuenow", "aria-valuemin", "aria-valuemax"]} />

## Limitations

Slider does not support non-linear scales or logarithmic ranges — the value distribution is always linear. Range mode cannot accommodate more than two thumbs. The component is not suitable for very large ranges where the user cannot meaningfully distinguish between adjacent values. Touch interaction can be imprecise on small screens, making the slider better suited for desktop and tablet viewports.
