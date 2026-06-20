import { ArrowRightIcon, CheckIcon, FileCode, Gear } from "@phosphor-icons/react";
import * as stylex from "@stylexjs/stylex";
import { createFileRoute, Link } from "@tanstack/react-router";
import { GITHUB_URL } from "@/constants";
import { fontSize } from "@blenx-dev/ui/lib/theme/tokens.stylex";
import type { Column } from "@blenx-dev/ui/components/Table/table";
import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  AccordionRoot,
  AccordionTrigger,
  Alert,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Box,
  Button,
  Card,
  CardBody,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogTitle,
  DialogTrigger,
  Grid,
  HStack,
  Input,
  Separator,
  Surface,
  Table,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
  VStack,
} from "@blenx-dev/ui/components";
import { CodeBlock } from "@/components/ui/CodeBlock/code-block";

/* ---------------------------------------------------------------------------
 * Data
 * ------------------------------------------------------------------------- */

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
    title: "Powered by StyleX",
    desc: "Type-safe, zero-runtime CSS-in-JS. Predictable styles that scale with your application.",
  },
];

interface ComparisonRow {
  feature: string;
  blenx: string;
  traditional: string;
}

const comparisonColumns: Column<ComparisonRow>[] = [
  { key: "feature", header: "Feature" },
  { key: "blenx", header: "Blenx" },
  {
    key: "traditional" as keyof ComparisonRow,
    header: "Traditional UI Libraries",
  },
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: "Own source code",
    blenx: "Copied directly to your project",
    traditional: "Locked in node_modules",
  },
  {
    feature: "Install model",
    blenx: "Registry — add only what you need",
    traditional: "npm install — whole library",
  },
  {
    feature: "Styling",
    blenx: "StyleX — type-safe, zero-runtime",
    traditional: "Tailwind, styled-components, or CSS modules",
  },
  {
    feature: "Accessibility",
    blenx: "Base UI primitives (WAI-ARIA)",
    traditional: "Custom or third-party abstractions",
  },
  {
    feature: "Customization",
    blenx: "Full — edit source directly",
    traditional: "Theme overrides, config files, !important",
  },
  {
    feature: "Vendor lock-in",
    blenx: "None — you own the code",
    traditional: "Tied to library API and roadmap",
  },
];

const docLinks = [
  {
    to: "/docs/installation" as const,
    title: "Installation",
    desc: "Configure your project and install components.",
  },
  {
    to: "/docs/styling" as const,
    title: "Styling",
    desc: "How StyleX works in Blenx UI.",
  },
  {
    to: "/docs/installation" as const,
    title: "Components",
    desc: "Browse all available components.",
  },
  {
    to: "/docs/theming" as const,
    title: "Theming",
    desc: "Customize light and dark themes.",
  },
  {
    to: "/docs/primitives" as const,
    title: "Primitives",
    desc: "Base UI component architecture.",
  },
  {
    to: "/docs/primitives" as const,
    title: "Accessibility",
    desc: "WAI-ARIA compliance and keyboard navigation.",
  },
  {
    to: "/docs/limitations" as const,
    title: "Limitations",
    desc: "Important constraints and tradeoffs.",
  },
];

const metrics = [
  { label: "Components", value: "20+" },
  { label: "TypeScript", value: "100%" },
  { label: "Base UI", value: "Powered" },
  { label: "Registry", value: "First" },
  { label: "StyleX", value: "Native" },
];

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

/* ---------------------------------------------------------------------------
 * Styles
 * ------------------------------------------------------------------------- */

const styles = stylex.create({
  heroTitle: {
    fontSize: "clamp(36px, 5vw, 56px)",
    lineHeight: 1.1,
    fontWeight: 700,
    letterSpacing: "-0.04em",
  },
  sectionTitle: {
    fontSize: fontSize.display,
    lineHeight: 1.2,
    fontWeight: 700,
    letterSpacing: "-0.03em",
  },
  stepCircle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    borderRadius: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    fontSize: fontSize.small,
    fontWeight: 600,
    flexShrink: 0,
  },
  badgePill: {
    fontSize: fontSize.xsmall,
    fontWeight: 500,
    letterSpacing: "0.02em",
    textTransform: "uppercase" as const,
  },
  centeredBox: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});

