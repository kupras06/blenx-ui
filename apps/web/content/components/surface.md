---
title: "Surface"
description: "Surface provides a themed container with configurable elevation, padding, and background variants."
navigation:
  group: components
  order: 42
---

## Overview

Surface provides a themed container with configurable elevation, padding, and background variants. It serves as the visual foundation for cards, panels, sidebars, and any grouped content region. Use surfaces for card layouts, form sections, filter panels, sidebar navigation containers, and content grouping within page layouts.

## Installation

<Installation registryName="surface" />

## Usage

The component renders a container with background color, border radius, and optional border and shadow determined by the variant and elevation props. The `variant` prop selects the background treatment: `sunken` for backgrounds that recede below the page surface, `raised` for the default surface level matching the page background, and `elevated` for surfaces that appear to float above the page. The `padding` prop applies consistent internal spacing from the spacing scale. The `elevation` prop adds shadow depth for visual separation, with higher values producing larger shadows.

## API Reference

<ApiReference />

## Limitations

Surface does not handle scrolling — use Scroll Area as a child for scrollable content. The component does not support dynamic or interactive variants; hover and active states are not built in. Surface is purely a container and does not affect the layout or positioning of its children. Excessive use of different elevation levels within the same view can create visual inconsistency.
