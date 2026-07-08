"use client";

import { useState } from "react";
import { Button } from "@blenx-dev/core/Button";
import { Text } from "@blenx-dev/core/Text";
import { Card, CardBody, CardHeader } from "@blenx-dev/core/Card";
import { Badge } from "@blenx-dev/core/Badge";
import { Switch } from "@blenx-dev/core/Switch";
import { CheckIcon } from "@phosphor-icons/react";
import { Container, HStack, Icon, VStack } from "@blenx-dev/core";
import type { CSSProperties } from "react";

type Plan = {
  name: string;
  description?: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  popular?: boolean;
  cta: { label: string; handleClick: () => void };
};

type Props = {
  title?: string;
  description?: string;
  plans?: Plan[];
  onSelectPlan?: (plan: Plan, billing: "monthly" | "yearly") => void;
  style?: CSSProperties;
};

const defaultPlans: Plan[] = [
  {
    name: "Free",
    description: "For individuals getting started",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: ["Up to 3 projects", "Basic analytics", "Community support", "1GB storage"],
    cta: { label: "Get started", handleClick: () => {} },
  },
  {
    name: "Pro",
    description: "For growing teams and professionals",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
      "Custom domains",
      "API access",
    ],
    popular: true,
    cta: { label: "Start free trial", handleClick: () => {} },
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    monthlyPrice: 99,
    yearlyPrice: 990,
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated support",
      "Custom integrations",
      "SLA guarantee",
      "Team training",
    ],
    cta: { label: "Contact sales", handleClick: () => {} },
  },
];

export function Pricing01({
  title = "Simple, transparent pricing",
  description = "Choose the plan that fits your needs. No hidden fees.",
  plans = defaultPlans,
}: Props) {
  const [yearly, setYearly] = useState(false);
  const billing = yearly ? "yearly" : "monthly";

  return (
    <Container paddingY="huge" size="full">
      <VStack align="center" gap="sm">
        <Text variant="h2">{title}</Text>
        <Text variant="body1" color="secondary">
          {description}
        </Text>
        <HStack align="center" gap="xs" marginY="md">
          <Text variant="body2" color="secondary">
            Monthly
          </Text>
          <Switch checked={yearly} onCheckedChange={(c) => setYearly(Boolean(c))} />
          <Text variant="body2" color="secondary">
            Yearly
          </Text>
          {yearly && (
            <Badge radius="full" palette="success">
              Save up to 20%
            </Badge>
          )}
        </HStack>
      </VStack>

      <HStack wrap justify="center">
        {plans.map((plan) => (
          <Card key={plan.name} maxWidth="xs" variant={plan.popular ? "raised" : "sunken"}>
            {plan.popular && (
              <Badge palette="primary" radius="full">
                Most popular
              </Badge>
            )}
            <CardHeader>
              <Text variant="h4">{plan.name}</Text>
              {plan.description && <Text variant="body2">{plan.description}</Text>}
              <HStack align="baseline" gap="none">
                <Text variant="h3">
                  ${billing === "yearly" ? plan.yearlyPrice : plan.monthlyPrice}
                </Text>
                <Text variant="caption" color="secondary">
                  {billing === "yearly" ? "/year" : "/month"}
                </Text>
              </HStack>
            </CardHeader>
            <CardBody>
              <VStack justify="between">
                <VStack gap="xs">
                  {plan.features.map((feature) => (
                    <HStack gap="xs" align="center" key={feature}>
                      <Icon color="success">
                        <CheckIcon />
                      </Icon>
                      {feature}
                    </HStack>
                  ))}
                </VStack>
                <Button
                  variant={plan.popular ? "solid" : "outline"}
                  fullWidth
                  onClick={plan.cta.handleClick}
                >
                  {plan.cta.label}
                </Button>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </HStack>
    </Container>
  );
}
