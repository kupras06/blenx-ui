import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "./command";
import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import { FileCodeIcon, PaletteIcon, SettingsIcon } from "../../icons";

export function CommandBasic() {
  return (
    <VStack gap="sm">
      <Text variant="body2" color="secondary">
        A basic command palette with search filtering.
      </Text>
      <Command>
        <CommandInput placeholder="Search frameworks…" />
        <CommandList>
          <CommandEmpty>No frameworks found.</CommandEmpty>
          <CommandItem value="react">React</CommandItem>
          <CommandItem value="vue">Vue</CommandItem>
          <CommandItem value="svelte">Svelte</CommandItem>
          <CommandItem value="solid">Solid</CommandItem>
          <CommandItem value="angular">Angular</CommandItem>
        </CommandList>
      </Command>
    </VStack>
  );
}

export function CommandWithGroups() {
  return (
    <VStack gap="sm">
      <Text variant="body2" color="secondary">
        Command palette with grouped items and custom icons.
      </Text>
      <Command>
        <CommandInput placeholder="Search commands…" />
        <CommandList>
          <CommandEmpty>No results.</CommandEmpty>
          <CommandGroup heading="Frameworks">
            <CommandItem value="react">
              <HStack gap="sm" align="center">
                <FileCodeIcon width={16} height={16} />
                <span>React</span>
              </HStack>
            </CommandItem>
            <CommandItem value="vue">
              <HStack gap="sm" align="center">
                <FileCodeIcon width={16} height={16} />
                <span>Vue</span>
              </HStack>
            </CommandItem>
            <CommandItem value="svelte">
              <HStack gap="sm" align="center">
                <FileCodeIcon width={16} height={16} />
                <span>Svelte</span>
              </HStack>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Tools">
            <CommandItem value="vite">
              <HStack gap="sm" align="center">
                <SettingsIcon width={16} height={16} />
                <span>Vite</span>
              </HStack>
            </CommandItem>
            <CommandItem value="webpack">
              <HStack gap="sm" align="center">
                <SettingsIcon width={16} height={16} />
                <span>Webpack</span>
              </HStack>
            </CommandItem>
            <CommandItem value="turbopack">
              <HStack gap="sm" align="center">
                <SettingsIcon width={16} height={16} />
                <span>Turbopack</span>
              </HStack>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Themes">
            <CommandItem value="light">
              <HStack gap="sm" align="center">
                <PaletteIcon width={16} height={16} />
                <span>Light</span>
              </HStack>
            </CommandItem>
            <CommandItem value="dark">
              <HStack gap="sm" align="center">
                <PaletteIcon width={16} height={16} />
                <span>Dark</span>
              </HStack>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </VStack>
  );
}

export const demos = [
  { name: "Default", component: CommandBasic },
  { name: "With Groups", component: CommandWithGroups },
];
