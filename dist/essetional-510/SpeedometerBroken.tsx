import React from 'react';

export interface SpeedometerBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SpeedometerBroken: React.FC<SpeedometerBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.84 19.48C3.08 17.68 2 15.21 2 12.49C2 8.79997 4 5.57998 6.97 3.83998C7.28 3.65998 7.6 3.48998 7.94 3.34998" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.14 19.5C20.91 17.7 22 15.22 22 12.5C22 6.98 17.52 2.5 12 2.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.62012 18.12C8.62012 19.98 10.1301 21.5 12.0001 21.5C13.8701 21.5 15.3801 19.99 15.3801 18.12C15.3801 16.25 13.8701 14.74 12.0001 14.74C11.0701 14.74 10.2201 15.12 9.61012 15.73C9.00012 16.35 8.62012 17.19 8.62012 18.12Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.25 12H16C16.82 12 17.5 11.33 17.5 10.5C17.5 9.68 16.82 9 16 9C15.18 9 14.5 9.67 14.5 10.5V11.25C14.5 11.66 14.84 12 15.25 12Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default SpeedometerBroken;
