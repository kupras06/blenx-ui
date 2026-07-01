import { SettingsIcon } from "../../icons";
import { Button } from "../Button/button";
import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import {
  Drawer,
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerPanel,
  DrawerPopup,
  DrawerTitle,
  DrawerTrigger,
} from "./drawer";

export function DrawerDemo() {
  return (
    <VStack gap="md">
      <Text variant="h6">Drawer</Text>
      <Drawer position="right">
        <DrawerTrigger
          render={
            <Button variant="outline">
              <SettingsIcon /> Settings
            </Button>
          }
        />
        <DrawerPopup showCloseButton showBar>
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
    </VStack>
  );
}

export const demos = [{ name: "Default", component: DrawerDemo }];
