import {
  CheckIcon,
  CircleAlertIcon,
  InfoIcon,
  SendIcon,
  UserIcon,
  XIcon,
} from "@blenx-dev/core/icons";
import { HStack, VStack, Text, Icon } from "@blenx-dev/core";

export function IconDemo() {
  return (
    <VStack gap="md">
      <VStack gap="sm">
        <Text variant="h6">Sizes</Text>
        <HStack align="center" gap="sm">
          <Icon>
            <UserIcon width={24} height={24} />
          </Icon>
          <Icon>
            <UserIcon width={24} height={24} />
          </Icon>
          <Icon>
            <UserIcon />
          </Icon>
          <Icon>
            <UserIcon width={44} height={44} />
          </Icon>
          <Icon>
            <UserIcon width={64} height={64} />
          </Icon>
        </HStack>
      </VStack>

      <VStack gap="sm">
        <Text variant="h6">Colors</Text>
        <HStack align="center" gap="sm">
          <Icon color="primary">
            <SendIcon />
          </Icon>
          <Icon color="secondary">
            <SendIcon />
          </Icon>
          <Icon>
            <SendIcon />
          </Icon>
          <Icon color="error">
            <XIcon />
          </Icon>
          <Icon color="success">
            <CheckIcon />
          </Icon>
          <Icon color="warning">
            <CircleAlertIcon />
          </Icon>
          <Icon color="info">
            <InfoIcon />
          </Icon>
        </HStack>
      </VStack>

      <VStack gap="sm">
        <Text variant="h6">Background Colors</Text>
        <HStack align="center" gap="sm">
          <Icon backgroundColor="primary" color="primary" radius="sm">
            <InfoIcon />
          </Icon>
          <Icon backgroundColor="error" color="error" radius="sm">
            <XIcon />
          </Icon>
          <Icon backgroundColor="success" color="success" radius="sm">
            <CheckIcon />
          </Icon>
          <Icon backgroundColor="warning" color="warning" radius="sm">
            <CircleAlertIcon />
          </Icon>
          <Icon backgroundColor="info" color="info" radius="sm">
            <InfoIcon />
          </Icon>
        </HStack>
      </VStack>

      <VStack gap="sm">
        <Text variant="h6">Color Inherited from Parent</Text>
        <HStack align="center" gap="sm">
          <Icon>
            <UserIcon />
          </Icon>
        </HStack>
      </VStack>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: IconDemo }];
