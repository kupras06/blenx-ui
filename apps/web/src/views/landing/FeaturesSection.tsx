import {
  Alert,
  Box,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container,
  Grid,
  HStack,
  Text,
  VStack,
} from "@blenx-dev/components";
import { FileCodeIcon } from "@phosphor-icons/react";
import { CodeBlock } from "../docs/mdx-components/CodeBlock";

const INSTALL_COMMAND = `npx shadcn@latest add https://blenx-ui.vercel.app/reg/button.json`;
const features = [
  {
    title: "Own Your Code",
    desc: "Source code is copied directly into your project. No black box — you control every line.",
  },
  {
    title: "Registry First",
    desc: "Install only what you need. No bloated node_modules, no unnecessary dependencies.",
  },
  {
    title: "Fully Accessible",
    desc: "Built on top of Base UI primitives. WAI-ARIA compliant, keyboard navigable, screen-reader ready.",
  },

  {
    title: "No Vendor Lock-In",
    desc: "Your codebase remains fully independent. Swap, modify, or remove components at any time.",
  },
  {
    title: "Production Ready",
    desc: "Built for real-world applications. Tested, documented, and designed to handle production scale.",
  },
  {
    title: "Powered by Vanilla Extract",
    desc: "Type-safe, zero-runtime CSS-in-JS. Predictable styles that scale with your application.",
  },
];

export function BlenxFeatures() {
  return (
    <VStack gap="xlarge">
      <VStack gap="small" align="center">
        <Text variant="h2" align="center" size="xxlarge">
          Why choose Blenx?
        </Text>
        <Box maxWidth={560}>
          <Text variant="body2" color="secondary" align="center" size="large">
            A modern approach to component distribution and ownership.
          </Text>
        </Box>
      </VStack>
      <Grid columns={3} gap="medium">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader padding="medium">
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardBody padding="medium">
              <Text variant="body2" color="secondary">
                {feature.desc}
              </Text>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </VStack>
  );
}

const installSteps = [
  {
    number: "1",
    title: "Install",
    desc: "Run the CLI command to add any component.",
  },
  {
    number: "2",
    title: "Source",
    desc: "Component source is copied to your project.",
  },
  {
    number: "3",
    title: "Customize",
    desc: "Edit, extend, and own every line.",
  },
];

export function InstallSection() {
  return (
    <Container>
      <VStack gap="large" align="center">
        <VStack gap="small" align="center">
          <Text variant="h2" align="center" size="xlarge">
            Install only what you need.
          </Text>
          <Box maxWidth={560}>
            <Text variant="body2" color="secondary" align="center" size="large">
              Add components directly to your project and own the resulting source code.
            </Text>
          </Box>
        </VStack>
        <Box maxWidth={640} fullWidth>
          <CodeBlock code={INSTALL_COMMAND} language="bash" />
        </Box>
        <VStack gap="large">
          {installSteps.map((step) => (
            <HStack key={step.number} gap="small" align="start">
              <Box>{step.number}</Box>
              <VStack gap="xxsmall">
                <Text variant="body2" weight="semibold">
                  {step.title}
                </Text>
                <Text variant="body3" color="secondary">
                  {step.desc}
                </Text>
              </VStack>
            </HStack>
          ))}
        </VStack>
        <Alert variant="info" icon={<FileCodeIcon size={16} />}>
          <Text variant="body2">
            <strong>No bloated dependency.</strong> No vendor lock-in. No runtime styling library.
          </Text>
        </Alert>
      </VStack>
    </Container>
  );
}
