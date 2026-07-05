import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const EllipsisIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 16, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      dangerouslySetInnerHTML={{
        __html:
          '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></g>',
      }}
      width={width}
      {...props}
    />
  ),
);

EllipsisIcon.displayName = "EllipsisIcon";
