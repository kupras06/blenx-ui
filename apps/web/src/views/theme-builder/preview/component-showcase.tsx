import {
  Alert,
  Box,
  Button,
  Checkbox,
  HStack,
  Input,
  Label,
  RadioGroup,
  RadioGroupItem,
  Switch,
  Text,
  Textarea,
  VStack,
} from "@blenx-dev/core";
import { BadgeDemoSolid } from "@blenx-dev/core/components/Badge/badge.demo";
import { ProfileCardDemo } from "@blenx-dev/core/components/Card/card.demo";
import { DialogDemo } from "@blenx-dev/core/components/Dialog/dialog.demo";
import { AvatarDemo } from "@blenx-dev/core/components/Avatar/avatar.demo";
import { BreadcrumbDemo } from "@blenx-dev/core/components/Breadcrumbs/breadcrumbs.demo";
import { ProgressDemo } from "@blenx-dev/core/components/Progress/progress.demo";

import { memo } from "react";
import { SelectDemo } from "@blenx-dev/core/components/Select/select.demo";

export const ComponentShowcase = memo(() => (
  <VStack gap="lg">
    <VStack withBorder padding="sm">
      <Text variant="h3">Buttons</Text>
      <HStack>
        <Button variant="solid">Primary</Button>
        <Button variant="soft">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
        <Button intent="danger">Destructive</Button>
      </HStack>
      <HStack>
        <Button variant="solid" loading>
          Loading
        </Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
        <Button variant="solid" size="sm">
          Small
        </Button>
        <Button variant="solid" size="md">
          Medium
        </Button>
        <Button variant="solid" size="lg">
          Large
        </Button>
      </HStack>
    </VStack>

    {/* Forms */}
    <VStack withBorder padding="sm">
      <Text variant="h3">Forms</Text>
      <VStack maxWidth="sm">
        <Input placeholder="Enter text..." size="default" />
        <Textarea placeholder="Textarea..." rows={3} />
        <SelectDemo />
      </VStack>
      <HStack align="center">
        <Switch defaultChecked />
        <Text variant="body2">Toggle me</Text>
      </HStack>
      <HStack>
        <RadioGroup defaultValue="option1">
          <Label>
            <RadioGroupItem value="option1" /> Option A
          </Label>
          <Label>
            <RadioGroupItem value="option2" /> Option B
          </Label>
          <Label>
            <RadioGroupItem value="option3" /> Option C
          </Label>
        </RadioGroup>
      </HStack>
      <HStack>
        <Label>
          <Checkbox />
          Check me
        </Label>
      </HStack>
    </VStack>

    {/* Navigation */}
    <Box withBorder padding="sm">
      <Text variant="h3" marginBottom={"md"}>
        Navigations
      </Text>
      <BreadcrumbDemo />
    </Box>

    <VStack withBorder padding="sm">
      <Text variant="h3">Feedback</Text>
      <Alert variant="info">This is an info message.</Alert>
      <Alert variant="success">Operation completed successfully!</Alert>
      <Alert variant="warning">Please review your settings.</Alert>
      <Alert variant="error">Something went wrong.</Alert>
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
    <Box>
      <Text variant="h3">Overlays</Text>
      <DialogDemo />
    </Box>
  </VStack>
));
