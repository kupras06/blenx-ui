import { Button } from "../Button/button";
import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import {
  Sheet,
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTitle,
  SheetTrigger,
} from "./sheet";

export function SheetDemo() {
  return (
    <VStack gap="medium">
      <Text variant="h6">Sheet</Text>
      <Sheet>
        <SheetTrigger
          render={
            <Button variant="outline" size="small">
              Open Sheet
            </Button>
          }
        />
        <SheetPopup side="right">
          <SheetHeader>
            <SheetTitle>Edit Profile</SheetTitle>
            <SheetDescription>Make changes to your profile information.</SheetDescription>
          </SheetHeader>
          <SheetPanel>
            <VStack gap="small">
              <Text variant="body2">Name</Text>
              <Text variant="body2" color="secondary">
                Your display name as it appears to others.
              </Text>
            </VStack>
          </SheetPanel>
          <SheetFooter>
            <HStack gap="small" justify="end" wrap>
              <SheetClose render={<Button variant="ghost" />}>Cancel</SheetClose>
              <Button>Save</Button>
            </HStack>
          </SheetFooter>
        </SheetPopup>
      </Sheet>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: SheetDemo }];
