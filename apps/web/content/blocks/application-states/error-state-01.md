---
title: Error State
group: application-states
order: 3
default: false
---

## Demo

<DemoRenderer registryName="error-state-01" />

## Installation

<Installation registryName="error-state-01" />

## Source Code

<SourceCode registryName="error-state-01" />

## Overview

Error-state-01 is a flexible error display block that communicates failure states to users with clarity and a path to recovery. It supports three visual variants — `card` for inline content areas, `page` for full-page errors, and `toast` for overlay notifications. At its core, the block shows an error icon, a succinct title, a descriptive message, and a retry button that invokes the `onRetry` callback. For debugging and support scenarios, an expandable details section can reveal technical error information such as status codes or stack traces without cluttering the primary interface. The block adapts its layout based on the variant: the `card` variant sits within a container and leaves surrounding navigation accessible, while the `page` variant centers in the viewport with no surrounding chrome interference.
