import * as stylex from "@stylexjs/stylex";
import { Button } from "@/components/ui/Button/button";
import { Text } from "@/components/ui/Text/text";
import { Card, CardBody } from "@/components/ui/Card/card";
import { Table } from "@/components/ui/Table/table";
import { Badge } from "@/components/ui/Badge/badge";
import { Surface } from "@/components/ui/Surface/surface";
import type { Column } from "@/components/ui/Table/table";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { dashboardStyles } from "./dashboard-01.styles";

type Kpi = {
	label: string;
	value: string;
	trend?: "up" | "down";
	trendValue?: string;
};

type Activity = {
	event: string;
	user: string;
	status: "completed" | "pending" | "failed";
	date: string;
};

type ChartSection = {
	title: string;
};

type Props = PropsWithStylex<{
	kpis?: Kpi[];
	activities?: Activity[];
	chartSections?: ChartSection[];
	actions?: { label: string; handleClick: () => void }[];
}>;

const defaultKpis: Kpi[] = [
	{
		label: "Total Revenue",
		value: "$45,231",
		trend: "up",
		trendValue: "+20.1%",
	},
	{ label: "Active Users", value: "2,350", trend: "up", trendValue: "+12.5%" },
	{
		label: "Conversion Rate",
		value: "3.2%",
		trend: "down",
		trendValue: "-0.4%",
	},
	{ label: "Avg. Session", value: "4m 32s", trend: "up", trendValue: "+8.2%" },
];

const defaultActivities: Activity[] = [
	{
		event: "New user registration",
		user: "jane@example.com",
		status: "completed",
		date: "2 min ago",
	},
	{
		event: "Payment processed",
		user: "Acme Corp",
		status: "completed",
		date: "15 min ago",
	},
	{
		event: "Deployment failed",
		user: "CI/CD Pipeline",
		status: "failed",
		date: "1 hour ago",
	},
	{
		event: "Invoice generated",
		user: "Billing System",
		status: "pending",
		date: "3 hours ago",
	},
];

const defaultCharts: ChartSection[] = [
	{ title: "Revenue Overview" },
	{ title: "User Growth" },
];

const defaultActions = [
	{ label: "New Report", handleClick: () => {} },
	{ label: "Export Data", handleClick: () => {} },
	{ label: "Invite Users", handleClick: () => {} },
];

const statusVariant: Record<string, "primary" | "default" | "danger"> = {
	completed: "primary",
	pending: "default",
	failed: "danger",
};

export function Dashboard01({
	kpis = defaultKpis,
	activities = defaultActivities,
	chartSections = defaultCharts,
	actions = defaultActions,
	style,
}: Props) {
	const activityColumns: Column<Activity>[] = [
		{ key: "event", header: "Event" },
		{ key: "user", header: "User" },
		{
			key: "status",
			header: "Status",
			cell: (row) => (
				<Badge variant={statusVariant[row.status] ?? "default"}>
					{row.status}
				</Badge>
			),
		},
		{ key: "date", header: "Date" },
	];

	return (
		<div
			{...stylex.props(dashboardStyles.container, style)}
			aria-label="Dashboard"
		>
			<div {...stylex.props(dashboardStyles.section)}>
				<div {...stylex.props(dashboardStyles.sectionHeader)}>
					<Text variant="h3">Dashboard</Text>
					<div {...stylex.props(dashboardStyles.quickActions)}>
						{actions.map((action) => (
							<Button
								key={action.label}
								variant="soft"
								size="small"
								onClick={action.handleClick}
							>
								{action.label}
							</Button>
						))}
					</div>
				</div>
			</div>

			<ul {...stylex.props(dashboardStyles.kpiGrid)} aria-label="Key metrics">
				{kpis.map((kpi) => (
					<li key={kpi.label}>
						<CardBody {...stylex.props(dashboardStyles.kpiCard)}>
							<Text variant="caption" style={dashboardStyles.kpiLabel}>
								{kpi.label}
							</Text>
							<Text style={dashboardStyles.kpiValue}>{kpi.value}</Text>
							{kpi.trend && (
								<span
									{...stylex.props(
										dashboardStyles.kpiTrend,
										kpi.trend === "up"
											? dashboardStyles.kpiTrendUp
											: dashboardStyles.kpiTrendDown,
									)}
								>
									{kpi.trend === "up" ? "↑" : "↓"} {kpi.trendValue}
								</span>
							)}
						</CardBody>
					</li>
				))}
			</ul>

			<div {...stylex.props(dashboardStyles.chartGrid)}>
				{chartSections.map((chart) => (
					<Card key={chart.title}>
						<CardBody>
							<div {...stylex.props(dashboardStyles.sectionHeader)}>
								<Text variant="h5">{chart.title}</Text>
							</div>
							<Surface
								variant="sunken"
								style={dashboardStyles.chartPlaceholder}
							>
								Chart
							</Surface>
						</CardBody>
					</Card>
				))}
			</div>

			<Card>
				<CardBody>
					<div {...stylex.props(dashboardStyles.sectionHeader)}>
						<Text variant="h5">Recent Activity</Text>
					</div>
					<div {...stylex.props(dashboardStyles.tableWrapper)}>
						<Table
							columnData={activityColumns}
							rowData={activities}
							rowKey="event"
						/>
					</div>
				</CardBody>
			</Card>
		</div>
	);
}
