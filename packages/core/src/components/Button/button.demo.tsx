import { ChevronRightIcon, PlayIcon } from "../../icons";
import { HStack, Stack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Button } from "./button";

export function ButtonDemo() {
  return (
    <VStack gap="md">
      <Stack gap="sm">
        <Text variant="h6">Variant + Intent</Text>
        <HStack wrap>
          <Button variant="solid" intent="primary">
            Solid Primary
          </Button>
          <Button variant="solid" intent="neutral">
            Solid Neutral
          </Button>
          <Button variant="solid" intent="success">
            Solid Success
          </Button>
          <Button variant="solid" intent="warning">
            Solid Warning
          </Button>
          <Button variant="solid" intent="danger">
            Solid Danger
          </Button>
          <Button variant="solid" intent="info">
            Solid Info
          </Button>
        </HStack>
      </Stack>

      <Stack gap="sm">
        <Text variant="h6">Outline + Intents</Text>
        <HStack wrap>
          <Button variant="outline" intent="primary">
            Outline
          </Button>
          <Button variant="outline" intent="danger">
            Outline Danger
          </Button>
          <Button variant="outline" intent="success">
            Outline Success
          </Button>
        </HStack>
      </Stack>

      <Stack gap="sm">
        <Text variant="h6">Ghost + Intents</Text>
        <HStack wrap>
          <Button variant="ghost" intent="primary">
            Ghost
          </Button>
          <Button variant="ghost" intent="danger">
            Ghost Danger
          </Button>
          <Button variant="ghost" intent="neutral">
            Ghost Neutral
          </Button>
        </HStack>
      </Stack>

      <Stack gap="sm">
        <Text variant="h6">Soft + Intents</Text>
        <HStack wrap>
          <Button variant="soft" intent="warning">
            Soft Warning
          </Button>
          <Button variant="soft" intent="success">
            Soft Success
          </Button>
          <Button variant="soft" intent="danger">
            Soft Danger
          </Button>
        </HStack>
      </Stack>

      <Stack gap="sm">
        <Text variant="h6">Link + Intents</Text>
        <HStack wrap>
          <Button variant="link" intent="primary">
            Link
          </Button>
          <Button variant="link" intent="neutral">
            Link Neutral
          </Button>
          <Button variant="link" intent="danger">
            Link Danger
          </Button>
        </HStack>
      </Stack>

      <Stack gap="sm">
        <Text variant="h6">Sizes</Text>
        <HStack wrap>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </HStack>
      </Stack>

      <Stack gap="sm">
        <Text variant="h6">With Icons</Text>
        <HStack wrap>
          <Button>
            <PlayIcon />
            Play
          </Button>
          <Button variant="outline" intent="neutral">
            Next
            <ChevronRightIcon />
          </Button>
        </HStack>
      </Stack>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: ButtonDemo }];
