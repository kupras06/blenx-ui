---
title: "Surface"
description: "Surface provides a themed container with configurable elevation, padding, and background variants."
navigation:
  group: components
  order: 42
---

## Overview

Surface provides a themed container with configurable elevation, padding, and background variants.  It serves as the visual foundation for cards, panels, sidebars, and any grouped content region.  Use surfaces for card layouts, form sections, filter panels, sidebar navigation containers, and content grouping within page layouts.

## Installation

<Installation registryName="surface" />

## Source Code

<SourceCode registryName="surface" />

## Usage

<Spinner name="surface-default" />

The component renders a container with background color, border radius, and optional border and shadow determined by the variant and elevation props. The `variant` prop selects the background treatment: `sunken` for backgrounds that recede below the page surface, `raised` for the default surface level matching the page background, and `elevated` for surfaces that appear to float above the page. The `padding` prop applies consistent internal spacing from the spacing scale. The `elevation` prop adds shadow depth for visual separation, with higher values producing larger shadows.

## Composition

Surface wraps most composite Blenx components. Cards are built with Surface containing Text, Image, and Button components. Form sections use Surface to group related fields. Filter panels combine Surface with Input, Select, and Segmented Control. The Header component may use a Surface for the background bar. Toolbar containers frequently combine Surface with HStack and Icon Buttons. Nested Surfaces — an elevated Surface inside a sunken Surface — create visual depth in dashboard layouts.

## Design Guidelines

Surface variants map to the theme's layer system: sunken uses the lowest background emphasis, raised uses the page background, and elevated uses a slightly lighter or darker shade depending on the theme. Border radius follows the system scale consistently across all surfaces. The `elevation` prop corresponds to shadow depth: zero for flat surfaces, increasing in both spread and blur for higher values. Background color, not shadow, is the primary differentiator between surface levels in dark themes where shadows are less perceptible.

## API Reference

<ApiReference />

## Limitations

Surface does not handle scrolling — use Scroll Area as a child for scrollable content. The component does not support dynamic or interactive variants; hover and active states are not built in. Surface is purely a container and does not affect the layout or positioning of its children. Excessive use of different elevation levels within the same view can create visual inconsistency.
