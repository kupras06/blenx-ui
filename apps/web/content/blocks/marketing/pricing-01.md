---
title: Pricing Table
group: marketing
order: 6
default: false
---

## Demo

<DemoRenderer registryName="pricing-01" />

## Installation

<Installation registryName="pricing-01" />

## Overview

Pricing-01 is a full pricing page block that presents three plan tiers — typically Free, Pro, and Enterprise — in a side-by-side card layout with a monthly or yearly billing toggle. Each plan card displays the plan name, price (which updates when the billing toggle switches), a list of features with check or dash indicators, and a CTA button for selecting the plan. The `plans` prop accepts an array of plan objects defining the name, price, features, and CTA label for each tier, making the block data-driven rather than hardcoded. The `onPlanSelect` callback fires when a user clicks a plan CTA, receiving the selected plan identifier so the parent can route to checkout, open a modal, or track the event. A billing toggle animates between monthly and yearly states, with the yearly prices typically showing a percentage savings badge to highlight the value of annual commitments.
