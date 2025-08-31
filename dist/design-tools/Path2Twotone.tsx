import React from 'react';

export interface Path2TwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Path2Twotone: React.FC<Path2TwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1_13451)">
<path d="M9.86995 22H14.1599C15.7799 22 16.8499 20.84 16.5299 19.43L15.8399 16.35H8.19995L7.50995 19.43C7.19995 20.76 8.33995 22 9.86995 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8292 16.3501L18.7692 13.7401C20.4092 12.2801 20.4792 11.2601 19.1792 9.61012L13.9892 3.03012C12.8992 1.65012 11.1192 1.65012 10.0192 3.03012L4.83916 9.61012C3.53916 11.2601 3.53916 12.3301 5.24916 13.7401L8.18916 16.3501" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M12.0098 2.66992V6.96992" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_13451">
<rect width={size} height={size} fill="white"/>
</clipPath>
</defs>
</svg>

  );
};

export default Path2Twotone;
