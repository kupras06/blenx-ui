import { useRender } from "@base-ui/react/use-render";

export type PropsWithClassName<T> = Omit<T, "className" | "style"> & {
  className?: string;
  style?: React.CSSProperties;
};

export type PropsWithStylex<T> = PropsWithClassName<T>;

export type _BaseDivProps = useRender.ComponentProps<"div">;

export type BorderRadiusProp =
  | "none"
  | "xsmall"
  | "small"
  | "medium"
  | "large"
  | "xlarge"
  | "xxlarge"
  | "full";
