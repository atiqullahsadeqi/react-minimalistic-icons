import React from 'react';

export interface EraserBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const EraserBroken: React.FC<EraserBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.09 10.66C22.26 9.49 22.26 7.58 21.09 6.42L17.58 2.91C16.41 1.74 14.5 1.74 13.34 2.91L2.90997 13.34C1.73997 14.51 1.73997 16.42 2.90997 17.58L6.41998 21.09C7.58998 22.26 9.49997 22.26 10.66 21.09L17.74 14.01" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.12012 9.13L14.8701 16.88" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.52002 17.66L9.16998 12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.34009 20.49L12.0001 14.83" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default EraserBroken;
