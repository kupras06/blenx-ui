import { memo } from "react";
import {
  ArrowDownRightIcon,
  ArrowUpRightIcon,
  ChartBarIcon,
  PencilSimpleLineIcon,
  TrashSimpleIcon,
  UsersIcon,
} from "@phosphor-icons/react";
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
  Grid,
  Surface,
  Table,
  Text,
  VStack,
} from "@blenx-dev/ui";
import {
  kpiGrid,
  kpiValue,
  trendUp as trendUpClass,
  trendDown as trendDownClass,
  dashboardGrid,
  profileContent,
  profileInfo,
  profileName,
  profileEmail,
  profileActions,
  chartPlaceholder,
} from "@/lib/styles.css";

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
    <Grid rowGap={"sm"} columnGap={"md"} className={kpiGrid} columns={{ base: 2, lg: 4 }}>
      {kpis.map((kpi) => (
        <Card key={kpi.label} padding="md">
          <Text variant="caption" color="secondary">
            {kpi.label}
          </Text>
          <div className={kpiValue}>{kpi.value}</div>
          <div className={kpi.up ? trendUpClass : trendDownClass}>
            {kpi.up ? <ArrowUpRightIcon size={14} /> : <ArrowDownRightIcon size={14} />}
            <span>{kpi.trend}</span>
          </div>
        </Card>
      ))}
    </Grid>

    {/* Activity Table */}
    <Card padding="md">
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
    <div className={dashboardGrid}>
      {/* Profile */}
      <Card padding="md">
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardBody>
          <div className={profileContent}>
            <Avatar size="lg">
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
            <div className={profileInfo}>
              <div className={profileName}>Alex Kumar</div>
              <div className={profileEmail}>alex@example.com</div>
              <Badge variant="primary" radius="full">
                Admin
              </Badge>
            </div>
          </div>
          <div className={profileActions}>
            <Button variant="outline" size="sm">
              <PencilSimpleLineIcon size={14} />
              Edit
            </Button>
            <Button intent="danger" size="sm">
              <TrashSimpleIcon size={14} />
              Delete
            </Button>
          </div>
        </CardBody>
      </Card>

      {/* Charts */}
      <Surface variant="outline">
        <CardBody>
          <div className={chartPlaceholder}>
            <VStack gap="sm" align="center">
              <ChartBarIcon size={32} />
              <Text variant="body2" color="disabled">
                Revenue Chart
              </Text>
            </VStack>
          </div>
        </CardBody>
      </Surface>
    </div>

    <div className={dashboardGrid} style={{ marginTop: 0 }}>
      <Surface variant="outline">
        <CardBody>
          <div className={chartPlaceholder}>
            <VStack gap="sm" align="center">
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
          <div className={chartPlaceholder}>
            <VStack gap="sm" align="center">
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
