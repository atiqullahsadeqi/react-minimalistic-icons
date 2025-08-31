import React from 'react';

export interface Blend2BrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Blend2Broken: React.FC<Blend2BrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.96997 2C12.52 2 15.45 4.64 15.9 8.07C15.95 8.37 15.97 8.68 15.97 9C15.97 12.87 12.84 16 8.96997 16C8.64997 16 8.33997 15.98 8.03997 15.93C4.60997 15.48 1.96997 12.55 1.96997 9C1.96997 7.07 2.74997 5.32 4.01997 4.05" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.97 15C21.97 18.87 18.84 22 14.97 22C11.42 22 8.49004 19.36 8.04004 15.93C8.34004 15.98 8.65004 16 8.97004 16C12.84 16 15.97 12.87 15.97 9.00001C15.97 8.68001 15.95 8.37001 15.9 8.07001C19.33 8.52001 21.97 11.45 21.97 15Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.1201 14.12L15.4301 15.41" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.97 12L15.97 11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.97 17L10.97 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default Blend2Broken;
