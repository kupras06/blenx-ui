---
navigation:
  group: blocks
  order: 11
---

## Overview

Pricing-01 is a full pricing page block that presents three plan tiers — typically Free, Pro, and Enterprise — in a side-by-side card layout with a monthly or yearly billing toggle. Each plan card displays the plan name, price (which updates when the billing toggle switches), a list of features with check or dash indicators, and a CTA button for selecting the plan. The `plans` prop accepts an array of plan objects defining the name, price, features, and CTA label for each tier, making the block data-driven rather than hardcoded. The `onPlanSelect` callback fires when a user clicks a plan CTA, receiving the selected plan identifier so the parent can route to checkout, open a modal, or track the event. A billing toggle animates between monthly and yearly states, with the yearly prices typically showing a percentage savings badge to highlight the value of annual commitments.

## When To Use

Deploy pricing-01 as the pricing section of any SaaS product, subscription service, or tiered-offering landing page. It works well for products with exactly three plan tiers where the middle tier is the recommended or most popular option. The block is ideal for standard software pricing where the differentiating factors are feature access, usage limits, and support level. Avoid using pricing-01 when you have more than four tiers (the card layout becomes cramped), usage-based or metered pricing that cannot be displayed as a simple feature list, or enterprise-only products with no self-serve tier. It is also not suitable for one-time purchase pricing or physical product pricing where variations like size, color, and quantity affect the cost.

## Customization

The `plans` prop accepts an array of objects with `id`, `name`, `monthlyPrice`, `yearlyPrice`, `features` (an array of strings), `ctaLabel`, `ctaHref`, and `popular` (boolean) fields. The `popular` flag adds a "Most Popular" badge and highlights the card border for the recommended tier. The `currency` prop defaults to "USD" but accepts any currency code for price display. The `billingToggle` prop accepts `"monthly"` | `"yearly"` to control the initial toggle state. The `onPlanSelect` callback receives the plan `id` and the current billing period so your handler can push users to the correct checkout variant. The price format, badge styles, and card border tokens all come from your theme, ensuring consistency with your brand. The `savingsLabel` prop customizes the yearly savings badge text, defaulting to "Save 20%."

## Accessibility Notes

The pricing cards are rendered as a list of `<article>` elements inside a `<section>` with `aria-label="Pricing plans"` for landmark navigation. The price values are labeled with `aria-label` attributes that include both the amount and the billing period — for example, "29 dollars per month" — so screen readers pronounce them intelligibly. The billing toggle is a `role="radiogroup"` with two radio inputs labeled "Monthly billing" and "Yearly billing," ensuring keyboard users can switch between them with arrow keys. The "Most Popular" badge is announced as part of the card's accessible description. Feature lists use `<ul>` with `<li>` elements, and each feature is checkmarked with an icon that is `aria-hidden="true"` since the text conveys the meaning. The CTA buttons use the plan name in their accessible name where possible, like "Choose Free plan."

## Composition

Pricing-01 composes a `Section` with a constrained `Container`, a `Heading` for the section title, and a `ToggleGroup` (the billing toggle) set to `role="radiogroup"`. The three plan cards are rendered using a `Grid` with responsive columns — three on desktop, stacked on mobile. Each card uses a `Card` component with an inner `Stack` containing the plan `Heading`, `Text` for the price, a `List` for features, and a `Button` for the CTA. The "Most Popular" card conditionally wraps in a `Badge` component. A `Text` component below the toggle shows a savings message when yearly billing is selected, such as "Save 20% with annual billing."

## Best Practices

Mark the plan that delivers the best value for your target customer as `popular` — this anchors user decision-making and typically becomes the most-selected tier. Set the initial billing toggle to the option that benefits your business most, since the default selection is disproportionately likely to stick. Display yearly prices with the monthly equivalent in smaller text (e.g., "$10/mo, billed annually") so users can make an apples-to-apples comparison without mental math. Keep feature lists scannable by limiting each list to 6–10 features; for longer lists, group features under category headers within the card. Ensure the `onPlanSelect` handler does not navigate away from the page on click without user confirmation for Enterprise plans, where a "Contact sales" modal or form is typically more appropriate.

## Limitations

Pricing-01 supports exactly three plan tiers — using fewer leaves a visually unbalanced layout, and using more requires custom modification. The feature comparison uses simple checkmark/dash icons and does not support tooltips, info icons, or comparative feature notes within the card. The block has no built-in "Compare plans" table view, which is sometimes preferred over card layouts for feature-dense products. Pricing with add-ons, per-seat pricing, or usage-based overages cannot be accurately represented in the static price display. Currency formatting assumes standard symbol-prefix notation and does not accommodate all internationalization patterns without custom formatting overrides.
