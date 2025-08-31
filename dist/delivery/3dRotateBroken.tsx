import React from 'react';

export interface 3dRotateBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const 3dRotateBroken: React.FC<3dRotateBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.69995 9.26001L11.9999 12.33L17.2599 9.28001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17.7701V12.3201" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.22998 10.3C6.22998 9.47 6.81996 8.45999 7.54996 8.05999L10.75 6.28C11.43 5.9 12.55 5.9 13.24 6.28L16.44 8.05999C17.16 8.45999 17.76 9.47 17.76 10.3V13.69C17.76 14.52 17.17 15.53 16.44 15.93L13.24 17.71C12.56 18.09 11.44 18.09 10.75 17.71L7.54996 15.93C7.18996 15.73 6.85996 15.38 6.61996 14.97" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9C2 5.13 5.13 2 9 2L7.95001 3.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default 3dRotateBroken;
