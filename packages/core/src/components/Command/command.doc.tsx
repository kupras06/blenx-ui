import { HStack } from "../Stack/stack";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "./command";
import { Gear, Palette, FileCode } from "@phosphor-icons/react";

export function DefaultStory() {
  return (
    <Command>
      <CommandInput placeholder="Search…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandItem value="react">React</CommandItem>
        <CommandItem value="vue">Vue</CommandItem>
        <CommandItem value="svelte">Svelte</CommandItem>
        <CommandItem value="solid">Solid</CommandItem>
        <CommandItem value="angular">Angular</CommandItem>
      </CommandList>
    </Command>
  );
}

export function WithGroupsStory() {
  return (
    <Command>
      <CommandInput placeholder="Search…" />
      <CommandList>
        <CommandGroup heading="Frameworks">
          <CommandItem value="react">
            <HStack gap="sm" align="center">
              <FileCode size={16} />
              <span>React</span>
            </HStack>
          </CommandItem>
          <CommandItem value="vue">
            <HStack gap="sm" align="center">
              <FileCode size={16} />
              <span>Vue</span>
            </HStack>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Tools">
          <CommandItem value="vite">
            <HStack gap="sm" align="center">
              <Gear size={16} />
              <span>Vite</span>
            </HStack>
          </CommandItem>
          <CommandItem value="webpack">
            <HStack gap="sm" align="center">
              <Gear size={16} />
              <span>Webpack</span>
            </HStack>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Themes">
          <CommandItem value="light">
            <HStack gap="sm" align="center">
              <Palette size={16} />
              <span>Light</span>
            </HStack>
          </CommandItem>
          <CommandItem value="dark">
            <HStack gap="sm" align="center">
              <Palette size={16} />
              <span>Dark</span>
            </HStack>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}

export function WithSelectionStory() {
  return (
    <Command onItemSelect={(v) => console.log("selected:", v)}>
      <CommandInput placeholder="Pick a color…" />
      <CommandList>
        <CommandEmpty>No colors found.</CommandEmpty>
        <CommandItem value="red">Red</CommandItem>
        <CommandItem value="green">Green</CommandItem>
        <CommandItem value="blue">Blue</CommandItem>
        <CommandItem value="purple">Purple</CommandItem>
        <CommandItem value="orange">Orange</CommandItem>
        <CommandItem value="disabled-example" disabled>
          Disabled Item
        </CommandItem>
      </CommandList>
    </Command>
  );
}
