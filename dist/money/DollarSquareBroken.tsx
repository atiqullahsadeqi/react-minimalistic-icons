import React from 'react';

export interface DollarSquareBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DollarSquareBroken: React.FC<DollarSquareBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66992 14.33C8.66992 15.62 9.65992 16.66 10.8899 16.66H13.3999C14.4699 16.66 15.3399 15.75 15.3399 14.63C15.3399 13.41 14.8099 12.98 14.0199 12.7L9.98992 11.3C9.19992 11.02 8.66992 10.59 8.66992 9.37003C8.66992 8.25003 9.53992 7.34003 10.6099 7.34003H13.1199C14.3499 7.34003 15.3399 8.38003 15.3399 9.67003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V13.03" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default DollarSquareBroken;
