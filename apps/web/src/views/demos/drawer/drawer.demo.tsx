import {
  BellIcon,
  PaletteIcon,
  SettingsIcon,
  ShoppingCartIcon,
  Trash2Icon,
  UserIcon,
} from "@blenx-dev/core/icons";
import {
  Button,
  HStack,
  VStack,
  Text,
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerMenu,
  DrawerMenuCheckboxItem,
  DrawerMenuGroup,
  DrawerMenuGroupLabel,
  DrawerMenuItem,
  DrawerMenuRadioGroup,
  DrawerMenuRadioItem,
  DrawerMenuSeparator,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "@blenx-dev/core";

export function DrawerDemo() {
  return (
    <Drawer position="right">
      <DrawerTrigger
        render={
          <Button variant="outline">
            <SettingsIcon /> Settings
          </Button>
        }
      />
      <DrawerPopup>
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
          <DrawerDescription>Customize your application preferences.</DrawerDescription>
        </DrawerHeader>
        <DrawerPanel>
          <VStack gap="sm">
            <Text variant="body2">Notification preferences</Text>
            <Text variant="body2" color="secondary">
              Choose how you receive updates and alerts.
            </Text>
            <Text variant="body2">Theme customization</Text>
            <Text variant="body2" color="secondary">
              Adjust the appearance to match your workflow.
            </Text>
          </VStack>
        </DrawerPanel>
        <DrawerFooter>
          <HStack gap="sm" justify="end" wrap>
            <DrawerClose render={<Button variant="ghost" />}>Cancel</DrawerClose>
            <Button>Save</Button>
          </HStack>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}

export function LeftStory() {
  return (
    <Drawer position="left">
      <DrawerTrigger
        render={
          <Button variant="outline">
            <UserIcon /> Profile
          </Button>
        }
      />
      <DrawerPopup showCloseButton showBar>
        <DrawerHeader>
          <DrawerTitle>Profile</DrawerTitle>
          <DrawerDescription>Manage your personal information.</DrawerDescription>
        </DrawerHeader>
        <DrawerPanel>
          <VStack gap="sm">
            <Text variant="body2">Account details</Text>
            <Text variant="body2" color="secondary">
              Update your name, email, and avatar.
            </Text>
            <Text variant="body2">Preferences</Text>
            <Text variant="body2" color="secondary">
              Control your default workspace settings.
            </Text>
          </VStack>
        </DrawerPanel>
        <DrawerFooter>
          <HStack gap="sm" justify="end" wrap>
            <DrawerClose render={<Button variant="ghost" />}>Cancel</DrawerClose>
            <Button>Save</Button>
          </HStack>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}

export function BottomStory() {
  return (
    <Drawer position="bottom">
      <DrawerTrigger
        render={
          <Button variant="outline">
            <ShoppingCartIcon /> Cart
          </Button>
        }
      />
      <DrawerPopup showCloseButton showBar>
        <DrawerHeader>
          <DrawerTitle>Shopping Cart</DrawerTitle>
          <DrawerDescription>Review your items before checkout.</DrawerDescription>
        </DrawerHeader>
        <DrawerPanel>
          <VStack gap="sm">
            <Text variant="body2">Pro Plan</Text>
            <Text variant="body2" color="secondary">
              Billed monthly — $29/mo
            </Text>
            <Text variant="body2">Team Add-on</Text>
            <Text variant="body2" color="secondary">
              5 members — $15/mo
            </Text>
          </VStack>
        </DrawerPanel>
        <DrawerFooter>
          <HStack gap="sm" justify="end" wrap>
            <DrawerClose render={<Button variant="ghost" />}>Continue shopping</DrawerClose>
            <Button>Checkout</Button>
          </HStack>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}

export function TopStory() {
  return (
    <Drawer position="top">
      <DrawerTrigger
        render={
          <Button variant="outline">
            <BellIcon /> Notifications
          </Button>
        }
      />
      <DrawerPopup showCloseButton showBar>
        <DrawerHeader>
          <DrawerTitle>Notifications</DrawerTitle>
          <DrawerDescription>Stay up to date with what matters.</DrawerDescription>
        </DrawerHeader>
        <DrawerPanel>
          <VStack gap="sm">
            <Text variant="body2">New comment on your post</Text>
            <Text variant="body2" color="secondary">
              2 minutes ago
            </Text>
            <Text variant="body2">Your report is ready</Text>
            <Text variant="body2" color="secondary">
              1 hour ago
            </Text>
            <Text variant="body2">Weekly digest available</Text>
            <Text variant="body2" color="secondary">
              3 hours ago
            </Text>
          </VStack>
        </DrawerPanel>
        <DrawerFooter>
          <HStack gap="sm" justify="end" wrap>
            <DrawerClose render={<Button variant="ghost" />}>Close</DrawerClose>
            <Button variant="outline">Mark all read</Button>
          </HStack>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}

export function WithMenuStory() {
  return (
    <Drawer position="right">
      <DrawerTrigger
        render={
          <Button variant="outline">
            <SettingsIcon /> Preferences
          </Button>
        }
      />
      <DrawerPopup showCloseButton showBar>
        <DrawerHeader>
          <DrawerTitle>Preferences</DrawerTitle>
          <DrawerDescription>Fine-tune your experience.</DrawerDescription>
        </DrawerHeader>
        <DrawerPanel>
          <DrawerMenu>
            <DrawerMenuGroup>
              <DrawerMenuGroupLabel>Account</DrawerMenuGroupLabel>
              <DrawerMenuItem>Profile</DrawerMenuItem>
              <DrawerMenuItem>Security</DrawerMenuItem>
              <DrawerMenuItem variant="destructive">
                <Trash2Icon width={16} /> Delete account
              </DrawerMenuItem>
            </DrawerMenuGroup>
            <DrawerMenuSeparator />
            <DrawerMenuGroup>
              <DrawerMenuGroupLabel>Notifications</DrawerMenuGroupLabel>
              <DrawerMenuCheckboxItem defaultChecked>
                <BellIcon width={16} /> Push notifications
              </DrawerMenuCheckboxItem>
              <DrawerMenuCheckboxItem variant="switch" defaultChecked>
                Email digests
              </DrawerMenuCheckboxItem>
              <DrawerMenuCheckboxItem variant="switch">Marketing emails</DrawerMenuCheckboxItem>
            </DrawerMenuGroup>
            <DrawerMenuSeparator />
            <DrawerMenuGroup>
              <DrawerMenuGroupLabel>Appearance</DrawerMenuGroupLabel>
              <DrawerMenuRadioGroup defaultValue="system">
                <DrawerMenuRadioItem value="light">
                  <PaletteIcon width={16} /> Light
                </DrawerMenuRadioItem>
                <DrawerMenuRadioItem value="dark">
                  <PaletteIcon width={16} /> Dark
                </DrawerMenuRadioItem>
                <DrawerMenuRadioItem value="system">
                  <PaletteIcon width={16} /> System
                </DrawerMenuRadioItem>
              </DrawerMenuRadioGroup>
            </DrawerMenuGroup>
          </DrawerMenu>
        </DrawerPanel>
      </DrawerPopup>
    </Drawer>
  );
}

export function InsetStory() {
  return (
    <Drawer position="right">
      <DrawerTrigger
        render={
          <Button variant="outline">
            <BellIcon /> Alerts
          </Button>
        }
      />
      <DrawerPopup showCloseButton showBar variant="inset">
        <DrawerHeader>
          <DrawerTitle>Alerts</DrawerTitle>
          <DrawerDescription>Inset drawer with rounded corners.</DrawerDescription>
        </DrawerHeader>
        <DrawerPanel>
          <VStack gap="sm">
            <Text variant="body2">Critical: Disk space low</Text>
            <Text variant="body2" color="secondary">
              Your storage is almost full.
            </Text>
            <Text variant="body2">Warning: Backup overdue</Text>
            <Text variant="body2" color="secondary">
              Last backup was 7 days ago.
            </Text>
          </VStack>
        </DrawerPanel>
        <DrawerFooter>
          <HStack gap="sm" justify="end" wrap>
            <DrawerClose render={<Button variant="ghost" />}>Dismiss</DrawerClose>
            <Button>View all</Button>
          </HStack>
        </DrawerFooter>
      </DrawerPopup>
    </Drawer>
  );
}

export const demos = [
  { name: "Default", component: DrawerDemo },
  { name: "Left", component: LeftStory },
  { name: "Bottom", component: BottomStory },
  { name: "Top", component: TopStory },
  { name: "With Menu", component: WithMenuStory },
  { name: "Inset", component: InsetStory },
];
