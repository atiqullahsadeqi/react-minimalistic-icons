import React from 'react';

export interface SortBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SortBroken: React.FC<SortBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 7H21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M3 7H6" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M6 12H18" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M10 17H14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
</svg>

  );
};

export default SortBroken;
