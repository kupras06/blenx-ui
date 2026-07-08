import { memo } from "react";
import { ArrowDownRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react";
import {
  Badge,
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardTitle,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  Text,
  VStack,
} from "@blenx-dev/core";
import { CardDemo, ProfileCardDemo, ProductCardDemo } from "@/views/demos/card/card.demo";

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
  <VStack gap="sm">
    {/* KPI Cards */}
    <Grid rowGap={"sm"} columnGap={"md"} columns={{ base: 2, lg: 4 }}>
      {kpis.map((kpi) => (
        <Card key={kpi.label} padding="md">
          <Text variant="caption" color="secondary">
            {kpi.label}
          </Text>
          <Text color="secondary" size="lg" weight="medium">
            {kpi.value}
          </Text>
          <Text
            color={kpi.up ? "success" : "error"}
            display="flex"
            align="center"
            gap="xxs"
            justify="end"
          >
            {kpi.up ? <ArrowUpRightIcon scale={"20"} /> : <ArrowDownRightIcon />}
            <span>{kpi.trend}</span>
          </Text>
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
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>User</TableHeaderCell>
              <TableHeaderCell>Action</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {activities.map((row) => (
              <TableRow key={row.user + "-" + row.action}>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.action}</TableCell>
                <TableCell>
                  <Badge
                    palette={
                      row.status === "Completed"
                        ? "primary"
                        : row.status === "Failed"
                          ? "secondary"
                          : "default"
                    }
                  >
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardBody>
    </Card>

    {/* User Profile Card + Charts */}
    <Grid columns={{ base: 1, md: 2 }} gap="3" marginTop={"6"}>
      <CardDemo />
      <ProfileCardDemo />
      <ProductCardDemo />
    </Grid>
  </VStack>
));
