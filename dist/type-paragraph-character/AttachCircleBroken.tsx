import React from 'react';

export interface AttachCircleBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const AttachCircleBroken: React.FC<AttachCircleBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2 11.8L10.79 13.21C10.01 13.99 10.01 15.26 10.79 16.04C11.57 16.82 12.84 16.82 13.62 16.04L15.84 13.82C17.4 12.26 17.4 9.72999 15.84 8.15999C14.28 6.59999 11.75 6.59999 10.18 8.15999L7.76 10.58C6.42 11.92 6.42 14.09 7.76 15.43" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.19997 2.30001 7.96997 2.85001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default AttachCircleBroken;
