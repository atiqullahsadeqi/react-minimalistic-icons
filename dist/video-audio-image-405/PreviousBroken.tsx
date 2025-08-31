import React from 'react';

export interface PreviousBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PreviousBroken: React.FC<PreviousBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.27 7.39006L16.42 5.00005C18.12 4.02005 20.25 5.24004 20.25 7.21004V16.78C20.25 18.74 18.12 19.97 16.42 18.99L12.27 16.6001L8.11997 14.2001C6.41997 13.2201 6.41997 10.7701 8.11997 9.79006" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.76001 18.18V17" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.76001 14.0001V5.82007" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default PreviousBroken;
