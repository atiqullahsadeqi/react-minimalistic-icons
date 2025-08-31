import React from 'react';

export interface CalculatorLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CalculatorLinear: React.FC<CalculatorLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 22H14C19 22 21 20 21 15V9C21 4 19 2 14 2H10C5 2 3 4 3 9V15C3 20 5 22 10 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5 7.58002V8.58002C16.5 9.40002 15.83 10.08 15 10.08H9C8.18 10.08 7.5 9.41002 7.5 8.58002V7.58002C7.5 6.76002 8.17 6.08002 9 6.08002H15C15.83 6.08002 16.5 6.75002 16.5 7.58002Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.13612 14H8.14767" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.995 14H12.0066" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8544 14H15.8659" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.13612 17.5H8.14767" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.995 17.5H12.0066" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.8544 17.5H15.8659" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default CalculatorLinear;
