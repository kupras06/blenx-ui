"use client";

import { useState } from "react";
import { Slider, SliderValue, HStack, VStack, Text } from "@blenx-dev/core";

export function SliderDemo() {
  const [single, setSingle] = useState(40);
  const [range, setRange] = useState<number[]>([20, 70]);

  return (
    <VStack gap="lg">
      <VStack gap="sm">
        <Text variant="h6">Single Slider</Text>
        <HStack gap="md" align="center">
          <Slider value={single} onValueChange={(v) => setSingle(v as number)} min={0} max={100} />
          <SliderValue />
        </HStack>
        <Text variant="body2" color="secondary">
          Value: {single}
        </Text>
      </VStack>

      <VStack gap="sm">
        <Text variant="h6">Range Slider</Text>
        <HStack gap="md" align="center">
          <Slider value={range} onValueChange={(v) => setRange(v as number[])} min={0} max={100} />
          <SliderValue />
        </HStack>
        <Text variant="body2" color="secondary">
          Values: {range.join(" – ")}
        </Text>
      </VStack>

      <VStack gap="sm">
        <Text variant="h6">Vertical Slider</Text>
        <HStack gap="xl" align="center" style={{ height: 180 }}>
          <Slider defaultValue={60} orientation="vertical" min={0} max={100} />
          <Slider defaultValue={[25, 75]} orientation="vertical" min={0} max={100} />
        </HStack>
      </VStack>

      <VStack gap="sm">
        <Text variant="h6">Disabled Slider</Text>
        <HStack gap="md" align="center">
          <Slider defaultValue={60} disabled min={0} max={100} />
          <SliderValue />
        </HStack>
      </VStack>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: SliderDemo }];
