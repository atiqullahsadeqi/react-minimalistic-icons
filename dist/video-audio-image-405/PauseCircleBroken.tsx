import React from 'react';

export interface PauseCircleBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PauseCircleBroken: React.FC<PauseCircleBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.75 14.43V9.36995C10.75 8.88995 10.55 8.69995 10.04 8.69995H8.75004C8.24004 8.69995 8.04004 8.88995 8.04004 9.36995V14.43C8.04004 14.91 8.24004 15.1 8.75004 15.1H10.04C10.55 15.1 10.75 14.91 10.75 14.43Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.0301 14.43V9.36995C16.0301 8.88995 15.8301 8.69995 15.3201 8.69995H14.0301C13.5201 8.69995 13.3201 8.88995 13.3201 9.36995V14.43C13.3201 14.91 13.5201 15.1 14.0301 15.1" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default PauseCircleBroken;
