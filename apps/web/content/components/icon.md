## Overview

Icon is a wrapper component for Phosphor icons that provides consistent sizing, coloring, and accessibility defaults. It renders the specified icon with the correct viewBox and stroke weight, inheriting or overriding color and size from props. Use Icon whenever you need a visual symbol in the interface — navigation items, button slots, status indicators, empty state illustrations, and decorative elements. Icon standardizes the rendering of Phosphor icons so they all share the same baseline alignment, sizing scale, and color inheritance behavior. Do not use Icon for purely decorative imagery that conveys no information; set `aria-hidden="true"` to hide it from screen readers. Icon is also not a container for custom SVG elements — if you need a custom SVG, render it directly.

## Usage

Pass the Phosphor icon component as a child to Icon, or use the `name` prop with the icon's string identifier. Set `size` to one of the theme size tokens to match the surrounding text scale. The `color` prop accepts theme color tokens or raw CSS color values. By default, Icon inherits the current text color via `currentColor`, ensuring it matches adjacent text without explicit color configuration. The `weight` prop maps to Phosphor's built-in weight variants (regular, bold, fill, duotone, thin) for visual emphasis. Use `aria-hidden="true"` when the icon is decorative and `aria-label` when it serves as the sole identifier of an action.

## Composition

Icon is the primary graphic element inside `Button` start and end icon slots, `Alert` severity icons, `Badge` decorative elements, and `Command` item visuals. Use Icon inside `Box` for alignment-controlled icon containers, inside `Card` headers for decorative section icons, and inside `DataTable` cells for status or action icons. Icon composes with `Tooltip` for icon-only buttons where the icon alone does not convey the action. For icon groups, wrap multiple Icon components in a `Box` with flex layout and consistent gap spacing. Do not wrap Icon in additional divs for spacing — apply margin directly to Icon using its style props.

## Best Practices

Choose icon weights intentionally — regular weight for standard UI, bold for emphasis in navigation or buttons, fill for selected or active states. Maintain consistent weight usage across the application; mixing regular and bold icons in the same context looks inconsistent. Always provide `aria-label` for icon-only buttons and `aria-hidden="true"` for purely decorative icons. Test icon meaning with users — not all icons are universally understood. A floppy disk for "Save" may not be recognized by younger users. Use Icon with `size` matching the surrounding text — icons in body text should use the same size as the text line height, not larger.

## Common Mistakes

Using the wrong weight variant for the context — fill icons in a toolbar compete for attention with regular weight text. Another mistake is omitting `aria-hidden` on decorative icons, causing screen readers to announce generic icon names like "Icon" or "Image" that add no value. Using too many icon weights and styles in the same view creates visual noise. Stretching or distorting icons by applying non-uniform width and height breaks the Phosphor design system — always use the size prop rather than direct width/height overrides. Wrapping icons in unnecessary containers that add specificity and complicate alignment.

## Design Guidelines

Icons should align with the baseline of adjacent text. The icon bounding box should match the text line height at each size tier. Use consistent stroke weight across the same interface tier — toolbar icons should all use the same weight, as should navigation icons and inline indicators. Icon color should match the semantic intent of the surrounding text or control. Disabled icons should use the same reduced opacity as disabled text. The clickable area of an icon-only button should be larger than the icon itself, achieved through the parent Button's padding, not Icon's size.

## Limitations

Icon only supports Phosphor icon library. Non-Phosphor SVGs cannot be used through the Icon component. The component does not support animated icons or icon spritesheets. Custom icon sizes outside the defined theme tokens must use raw CSS values and may not align with typography consistently. Icon also does not support multi-color icons beyond the single `color` prop — duotone and fill weights that use multiple colors are rendered as a single color override. For complex multi-color icons, render the SVG directly.
