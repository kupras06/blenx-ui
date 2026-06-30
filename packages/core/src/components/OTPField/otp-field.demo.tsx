"use client";

import { VStack } from "../Stack";
import { OTPField, OTPFieldInput, OTPFieldSeparator } from "./otp-field";

export function OTPFieldDemo() {
  return (
    <VStack>
      <OTPField length={6} defaultValue="">
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
      </OTPField>
    </VStack>
  );
}

export function OTPFieldGroupedDemo() {
  return (
    <VStack>
      <OTPField length={12} defaultValue="" validationType="alphanumeric">
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldSeparator />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldSeparator />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
        <OTPFieldInput />
      </OTPField>
    </VStack>
  );
}

export const demos = [
  { name: "Default", component: OTPFieldDemo },
  { name: "Grouped", component: OTPFieldGroupedDemo },
];
