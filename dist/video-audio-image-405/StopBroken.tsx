import React from 'react';

export interface StopBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StopBroken: React.FC<StopBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9.3C3 4.8 4.8 3 9.3 3H14.7C19.2 3 21 4.8 21 9.3V14.7C21 19.2 19.2 21 14.7 21H9.3C4.8 21 3 19.2 3 14.7V13.99" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default StopBroken;
