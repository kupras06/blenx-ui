import { Button as ButtonPrimitive } from "@base-ui/react/button";
import clsx from "clsx";
import { borderRadius } from "#theme/tokens.css";
import { Spinner } from "../Spinner/spinner";
import {
  base,
  fullWidth as fullWidthStyle,
  size as sizeRecipe,
  intent as intentRecipe,
  variant as variantRecipe,
} from "./button.css";

const borderRadiusMap = {
  none: "0px",
  xsmall: borderRadius.xsmall,
  small: borderRadius.small,
  medium: borderRadius.medium,
  large: borderRadius.large,
  xlarge: borderRadius.xlarge,
  xxlarge: borderRadius.xxlarge,
  full: borderRadius.full,
};

type _BaseUIButtonProps = ButtonPrimitive.Props;

const NEW_VARIANTS = ["solid", "soft", "outline", "ghost", "link"] as const;
type NewVariant = (typeof NEW_VARIANTS)[number];
type ButtonIntent = "primary" | "neutral" | "success" | "warning" | "danger" | "info" | "mono";

type ButtonProps = _BaseUIButtonProps & {
  variant?: NewVariant;
  intent?: ButtonIntent;
  size?: "xsmall" | "small" | "icon" | "medium" | "large";
  disabled?: boolean;
  loading?: boolean;
  radius?: keyof typeof borderRadiusMap;
  fullWidth?: boolean;
};

function Button({
  children,
  variant = "solid",
  intent,
  size = "medium",
  disabled: disabledProp,
  loading,
  fullWidth,
  radius,
  className,
  ...props
}: ButtonProps) {
  const isDisabled = Boolean(loading || disabledProp);
  const resolvedVariant = intent === "mono" ? "soft" : variant;

  const rootCls = clsx(
    base,
    fullWidth && fullWidthStyle,
    sizeRecipe({ size }),
    intent && intentRecipe({ intent: intent ?? "primary" }),
    variantRecipe({ variant: resolvedVariant }),
    className,
  );

  const rootStyle = radius ? { borderRadius: borderRadiusMap[radius] } : undefined;

  return (
    <ButtonPrimitive
      className={rootCls}
      style={rootStyle}
      aria-disabled={loading || undefined}
      data-loading={loading ? "" : undefined}
      data-slot="button"
      nativeButton={!props.render}
      disabled={isDisabled}
      {...props}
    >
      {loading && <Spinner data-slot="button-loading-indicator" />}
      {children}
    </ButtonPrimitive>
  );
}

export { Button };
export type { ButtonProps, ButtonIntent };
