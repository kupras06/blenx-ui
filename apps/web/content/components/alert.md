---
title: "Alert"
description: "Alert component delivers contextual feedback messages to users in response to an action or system event."
navigation:
  group: components
  order: 2
---

## Overview

The Alert component delivers contextual feedback messages to users in response to an action or system event. It supports four intents — info, success, warning, and error — each with distinct color mapping and iconography to communicate severity at a glance. Use alerts to confirm successful operations, warn about potential issues, notify users of state changes, or surface errors that need attention.

## Demo

<DemoRenderer registryName="alert" />

## Installation

<Installation registryName="alert" />

## Usage

Render an Alert with the `intent` prop to select the visual variant. Each intent automatically applies the corresponding icon (checkmark for success, exclamation for warning, etc.), but you can override it with the `icon` slot if your messaging requires a custom graphic. Alerts can optionally render a title via the `title` prop to summarize the message, followed by children for the detailed body. The component accepts an `onClose` callback and a dismiss button when closable behavior is needed. Alerts participate in the document flow and will push sibling content, so place them near the surface they relate to — typically at the top of a form, card, or page section.

## API Reference

<ApiReference />

## Accessibility

<Accessibility aria={["role", "aria-live"]} />

## Limitations

Alert does not support auto-dismiss behavior. If you need a notification that disappears after a timeout, use a toast implementation instead. Alerts do not stack; if multiple alerts need to appear simultaneously, render them as siblings in a container and manage layout manually. The component does not manage focus — when an alert appears dynamically, you must handle focus management yourself if the alert is critical.
