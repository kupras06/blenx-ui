import { Button } from "../Button/button";
import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import {
  Popover,
  PopoverArrow,
  PopoverDescription,
  PopoverPopup,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
} from "./popover";

export function DefaultStory() {
  return (
    <Stack gap="small" align="start">
      <Text variant="body2">Click the button to open a popover</Text>
      <Popover>
        <PopoverTrigger render={<Button variant="outline">Open Popover</Button>} />
        <PopoverPositioner sideOffset={8}>
          <PopoverPopup>
            <PopoverArrow />
            <Stack gap="small" padding="medium">
              <PopoverTitle>Popover Title</PopoverTitle>
              <PopoverDescription>
                This is a popover. It can contain any content.
              </PopoverDescription>
              <Button size="small" variant="primary">
                Action
              </Button>
            </Stack>
          </PopoverPopup>
        </PopoverPositioner>
      </Popover>
    </Stack>
  );
}
