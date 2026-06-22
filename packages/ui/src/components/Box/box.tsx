import { useRender } from "@base-ui/react/use-render";
import type { _BaseDivProps } from "#utils/types";
import { boxSprinkles, type BoxSprinkles } from "./box.css";
import clsx from "clsx";

type BoxStylingProps = BoxSprinkles & {
  fullWidth?: boolean;
  fullHeight?: boolean;
  withBorder?: boolean;
};
type BoxProps = _BaseDivProps & BoxStylingProps;

const BOX_PROP_KEYS = [...boxSprinkles.properties, "withBorder", "fullWidth"];
type BoxPropKeys = (typeof BOX_PROP_KEYS)[number];

export const BOX_PROP_SET = new Set<string>(BOX_PROP_KEYS);
function splitProps(
  props: Record<string, unknown>,
): [Record<BoxPropKeys, unknown>, Record<string, unknown>] {
  const sprinkleProps: Record<BoxPropKeys, unknown> = {};
  const htmlProps: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(props)) {
    if (BOX_PROP_SET.has(key)) {
      sprinkleProps[key as BoxPropKeys] = value;
    } else {
      htmlProps[key] = value;
    }
  }

  return [sprinkleProps, htmlProps];
}
function Box({ render, className, ...props }: BoxProps) {
  const [{ withBorder, fullWidth, ...styleProps }, htmlProps] = splitProps(props);

  if (fullWidth) {
    styleProps.width = "full";
  }

  if (withBorder) {
    styleProps.borderColor = "default";
  }
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      ...htmlProps,
      className: clsx(boxSprinkles(styleProps), className),
    },
  });
}
export type { BoxProps };
export { Box };
