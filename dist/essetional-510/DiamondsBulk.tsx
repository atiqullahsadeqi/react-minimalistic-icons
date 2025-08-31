import React from 'react';

export interface DiamondsBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DiamondsBulk: React.FC<DiamondsBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.21 13.24L14.36 20.78C13.06 22.21 10.94 22.21 9.63996 20.78L2.78995 13.24C2.01995 12.39 1.76995 10.85 2.22995 9.8L3.02996 8H20.97L21.77 9.8C22.23 10.85 21.98 12.39 21.21 13.24Z" fill={color}/>
<path opacity="0.4" d="M20.97 8.00002H3.03003L4.79002 4.04002C5.26002 3.00002 6.00003 2.15002 7.70003 2.15002H16.3C18 2.15002 18.74 3.00002 19.21 4.04002L20.97 8.00002Z" fill={color}/>
</svg>

  );
};

export default DiamondsBulk;
