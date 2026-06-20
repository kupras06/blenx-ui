## Overview

Toggle Group manages a collection of toggle buttons where users can select multiple options within a category. It supports both enforced minimum selection and unconstrained multiple selection. Use toggle groups for filter categories where multiple filters can be active simultaneously, feature tag selection, multi-criteria view customization, and any scenario where users need to select several options from a related set. Do not use toggle groups for mutually exclusive selection — use Segmented Control or Radio Group for single-choice patterns.

## Usage

<Spinner name="toggle-group-default" />

Toggle Group wraps individual Toggle components and manages the array of selected values. The `value` and `onValueChange` props work with an array of selected item values. The `selection` prop controls the behavior: `multiple` allows any number of selected items, and `single` enforces exactly one selected item. The `orientation` prop arranges toggles horizontally or vertically. The `loop` prop controls whether keyboard focus wraps from the last toggle to the first. Child toggles inherit size and variant from the group for consistency.

## Composition

Toggle Groups sit in filter panel Surfaces alongside a label or heading Text, and often a clear-all Button to reset all selections. In toolbar layouts, a Toggle Group provides multi-criteria view mode selection. The group can contain Toggles with icons, text, or both as children. A vertical Toggle Group inside a sidebar Surface creates a filter panel for search results or product listings. Multiple Toggle Groups in the same view should be separated by headings and appropriate spacing using Stack or Separator.

## Best Practices

Provide a clear heading above each Toggle Group explaining what the toggles control. Use an explicit clear or reset mechanism when the group can have multiple selections — users should not have to manually deselect each item. Limit the number of toggles in a group to seven or fewer; larger groups become difficult to scan and interact with. Visually distinguish groups from each other through spacing and headings, not through borders or surface changes.

## Common Mistakes

Using Toggle Group for single-selection when Segmented Control or Radio Group would be more appropriate creates a non-standard interaction pattern. A common oversight is not handling the case where all items are deselected — if the group represents required criteria, at least one item should remain selected. Nesting Toggle Groups inside each other or placing them too close together causes users to confuse which toggles belong to which group.

## Design Guidelines

Toggle Group distributes space evenly among toggles for a balanced appearance. The spacing between toggles should be tighter than the spacing between groups to visually associate related toggles. Selected toggles should use a consistent active treatment across the group, using the same color and fill pattern. The group container itself has no background or border — the visual grouping is achieved through proximity and consistent heading placement.

## Limitations

Toggle Group does not support draggable reordering of its items. The component does not provide a select-all or deselect-all behavior — this must be implemented externally. The `single` selection mode does not allow deselection of the only selected item, which differs from Radio Group behavior. The group does not support mixed or indeterminate selection states.
