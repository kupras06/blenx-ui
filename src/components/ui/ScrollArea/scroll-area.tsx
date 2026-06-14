"use client";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import * as stylex from "@stylexjs/stylex";
import type React from "react";
import { scrollAreaStyles } from "./scroll-area.styles";

type ScrollAreaProps = ScrollAreaPrimitive.Root.Props & {
  scrollFade?: boolean;
  scrollbarGutter?: boolean;
  fill?: boolean;
  style?: stylex.StyleXStyles;
};

export function ScrollArea({
  children,
  className,
  scrollFade = false,
  scrollbarGutter = false,
  fill = false,
  style,
  ...props
}: ScrollAreaProps): React.ReactElement {
  const rootProps = stylex.props(scrollAreaStyles.root, style as never);
  return (
    <ScrollAreaPrimitive.Root
      className={[rootProps.className, className].filter(Boolean).join(" ")}
      data-slot="scroll-area-root"
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        className={
          stylex.props(
            scrollAreaStyles.viewport,
            scrollFade && scrollAreaStyles.viewportFade,
            scrollbarGutter && scrollAreaStyles.viewportGutter,
          ).className
        }
        data-slot="scroll-area-viewport"
      >
        <ScrollAreaPrimitive.Content
          className={stylex.props(fill && scrollAreaStyles.contentFill).className}
          data-slot="scroll-area-content"
        >
          {children}
        </ScrollAreaPrimitive.Content>
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation="vertical" />
      <ScrollBar orientation="horizontal" />
      <ScrollAreaPrimitive.Corner data-slot="scroll-area-corner" />
    </ScrollAreaPrimitive.Root>
  );
}

type ScrollBarProps = Omit<ScrollAreaPrimitive.Scrollbar.Props, "style"> & {
  style?: stylex.StyleXStyles;
};

export function ScrollBar({
  className,
  orientation = "vertical",
  style,
  ...props
}: ScrollBarProps): React.ReactElement {
  const scrollbarProps = stylex.props(
    scrollAreaStyles.scrollbar,
    orientation === "horizontal" && scrollAreaStyles.scrollbarHorizontal,
    orientation === "vertical" && scrollAreaStyles.scrollbarVertical,
    style,
  );
  return (
    <ScrollAreaPrimitive.Scrollbar
      className={[scrollbarProps.className, className].filter(Boolean).join(" ")}
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb
        className={stylex.props(scrollAreaStyles.thumb).className}
        data-slot="scroll-area-thumb"
      />
    </ScrollAreaPrimitive.Scrollbar>
  );
}

export { ScrollAreaPrimitive };
