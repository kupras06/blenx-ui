import { AspectRatio } from "./aspect-ratio";
import { Box } from "../Box/box";

/**
 * Example usage of the AspectRatio component.
 *
 * Demonstrates a 16:9 video placeholder and a 1:1 square image.
 * Shows how to combine with other @blenx-dev/core components.
 */
export function AspectRatioDemo() {
  return (
    <Box className="flex flex-col gap-md">
      {/* 16:9 video placeholder */}
      <AspectRatio ratio={16 / 9}>
        <Box
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <span className="text-white text-lg font-medium">16:9 Placeholder</span>
        </Box>
      </AspectRatio>

      {/* 1:1 square image */}
      <AspectRatio ratio={1}>
        <img
          src="https://images.unsplash.com/photo-1584824486539-53bb4646bdbc"
          alt="Square example"
          className="object-cover w-full h-full"
        />
      </AspectRatio>
    </Box>
  );
}

export const demos = [{ name: "Default", component: AspectRatioDemo }];
