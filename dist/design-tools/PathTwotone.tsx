import React from 'react';

export interface PathTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PathTwotone: React.FC<PathTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_13406)">
<path d="M19.7901 7.27L16.7601 4.24C15.6101 3.09 14.0401 3.15 13.2701 4.38L11.5801 7.05L16.9801 12.45L19.6501 10.76C20.8001 10.03 20.8701 8.35 19.7901 7.27Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.58 7.05045L7.64999 6.81045C5.45999 6.68045 4.68999 7.35045 4.44999 9.44045L3.46999 17.7604C3.25999 19.5104 4.52999 20.7704 6.26999 20.5604L14.59 19.5804C16.68 19.3304 17.44 18.5704 17.22 16.3804L16.99 12.4504" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M4.60938 19.4199L7.63937 16.3799" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_13406">
<rect width={size} height={size} fill="white"/>
</clipPath>
</defs>
</svg>

  );
};

export default PathTwotone;
