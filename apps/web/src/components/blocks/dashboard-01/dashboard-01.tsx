import { Badge } from "@blenx-dev/core/Badge";
import { Button } from "@blenx-dev/core/Button";
import { Card, CardBody, CardTitle } from "@blenx-dev/core/Card";
import { Surface } from "@blenx-dev/core/Surface";
import { Text } from "@blenx-dev/core/Text";
import type { CSSProperties } from "react";
import {
  Container,
  Grid,
  HStack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  VStack,
} from "@blenx-dev/core";

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

type Props = {
  kpis?: Kpi[];
  activities?: Activity[];
  chartSections?: ChartSection[];
  actions?: { label: string; handleClick: () => void }[];
  style?: CSSProperties;
};

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

const defaultCharts: ChartSection[] = [{ title: "Revenue Overview" }, { title: "User Growth" }];

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
  return (
    <Container size="full" aria-label="Dashboard">
      <VStack>
        <VStack>
          <HStack justify="between" align="center">
            <Text variant="h3">Dashboard</Text>
            <HStack wrap>
              {actions.map((action) => (
                <Button key={action.label} variant="soft" size="sm" onClick={action.handleClick}>
                  {action.label}
                </Button>
              ))}
            </HStack>
          </HStack>
        </VStack>

        <Grid aria-label="Key metrics" columns={{ base: 2, lg: 4 }} gap={"sm"}>
          {kpis.map((kpi) => (
            <Card key={kpi.label}>
              <CardBody>
                <Text variant="caption" size="md" color="secondary">
                  {kpi.label}
                </Text>
                <Text weight="bold" size="xl">
                  {kpi.value}
                </Text>
                {kpi.trend && (
                  <Text size="sm" color={kpi.trend === "up" ? "success" : "error"}>
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
                <Surface variant="sunken" padding="md" paddingY="massive" withBorder>
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
            <Table>
              <TableHead>
                <TableRow>
                  <TableHeaderCell>Event</TableHeaderCell>
                  <TableHeaderCell>User</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Date</TableHeaderCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {activities.map((row) => (
                  <TableRow key={row.event}>
                    <TableCell>{row.event}</TableCell>
                    <TableCell>{row.user}</TableCell>
                    <TableCell>
                      <Badge palette={statusVariant[row.status] ?? "default"}>{row.status}</Badge>
                    </TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardBody>
        </Card>
      </VStack>
    </Container>
  );
}
