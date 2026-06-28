import { baseSprinkles, type BaseSprinkles } from "./sprinkles.css";

const BASE_SPRINKLE_PROPERTIES = baseSprinkles.properties;
type BasePropKeys = keyof BaseSprinkles;
export function applyBaseSprinkles(
  props: Record<string, unknown>,
): [string, Record<string, unknown>] {
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
  sprinkleProps.color = sprinkleProps.color || "default";
  sprinkleProps.backgroundColor = sprinkleProps.backgroundColor || "default";
  sprinkleProps.borderRadius = sprinkleProps.borderRadius || "default";
  return [baseSprinkles(sprinkleProps), htmlProps];
}
