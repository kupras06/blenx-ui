import { Button } from "@/components/ui/Button/button";
import { Text } from "@/components/ui/Text/text";
import { Card, CardBody, CardTitle } from "@/components/ui/Card/card";
import { Table } from "@/components/ui/Table/table";
import { Badge } from "@/components/ui/Badge/badge";
import { Surface } from "@/components/ui/Surface/surface";
import type { Column } from "@/components/ui/Table/table";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { Container, Grid, HStack, VStack } from "@/components/ui";

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
		<Container aria-label="Dashboard">
			<VStack>
				<VStack>
					<HStack justify="between" align="center">
						<Text variant="h3">Dashboard</Text>
						<HStack wrap>
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
						</HStack>
					</HStack>
				</VStack>

				<Grid aria-label="Key metrics" columns={4}>
					{kpis.map((kpi) => (
						<Card render={<li />} key={kpi.label}>
							<CardBody>
								<Text variant="caption" size="medium" color="secondary">
									{kpi.label}
								</Text>
								<Text weight="bold" size="xlarge">
									{kpi.value}
								</Text>
								{kpi.trend && (
									<Text
										size="small"
										color={kpi.trend === "up" ? "success" : "error"}
									>
										{kpi.trend === "up" ? "↑" : "↓"} {kpi.trendValue}
									</Text>
								)}
							</CardBody>
						</Card>
					))}
				</Grid>

				<Grid columns={2}>
					{chartSections.map((chart) => (
						<Card key={chart.title}>
							<CardTitle>{chart.title}</CardTitle>
							<CardBody>
								<Surface
									variant="sunken"
									padding="medium"
									paddingY="massive"
									withBorder
								>
									<Text variant="h5" color="secondary" align="center">
										Chart
									</Text>
								</Surface>
							</CardBody>
						</Card>
					))}
				</Grid>

				<Card>
					<CardBody>
						<Text variant="h5">Recent Activity</Text>
						<Table
							columnData={activityColumns}
							rowData={activities}
							rowKey="event"
						/>
					</CardBody>
				</Card>
			</VStack>
		</Container>
	);
}
