import { VStack } from "@blenx-dev/ui/components/Stack/stack";
import { LoadingState01 } from "./loading-state-01";

export function LoadingState01TextDemo() {
  return <LoadingState01 pattern="text" lines={4} label="Loading content" />;
}

export function LoadingState01CardDemo() {
  return <LoadingState01 pattern="card" label="Loading card" />;
}

export function LoadingState01TableDemo() {
  return <LoadingState01 pattern="table" rows={5} label="Loading table data" />;
}

export function LoadingState01AvatarDemo() {
  return <LoadingState01 pattern="avatar" label="Loading profile" />;
}

export function LoadingState01AllDemo() {
  return (
    <VStack gap="lg">
      <LoadingState01 pattern="text" lines={3} label="Loading text" />
      <LoadingState01 pattern="card" label="Loading card" />
      <LoadingState01 pattern="table" rows={3} label="Loading table" />
      <LoadingState01 pattern="avatar" label="Loading profile" />
      <LoadingState01 pattern="text" lines={2} showProgress label="Loading with progress" />
    </VStack>
  );
}

export const demos = [
  { name: "Text", component: LoadingState01TextDemo },
  { name: "Card", component: LoadingState01CardDemo },
  { name: "Table", component: LoadingState01TableDemo },
  { name: "Avatar", component: LoadingState01AvatarDemo },
  { name: "All", component: LoadingState01AllDemo },
];
