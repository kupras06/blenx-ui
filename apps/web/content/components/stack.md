## Overview

Stack is a flexbox layout primitive that arranges children in a single direction with consistent spacing. It provides HStack for horizontal layouts and VStack for vertical layouts, with props for gap, alignment, distribution, and wrapping. Use stack as the primary building block for page sections, form layouts, toolbar arrangements, card content, and any linear arrangement of components. Avoid stacks when children need to overlap, when a grid layout is more appropriate, or when the arrangement requires responsive direction changes that go beyond simple wrapping.

## Usage

<Spinner name="stack-default" />

HStack and VStack render as flex containers with `flex-direction: row` and `flex-direction: column` respectively. The `gap` prop accepts values from the spacing scale, ensuring consistent whitespace throughout the application. The `align` prop maps to `align-items` for cross-axis alignment, and `justify` maps to `justify-content` for main-axis distribution. The `wrap` prop enables flex-wrap for responsive horizontal layouts that flow to multiple rows. The `inline` prop switches from block-level flex to inline-flex for compact layouts.

## Composition

Stack is the universal container in the Blenx system. Every component that arranges multiple children — buttons in a toolbar, form fields in a row, cards in a grid-like row, text with icons — uses Stack as its layout foundation. Surface components wrap Stack to provide themed backgrounds and padding. Stack composes with Separator to divide groups, with Spinner and Text for loading states, and with all form controls for field layouts. Nesting stacks — a VStack containing HStacks — creates virtually any layout without additional CSS.

## Best Practices

Use the most specific alignment and justification props rather than adding custom CSS to stack children. Prefer VStack for form layouts and content sections, reserving HStack for toolbars, button groups, and inline element arrangements. Use the `wrap` prop on HStack instead of building manual grid layouts with percentage widths — Stack handles the math. Avoid deeply nesting stacks beyond four or five levels for the sake of readability; extract reusable components for complex sections.

## Common Mistakes

Applying margins directly to children inside a Stack defeats the purpose of the gap prop and creates spacing inconsistencies. A common error is using HStack for vertical navigation, which fails when labels have different lengths — VStack with alignment control is the correct choice. Using Stack when children need to grow or shrink at different rates requires explicit flex props on children, which is better handled by a more targeted layout component.

## Design Guidelines

Stack uses no background, border, or padding of its own — it is purely a layout container. Spacing gaps should follow the 4px or 8px grid system used throughout the theme. Wrapped HStacks should have consistent row gap and column gap values, not mixing gap values between the two axes. The default alignment is `center` for HStack (aligning items vertically) and `stretch` for VStack (making children fill the cross-axis width).

## Limitations

Stack does not support responsive direction changes — an HStack cannot automatically become a VStack at a breakpoint. For that behavior, compose two Stack instances and show them conditionally or use CSS media queries externally. Stack does not provide grid capabilities; use CSS Grid or a grid component for two-dimensional layouts. The gap prop applies uniformly between all children — individual child spacing differences require wrapping children in intermediate containers.
