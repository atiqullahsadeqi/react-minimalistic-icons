import React from 'react';

export interface BitcoinRefreshLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BitcoinRefreshLinear: React.FC<BitcoinRefreshLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.47 11.42L2.73 9.67999L1 11.42" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.5298 12.58L21.2698 14.32L23.0098 12.58" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.26 14.32V12C21.26 6.88 17.11 2.73999 12 2.73999C9.08002 2.73999 6.47002 4.10002 4.77002 6.21002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.74023 9.67999V12C2.74023 17.12 6.89024 21.26 12.0002 21.26C14.9202 21.26 17.5302 19.9 19.2302 17.79" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 8.5H13.38C14.35 8.5 15.13 9.38 15.13 10.25C15.13 11.22 14.35 12 13.38 12H9V8.5Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12H14C15.1 12 16 12.78 16 13.75C16 14.72 15.1 15.5 14 15.5H9V12Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.7998 15.5V17.25" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.7998 6.75V8.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default BitcoinRefreshLinear;
