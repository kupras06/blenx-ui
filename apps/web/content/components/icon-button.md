## Overview

Icon buttons provide a compact trigger for actions where visual real estate is limited. They use a square footprint with no visible text label, relying entirely on the icon to communicate intent. Use icon buttons in toolbars, table row actions, search fields, and notification controls where space is constrained and the icon meaning is self-evident. Avoid icon buttons for critical or ambiguous actions where a text label is necessary to prevent user error.

## Usage

<Spinner name="icon-button-default" />

Icon buttons are built on the Button component with enforced square aspect ratio and default size that matches the standard button height. The variant, size, and color props map directly to Button semantics, ensuring visual consistency across the system. Unlike standard buttons, icon buttons do not accept children as text — only render an icon element. An accessible label must always be provided through `aria-label` for screen readers.

## Composition

Icon buttons compose naturally inside Input Groups as suffix or prefix elements for actions like clearing input, toggling password visibility, or invoking a search. They also appear inside Menus as trigger handles, within Table rows for edit or delete actions, and alongside Text components for inline actions. When grouped, use the Stack component to control spacing and alignment between adjacent icon buttons.

## Best Practices

Provide a descriptive `aria-label` on every icon button — the icon alone is not accessible. Choose iconography that is universally recognized within your domain; an ambiguous icon defeats the purpose of omitting the label. Maintain adequate hit targets: even though the button appears compact, the interactive area must meet minimum touch target guidelines. Use tooltips sparingly — if every icon button requires a tooltip, reconsider whether a text label would be more appropriate.

## Design Guidelines

Icon buttons inherit the same color mapping as text buttons in the variant system. The default state uses a transparent background. The hover and active states apply a subtle background fill to indicate interactivity without competing with surrounding content. Danger variants use red tones only for destructive actions to preserve the semantic weight of the color. Disabled icon buttons reduce opacity uniformly and suppress all interactive feedback.

## Common Mistakes

Using icon buttons for primary or sole navigation actions where labels improve discoverability is a frequent error. Another is neglecting focus-visible styles, which leaves keyboard users without a visible indication of the active element. Relying on title attributes instead of `aria-label` for accessibility also reduces screen reader compatibility.

## Limitations

Icon buttons cannot accommodate text labels, making them unsuitable for actions that require verbal clarification. The fixed square aspect ratio may cause layout issues in containers with non-standard heights. Complex or multi-step actions should not be hidden behind an icon-only trigger.
