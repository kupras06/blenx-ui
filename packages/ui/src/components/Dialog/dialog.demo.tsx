import { Button } from "../Button/button";
import { HStack } from "../Stack/stack";
import { Text } from "../Text/text";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger render={<Button variant="outline" />}>Open Dialog</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>Are you sure you want to proceed with this action?</DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <Text variant="body2">This action cannot be undone. Please confirm your choice.</Text>
        </DialogPanel>
        <DialogFooter>
          <HStack gap="small" justify="end" wrap>
            <DialogClose render={<Button variant="ghost" />}>Cancel</DialogClose>
            <Button>Confirm</Button>
          </HStack>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export const demos = [{ name: "Default", component: DialogDemo }];
