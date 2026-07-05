import { Stack } from "../Stack/stack";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

export function AvatarDemo() {
  return (
    <Stack gap="md" direction="row" align="center">
      <Avatar size="sm">
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar size="md">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar size="lg">
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>
      <Avatar size="xl">
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>
    </Stack>
  );
}

export function WithImageStory() {
  return (
    <Stack gap="md" direction="row" align="center">
      <Avatar size="lg">
        <AvatarImage src="https://i.pravatar.cc/150?u=avatar" alt="User avatar" />
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    </Stack>
  );
}

export const demos = [
  { name: "Default", component: AvatarDemo },
  { name: "With Image", component: WithImageStory },
];
