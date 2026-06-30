import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SquareCheckIcon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    dangerouslySetInnerHTML={{
      __html:
        '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12l2 2l4-4"/></g>',
    }}
    {...props}
  />
));

SquareCheckIcon.displayName = "SquareCheckIcon";
