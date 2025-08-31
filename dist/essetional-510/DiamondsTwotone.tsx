import React from 'react';

export interface DiamondsTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DiamondsTwotone: React.FC<DiamondsTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.29 2.15002H7.69995C5.99995 2.15002 5.24995 3.00002 4.78995 4.04002L2.22995 9.80002C1.76995 10.84 2.01995 12.39 2.78995 13.23L9.64995 20.77C10.95 22.19 13.07 22.19 14.36 20.77L21.21 13.22C21.98 12.37 22.23 10.83 21.76 9.79002L19.2 4.03002C18.74 3.00002 17.99 2.15002 16.29 2.15002Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M3.5 8H20.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default DiamondsTwotone;
