import { Button } from "../Button/button";
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

export function DefaultStory() {
  return (
    <AlertDialog>
      <AlertDialogTrigger render={<Button intent="danger">Delete</Button>} />
      <AlertDialogPopup>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone.s</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogPanel />
        <AlertDialogFooter>
          <AlertDialogClose render={<Button variant="soft">Cancel</Button>} />
          <Button intent="danger">Delete</Button>
        </AlertDialogFooter>
      </AlertDialogPopup>
    </AlertDialog>
  );
}