/* ---------------------------------------------------------------------------
 * Route
 * ------------------------------------------------------------------------- */

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

/* ---------------------------------------------------------------------------
 * Showcase Helpers
 * ------------------------------------------------------------------------- */

function ShowcaseButtons() {
  return (
    <HStack gap="small" wrap>
      <Button size="small" variant="solid">
        Solid
      </Button>
      <Button size="small" variant="outline">
        Outline
      </Button>
      <Button size="small" variant="ghost">
        Ghost
      </Button>
    </HStack>
  );
}

function ShowcaseDialog() {
  return (
    <Dialog>
      <DialogTrigger render={<Button size="small" variant="outline" />}>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>Are you sure you want to proceed?</DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <Text variant="body2">
            This demonstrates a working dialog component using Base UI and StyleX.
          </Text>
        </DialogPanel>
        <DialogFooter>
          <HStack gap="small" justify="end" wrap>
            <DialogClose render={<Button size="small" variant="ghost" />}>Cancel</DialogClose>
            <Button size="small">Confirm</Button>
          </HStack>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function ShowcaseTabs() {
  return (
    <Tabs variant="underline" defaultValue="code">
      <TabsList>
        <TabsTab value="code">Code</TabsTab>
        <TabsTab value="preview">Preview</TabsTab>
      </TabsList>
      <TabsPanel value="code">
        <Box paddingY="small">
          <Text variant="body2" color="secondary">
            Install and customize components with zero configuration.
          </Text>
        </Box>
      </TabsPanel>
      <TabsPanel value="preview">
        <Box paddingY="small">
          <Text variant="body2" color="secondary">
            Live preview of your components as you build.
          </Text>
        </Box>
      </TabsPanel>
    </Tabs>
  );
}

function ShowcaseAccordion() {
  return (
    <AccordionRoot defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>What is Blenx UI?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <Box padding="small">
            <Text variant="body2" color="secondary">
              A registry-first React component library built with StyleX and Base UI.
            </Text>
          </Box>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>How do I install it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <Box padding="small">
            <Text variant="body2" color="secondary">
              Use the shadcn CLI to add components directly to your project.
            </Text>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </AccordionRoot>
  );
}

function ShowcaseAvatar() {
  return (
    <HStack gap="small" align="center">
      <Avatar size="medium" radius="full">
        <AvatarImage src="https://i.pravatar.cc/80?u=blenx" alt="User" />
        <AvatarFallback>BL</AvatarFallback>
      </Avatar>
      <VStack gap="xxsmall">
        <Text variant="body2" weight="semibold">
          Blenx UI
        </Text>
        <Badge variant="primary" style={styles.badgePill}>
          Active
        </Badge>
      </VStack>
    </HStack>
  );
}

function ShowcaseCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Start</CardTitle>
        <CardDescription>Get up and running in seconds.</CardDescription>
      </CardHeader>
      <CardBody>
        <Text variant="body2" color="secondary">
          Add components to your project with a single CLI command. No configuration required.
        </Text>
      </CardBody>
      <CardFooter>
        <Button size="small" variant="outline" fullWidth>
          Learn more <ArrowRightIcon weight="bold" />
        </Button>
      </CardFooter>
    </Card>
  );
}

function ShowcaseAlert() {
  return (
    <VStack gap="xsmall" fullWidth>
      <Alert variant="info" icon={<FileCode size={16} />}>
        <Text variant="body3">Components are copied to your project.</Text>
      </Alert>
      <Alert variant="success" icon={<CheckIcon size={16} />}>
        <Text variant="body3">Zero vendor lock-in guaranteed.</Text>
      </Alert>
      <Alert variant="warning" icon={<Gear size={16} />}>
        <Text variant="body3">Fully customizable source code.</Text>
      </Alert>
    </VStack>
  );
}

function ShowcaseInput() {
  return (
    <VStack gap="small" fullWidth>
      <Input placeholder="Type something…" />
      <HStack gap="small">
        <Button size="small" variant="solid">
          Submit
        </Button>
        <Button size="small" variant="ghost">
          Cancel
        </Button>
      </HStack>
    </VStack>
  );
}

