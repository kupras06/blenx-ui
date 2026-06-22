import { Button as ButtonPrimitive } from "@base-ui/react/button";
import clsx from "clsx";
import { Spinner } from "../Spinner/spinner";
import {
  base,
  size as sizeRecipe,
  intent as intentRecipe,
  variant as variantRecipe,
} from "./button.css";
import { applyBaseSprinkles } from "#utils/styles.js";
import type { BaseSprinkles } from "#utils/sprinkles.css.js";

type _BaseUIButtonProps = ButtonPrimitive.Props;

const NEW_VARIANTS = ["solid", "soft", "outline", "ghost", "link"] as const;
type NewVariant = (typeof NEW_VARIANTS)[number];
type ButtonIntent = "primary" | "neutral" | "success" | "warning" | "danger" | "info" | "mono";

type ButtonProps = _BaseUIButtonProps &
  BaseSprinkles & {
    variant?: NewVariant;
    intent?: ButtonIntent;
    size?: "xsmall" | "small" | "icon" | "medium" | "large";
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
  };

function Button({
  children,
  variant = "solid",
  intent,
  size = "medium",
  disabled: disabledProp,
  loading,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = Boolean(loading || disabledProp);
  const resolvedVariant = intent === "mono" ? "soft" : variant;
  const [boxProps, restProps] = applyBaseSprinkles(props);
  const rootCls = clsx(
    base,
    boxProps,
    sizeRecipe({ size }),
    intent && intentRecipe({ intent: intent ?? "primary" }),
    variantRecipe({ variant: resolvedVariant }),
    className,
  );

  return (
    <ButtonPrimitive
      className={rootCls}
      aria-disabled={loading || undefined}
      data-loading={loading ? "" : undefined}
      data-slot="button"
      nativeButton={!props.render}
      disabled={isDisabled}
      {...restProps}
    >
      {loading && <Spinner data-slot="button-loading-indicator" />}
      {children}
    </ButtonPrimitive>
  );
}

export { Button };
export type { ButtonProps, ButtonIntent };
