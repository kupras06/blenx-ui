import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import clsx from "clsx";
import { root, rootChecked, rootDisabled, thumb, thumbChecked } from "./switch.css";

export function Switch({ className, ...props }: SwitchPrimitive.Root.Props) {
  return (
    <SwitchPrimitive.Root
      {...props}
      render={(renderProps, { checked, disabled }) => (
        <span
          {...renderProps}
          className={clsx(root, checked && rootChecked, disabled && rootDisabled, className)}
        >
          <SwitchPrimitive.Thumb className={clsx(thumb, checked && thumbChecked)} />
        </span>
      )}
    />
  );
}
