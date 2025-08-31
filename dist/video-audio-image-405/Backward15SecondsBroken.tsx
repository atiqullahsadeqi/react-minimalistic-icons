import React from 'react';

export interface Backward15SecondsBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Backward15SecondsBroken: React.FC<Backward15SecondsBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.02 4.46997L12 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.98999 16.96C5.41999 19.94 8.47 22 12 22C16.91 22 20.89 18.02 20.89 13.11C20.89 8.19999 16.91 4.21997 12 4.21997C11.32 4.21997 10.66 4.31002 10.02 4.46002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.90997 7.80005C3.79997 9.28005 3.10999 11.11 3.10999 13.11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.96 10.8301H12.9L12.14 13.1201H14.43C15.27 13.1201 15.96 13.8001 15.96 14.6501C15.96 15.4901 15.28 16.1801 14.43 16.1801H12.14" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.53998 16.17V10.8301L8.03998 12.5001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default Backward15SecondsBroken;
