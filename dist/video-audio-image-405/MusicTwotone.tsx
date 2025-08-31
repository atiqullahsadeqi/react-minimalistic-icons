import React from 'react';

export interface MusicTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MusicTwotone: React.FC<MusicTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.28 22C8.00313 22 9.4 20.6031 9.4 18.88C9.4 17.1569 8.00313 15.76 6.28 15.76C4.55688 15.76 3.16 17.1569 3.16 18.88C3.16 20.6031 4.55688 22 6.28 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.72 19.9201C19.4431 19.9201 20.84 18.5232 20.84 16.8001C20.84 15.0769 19.4431 13.6801 17.72 13.6801C15.9969 13.6801 14.6 15.0769 14.6 16.8001C14.6 18.5232 15.9969 19.9201 17.72 19.9201Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M20.8404 16.8003V4.60034C20.8404 2.00034 19.2104 1.64034 17.5604 2.09034L11.3204 3.79034C10.1804 4.10034 9.40039 5.00034 9.40039 6.30034V8.47034V9.93034V18.8703" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.40039 9.52039L20.8404 6.40039" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>

  );
};

export default MusicTwotone;
