import { baseSprinkles } from "./sprinkles.css";
const BASE_SPRINKLE_KEYS = [...baseSprinkles.properties, "withBorder", "fullWidth"];
const BASE_SPRINKLE_KEYS_SET = new Set<string>(BASE_SPRINKLE_KEYS);
type BasePropKeys = (typeof BASE_SPRINKLE_KEYS)[number];
export function applyBaseSprinkles(
  props: Record<string, unknown>,
): [string, Record<string, unknown>] {
  const sprinkleProps: Record<BasePropKeys, unknown> = {};
  const htmlProps: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(props)) {
    if (key === "fullWidth") {
      sprinkleProps.width = "full";
    } else if (key === "withBorder") {
      sprinkleProps.borderColor = "default";
    } else if (BASE_SPRINKLE_KEYS_SET.has(key)) {
      sprinkleProps[key as BasePropKeys] = value;
    } else {
      htmlProps[key] = value;
    }
  }

  return [baseSprinkles(sprinkleProps), htmlProps];
}
