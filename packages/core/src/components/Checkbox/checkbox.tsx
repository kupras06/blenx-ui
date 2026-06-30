"use client";

import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckboxGroup as CheckboxGroupPrimitive } from "@base-ui/react/checkbox-group";
import clsx from "clsx";
import {
  group,
  root,
  rootDisabled,
  indicator,
  indicatorChecked,
  indicatorIndeterminate,
  icon,
} from "./checkbox.css";

type CheckboxGroupProps = CheckboxGroupPrimitive.Props & {
  className?: string;
  style?: React.CSSProperties;
};

type CheckboxProps = Omit<CheckboxPrimitive.Root.Props, "style" | "className"> & {
  className?: string;
  style?: React.CSSProperties;
};

export function CheckboxGroup({ className, style, ...props }: CheckboxGroupProps) {
  return <CheckboxGroupPrimitive className={clsx(group, className)} style={style} {...props} />;
}

function Checkbox({ className, style, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      {...props}
      render={(rootProps, { disabled }) => (
        <span
          {...rootProps}
          className={clsx(root, disabled && rootDisabled, className)}
          style={style}
          data-slot="checkbox"
        >
          <CheckboxPrimitive.Indicator
            render={(_indicatorProps, state) => (
              <span
                {..._indicatorProps}
                className={clsx(
                  indicator,
                  state.checked && indicatorChecked,
                  state.indeterminate && indicatorIndeterminate,
                )}
                data-slot="checkbox-indicator"
              >
                {state.indeterminate ? (
                  <svg
                    aria-hidden="true"
                    className={icon}
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.252 12h13.496" />
                  </svg>
                ) : (
                  <svg
                    aria-hidden="true"
                    className={icon}
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.252 12.7 10.2 18.63 18.748 5.37" />
                  </svg>
                )}
              </span>
            )}
          />
        </span>
      )}
    />
  );
}

export { Checkbox };
