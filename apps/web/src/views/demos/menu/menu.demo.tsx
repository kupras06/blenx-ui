import {
  Button,
  Menu,
  MenuGroupLabel,
  MenuItem,
  MenuPopup,
  MenuSeparator,
  MenuShortcut,
  MenuTrigger,
} from "@blenx-dev/core";

export function DefaultStory() {
  return (
    <Menu>
      <MenuTrigger render={<Button variant="outline">Open Menu</Button>} />
      <MenuPopup align="start" sideOffset={4}>
        <MenuItem onSelect={() => {}}>Profile</MenuItem>
        <MenuItem onSelect={() => {}}>
          Settings
          <MenuShortcut>⌘,</MenuShortcut>
        </MenuItem>
        <MenuItem onSelect={() => {}}>
          Keyboard shortcuts
          <MenuShortcut>⌘K</MenuShortcut>
        </MenuItem>
        <MenuSeparator />
        <MenuGroupLabel>Account</MenuGroupLabel>
        <MenuItem variant="destructive" onSelect={() => {}}>
          Delete account
        </MenuItem>
      </MenuPopup>
    </Menu>
  );
}
export const demos = [
  {
    name: "Default",
    component: DefaultStory,
  },
];
