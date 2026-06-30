import * as React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ChevronUpIcon = React.forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    dangerouslySetInnerHTML={{
      __html:
        '<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 15l-6-6l-6 6"/>',
    }}
    {...props}
  />
));

ChevronUpIcon.displayName = "ChevronUpIcon";
