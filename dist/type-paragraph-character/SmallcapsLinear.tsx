import React from 'react';

export interface SmallcapsLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SmallcapsLinear: React.FC<SmallcapsLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.98999 5.92995V4.41995C1.98999 3.39995 2.81999 2.56995 3.83999 2.56995H16.76C17.78 2.56995 18.61 3.39995 18.61 4.41995V5.92995" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.3 18.0999V3.31995" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.89999 18.1H12.48" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.68 10.34H20.69C21.42 10.34 22.01 10.93 22.01 11.66V12.46" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.08 21.43V10.87" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.94 21.4301H18.22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default SmallcapsLinear;
