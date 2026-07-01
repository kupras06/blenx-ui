---
title: Loading State
group: application-states
order: 2
default: false
---

## Demo

<DemoRenderer registryName="loading-state-01" />

## Installation

<Installation registryName="loading-state-01" />

## Overview

Loading-state-01 is a skeleton and progress indicator block that communicates to users that content is being fetched or processed. It provides four distinct skeleton shapes — text, card, table, and avatar — that can be composed to match the layout of the content being loaded. Each skeleton mimics the approximate dimensions and visual weight of the real content without rendering actual data, reducing perceived latency by giving users a preview of the page structure. The block also includes an optional determinate progress bar for operations with known durations, such as file uploads or data exports. Because this block manages purely presentational concerns with no interactive state, it requires no external props by default, though it exposes props for skeleton type, count, and layout direction.
