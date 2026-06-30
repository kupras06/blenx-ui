import { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import clsx from "clsx";
import { root, rootChecked, rootDisabled, thumb, thumbChecked } from "./switch.css";

type Props = Omit<SwitchPrimitive.Root.Props, "style" | "className"> & {
  style?: React.CSSProperties;
  className?: string;
};

export function Switch({ className, style, ...props }: Props) {
  return (
    <SwitchPrimitive.Root
      {...props}
      render={(renderProps, { checked, disabled }) => (
        <span
          {...renderProps}
          className={clsx(root, checked && rootChecked, disabled && rootDisabled, className)}
          style={style}
        >
          <SwitchPrimitive.Thumb className={clsx(thumb, checked && thumbChecked)} />
        </span>
      )}
    />
  );
}
