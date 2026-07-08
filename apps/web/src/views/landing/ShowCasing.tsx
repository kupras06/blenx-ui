import {
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
  Accordion,
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
  Grid,
  HStack,
  Input,
  Surface,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
  VStack,
} from "@blenx-dev/core";
import { DialogDemo } from "@/views/demos/dialog/dialog.demo";
import { ArrowRightIcon, CheckIcon, FileCodeIcon, GearIcon } from "@phosphor-icons/react";

function ShowcaseAccordion() {
  return (
    <Accordion defaultValue={["item-1"]}>
      <AccordionItem value="item-1">
        <AccordionHeader>
          <AccordionTrigger>What is Blenx UI?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <Box padding="sm">
            <Text variant="body2" color="secondary">
              A registry-first React component library built with Vanilla Extract and Base UI.
            </Text>
          </Box>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>
          <AccordionTrigger>How do I install it?</AccordionTrigger>
        </AccordionHeader>
        <AccordionPanel>
          <Box padding="sm">
            <Text variant="body2" color="secondary">
              Use the shadcn CLI to add components directly to your project.
            </Text>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
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
        <Box paddingY="sm">
          <Text variant="body2" color="secondary">
            Install and customize components with zero configuration.
          </Text>
        </Box>
      </TabsPanel>
      <TabsPanel value="preview">
        <Box paddingY="sm">
          <Text variant="body2" color="secondary">
            Live preview of your components as you build.
          </Text>
        </Box>
      </TabsPanel>
    </Tabs>
  );
}
function ShowcaseButtons() {
  return (
    <HStack gap="sm" wrap>
      <Button size="sm" variant="solid">
        Solid
      </Button>
      <Button size="sm" variant="outline">
        Outline
      </Button>
      <Button size="sm" variant="ghost">
        Ghost
      </Button>
    </HStack>
  );
}

function ShowcaseInput() {
  return (
    <VStack gap="sm" fullWidth>
      <Input placeholder="Type something…" />
      <HStack gap="sm">
        <Button size="sm" variant="solid">
          Submit
        </Button>
        <Button size="sm" variant="ghost">
          Cancel
        </Button>
      </HStack>
    </VStack>
  );
}
function ShowcaseAlert() {
  return (
    <VStack gap="xs" fullWidth>
      <Alert palette="info" icon={<FileCodeIcon size={16} />}>
        <Text variant="body3">Components are copied to your project.</Text>
      </Alert>
      <Alert palette="success" icon={<CheckIcon size={16} />}>
        <Text variant="body3">Zero vendor lock-in guaranteed.</Text>
      </Alert>
      <Alert palette="warning" icon={<GearIcon size={16} />}>
        <Text variant="body3">Fully customizable source code.</Text>
      </Alert>
    </VStack>
  );
}
function ShowcaseAvatar() {
  return (
    <HStack gap="sm" align="center">
      <Avatar size="md" radius="full">
        <AvatarImage src="https://i.pravatar.cc/80?u=blenx" alt="User" />
        <AvatarFallback>BL</AvatarFallback>
      </Avatar>
      <VStack gap="xxs">
        <Text variant="body2" weight="semibold">
          Blenx UI
        </Text>
        <Badge palette="primary">Active</Badge>
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
        <Button size="sm" variant="outline" fullWidth>
          Learn more <ArrowRightIcon weight="bold" />
        </Button>
      </CardFooter>
    </Card>
  );
}

const showcaseItems = [
  { title: "Buttons", component: ShowcaseButtons },
  { title: "Dialog", component: DialogDemo },
  { title: "Tabs", component: ShowcaseTabs },
  { title: "Accordion", component: ShowcaseAccordion },
  { title: "Card", component: ShowcaseCard },
  { title: "Avatar & Badge", component: ShowcaseAvatar },
  { title: "Alert", component: ShowcaseAlert },
  { title: "Input", component: ShowcaseInput },
];
export function ShowCaseComponents() {
  return (
    <VStack gap="lg">
      <VStack gap="sm" align="center">
        <Text variant="h2" align="center" size="xl">
          Components you'll actually use.
        </Text>
        <Box maxWidth={560}>
          <Text variant="body2" color="secondary" align="center" size="lg">
            Production-ready components built with accessibility and customization in mind. All
            interactive.
          </Text>
        </Box>
      </VStack>
      <Grid columns={{ base: 1, md: 2, lg: 3 }} gap="lg">
        {showcaseItems.map((item) => {
          const DemoComponent = item.component;
          return (
            <Surface key={item.title} variant="outline" padding="md">
              <VStack gap="sm">
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
  );
}
