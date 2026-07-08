import {
  SelectIcon,
  SelectItem,
  SelectList,
  SelectPopup,
  SelectPortal,
  SelectPositioner,
  Select,
  SelectTrigger,
  SelectValue,
} from "@blenx-dev/core";

export function SelectDemo() {
  return (
    <Select defaultValue="apple">
      <SelectTrigger>
        <SelectValue placeholder="Pick a fruit" />
        <SelectIcon />
      </SelectTrigger>
      <SelectPortal>
        <SelectPositioner>
          <SelectPopup>
            <SelectList>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="orange">Orange</SelectItem>
            </SelectList>
          </SelectPopup>
        </SelectPositioner>
      </SelectPortal>
    </Select>
  );
}

export const demos = [{ name: "Default", component: SelectDemo }];
