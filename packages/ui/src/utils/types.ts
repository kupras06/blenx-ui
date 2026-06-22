import type { useRender } from "@base-ui/react/use-render";

export type PropsWithClassName<T> = Omit<T, "className" | "style"> & {
  className?: string;
  style?: React.CSSProperties;
};

export type _BaseDivProps = PropsWithClassName<useRender.ComponentProps<"div">>;

export type { useRender };

export type BorderRadiusProp =
  | "none"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "full";
