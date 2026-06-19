import type { useRender } from "@base-ui/react/use-render";
import type { StyleXStyles } from "@stylexjs/stylex";

export type PropsWithStylex<T> = Omit<T, "style" | "className"> & {
	style?: StyleXStyles;
};
export type _BaseDivProps = PropsWithStylex<useRender.ComponentProps<"div">>;

export { props as renderStyles } from "@stylexjs/stylex";
