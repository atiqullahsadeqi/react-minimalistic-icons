import React from 'react';

export interface PlayCircleLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PlayCircleLinear: React.FC<PlayCircleLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.73999 12.23V10.56C8.73999 8.48 10.21 7.63 12.01 8.67L13.46 9.51L14.91 10.35C16.71 11.39 16.71 13.09 14.91 14.13L13.46 14.97L12.01 15.81C10.21 16.85 8.73999 16 8.73999 13.92V12.23Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default PlayCircleLinear;
