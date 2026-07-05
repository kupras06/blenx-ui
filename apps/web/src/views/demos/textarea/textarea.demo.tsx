"use client";

import { VStack, Text, Textarea } from "@blenx-dev/core";

export function TextareaDemo() {
  return (
    <VStack gap="md">
      <VStack gap="sm">
        <Text variant="h6">Sizes</Text>
        <Textarea size="sm" placeholder="Small textarea" />
        <Textarea placeholder="Default textarea" />
        <Textarea size="lg" placeholder="Large textarea" />
      </VStack>

      <VStack gap="sm">
        <Text variant="h6">States</Text>
        <Textarea placeholder="Normal textarea" />
        <Textarea placeholder="Disabled textarea" disabled />
        <Textarea
          placeholder="With default value"
          defaultValue="This is some pre-filled content in the textarea."
        />
      </VStack>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: TextareaDemo }];
