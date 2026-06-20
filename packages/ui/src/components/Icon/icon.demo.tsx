import {
  CheckIcon,
  InfoIcon,
  WarningIcon,
  XIcon,
  UserIcon,
  PaperPlaneTiltIcon,
} from "@phosphor-icons/react";
import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Icon } from "./icon";

export function IconDemo() {
  return (
    <VStack gap="medium">
      <VStack gap="small">
        <Text variant="h6">Sizes</Text>
        <HStack align="center" gap="small">
          <Icon>
            <UserIcon size={24} />
          </Icon>
          <Icon>
            <UserIcon size={24} />
          </Icon>
          <Icon>
            <UserIcon />
          </Icon>
          <Icon>
            <UserIcon size={44} />
          </Icon>
          <Icon>
            <UserIcon size={64} />
          </Icon>
        </HStack>
      </VStack>

      <VStack gap="small">
        <Text variant="h6">Colors</Text>
        <HStack align="center" gap="small">
          <Icon color="primary">
            <PaperPlaneTiltIcon />
          </Icon>
          <Icon color="secondary">
            <PaperPlaneTiltIcon />
          </Icon>
          <Icon>
            <PaperPlaneTiltIcon />
          </Icon>
          <Icon color="error">
            <XIcon />
          </Icon>
          <Icon color="success">
            <CheckIcon />
          </Icon>
          <Icon color="warning">
            <WarningIcon />
          </Icon>
          <Icon color="info">
            <InfoIcon />
          </Icon>
        </HStack>
      </VStack>

      <VStack gap="small">
        <Text variant="h6">Background Colors</Text>
        <HStack align="center" gap="small">
          <Icon backgroundColor="primary" color="primary" radius="small">
            <InfoIcon />
          </Icon>
          <Icon backgroundColor="error" color="error" radius="small">
            <XIcon />
          </Icon>
          <Icon backgroundColor="success" color="success" radius="small">
            <CheckIcon />
          </Icon>
          <Icon backgroundColor="warning" color="warning" radius="small">
            <WarningIcon />
          </Icon>
          <Icon backgroundColor="info" color="info" radius="small">
            <InfoIcon />
          </Icon>
        </HStack>
      </VStack>

      <VStack gap="small">
        <Text variant="h6">Color Inherited from Parent</Text>
        <HStack align="center" gap="small">
          <Icon>
            <UserIcon />
          </Icon>
        </HStack>
      </VStack>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: IconDemo }];
