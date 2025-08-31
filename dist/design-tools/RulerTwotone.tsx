import React from 'react';

export interface RulerTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RulerTwotone: React.FC<RulerTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_12868)">
<path d="M5 17H19C21 17 22 16 22 14V10C22 8 21 7 19 7H5C3 7 2 8 2 10V14C2 16 3 17 5 17Z" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.4" d="M18 7V12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.4" d="M6 7V11" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.4" d="M10.05 7L10 12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path opacity="0.4" d="M14 7V10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
</g>
<defs>
<clipPath id="clip0_1_12868">
<rect width={size} height={size} fill="white"/>
</clipPath>
</defs>
</svg>

  );
};

export default RulerTwotone;
