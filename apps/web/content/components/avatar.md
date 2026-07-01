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

## Usage

Provide an `src` prop with the image URL and an `alt` prop for accessible naming. The initials fallback is computed from the `name` prop, extracting the first character of the first and last name segments. If both `src` and `name` are absent, Avatar renders a generic user icon. The `size` prop maps to pre-defined dimensions (sm, md, lg, xl) with corresponding font sizes for initials. Add a `status` prop to render the presence indicator at the bottom-right corner of the avatar boundary. The component handles the image loading lifecycle internally — it shows initials while the image loads, transitions to the image on success, and reverts to initials on error.

## API Reference

<ApiReference />

## Limitations

Avatar does not support image cropping or editing workflows. It accepts pre-processed images only. The status indicator is purely visual and does not emit events or manage real-time presence data — integrate with your presence system separately. AvatarGroup has a maximum display count; exceeding this threshold shows a "+N" overflow indicator but does not provide interaction for viewing the full list.
