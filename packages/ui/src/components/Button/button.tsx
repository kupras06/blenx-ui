import { Button as ButtonPrimitive } from "@base-ui/react/button";
import clsx from "clsx";
import { Spinner } from "../Spinner/spinner";
import { variant as variantRecipe } from "./button.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import type { BaseSprinkles } from "../../utils/sprinkles.css";
import { applyBaseSprinkles } from "../../utils/ve-style.utils";

type ButtonVariants = RecipeVariants<typeof variantRecipe>;

type ButtonProps = ButtonPrimitive.Props &
  BaseSprinkles &
  ButtonVariants & {
    disabled?: boolean;
    loading?: boolean;
    fullWidth?: boolean;
  };

function Button({
  children,
  variant = "solid",
  intent,
  size = "sm",
  disabled: disabledProp,
  loading,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = Boolean(loading || disabledProp);
  const resolvedVariant = intent === "mono" ? "soft" : variant;
  const [boxProps, restProps] = applyBaseSprinkles(props);
  const rootCls = clsx(
    boxProps,
    variantRecipe({ variant: resolvedVariant, intent: intent ?? "primary", size }),
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
export type { ButtonProps };
