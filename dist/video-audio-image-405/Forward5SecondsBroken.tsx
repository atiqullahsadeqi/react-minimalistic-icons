import React from 'react';

export interface Forward5SecondsBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Forward5SecondsBroken: React.FC<Forward5SecondsBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.98 4.46997L12 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.01 16.96C18.58 19.94 15.53 22 12 22C7.09 22 3.10999 18.02 3.10999 13.11C3.10999 8.19999 7.09 4.21997 12 4.21997C12.68 4.21997 13.34 4.31002 13.98 4.46002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.09 7.80005C20.2 9.28005 20.89 11.11 20.89 13.11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.91 10.8301H10.85L10.09 13.1201H12.38C13.22 13.1201 13.91 13.8001 13.91 14.6501C13.91 15.4901 13.23 16.1801 12.38 16.1801H10.09" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default Forward5SecondsBroken;
