import React from 'react';

export interface DollarCircleBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DollarCircleBroken: React.FC<DollarCircleBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66992 14.33C8.66992 15.62 9.65992 16.66 10.8899 16.66H13.3999C14.4699 16.66 15.3399 15.75 15.3399 14.63C15.3399 13.41 14.8099 12.98 14.0199 12.7L9.98992 11.3C9.19992 11.02 8.66992 10.59 8.66992 9.37003C8.66992 8.25003 9.53992 7.34003 10.6099 7.34003H13.1199C14.3499 7.34003 15.3399 8.38003 15.3399 9.67003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default DollarCircleBroken;
