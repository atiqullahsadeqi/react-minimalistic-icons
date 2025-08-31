import React from 'react';

export interface DropBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DropBroken: React.FC<DropBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.90002 13.9C3.90002 18.36 7.53003 22 12 22C16.47 22 20.1 18.37 20.1 13.91C20.13 8.47996 14.5 3.66996 12.61 2.20996" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.61 2.21C12.25 1.93 11.75 1.93 11.39 2.21C10.01 3.26 6.66996 6.04 4.95996 9.6" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default DropBroken;
