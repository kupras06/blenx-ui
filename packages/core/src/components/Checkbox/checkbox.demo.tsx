"use client";

import { useState } from "react";
import { Checkbox, CheckboxGroup } from "./checkbox";
import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { Label } from "../Input";

export function CheckboxDemo() {
  const [checked, setChecked] = useState(false);

  return (
    <VStack gap="md">
      <VStack gap="sm">
        <Text variant="h6">Individual Checkboxes</Text>
        <HStack gap="lg" align="center">
          <HStack gap="sm" align="center">
            <Label>
              <Checkbox checked={checked} onCheckedChange={setChecked} />
              {checked ? "Checked" : "Unchecked"}
            </Label>
          </HStack>
          <HStack gap="sm" align="center">
            <Checkbox defaultChecked />
            <Label>Default Checked</Label>
          </HStack>
          <HStack gap="sm" align="center">
            <Label>
              <Checkbox indeterminate />
              Indeterminate
            </Label>
          </HStack>
          <HStack gap="sm" align="center">
            <Label>
              <Checkbox disabled />
              Disabled
            </Label>
          </HStack>
          <HStack gap="sm" align="center">
            <Label>
              <Checkbox disabled defaultChecked />
              Disabled Checked
            </Label>
          </HStack>
        </HStack>
      </VStack>

      <VStack gap="sm">
        <Text variant="h6">Checkbox Group</Text>
        <CheckboxGroup defaultValue={["react"]}>
          <HStack gap="lg" align="center">
            <HStack gap="sm" align="center">
              <Label>
                <Checkbox value="react" />
                React
              </Label>
            </HStack>
            <HStack gap="sm" align="center">
              <Label>
                <Checkbox value="vue" />
                Vue
              </Label>
            </HStack>
            <HStack gap="sm" align="center">
              <Label>
                <Checkbox value="svelte" />
                Svelte
              </Label>
            </HStack>
            <HStack gap="sm" align="center">
              <Label color="secondary">
                Solid (disabled)
                <Checkbox value="solid" disabled />
              </Label>
            </HStack>
          </HStack>
        </CheckboxGroup>
      </VStack>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: CheckboxDemo }];
