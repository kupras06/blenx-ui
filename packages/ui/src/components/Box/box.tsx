import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import * as stylex from "@stylexjs/stylex";
import {
  themeTransition,
  type ColorProps,
  type SpacingProps,
} from "@blenx-dev/ui/utils/base.styles";
import {
  resolvePaddingStyles,
  resolveMarginStyles,
  resolveDisplayStyles,
  type BorderRadiusProp,
  type LayoutProps,
  borderRadiusStyles,
} from "@blenx-dev/ui/utils/layout.styles";
import type { _BaseDivProps } from "@blenx-dev/ui/utils/stylex.utils";
import { boxWidthStyles, boxStyles } from "./box.styles";

type BoxSize = keyof typeof boxWidthStyles;
type _BaseBoxPrpos = LayoutProps &
  SpacingProps &
  ColorProps & {
    fullWidth?: boolean;
    fullHeight?: boolean;
    grow?: boolean;
    shrink?: boolean;
    // @deprecated use borderRadius instead
    radius?: BorderRadiusProp;
    borderRadius?: BorderRadiusProp;
    withBorder?: boolean;
    maxWidth?: BoxSize | number | string;
    style?: stylex.StyleXStyles;
  };
type BoxProps = _BaseDivProps & _BaseBoxPrpos;

const isBoxSize = (value: unknown): value is BoxSize =>
  Object.keys(boxWidthStyles).includes(value as BoxSize);
const resolveBoxWidthStyle = (value: BoxProps["maxWidth"]) => [
  value ? boxStyles.fullWidth : null,
  isBoxSize(value)
    ? boxWidthStyles[value]
    : typeof value === "number" || (typeof value === "string" && !isBoxSize(value))
      ? boxStyles.maxWidth(value as number | string)
      : null,
];
const BOX_PROP_KEYS = [
  ...new Set<keyof _BaseBoxPrpos>([
    "display",
    "fullWidth",
    "fullHeight",
    "grow",
    "shrink",
    "padding",
    "paddingX",
    "paddingY",
    "paddingTop",
    "paddingBottom",
    "paddingLeft",
    "paddingRight",
    "margin",
    "marginX",
    "marginY",
    "marginTop",
    "marginBottom",
    "marginLeft",
    "marginRight",
    "radius",
    "borderRadius",
    "style",
    "withBorder",
    "maxWidth",
    "color",
    "backgroundColor",
    "zIndex",
    "overflow",
    "position",
    "top",
    "bottom",
    "right",
    "left",
  ]),
];

function splitBoxProps<T extends Record<string, unknown>, K extends keyof T>(
  props: T,
  keys: readonly K[],
) {
  const picked = {} as Pick<T, K>;
  const omitted = {} as Omit<T, K>;

  for (const key in props) {
    if (keys.includes(key as unknown as K)) {
      picked[key as unknown as K] = props[key] as unknown as T[K];
    } else {
      (omitted as Record<string, unknown>)[key] = props[key];
    }
  }

  return [picked, omitted] as const;
}
function Box({ render, ...props }: BoxProps) {
  const [boxProps, htmlProps] = splitBoxProps(props, BOX_PROP_KEYS);
  const paddingStyles = resolvePaddingStyles(boxProps);
  const marginStyles = resolveMarginStyles(boxProps);
  const resolvedRadius = boxProps.borderRadius ?? boxProps.radius;

  const displayStyles = resolveDisplayStyles(boxProps);
  const appliedBoxWidthStyles = resolveBoxWidthStyle(boxProps.maxWidth);

  const stylexProps = stylex.props(
    themeTransition.root,
    boxStyles.root,
    Boolean(boxProps.fullWidth) && boxStyles.fullWidth,
    Boolean(boxProps.fullHeight) && boxStyles.fullHeight,
    Boolean(boxProps.grow) && boxStyles.grow,
    Boolean(boxProps.shrink) && boxStyles.shrink,
    Boolean(boxProps.withBorder) && boxStyles.withBorder,
    ...paddingStyles,
    ...marginStyles,
    resolvedRadius && borderRadiusStyles[resolvedRadius],
    ...displayStyles,
    ...appliedBoxWidthStyles,
    boxProps.style,
  );
  const mergedProps = mergeProps(htmlProps, stylexProps);
  return useRender({
    defaultTagName: "div",
    props: mergedProps,
    render,
  });
}

export type { BoxProps };
export { Box };