const showcaseItems = [
  { title: "Buttons", component: ShowcaseButtons },
  { title: "Dialog", component: ShowcaseDialog },
  { title: "Tabs", component: ShowcaseTabs },
  { title: "Accordion", component: ShowcaseAccordion },
  { title: "Card", component: ShowcaseCard },
  { title: "Avatar & Badge", component: ShowcaseAvatar },
  { title: "Alert", component: ShowcaseAlert },
  { title: "Input", component: ShowcaseInput },
];

/* ---------------------------------------------------------------------------
 * Page
 * ------------------------------------------------------------------------- */

function HomeComponent() {
  return (
    <Container size="3xl" paddingX="medium" paddingY="massive">
      <VStack gap="xxxlarge">
        {/* ─── Hero ──────────────────────────────────────────────────── */}
        <Box maxWidth={720} style={styles.centeredBox}>
          <VStack gap="large" align="center">
            <Text variant="h1" align="center" style={styles.heroTitle}>
              The shadcn/ui experience
              <br />
              for StyleX.
            </Text>
            <Box maxWidth={640} style={styles.centeredBox}>
              <Text variant="body1" size="large" color="secondary" align="center">
                Accessible React components built with StyleX and Base UI. Copy the source. Own the
                code. Build without vendor lock-in.
              </Text>
            </Box>
            <HStack gap="medium" wrap justify="center">
              <Button
                size="large"
                variant="solid"
                radius="small"
                render={<Link to="/docs/installation" />}
              >
                Get Started <ArrowRightIcon weight="bold" />
              </Button>
              <Button
                size="large"
                variant="outline"
                radius="small"
                render={<Link to="/docs/installation" />}
              >
                Browse Components
              </Button>
              <Button
                size="large"
                variant="ghost"
                radius="small"
                render={
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View on GitHub"
                  />
                }
              >
                GitHub ↗
              </Button>
            </HStack>
            <HStack gap="small" wrap justify="center">
              <Badge variant="secondary" style={styles.badgePill}>
                Registry First
              </Badge>
              <Badge variant="primary" style={styles.badgePill}>
                StyleX Native
              </Badge>
              <Badge variant="secondary" style={styles.badgePill}>
                Base UI Powered
              </Badge>
              <Badge variant="primary" style={styles.badgePill}>
                Accessible
              </Badge>
              <Badge variant="secondary" style={styles.badgePill}>
                Type Safe
              </Badge>
            </HStack>
          </VStack>
        </Box>

        <Separator tone="subtle" />

        {/* ─── Install Section ───────────────────────────────────────── */}
        <Box maxWidth={640} style={styles.centeredBox}>
          <VStack gap="large" align="center">
            <VStack gap="small" align="center">
              <Text variant="h2" align="center" style={styles.sectionTitle}>
                Install only what you need.
              </Text>
              <Box maxWidth={560} style={styles.centeredBox}>
                <Text variant="body2" color="secondary" align="center" size="large">
                  Add components directly to your project and own the resulting source code.
                </Text>
              </Box>
            </VStack>
            <Box maxWidth={640} fullWidth>
              <CodeBlock code={INSTALL_COMMAND} language="bash" />
            </Box>
            <HStack gap="large" wrap justify="center">
              {installSteps.map((step) => (
                <HStack key={step.number} gap="small" align="center">
                  <Box style={styles.stepCircle}>{step.number}</Box>
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
            </HStack>
            <Alert variant="info" icon={<FileCode size={16} />}>
              <Text variant="body2">
                <strong>No bloated dependency.</strong> No vendor lock-in. No runtime styling
                library.
              </Text>
            </Alert>
          </VStack>
        </Box>

        <Separator tone="subtle" />

        {/* ─── Component Showcase ────────────────────────────────────── */}
        <VStack gap="large">
          <VStack gap="small" align="center">
            <Text variant="h2" align="center" style={styles.sectionTitle}>
              Components you'll actually use.
            </Text>
            <Box maxWidth={560} style={styles.centeredBox}>
              <Text variant="body2" color="secondary" align="center" size="large">
                Production-ready components built with accessibility and customization in mind. All
                interactive.
              </Text>
            </Box>
          </VStack>
          <Grid columns={3} gap="large">
            {showcaseItems.map((item) => {
              const DemoComponent = item.component;
              return (
                <Surface key={item.title} variant="outline" padding="medium">
                  <VStack gap="small">
                    <Text variant="body2" weight="semibold">
                      {item.title}
                    </Text>
                    <DemoComponent />
                  </VStack>
                </Surface>
              );
            })}
          </Grid>
        </VStack>

        <Separator tone="subtle" />

        {/* ─── Why Blenx ─────────────────────────────────────────────── */}
        <VStack gap="xlarge">
          <VStack gap="small" align="center">
            <Text variant="h2" align="center" style={styles.sectionTitle}>
              Why choose Blenx?
            </Text>
            <Box maxWidth={560} style={styles.centeredBox}>
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

        <Separator tone="subtle" />

        {/* ─── Comparison ────────────────────────────────────────────── */}
        <VStack gap="large">
          <VStack gap="small" align="center">
            <Text variant="h2" align="center" style={styles.sectionTitle}>
              How we compare
            </Text>
            <Box maxWidth={560} style={styles.centeredBox}>
              <Text variant="body2" color="secondary" align="center" size="large">
                See how Blenx compares to traditional UI libraries.
              </Text>
            </Box>
          </VStack>
          <Box maxWidth="lg" overflow="auto">
            <Table columnData={comparisonColumns} rowData={comparisonRows} rowKey="feature" />
          </Box>
        </VStack>

        <Separator tone="subtle" />

        {/* ─── Social Proof ──────────────────────────────────────────── */}
        <HStack gap="medium" justify="center" wrap>
          {metrics.map((metric) => (
            <Surface key={metric.label} variant="raised" paddingY="small" paddingX="medium">
              <HStack gap="xsmall" align="center">
                <Text variant="body2" weight="semibold">
                  {metric.value}
                </Text>
                <Text variant="body3" color="secondary">
                  {metric.label}
                </Text>
              </HStack>
            </Surface>
          ))}
        </HStack>

        <Separator tone="subtle" />

        {/* ─── Documentation ─────────────────────────────────────────── */}
        <VStack gap="large">
          <VStack gap="small" align="center">
            <Text variant="h2" align="center" style={styles.sectionTitle}>
              Documentation
            </Text>
            <Box maxWidth={480} style={styles.centeredBox}>
              <Text variant="body2" color="secondary" align="center" size="large">
                Everything you need to get started with Blenx UI.
              </Text>
            </Box>
          </VStack>
          <Grid columns={3} gap="medium">
            {docLinks.map((link) => (
              <Surface
                key={link.to + link.title}
                render={<Link to={link.to} />}
                variant="outline"
                padding="medium"
                interactive
              >
                <VStack gap="xxsmall">
                  <Text variant="h5">{link.title}</Text>
                  <Text variant="body2" color="secondary">
                    {link.desc}
                  </Text>
                </VStack>
              </Surface>
            ))}
          </Grid>
        </VStack>

        <Separator tone="subtle" />

        {/* ─── Final CTA ─────────────────────────────────────────────── */}
        <Box maxWidth={640} style={styles.centeredBox}>
          <VStack gap="large" align="center">
            <Box maxWidth={600} style={styles.centeredBox}>
              <Text variant="h2" align="center" style={styles.sectionTitle}>
                Build with components you actually own.
              </Text>
            </Box>
            <Box maxWidth={560} style={styles.centeredBox}>
              <Text variant="body1" size="large" color="secondary" align="center">
                Stop fighting your component library. Install what you need, customize everything,
                and scale with confidence.
              </Text>
            </Box>
            <HStack gap="medium" wrap justify="center">
              <Button
                size="large"
                variant="solid"
                radius="small"
                render={<Link to="/docs/installation" />}
              >
                Get Started <ArrowRightIcon weight="bold" />
              </Button>
              <Button
                size="large"
                variant="outline"
                radius="small"
                render={<Link to="/docs/installation" />}
              >
                View Components
              </Button>
              <Button
                size="large"
                variant="ghost"
                radius="small"
                render={
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View on GitHub"
                  />
                }
              >
                GitHub ↗
              </Button>
            </HStack>
          </VStack>
        </Box>

        <Box padding="massive" />
      </VStack>
    </Container>
  );
}
