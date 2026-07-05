import { Box, HStack, Input, Text, Textarea, VStack } from "@blenx-dev/core";
import { AlertDemo } from "@/views/demos/alert/alert.demo";
import { AccordionDemo } from "@/views/demos/accordion/accordion.demo";
import { AvatarDemo } from "@/views/demos/avatar/avatar.demo";
import { BadgeDemoSolid } from "@/views/demos/badge/badge.demo";
import { BreadcrumbDemo } from "@/views/demos/breadcrumb/breadcrumbs.demo";
import { ButtonDemoSolids, ButtonDemoStates } from "@/views/demos/button/button.demo";
import { CheckboxDemo } from "@/views/demos/checkbox/checkbox.demo";
import { DialogDemo } from "@/views/demos/dialog/dialog.demo";
import { DrawerDemo } from "@/views/demos/drawer/drawer.demo";
import { ProfileCardDemo } from "@/views/demos/card/card.demo";
import { ProgressDemo } from "@/views/demos/progress/progress.demo";
import { RadioDemo } from "@/views/demos/radio/radio.demo";
import { SelectDemo } from "@/views/demos/select/select.demo";
import { SwitchDemo } from "@/views/demos/switch/switch.demo";

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
