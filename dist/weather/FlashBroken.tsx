import React from 'react';

export interface FlashBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FlashBroken: React.FC<FlashBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.9999 12.63C22.6599 11.88 22.1299 10.71 21.1299 10.71H18.0399V3.50996C18.0399 2.44996 16.7199 1.94996 16.0199 2.74996L8.44995 11.35C7.78995 12.1 8.31994 13.27 9.31994 13.27H12.4099V20.47C12.4099 21.53 13.7299 22.03 14.4299 21.23L19.0599 15.97" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.5 4H1.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 20H1.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.5 12H1.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default FlashBroken;
