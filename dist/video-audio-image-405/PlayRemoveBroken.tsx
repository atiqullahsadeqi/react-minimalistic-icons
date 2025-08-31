import React from 'react';

export interface PlayRemoveBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PlayRemoveBroken: React.FC<PlayRemoveBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.38 12.0001V10.6101C9.38 8.89008 10.6 8.18007 12.09 9.04007L13.29 9.73007L14.49 10.4201C15.98 11.2801 15.98 12.6901 14.49 13.5501L13.29 14.2401L12.09 14.9301C10.6 15.7901 9.38 15.0901 9.38 13.3601V12.0001Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0699 20.0399L17.95 17.9299" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.0499 17.96L17.9299 20.0699" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23 19C23 19.75 22.79 20.46 22.42 21.06C22.21 21.42 21.94 21.74 21.63 22C20.93 22.63 20.01 23 19 23C17.63 23 16.43 22.31 15.73 21.27C15.67 21.2 15.62 21.13 15.58 21.06C15.21 20.46 15 19.75 15 19C15 17.74 15.58 16.61 16.5 15.88C17.19 15.33 18.06 15 19 15C19.84 15 20.63 15.27 21.28 15.72C22.32 16.44 23 17.64 23 19Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.96997 2.84998C9.19997 2.29998 10.57 2 12 2C17.52 2 22 6.48 22 12C22 13.31 21.75 14.57 21.28 15.72" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C13.32 22 14.58 21.74 15.73 21.27" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default PlayRemoveBroken;
