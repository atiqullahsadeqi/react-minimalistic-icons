import React from 'react';

export interface ToggleOnCircleBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ToggleOnCircleBroken: React.FC<ToggleOnCircleBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 20C18.42 20 22 16.42 22 12C22 7.58 18.42 4 14 4H10C5.58 4 2 7.58 2 12C2 16.08 5.05 19.44 8.99 19.94" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14 8C11.79 8 10 9.79 10 12C10 14.21 11.79 16 14 16C16.21 16 18 14.21 18 12C18 11.52 17.91 11.05 17.76 10.62" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default ToggleOnCircleBroken;
