import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CopyIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 16, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      dangerouslySetInnerHTML={{
        __html:
          '<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></g>',
      }}
      width={width}
      {...props}
    />
  ),
);

CopyIcon.displayName = "CopyIcon";
