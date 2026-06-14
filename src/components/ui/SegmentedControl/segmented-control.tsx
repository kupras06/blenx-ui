import {
	ToggleGroup,
	ToggleGroupItem,
	type ToggleGroupProps,
} from "../ToggleGroup/toggle-group";

type Option<T extends string> = {
	value: T;
	label: string;
};

type SegmentedControlProps<T extends string> = Omit<
	ToggleGroupProps,
	"value" | "onValueChange"
> & {
	value: T;
	onValueChange: (value: T) => void;
	options: Option<T>[];
};
export function SegmentedControl<T extends string>({
	value,
	onValueChange,
	options,
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
				<ToggleGroupItem key={option.value} value={option.value}>
					{option.label}
				</ToggleGroupItem>
			))}
		</ToggleGroup>
	);
}
