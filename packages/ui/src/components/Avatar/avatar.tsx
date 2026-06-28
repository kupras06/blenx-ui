import { Avatar as AvatarPrimitive, type AvatarRootProps } from "@base-ui/react/avatar";
import clsx from "clsx";
import { root, image, fallback, size as sizeRecipe, radius as radiusRecipe } from "./avatar.css";
import type { RecipeVariants } from "@vanilla-extract/recipes";

type AvatarProps = AvatarRootProps &
  RecipeVariants<typeof sizeRecipe> & {
    radius?: "none" | "xs" | "small" | "medium" | "large" | "xlarge" | "xxlarge" | "full";
    className?: string;
    style?: React.CSSProperties;
  };

type AvatarImageProps = AvatarPrimitive.Image.Props & {
  className?: string;
  style?: React.CSSProperties;
};

type AvatarFallbackProps = AvatarPrimitive.Fallback.Props & {
  className?: string;
  style?: React.CSSProperties;
};

function Avatar({ children, size, radius: r, className, style }: AvatarProps) {
  return (
    <AvatarPrimitive.Root
      className={clsx(
        root,
        size && sizeRecipe({ size }),
        r && radiusRecipe({ radius: r }),
        className,
      )}
      style={style}
    >
      {children}
    </AvatarPrimitive.Root>
  );
}

function AvatarImage({ className, style, ...props }: AvatarImageProps) {
  return <AvatarPrimitive.Image className={clsx(image, className)} style={style} {...props} />;
}

function AvatarFallback({ className, style, ...props }: AvatarFallbackProps) {
  return (
    <AvatarPrimitive.Fallback className={clsx(fallback, className)} style={style} {...props} />
  );
}

export type { AvatarFallbackProps, AvatarImageProps, AvatarProps };
export { Avatar, AvatarFallback, AvatarImage };
