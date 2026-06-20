---
navigation:
  group: blocks
  order: 15
---

## Overview

Settings-01 is a comprehensive tabbed settings page that organizes application preferences across five sections: General, Security, Appearance, Notifications, and Billing. The block uses a `Tabs` component for navigation between sections, with each tab panel containing its own form controls, toggles, and save actions. The General tab includes site-level preferences such as workspace name, default language, and timezone. The Security tab covers password changes, two-factor authentication status, and active sessions list with remote-logout capability. The Appearance tab provides theme selection (light, dark, system), font size adjustment, and compact or comfortable density modes. The Notifications tab replicates the per-channel toggle controls from profile-01 but scoped to account-wide notification defaults. The Billing tab displays the current plan, payment method on file, invoice history, and a link to the billing portal. The `onSave` callback fires per-section, receiving the section identifier and the changed fields.

## When To Use

Use settings-01 as the main settings page for any application with multiple distinct configuration domains that benefit from tabbed organization. It is ideal for SaaS products, developer platforms, and enterprise applications where users expect separate sections for security, appearance, and billing preferences. The tabbed layout works well when users need to refer to one section's settings while configuring another — for example, checking the billing plan while changing notification preferences. Avoid using settings-01 when your application has only one or two settings categories (a single-page form would be simpler) or when your settings require deeply nested sub-navigation beyond a single tab level. It is also not appropriate for mobile-first applications where a tab bar would consume too much vertical space.

## Customization

The `tabs` prop accepts an array of section identifiers to control which tabs appear — you can omit billing for users on a free plan or hide security for OAuth-only applications. Each tab's content is configurable through section-specific props like `generalFields`, `securityConfig`, `appearanceOptions`, `notificationCategories`, and `billingInfo`. The `onSave` callback receives the section name and the changed values, enabling per-section persistence rather than requiring a full-page save. The `defaultTab` prop sets which tab is active on initial render. Tab labels and icons are customizable via a `tabConfig` prop where you can override defaults like `{ security: { label: "Privacy & Security", icon: LockKey } }`. Theme tokens control the active tab indicator color, ensuring it matches your brand.

## Accessibility Notes

The tab navigation uses the ARIA tabs pattern: `role="tablist"` on the tab bar, `role="tab"` on each tab, and `role="tabpanel"` on each content panel with `aria-labelledby` referencing the controlling tab. Keyboard navigation follows WAI-ARIA authoring practices — `Left` and `Right` arrow keys switch between tabs, and `Tab` moves focus into the active tab panel. The active tab has `aria-selected="true"` and `tabindex="0"`, while inactive tabs have `aria-selected="false"` and `tabindex="-1"`. Each tab panel contains a `<h2>` heading that matches the tab label, maintaining document outline integrity. When switching tabs, focus moves to the tab panel heading so screen reader users can orient themselves immediately. The appearance tab's theme switcher uses `role="radiogroup"` with three radio inputs for light, dark, and system options.

## Composition

Settings-01 composes a `Page` wrapper with a `Heading` and a `Tabs` component. The `Tabs` component renders a `TabList` and individual `TabPanel` components for each section. The General tab uses `Input`, `Select`, and `Switch` components for workspace preferences. The Security tab contains `PasswordInput` for password change, a `Switch` for two-factor status display, and a `Table` for active sessions with `Button` for remote logout. The Appearance tab uses a `RadioGroup` for theme selection, a `Slider` for font size, and a `ToggleGroup` for density. The Notifications tab reuses the `Fieldset` and `Checkbox` pattern from profile-01. The Billing tab uses a `Card` for the current plan summary, a `Table` for invoice history, and a `Button` linking to the external billing portal.

## Best Practices

Persist settings changes automatically when toggles or selections change rather than requiring a manual save button in each section — users expect theme and notification changes to take effect immediately. Use the `defaultTab` to direct users to the most relevant section when they arrive from a specific context, such as linking to the billing tab from a payment failure notification. Show unsaved changes indicators (a small dot on the tab) when a section has been modified but not yet persisted. For the Security tab, always confirm sensitive changes like password updates via a confirmation dialog or current-password re-entry. Respect the user's system preference in the Appearance tab by defaulting to "System" rather than picking a hardcoded default theme.

## Limitations

Settings-01 does not support nested tabs or sub-navigation within a tab panel — each tab is a single flat section. The Billing tab displays invoice history but does not include payment method editing or subscription plan changes directly; those actions require linking to an external billing portal. The appearance tab's font size slider affects only the block's own rendering tokens and cannot control system-level or browser-level font scaling. The notifications section mirrors the structure from profile-01 and does not support custom notification channels beyond the predefined set. Tab state is not persisted in the URL by default, so refreshing the page resets to the default tab unless the caller synchronizes the active tab with the URL search params.
