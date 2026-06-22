import { useRender } from "@base-ui/react/use-render";
import type { _BaseDivProps } from "#utils/types";
import clsx from "clsx";
import { applyBaseSprinkles } from "#utils/styles.js";
import type { BaseSprinkles } from "#utils/sprinkles.css.js";

type BoxProps = useRender.ComponentProps<"div"> & BaseSprinkles;

function Box({ render, className, ...props }: BoxProps) {
  const [styleProps, htmlProps] = applyBaseSprinkles(props);
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      ...htmlProps,
      className: clsx(styleProps, className),
    },
  });
}
export type { BoxProps };
export { Box };
