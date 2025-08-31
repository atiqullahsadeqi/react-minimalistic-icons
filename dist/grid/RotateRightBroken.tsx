import React from 'react';

export interface RotateRightBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RotateRightBroken: React.FC<RotateRightBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.75C22 20.5 20.5 22 16.75 22H12.25C8.5 22 7 20.5 7 16.75V12.25C7 8.5 8.5 7 12.25 7H16.75C20.5 7 22 8.5 22 12.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default RotateRightBroken;
