---
title: "Popover"
description: "Popover displays floating content in relation to a trigger element, with automatic positioning, flip behavior, and dismiss-on-click-outside."
navigation:
  group: components
  order: 30
---

## Overview

Popover displays floating content in relation to a trigger element, with automatic positioning, flip behavior, and dismiss-on-click-outside. Use popovers for contextual tooltips, action menus, inline help content, quick-action panels, and small forms that belong to a specific UI element. Do not use popovers for primary navigation, critical notifications, or content that requires user input before continuing — those cases call for Dialog or Sheet.

## Demo

<DemoRenderer registryName="popover" />

## Installation

<Installation registryName="popover" />

## Usage

The Popover consists of a trigger component and a content panel. The trigger is any interactive element; clicking it toggles the popover visibility. The content panel positions itself relative to the trigger using the configured placement, which accepts `top`, `bottom`, `left`, `right`, and their `-start`/`-end` variants. The popover automatically flips to the opposite side when the preferred placement would overflow the viewport. A backdrop overlay or close button can be added for dismissible popovers.

## API Reference

<ApiReference />

## Accessibility

<Accessibility keyboard={["Escape"]} aria={["role", "aria-labelledby", "aria-describedby"]} />

## Limitations

Popovers are inherently ephemeral — content inside a popover is lost when it closes. Do not put forms inside popovers unless the form state is persisted externally. The component does not support nested popovers or coordinated multi-popover layouts. Complex positioning requirements, such as following a moving trigger element, are outside the scope of this component.
