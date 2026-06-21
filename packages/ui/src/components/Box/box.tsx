import { useRender } from "@base-ui/react/use-render";
import type { _BaseDivProps } from "#utils/stylex.utils";
import { boxSprinkles, type BoxSprinkles } from "./box.css";
import clsx from "clsx";

type BoxStylingProps = BoxSprinkles & {
  fullWidth?: boolean;
  fullHeight?: boolean;
  withBorder?: boolean;
};
type BoxProps = _BaseDivProps & BoxStylingProps;

const BOX_PROP_KEYS = [
  ...new Set<keyof BoxStylingProps>([
    "display",
    "fullWidth",
    "fullHeight",
    "grow",
    "shrink",
    "padding",
    "paddingX",
    "paddingY",
    "paddingTop",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "margin",
    "marginX",
    "marginY",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "radius",
    "borderRadius",
    "withBorder",
    "maxWidth",
    "color",
    "backgroundColor",
    "zIndex",
    "overflow",
    "position",
    "top",
    "bottom",
    "right",
    "left",
    "borderColor",
  ]),
];

function splitBoxProps<T extends Record<string, unknown>, K extends keyof T>(
  props: T,
  keys: readonly K[],
) {
  const picked = {} as Pick<T, K>;
  const omitted = {} as Omit<T, K>;

  for (const key in props) {
    if (keys.includes(key as unknown as K)) {
      picked[key as unknown as K] = props[key] as unknown as T[K];
    } else {
      (omitted as Record<string, unknown>)[key] = props[key];
    }
  }

  return [picked, omitted] as const;
}
function Box({ render, className, ...props }: BoxProps) {
  const [{ withBorder, fullWidth, ...styleProps }, htmlProps] = splitBoxProps(props, BOX_PROP_KEYS);

  return useRender({
    defaultTagName: "div",
    render,
    props: {
      ...htmlProps,
      className: clsx(
        boxSprinkles({
          ...styleProps,
          width: fullWidth ? "full" : styleProps.width,
          // borderWidth: withBorder ? "1px": 'px',
          // borderStyle: "solid",
          borderColor: withBorder ? "default" : styleProps.borderColor,
        }),
        className,
      ),
    },
  });
}
export type { BoxProps };
export { Box };
