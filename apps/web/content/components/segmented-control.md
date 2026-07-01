---
title: "Segmented Control"
description: "Segmented Control presents mutually exclusive options in a compact, horizontal row of connected segments."
navigation:
  group: components
  order: 34
---

## Overview

Segmented Control presents mutually exclusive options in a compact, horizontal row of connected segments. It provides an alternative to Radio Groups when space is limited and the options are visually comparable at a glance. Use segmented controls for view mode switching (list, grid, detail), time range selection (day, week, month), or filter toggles within toolbars and headers.

## Installation

<Installation registryName="segmented-control" />

## Usage

The component renders a row of segments where exactly one segment is selected at any time. Each segment behaves as a button with persistent active styling for the selected state. The container applies connected border-radius treatment where corners are rounded on the outermost segments and squared between adjacent segments. The `value` and `onChange` props manage selection in controlled mode. Segments can be disabled individually or as a group, and disabled segments are skipped during keyboard navigation.

## API Reference

<ApiReference />

## Limitations

Segmented Control does not support multi-selection or hierarchical selection — it is strictly single-select. Segment labels must be short enough to fit without truncation at the chosen size. The component does not support sub-labels or icons-with-text combinations in a single segment. Overflow behavior beyond five segments causes horizontal scrolling or wrapping, neither of which is well-supported by this pattern.
