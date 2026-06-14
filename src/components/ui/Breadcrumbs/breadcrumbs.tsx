import { mergeProps, useRender } from "@base-ui/react";
import * as stylex from "@stylexjs/stylex";
import type { PropsWithStylex } from "@/utils/stylex.utils";
import { breadcrumbsStyles } from "./breadcrumbs.styles";

type Props = PropsWithStylex<useRender.ComponentProps<"nav">>;

export default function Breadcrumbs({ style, render, ...props }: Props) {
  const sx = stylex.props(breadcrumbsStyles.root, style);
  const merged = mergeProps(props, sx);
  return useRender({ defaultTagName: "nav", props: merged, render });
}
