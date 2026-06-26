import { useRender } from "@base-ui/react/use-render";
import clsx from "clsx";
import { baseBox } from "./box.css";
import type { BaseSprinkles } from "../../utils/sprinkles.css";
import { applyBaseSprinkles } from "../../utils/ve-style.utils";

type BoxProps = useRender.ComponentProps<"div"> & BaseSprinkles;

function Box({ render, className, ...props }: BoxProps) {
  const [styleProps, htmlProps] = applyBaseSprinkles(props);
  return useRender({
    defaultTagName: "div",
    render,
    props: {
      ...htmlProps,
      className: clsx(baseBox, styleProps, className),
    },
  });
}
export type { BoxProps };
export { Box };
