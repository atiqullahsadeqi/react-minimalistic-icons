import React from 'react';

export interface QuoteUpLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const QuoteUpLinear: React.FC<QuoteUpLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12.35H7.79999C9.32999 12.35 10.38 13.51 10.38 14.93V18.15C10.38 19.57 9.32999 20.73 7.79999 20.73H4.58002C3.16002 20.73 2 19.57 2 18.15V12.35" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12.35C2 6.29998 3.13003 5.30003 6.53003 3.28003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.63 12.35H19.43C20.96 12.35 22.01 13.51 22.01 14.93V18.15C22.01 19.57 20.96 20.73 19.43 20.73H16.21C14.79 20.73 13.63 19.57 13.63 18.15V12.35" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.63 12.35C13.63 6.29998 14.76 5.30003 18.16 3.28003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default QuoteUpLinear;
