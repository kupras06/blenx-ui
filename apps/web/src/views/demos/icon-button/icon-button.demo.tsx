import { BellIcon, RefreshCcwIcon, SendIcon, Trash2Icon } from "@blenx-dev/core/icons";
import { HStack, VStack, Text, IconButton } from "@blenx-dev/core";

export function IconButtonDemo() {
  return (
    <VStack gap="md">
      <VStack gap="sm">
        <Text variant="h6">Variants</Text>
        <HStack wrap>
          <IconButton aria-label="Send" variant="solid">
            <SendIcon />
          </IconButton>
          <IconButton aria-label="Send" variant="soft">
            <SendIcon />
          </IconButton>
          <IconButton aria-label="Send" variant="outline">
            <SendIcon />
          </IconButton>
          <IconButton aria-label="Send" variant="ghost">
            <SendIcon />
          </IconButton>
          <IconButton aria-label="Send" variant="soft">
            <SendIcon />
          </IconButton>
          <IconButton aria-label="Send" variant="link">
            <SendIcon />
          </IconButton>
        </HStack>
      </VStack>

      <VStack gap="sm">
        <Text variant="h6">Intents</Text>
        <HStack wrap>
          <IconButton aria-label="Send" intent="primary">
            <SendIcon />
          </IconButton>
          <IconButton aria-label="Delete" intent="danger">
            <Trash2Icon />
          </IconButton>
          <IconButton aria-label="Success" intent="success">
            <BellIcon />
          </IconButton>
          <IconButton aria-label="Warning" intent="warning">
            <BellIcon />
          </IconButton>
          <IconButton aria-label="Info" intent="info">
            <BellIcon />
          </IconButton>
        </HStack>
      </VStack>

      <VStack gap="sm">
        <Text variant="h6">Variant + Intent</Text>
        <HStack wrap>
          <IconButton aria-label="Delete" variant="ghost" intent="danger">
            <Trash2Icon />
          </IconButton>
          <IconButton aria-label="Delete" variant="outline" intent="danger">
            <Trash2Icon />
          </IconButton>
          <IconButton aria-label="Delete" variant="soft" intent="danger">
            <Trash2Icon />
          </IconButton>
        </HStack>
      </VStack>

      <VStack gap="sm">
        <Text variant="h6">Sizes</Text>
        <HStack wrap align="center">
          <IconButton aria-label="Send" variant="outline">
            <SendIcon />
          </IconButton>
          <IconButton aria-label="Send" variant="outline">
            <SendIcon />
          </IconButton>
          <IconButton aria-label="Send" variant="outline">
            <SendIcon />
          </IconButton>
          <IconButton aria-label="Send" variant="outline">
            <SendIcon />
          </IconButton>
        </HStack>
      </VStack>

      <VStack gap="sm">
        <Text variant="h6">States</Text>
        <HStack wrap>
          <IconButton aria-label="Refresh" loading>
            <RefreshCcwIcon />
          </IconButton>
          <IconButton aria-label="Send" disabled>
            <SendIcon />
          </IconButton>
        </HStack>
      </VStack>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: IconButtonDemo }];
