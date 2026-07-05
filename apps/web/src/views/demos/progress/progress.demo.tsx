import { useEffect, useState } from "react";
import { HStack, VStack, Text, Progress, ProgressLabel, ProgressValue } from "@blenx-dev/core";

export function IndeterminateStory() {
  return (
    <VStack gap="sm">
      <Text variant="body2">Loading...</Text>
      <Progress value={null} />
    </VStack>
  );
}

export function DeterminateStory() {
  return (
    <VStack gap="sm">
      <Text variant="body2">Upload progress — 65%</Text>
      <Progress value={65} />
    </VStack>
  );
}

export function ProgressDemo() {
  return (
    <Progress value={42}>
      <ProgressLabel>Downloading assets</ProgressLabel>
      <Progress value={42} />
      <HStack justify="between">
        <Text variant="body2" color="secondary">
          42 of 100 files
        </Text>
        <ProgressValue />
      </HStack>
    </Progress>
  );
}

export function AnimatedStory() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setValue((prev) => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <VStack gap="sm">
      <ProgressLabel>Processing...</ProgressLabel>
      <Progress value={value} />
      <HStack justify="between">
        <Text variant="body2" color="secondary">
          {value}% complete
        </Text>
        <ProgressValue />
      </HStack>
    </VStack>
  );
}

export const demos = [
  { name: "Indeterminate", component: IndeterminateStory },
  { name: "Determinate", component: DeterminateStory },
  { name: "With Label", component: ProgressDemo },
  { name: "Animated", component: AnimatedStory },
];
