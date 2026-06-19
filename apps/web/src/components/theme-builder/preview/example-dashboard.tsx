import { memo } from "react";
import {
	ArrowDownRightIcon,
	ArrowUpRightIcon,
	ChartBarIcon,
	PencilSimpleLineIcon,
	TrashSimpleIcon,
	UsersIcon,
} from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import {
	Avatar,
	AvatarFallback,
	Badge,
	Button,
	Card,
	CardBody,
	CardDescription,
	CardHeader,
	CardTitle,
	Surface,
	Table,
	Text,
	VStack,
} from "@blenx-dev/ui/components";;
import { theme } from "@/lib/theme/contract.stylex";
import { fontSize, spacing } from "@/lib/theme/tokens.stylex";

const styles = stylex.create({
	kpiGrid: {
		display: "grid",
		gridTemplateColumns: "repeat(4, 1fr)",
		gap: spacing["3"],
		marginBottom: spacing["6"],
	},
	kpiValue: {
		fontSize: fontSize.xlarge,
		fontWeight: 700,
		color: theme.contentPrimary,
	},
	kpiLabel: {
		fontSize: fontSize.xsmall,
		color: theme.contentSecondary,
		marginTop: spacing["1"],
	},
	trendUp: {
		color: theme.sentimentPositive,
		fontSize: fontSize.xsmall,
		display: "flex",
		alignItems: "center",
		gap: spacing["1"],
		marginTop: spacing["1"],
	},
	trendDown: {
		color: theme.sentimentNegative,
		fontSize: fontSize.xsmall,
		display: "flex",
		alignItems: "center",
		gap: spacing["1"],
		marginTop: spacing["1"],
	},

	dashboardGrid: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: spacing["3"],
		marginTop: spacing["6"],
	},
	profileSection: {
		marginTop: spacing["6"],
	},
	profileContent: {
		display: "flex",
		alignItems: "center",
		gap: spacing["3"],
	},
	profileInfo: {
		display: "flex",
		flexDirection: "column",
		gap: spacing["1"],
	},
	profileName: {
		fontSize: fontSize.medium,
		fontWeight: 600,
		color: theme.contentPrimary,
	},
	profileEmail: {
		fontSize: fontSize.small,
		color: theme.contentSecondary,
	},
	profileActions: {
		display: "flex",
		gap: spacing["2"],
		marginTop: spacing["3"],
	},
	chartPlaceholder: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		minHeight: 200,
		color: theme.contentDisabled,
		fontSize: fontSize.small,
	},
});

const kpis = [
	{
		label: "Total Revenue",
		value: "$48,250",
		trend: "+12.5%",
		up: true,
	},
	{
		label: "Active Users",
		value: "2,847",
		trend: "+8.2%",
		up: true,
	},
	{
		label: "Conversion Rate",
		value: "3.24%",
		trend: "-0.8%",
		up: false,
	},
	{
		label: "Avg. Session",
		value: "4m 32s",
		trend: "+5.1%",
		up: true,
	},
];

const activities = [
	{
		user: "Sarah Chen",
		action: "Created invoice #INV-024",
		status: "Completed",
		date: "2m ago",
	},
	{
		user: "Marcus Johnson",
		action: "Updated project settings",
		status: "Pending",
		date: "15m ago",
	},
	{
		user: "Emily Rodriguez",
		action: "Deleted user account",
		status: "Failed",
		date: "1h ago",
	},
	{
		user: "Alex Kim",
		action: "Exported revenue report",
		status: "Completed",
		date: "2h ago",
	},
	{
		user: "Lisa Wang",
		action: "Added team member",
		status: "Pending",
		date: "3h ago",
	},
	{
		user: "James Wilson",
		action: "Modified subscription plan",
		status: "Completed",
		date: "5h ago",
	},
];

export const ExampleDashboard = memo(() => (
	<VStack gap="none">
		{/* KPI Cards */}
		<div {...stylex.props(styles.kpiGrid)}>
			{kpis.map((kpi) => (
				<Card key={kpi.label} padding="medium">
					<Text variant="caption" color="secondary">
						{kpi.label}
					</Text>
					<div {...stylex.props(styles.kpiValue)}>{kpi.value}</div>
					<div {...stylex.props(kpi.up ? styles.trendUp : styles.trendDown)}>
						{kpi.up ? (
							<ArrowUpRightIcon size={14} />
						) : (
							<ArrowDownRightIcon size={14} />
						)}
						<span>{kpi.trend}</span>
					</div>
				</Card>
			))}
		</div>

		{/* Activity Table */}
		<Card padding="medium">
			<CardHeader>
				<CardTitle>Recent Activity</CardTitle>
				<CardDescription>Latest actions across your workspace</CardDescription>
			</CardHeader>
			<CardBody>
				<Table
					columnData={[
						{ key: "user", header: "User" },
						{
							key: "action",
							header: "Action",
						},
						{
							key: "status",
							header: "Status",
							cell: (row) => (
								<Badge
									variant={
										row.status === "Completed"
											? "primary"
											: row.status === "Failed"
												? "secondary"
												: "default"
									}
								>
									{row.status}
								</Badge>
							),
						},
						{ key: "date", header: "Date" },
					]}
					rowData={activities}
				/>
			</CardBody>
		</Card>

		{/* User Profile Card + Charts */}
		<div {...stylex.props(styles.dashboardGrid)}>
			{/* Profile */}
			<Card padding="medium">
				<CardHeader>
					<CardTitle>User Profile</CardTitle>
				</CardHeader>
				<CardBody>
					<div {...stylex.props(styles.profileContent)}>
						<Avatar size="large">
							<AvatarFallback>AK</AvatarFallback>
						</Avatar>
						<div {...stylex.props(styles.profileInfo)}>
							<div {...stylex.props(styles.profileName)}>Alex Kumar</div>
							<div {...stylex.props(styles.profileEmail)}>alex@example.com</div>
							<Badge variant="primary" radius="full">
								Admin
							</Badge>
						</div>
					</div>
					<div {...stylex.props(styles.profileActions)}>
						<Button variant="outline" size="small">
							<PencilSimpleLineIcon size={14} />
							Edit
						</Button>
						<Button intent="danger" size="small">
							<TrashSimpleIcon size={14} />
							Delete
						</Button>
					</div>
				</CardBody>
			</Card>

			{/* Charts */}
			<Surface variant="outline">
				<CardBody>
					<div {...stylex.props(styles.chartPlaceholder)}>
						<VStack gap="small" align="center">
							<ChartBarIcon size={32} />
							<Text variant="body2" color="disabled">
								Revenue Chart
							</Text>
						</VStack>
					</div>
				</CardBody>
			</Surface>
		</div>

		<div {...stylex.props(styles.dashboardGrid)} style={{ marginTop: 0 }}>
			<Surface variant="outline">
				<CardBody>
					<div {...stylex.props(styles.chartPlaceholder)}>
						<VStack gap="small" align="center">
							<UsersIcon size={32} />
							<Text variant="body2" color="disabled">
								User Growth Chart
							</Text>
						</VStack>
					</div>
				</CardBody>
			</Surface>

			<Surface variant="outline">
				<CardBody>
					<div {...stylex.props(styles.chartPlaceholder)}>
						<VStack gap="small" align="center">
							<ChartBarIcon size={32} />
							<Text variant="body2" color="disabled">
								Conversion Funnel
							</Text>
						</VStack>
					</div>
				</CardBody>
			</Surface>
		</div>
	</VStack>
));
