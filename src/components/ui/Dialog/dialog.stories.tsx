import { Button } from "../Button/button";
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

export function DefaultStory() {
  return (
    <Dialog>
      <DialogTrigger render={<Button>Open Dialog</Button>} />
      <DialogPopup>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog description text</DialogDescription>
        </DialogHeader>
        <DialogPanel>
          <div>Dialog content goes here.</div>
        </DialogPanel>
        <DialogFooter>
          <DialogClose render={<Button variant="secondary">Close</Button>} />
          <Button variant="primary">Confirm</Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
}
