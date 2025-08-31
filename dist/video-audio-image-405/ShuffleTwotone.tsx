import React from 'react';

export interface ShuffleTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ShuffleTwotone: React.FC<ShuffleTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 17.9799L5.54999 17.9899C6.45999 17.9899 7.31 17.5399 7.81 16.7899L14.2 7.20994C14.7 6.45994 15.55 5.99993 16.46 6.00993L21.01 6.02994" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M8.89001 8.61993L7.81 7.11993C7.3 6.40993 6.47999 5.98993 5.60999 5.99993L3 6.00994" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M19 19.9805L21 17.9805" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.9707 15.3799L14.1907 16.9499C14.7007 17.6099 15.5007 17.9999 16.3407 17.9999L21.0107 17.9799" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<path d="M21 6.02002L19 4.02002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default ShuffleTwotone;
