import { SearchIcon, UserIcon } from "@blenx-dev/core/icons";
import {
  Button,
  Stack,
  Text,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@blenx-dev/core";

export function DefaultStory() {
  return (
    <Stack gap="md">
      <Text variant="h4">With icon and button</Text>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <SearchIcon width={16} height={16} />
        </InputGroupAddon>
        <InputGroupInput placeholder="Search..." />
        <InputGroupAddon align="inline-end">
          <Button size="sm" variant="ghost">
            Go
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupAddon align="block-start">
          <SearchIcon width={16} height={16} />
        </InputGroupAddon>
        <InputGroupTextarea placeholder="Search..." />
        <InputGroupAddon align="block-end">
          <Button size="sm" variant="ghost">
            Go
          </Button>
        </InputGroupAddon>
      </InputGroup>
      <Text variant="h4">With text addon</Text>
      <InputGroup>
        <InputGroupAddon align="inline-start">
          <UserIcon width={16} height={16} />
        </InputGroupAddon>
        <InputGroupInput placeholder="Username" aria-invalid />
        <InputGroupAddon align="inline-end">
          <InputGroupText>@example.com</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
    </Stack>
  );
}

export const demos = [{ name: "Input group", component: DefaultStory }];
