import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ChevronLeftIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 16, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      dangerouslySetInnerHTML={{
        __html:
          '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 18l-6-6l6-6"/>',
      }}
      width={width}
      {...props}
    />
  ),
);

ChevronLeftIcon.displayName = "ChevronLeftIcon";
