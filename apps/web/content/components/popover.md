---
title: "Popover"
description: "Popover displays floating content in relation to a trigger element, with automatic positioning, flip behavior, and dismiss-on-click-outside."
navigation:
  group: components
  order: 30
---

## Overview

Popover displays floating content in relation to a trigger element, with automatic positioning, flip behavior, and dismiss-on-click-outside. Use popovers for contextual tooltips, action menus, inline help content, quick-action panels, and small forms that belong to a specific UI element. Do not use popovers for primary navigation, critical notifications, or content that requires user input before continuing — those cases call for Dialog or Sheet.

## Installation

<Installation registryName="popover" />

## Source Code

<SourceCode registryName="popover" />

## Usage

<Spinner name="popover-default" />

The Popover consists of a trigger component and a content panel. The trigger is any interactive element; clicking it toggles the popover visibility. The content panel positions itself relative to the trigger using the configured placement, which accepts `top`, `bottom`, `left`, `right`, and their `-start`/`-end` variants. The popover automatically flips to the opposite side when the preferred placement would overflow the viewport. A backdrop overlay or close button can be added for dismissible popovers.

## Composition

Popovers work alongside any interactive element as their trigger. They commonly contain Menu items, small Form elements, Filter controls, or rich Text with interactive links. A Popover can be composed inside a Toolbar to provide additional options for a toolbar button. The Popover surface uses the same elevation tokens as Menu and Sheet, providing consistent layering across floating elements in the system.

## Design Guidelines

The popover surface should be visually distinguishable from the page content through elevation shadow and background color, but should not obscure the trigger so much that the context is lost. Corner radius should match the surface component's default value. The arrow indicator, when enabled, should point to the center of the trigger along the relevant axis. Padding inside the popover follows the surface padding scale.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Escape"]} aria={["role", "aria-labelledby", "aria-describedby"]} />

## Limitations

Popovers are inherently ephemeral — content inside a popover is lost when it closes. Do not put forms inside popovers unless the form state is persisted externally. The component does not support nested popovers or coordinated multi-popover layouts. Complex positioning requirements, such as following a moving trigger element, are outside the scope of this component.
