import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ChevronDownIcon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    dangerouslySetInnerHTML={{
      __html:
        '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6 9l6 6l6-6"/>',
    }}
    {...props}
  />
));

ChevronDownIcon.displayName = "ChevronDownIcon";
