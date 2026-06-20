import { Stack } from "../Stack/stack";
import { Text } from "../Text/text";
import {
  Select,
  SelectIcon,
  SelectItem,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  SelectTrigger,
  SelectValue,
} from "./select";

export function DefaultStory() {
  return (
    <Stack gap="medium">
      <Text variant="h4">Select</Text>
      <Select.Root>
        <SelectTrigger>
          <SelectValue placeholder="Choose an option" />
          <SelectIcon />
        </SelectTrigger>
        <SelectPortal>
          <SelectPositioner>
            <SelectPopup>
              <SelectList>
                <SelectItem value="option-1">Option 1</SelectItem>
                <SelectItem value="option-2">Option 2</SelectItem>
                <SelectItem value="option-3">Option 3</SelectItem>
              </SelectList>
            </SelectPopup>
          </SelectPositioner>
        </SelectPortal>
      </Select.Root>
    </Stack>
  );
}

export function WithLabelStory() {
  return (
    <Stack gap="medium">
      <Text variant="h4">With wrapper</Text>
      <Select.Wrapper label="Theme">
        <Select.Root>
          <SelectTrigger>
            <SelectValue placeholder="Select theme" />
            <SelectIcon />
          </SelectTrigger>
          <SelectPortal>
            <SelectPositioner>
              <SelectPopup>
                <SelectList>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectList>
              </SelectPopup>
            </SelectPositioner>
          </SelectPortal>
        </Select.Root>
      </Select.Wrapper>
    </Stack>
  );
}
