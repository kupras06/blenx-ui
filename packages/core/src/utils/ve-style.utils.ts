import {
  baseSprinkles,
  gridSprinkles,
  type BaseSprinkles,
  type GridSprinkles,
} from "./sprinkles.css";

const BASE_SPRINKLE_PROPERTIES = baseSprinkles.properties;
type BasePropKeys = keyof BaseSprinkles;
type GridPropKeys = keyof GridSprinkles;
const GRID_SPRINKLE_PROPERTIES = gridSprinkles.properties;
export function applyBaseSprinkles<T = Record<string, unknown>>(
  props: Record<string, unknown>,
): [string, T] {
  const sprinkleProps: BaseSprinkles = {};
  const htmlProps: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props) as [BasePropKeys, any][]) {
    if (key === "fullWidth") {
      if (props[key]) {
        sprinkleProps.width = "full";
      }
    } else if (key === "withBorder") {
      if (props[key]) {
        sprinkleProps.borderRadius = sprinkleProps.borderRadius || "default";
        sprinkleProps.borderColor = sprinkleProps.borderColor || "default";
      }
    } else if (key === "fullHeight") {
      continue;
    } else if (BASE_SPRINKLE_PROPERTIES.has(key)) {
      sprinkleProps[key as BasePropKeys] = value;
    } else {
      htmlProps[key] = value;
    }
  }
  sprinkleProps.borderRadius = sprinkleProps.borderRadius || "default";
  return [baseSprinkles(sprinkleProps), htmlProps as T];
}
export function applyGridSprinkles(
  props: Record<string, unknown>,
): [string, Record<string, unknown>] {
  const sprinkleProps: GridSprinkles = {};
  const htmlProps: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props) as [GridPropKeys, any][]) {
    if (GRID_SPRINKLE_PROPERTIES.has(key)) {
      sprinkleProps[key as GridPropKeys] = value;
    } else {
      htmlProps[key] = value;
    }
  }
  return [gridSprinkles(sprinkleProps), htmlProps];
}
