import React from 'react';

export interface DesigntoolsBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DesigntoolsBroken: React.FC<DesigntoolsBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 3.02C18.68 2.66 19.34 2.35 19.96 2.1C20.55 1.88 21.12 2.04 21.48 2.41C21.86 2.79 22.04 3.36 21.8 3.95C20.26 7.79 16.4 13.01 13.17 15.6L11.2 17.18C10.95 17.36 10.7 17.52 10.42 17.63C10.42 17.45 10.41 17.25 10.38 17.06C10.27 16.22 9.89001 15.44 9.22001 14.77C8.54001 14.09 7.71001 13.69 6.86001 13.58C6.66001 13.57 6.46001 13.55 6.26001 13.57C6.37001 13.26 6.54001 12.97 6.75001 12.73L8.31001 10.76C9.76001 8.95 12.04 6.94 14.43 5.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.43 17.62C10.43 18.72 10.01 19.77 9.22003 20.57C8.61003 21.18 7.78003 21.6 6.79003 21.73L4.33003 22C2.99003 22.15 1.84003 21.01 2.00003 19.65L2.27003 17.19C2.51003 15 4.34003 13.6 6.28003 13.56C6.48003 13.55 6.69003 13.56 6.88003 13.57C7.73003 13.68 8.56003 14.07 9.24003 14.76C9.91003 15.43 10.29 16.21 10.4 17.05C10.41 17.24 10.43 17.43 10.43 17.62Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.24 14.47C14.24 11.86 12.12 9.74 9.51001 9.74" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.12 12.73L20.86 13.46C22.35 14.95 22.35 16.42 20.86 17.91L17.9 20.87C16.43 22.34 14.94 22.34 13.47 20.87" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M3.11007 10.51C1.64007 9.02 1.64007 7.55 3.11007 6.06L6.07007 3.1C7.54007 1.63 9.03007 1.63 10.5001 3.1L11.2401 3.84" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M11.25 3.85L7.55005 7.55" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M20.1199 12.73L17.1599 15.68" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
</svg>

  );
};

export default DesigntoolsBroken;
