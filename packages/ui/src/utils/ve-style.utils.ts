import { baseSprinkles, type BaseSprinkles } from "./sprinkles.css";
const BASE_SPRINKLE_KEYS: (keyof BaseSprinkles)[] = Object.keys(
  baseSprinkles.properties,
) as (keyof BaseSprinkles)[];
const BASE_SPRINKLE_KEYS_SET = new Set<BasePropKeys>(BASE_SPRINKLE_KEYS);
type BasePropKeys = keyof BaseSprinkles;
export function applyBaseSprinkles(
  props: Record<string, unknown>,
): [string, Record<string, unknown>] {
  const sprinkleProps: BaseSprinkles = {};
  const htmlProps: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(props) as [BasePropKeys, any][]) {
    if (key === "fullWidth" && props[key]) {
      sprinkleProps.width = "full";
    } else if (key === "withBorder" && props[key]) {
      sprinkleProps.borderRadius = sprinkleProps.borderRadius || "default";
      sprinkleProps.borderColor = sprinkleProps.borderColor || "default";
    } else if (BASE_SPRINKLE_KEYS_SET.has(key)) {
      sprinkleProps[key as BasePropKeys] = value;
    } else {
      htmlProps[key] = value;
    }
  }
  sprinkleProps.color = sprinkleProps.color || "default";
  sprinkleProps.backgroundColor = sprinkleProps.backgroundColor || "default";
  return [baseSprinkles(sprinkleProps), htmlProps];
}
