import { Box, HStack, Input, Text, Textarea, VStack } from "@blenx-dev/core";
import {
  BadgeDemoSolid,
  ProfileCardDemo,
  DialogDemo,
  AvatarDemo,
  BreadcrumbDemo,
  ProgressDemo,
  RadioDemo,
  SelectDemo,
  ButtonDemoSolids,
  ButtonDemoStates,
  CheckboxDemo,
  SwitchDemo,
  AlertDemo,
  DrawerDemo,
  AccordionDemo,
} from "@blenx-dev/core/demos";

import { memo } from "react";

export const ComponentShowcase = memo(() => (
  <VStack gap="xl">
    <VStack withBorder>
      <Text variant="h3">Buttons</Text>
      <ButtonDemoSolids />
      <ButtonDemoStates />
    </VStack>

    {/* Forms */}
    <VStack withBorder>
      <Text variant="h3">Forms</Text>
      <VStack maxWidth="sm">
        <Input placeholder="Enter text..." size="default" />
        <Textarea placeholder="Textarea..." rows={3} />
        <SelectDemo />
      </VStack>
      <HStack align="center">
        <SwitchDemo />
      </HStack>
      <RadioDemo />
      <CheckboxDemo />
    </VStack>

    {/* Navigation */}
    <Box withBorder>
      <Text variant="h3" marginBottom={"md"}>
        Navigations
      </Text>
      <BreadcrumbDemo />
    </Box>

    <VStack withBorder>
      <Text variant="h3">Feedback</Text>
      <AlertDemo />
      <ProgressDemo />
    </VStack>

    {/* Data Display */}
    <VStack>
      <Text variant="h3">Data Display</Text>
      <ProfileCardDemo />
      <BadgeDemoSolid />
      <AvatarDemo />
    </VStack>

    {/* Overlays */}
    <VStack>
      <Text variant="h3">Overlays</Text>
      <DialogDemo />
      <DrawerDemo />
    </VStack>
    <AccordionDemo />
  </VStack>
));
