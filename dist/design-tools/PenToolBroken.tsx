import React from 'react';

export interface PenToolBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const PenToolBroken: React.FC<PenToolBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.1501 5.19002L10.3701 4.41C9.90008 3.94 9.90008 3.18004 10.3701 2.71004L11.1501 1.93001C11.6201 1.46001 12.3801 1.46001 12.8501 1.93001L13.6301 2.71004C14.1001 3.18004 14.1001 3.94 13.6301 4.41L12.8501 5.19002C12.3801 5.66002 11.6201 5.66002 11.1501 5.19002Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.45 9.81H20.55C21.21 9.81 21.75 10.35 21.75 11.01V12.11C21.75 12.77 21.21 13.3101 20.55 13.3101H19.45C18.79 13.3101 18.25 12.77 18.25 12.11V11.01C18.25 10.35 18.79 9.81 19.45 9.81Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.55 9.81H3.45C2.79 9.81 2.25 10.35 2.25 11.01V12.11C2.25 12.77 2.79 13.3101 3.45 13.3101H4.55C5.21 13.3101 5.75 12.77 5.75 12.11V11.01C5.75 10.35 5.21 9.81 4.55 9.81Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.54 10.1L13.24 4.79999" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.45996 10.1L8.10996 7.45001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.7501 22.5H13.2701C14.2301 22.5 14.8501 21.82 14.6701 20.99L14.2601 19.1801H9.76008L9.35008 20.99C9.17008 21.77 9.85008 22.5 10.7501 22.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.22 12.6701L13.17 11.34C12.53 10.53 11.48 10.53 10.84 11.34L7.79005 15.21C7.02005 16.18 7.02004 16.81 8.03004 17.64L9.76005 19.1801" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.26 19.17L15.99 17.63C16.96 16.77 17 16.17 16.23 15.2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.01 11.12V13.65" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default PenToolBroken;
