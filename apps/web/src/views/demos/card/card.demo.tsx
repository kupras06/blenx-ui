import { ChartBarIcon, MapPinIcon, StarIcon } from "@blenx-dev/core/icons";
import {
  Button,
  Text,
  Badge,
  Avatar,
  AvatarFallback,
  AvatarImage,
  HStack,
  VStack,
  Box,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@blenx-dev/core";

export function CardDemo() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Getting Started</CardTitle>
        <CardDescription>
          Learn how to install and use Blenx UI components in your project.
        </CardDescription>
      </CardHeader>
      <CardBody>
        <Text variant="body2">
          Blenx UI provides a set of accessible, styleable React components built on Base UI
          primitives and styled with StyleX.
        </Text>
      </CardBody>
      <CardFooter>
        <Button variant="outline" size="sm">
          Read docs
        </Button>
        <Button size="sm">Install</Button>
      </CardFooter>
    </Card>
  );
}

export function ProfileCardDemo() {
  return (
    <Card>
      <CardHeader>
        <HStack gap="md" align="center">
          <Avatar size="lg">
            <AvatarImage src="https://i.pravatar.cc/150?u=alex" alt="Alex Rivera" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <VStack gap="xxs">
            <HStack gap="xs" align="center">
              <CardTitle>Alex Rivera</CardTitle>
              <Badge palette="primary">Pro</Badge>
            </HStack>
            <HStack gap="xxs" align="center">
              <MapPinIcon width={12} height={12} />
              <Text variant="caption" color="secondary">
                San Francisco, CA
              </Text>
            </HStack>
          </VStack>
        </HStack>
      </CardHeader>
      <CardBody>
        <Text variant="body2">
          Full-stack developer with 8+ years of experience building accessible, performant web
          applications. Passionate about design systems and open source.
        </Text>
      </CardBody>
      <CardFooter>
        <HStack gap="sm" justify="end" wrap>
          <Button variant="ghost" size="sm">
            Message
          </Button>
          <Button size="sm">Follow</Button>
        </HStack>
      </CardFooter>
    </Card>
  );
}

export function ProductCardDemo() {
  return (
    <Card>
      <CardHeader>
        <HStack gap="md" justify="between" align="center">
          <VStack gap="xxs">
            <HStack align={"center"}>
              <CardTitle>Pro Subscription</CardTitle>
              <Badge palette="danger">20% OFF</Badge>
            </HStack>
            <CardDescription>Annual billing </CardDescription>
          </VStack>
          <HStack gap="xs" align="center">
            <StarIcon width={14} height={14} />
            <Text variant="caption" weight="semibold">
              4.9
            </Text>
          </HStack>
        </HStack>
      </CardHeader>
      <CardBody>
        <Text variant="body2">
          Unlimited projects, advanced analytics, priority support, and team collaboration features.
          Everything you need to scale your workflow.
        </Text>
        <HStack gap="xs" align="baseline" style={{ marginTop: 8 }}>
          <Text variant="h3" weight="bold">
            $29
          </Text>
          <Text variant="body3" color="secondary">
            /month
          </Text>
        </HStack>
      </CardBody>
      <CardFooter>
        <Button fullWidth>Subscribe Now</Button>
      </CardFooter>
    </Card>
  );
}

export function StatCardDemo() {
  return (
    <Card>
      <CardBody>
        <HStack gap="md" align="center" justify="between">
          <VStack gap="xxs">
            <Text variant="caption" color="secondary">
              Total Revenue
            </Text>
            <Text variant="h3" weight="bold">
              $48,250
            </Text>
            <HStack gap="xxs" align="center">
              <Badge palette="success">+12.5%</Badge>
              <Text variant="caption" color="secondary">
                vs last month
              </Text>
            </HStack>
          </VStack>
          <Box
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              backgroundColor: "var(--color-primary-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <ChartBarIcon width={24} height={24} />
          </Box>
        </HStack>
      </CardBody>
    </Card>
  );
}

export const demos = [
  { name: "Default", component: CardDemo },
  { name: "Profile Card", component: ProfileCardDemo },
  { name: "Product Card", component: ProductCardDemo },
  { name: "Stat Card", component: StatCardDemo },
];
