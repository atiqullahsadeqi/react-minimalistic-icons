import React from 'react';

export interface RefreshCircleBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RefreshCircleBroken: React.FC<RefreshCircleBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.01001 14.51C8.19001 14.81 8.41 15.09 8.66 15.34C10.5 17.18 13.49 17.18 15.34 15.34C16.09 14.59 16.52 13.64 16.66 12.67" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.34009 11.33C7.48009 10.35 7.9101 9.40997 8.6601 8.65997C10.5001 6.81997 13.4901 6.81997 15.3401 8.65997C15.6001 8.91997 15.8101 9.19999 15.9901 9.48999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.82007 17.18V14.51H10.4901" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.18 6.82001V9.48999H13.51" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.29998 7.97 2.84998" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default RefreshCircleBroken;
