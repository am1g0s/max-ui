import { type SVGProps } from 'react';

export const IconDot = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="10.5" cy="10" r="2" fill="currentColor" />
  </svg>
);
