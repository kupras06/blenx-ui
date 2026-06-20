---
navigation:
  group: components
  order: 34
---

## Overview

Segmented Control presents mutually exclusive options in a compact, horizontal row of connected segments. It provides an alternative to Radio Groups when space is limited and the options are visually comparable at a glance. Use segmented controls for view mode switching (list, grid, detail), time range selection (day, week, month), or filter toggles within toolbars and headers. Do not use segmented controls for more than five options, for options with long labels that truncate, or when the options require supporting description text.

## Usage

<Spinner name="segmented-control-default" />

The component renders a row of segments where exactly one segment is selected at any time. Each segment behaves as a button with persistent active styling for the selected state. The container applies connected border-radius treatment where corners are rounded on the outermost segments and squared between adjacent segments. The `value` and `onChange` props manage selection in controlled mode. Segments can be disabled individually or as a group, and disabled segments are skipped during keyboard navigation.

## Composition

Segmented Controls are commonly placed inside Toolbar components, Surface headers, or Card header areas. They can be paired with Icon components for each segment to create compact view-switcher controls. In filter bars, a Segmented Control often sits between Label text and a Button that applies or clears the filter. The component aligns horizontally with Buttons of the same size when used adjacently.

## Best Practices

Limit segment labels to one or two words. Use consistent capitalization across all segments — sentence case is preferred. Order segments logically: by frequency of use, by sequential order, or by a natural progression. Select the most common or default option by default to minimize user effort. Provide visual distinction only for the active segment; do not add hover effects that imply multi-select capability.

## Common Mistakes

Using segmented controls for non-binary settings that are not mutually exclusive pushes the component beyond its intended use case. Another frequent error is placing a segmented control in a location where the user has already committed to a choice, such as in a confirmation step — at that point, the control implies the option to change the decision, which may not be intended. Overcrowding the control with too many segments truncates labels and reduces readability.

## Design Guidelines

The active segment should use a surface color with sufficient contrast against the inactive segments to clearly indicate selection. Inactive segments use a low-emphasis background with medium-emphasis text. The border between segments should remain visible in both light and dark themes. The overall height matches the corresponding button size to ensure toolbar alignment. The segmented control fills its container width when `fullWidth` is set, distributing space evenly across segments.

## Limitations

Segmented Control does not support multi-selection or hierarchical selection — it is strictly single-select. Segment labels must be short enough to fit without truncation at the chosen size. The component does not support sub-labels or icons-with-text combinations in a single segment. Overflow behavior beyond five segments causes horizontal scrolling or wrapping, neither of which is well-supported by this pattern.
