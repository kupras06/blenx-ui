---
navigation:
  group: blocks
  order: 13
---

## Overview

Dashboard-01 is a SaaS analytics overview block that combines key performance indicator cards, chart placeholder areas, a recent activity table, and quick action buttons into a single page-level composition. The KPI cards display metrics such as revenue, active users, total orders, and growth rate, each with a numeric value, a label, and a trend indicator showing percentage change from the previous period. Chart placeholders occupy the main content area with dashed-border containers that map to specific chart types — line, bar, and donut — ready for integration with your charting library of choice. The recent activity table lists the latest events with a timestamp, action description, and status badge, giving administrators a quick pulse check on system events. Quick action buttons provide one-click access to common tasks like creating a new project, inviting team members, or viewing reports.

## When To Use

Use dashboard-01 as the default post-login landing page for SaaS applications, admin panels, and internal tools where users need a high-level overview of system health and activity. It is designed for products that have measurable KPIs, time-series data, and event logs — typical use cases include analytics platforms, e-commerce backends, project management tools, and subscription management systems. Avoid using dashboard-01 for simple applications with no metrics or activity streams, for mobile-first dashboards where the multi-column layout would be too dense on small screens, or for highly specialized dashboards that require custom data visualizations not covered by the chart placeholders. If your dashboard needs only one or two KPIs, a more focused layout would serve your users better.

## Customization

The block accepts a `kpis` prop with an array of KPI objects, each containing `label`, `value`, `trend` (a number representing percentage change), and `trendDirection` (`"up"` or `"down"`). The `chartData` prop provides data for the chart placeholders, structured as `{ line, bar, donut }` objects whose shape depends on your chosen charting library. The `recentActivity` prop accepts an array of activity items with `timestamp`, `action`, `user`, and `status` fields. The `quickActions` prop configures buttons with `label`, `icon`, and `onClick` properties. KPI card colors follow your theme's semantic tokens — growth metrics use success tokens, while declining metrics use warning tokens. The chart placeholders accept a `chartRenderer` prop where you inject your actual chart component, allowing the caller to bring their own visualization library without coupling the block to a specific charting solution.

## Accessibility Notes

The dashboard uses semantic landmarks: the KPI section is a `region` with `aria-label="Key metrics"`, the chart area is `region` with `aria-label="Charts"`, and the activity table is a `<table>` with `<caption>` describing its content. KPI cards include `aria-live="polite"` regions for auto-updating values if the dashboard refreshes data on an interval. Trend indicators include text labels (e.g., "Up 12 percent") alongside the visual arrow icon, which is `aria-hidden="true"`. Quick action buttons use their icon and label together as the accessible name, ensuring screen reader users can distinguish each action. The activity table uses `aria-sort` indicators on sortable columns if sort functionality is enabled. Focus management ensures that when the dashboard loads, focus is set to the first KPI card or a skip-link target.

## Composition

Dashboard-01 composes a top-level `Section` with a `Grid` layout. The KPI row uses a `Flex` container with four `Card` components, each containing an `Icon`, a `Text` label, a `Heading` for the value, and a `Badge` for the trend indicator. The chart area uses a `Grid` with two columns — the left column holds a larger `Card` with a line chart placeholder, and the right column stacks a `Card` for a bar chart and a `Card` for a donut chart. The bottom section splits into a `Table` component for recent activity and a `Card` with a `Stack` of quick action `Button` components. An optional `DateRangePicker` in the header lets users filter the displayed data period.

## Best Practices

Populate KPI cards with the metrics that your users actually check daily — resist the urge to display every available metric, as too many KPIs dilute attention and reduce scannability. Use the chart placeholders with your preferred charting library and configure the `chartRenderer` prop to accept responsive containers that resize with the dashboard grid. Ensure the recent activity table defaults to sorting by timestamp descending so the most recent events are always visible first. Provide skeleton loading states for each dashboard section if data arrives asynchronously, since an empty dashboard with missing data can look broken rather than loading. Make quick actions contextual to the user's role — an admin sees different shortcuts than a regular team member.

## Limitations

Dashboard-01 does not include any chart rendering — the chart placeholders are empty containers that expect a `chartRenderer` injection. The block assumes a fixed four-KPI layout and does not dynamically add or remove KPI cards based on the data. The activity table supports a single level of rows with no expandable detail rows or inline actions. The dashboard layout is optimized for desktop viewports with 1280px or wider; on smaller screens, the grid collapses to a single column, which may bury less important metrics below the fold. Data refresh polling is not built in — the caller must manage data fetching intervals and pass updated props. The block has no built-in PDF export or print styling for dashboard snapshots.
