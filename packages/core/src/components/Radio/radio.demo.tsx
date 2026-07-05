"use client";

import { useState } from "react";
import { RadioGroup, Radio } from "./radio";
import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Label } from "../Input";

export function RadioDemo() {
  const [value, setValue] = useState("starter");

  return (
    <VStack gap="md">
      <VStack gap="sm">
        <Text variant="h6">Plan Selection</Text>
        <Text variant="body2" color="secondary">
          Selected: {value}
        </Text>
        <RadioGroup value={value} onValueChange={setValue}>
          <HStack gap="sm">
            <HStack gap="sm" align="center">
              <Label>
                <Radio value="starter" />
                Starter
              </Label>
            </HStack>
            <HStack gap="sm" align="center">
              <Radio value="pro" />
              <VStack gap="xs">
                <Text variant="body2">Pro</Text>
                <Text variant="caption" color="secondary">
                  $12/mo — 10 projects
                </Text>
              </VStack>
            </HStack>
            <HStack gap="sm" align="center">
              <Radio value="enterprise" />
              <VStack gap="xs">
                <Text variant="body2">Enterprise</Text>
                <Text variant="caption" color="secondary">
                  $49/mo — unlimited projects
                </Text>
              </VStack>
            </HStack>
            <HStack gap="sm" align="center">
              <Radio value="legacy" disabled />
              <VStack gap="xs">
                <Text variant="body2" color="secondary">
                  Legacy (discontinued)
                </Text>
                <Text variant="caption" color="secondary">
                  No longer available
                </Text>
              </VStack>
            </HStack>
          </HStack>
        </RadioGroup>
      </VStack>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: RadioDemo }];
