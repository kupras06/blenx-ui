import type { BorderRadiusProp } from "@blenx-dev/ui/utils/layout.styles";
import { ToggleGroup, ToggleGroupItem, type ToggleGroupProps } from "../ToggleGroup/toggle-group";

type Option<T extends string> = {
  value: T;
  label: string;
};

type SegmentedControlProps<T extends string> = Omit<ToggleGroupProps, "value" | "onValueChange"> & {
  value: T;
  onValueChange: (value: T) => void;
  options: Option<T>[];
  radius?: BorderRadiusProp;
};
export function SegmentedControl<T extends string>({
  value,
  onValueChange,
  options,
  radius,
  variant = "outline",
  ...props
}: SegmentedControlProps<T>) {
  return (
    <ToggleGroup
      value={[value]}
      onValueChange={(values) => {
        if (values.length === 0) {
          return;
        }
        onValueChange(values[0] as T);
      }}
      variant={variant}
      {...props}
    >
      {options.map((option) => (
        <ToggleGroupItem key={option.value} value={option.value} radius={radius}>
          {option.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}
