---
title: "Avatar"
description: "Avatar displays user profile images with automatic fallback to initials when the image fails to load or is not provided."
navigation:
  group: components
  order: 5
---

## Overview

Avatar displays user profile images with automatic fallback to initials when the image fails to load or is not provided. It is built on Base UI Avatar primitives, which handle image loading states and fallback rendering accessibly. Use Avatar to represent people in user lists, comment threads, team grids, and chat interfaces.

## Installation

<Installation registryName="avatar" />

## Source Code

<SourceCode registryName="avatar" />

## Usage

Provide an `src` prop with the image URL and an `alt` prop for accessible naming. The initials fallback is computed from the `name` prop, extracting the first character of the first and last name segments. If both `src` and `name` are absent, Avatar renders a generic user icon. The `size` prop maps to pre-defined dimensions (sm, md, lg, xl) with corresponding font sizes for initials. Add a `status` prop to render the presence indicator at the bottom-right corner of the avatar boundary. The component handles the image loading lifecycle internally — it shows initials while the image loads, transitions to the image on success, and reverts to initials on error.

## Composition

Use Avatar inside `Button` for user menu triggers, inside `Card` headers for author information, and inside `DataTable` columns for user identification. The status indicator is a decorative element and does not provide accessible presence announcements — pair it with a `Tooltip` or visible text label when presence information is critical. Group multiple avatars with `AvatarGroup` for collaborative displays, which overlaps avatars and surfaces a count of remaining participants. Avoid placing interactive elements inside the Avatar container; the avatar itself is presentational and should not wrap links or buttons.

## Design Guidelines

Avatars should be uniformly sized within a given context — mixing 32px and 40px avatars in the same list looks unpolished. The status indicator should be a solid circle with a subtle ring that matches the background color to create a cutout effect. Group overlap should be consistent, typically exposing 60–70% of each adjacent avatar. Initials should use the same font weight as the surrounding text but in a color that provides sufficient contrast against the background fill.

## API Reference

<ApiReference />

## Limitations

Avatar does not support image cropping or editing workflows. It accepts pre-processed images only. The status indicator is purely visual and does not emit events or manage real-time presence data — integrate with your presence system separately. AvatarGroup has a maximum display count; exceeding this threshold shows a "+N" overflow indicator but does not provide interaction for viewing the full list.
