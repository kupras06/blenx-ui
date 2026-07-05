import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowRightIcon = React.forwardRef<SVGSVGElement, IconProps>(
  ({ width = 16, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      dangerouslySetInnerHTML={{
        __html:
          '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7l7 7l-7 7"/>',
      }}
      width={width}
      {...props}
    />
  ),
);

ArrowRightIcon.displayName = "ArrowRightIcon";
