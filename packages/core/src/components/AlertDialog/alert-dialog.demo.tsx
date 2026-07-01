import { Trash2Icon } from "../../icons";
import { Button } from "../Button/button";
import { HStack, VStack } from "../Stack/stack";
import { Text } from "../Text/text";
import {
  AlertDialog,
  AlertDialogClose,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogPanel,
  AlertDialogPopup,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./alert-dialog";
import { Box } from "../Box/box";

export function AlertDialogDemo() {
  return (
    <VStack gap="md">
      <Text variant="h6">Alert Dialog</Text>
      <Box>
        <AlertDialog>
          <AlertDialogTrigger
            render={
              <Button variant="outline" intent="danger">
                <Trash2Icon /> Delete Project
              </Button>
            }
          >
            Delete
          </AlertDialogTrigger>
          <AlertDialogPopup>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete project</AlertDialogTitle>
              <AlertDialogDescription>
                This will permanently delete the project and all of its data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogPanel>
              <Text variant="body2">
                This action cannot be undone. All files, settings, and member permissions will be
                removed.
              </Text>
            </AlertDialogPanel>
            <AlertDialogFooter>
              <HStack gap="sm" justify="end" wrap>
                <AlertDialogClose render={<Button variant="ghost" />}>Cancel</AlertDialogClose>
                <Button intent="danger">Delete</Button>
              </HStack>
            </AlertDialogFooter>
          </AlertDialogPopup>
        </AlertDialog>
      </Box>
    </VStack>
  );
}

export const demos = [{ name: "Default", component: AlertDialogDemo }];
