import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import clsx from "clsx";
import { root, rootChecked, rootDisabled, thumb, thumbChecked } from "./switch.css";
import { applyBaseSprinkles } from "../../utils/ve-style.utils";
import type { BaseSprinkles } from "../../utils/sprinkles.css";

export function Switch({ className, ...props }: SwitchPrimitive.Root.Props & BaseSprinkles) {
  const [boxProps, restProps] = applyBaseSprinkles(props);
  return (
    <SwitchPrimitive.Root
      {...restProps}
      render={(renderProps, { checked, disabled }) => (
        <span
          {...renderProps}
          className={clsx(
            boxProps,
            root,
            checked && rootChecked,
            disabled && rootDisabled,
            className,
          )}
        >
          <SwitchPrimitive.Thumb className={clsx(thumb, checked && thumbChecked)} />
        </span>
      )}
    />
  );
}
