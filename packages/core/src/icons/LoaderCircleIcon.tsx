import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LoaderCircleIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 16, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      dangerouslySetInnerHTML={{
        __html:
          '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 1 1-6.219-8.56"/>',
      }}
      width={width}
      {...props}
    />
  ),
);

LoaderCircleIcon.displayName = "LoaderCircleIcon";
