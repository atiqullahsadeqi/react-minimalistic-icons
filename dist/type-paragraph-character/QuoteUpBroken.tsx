import React from 'react';

export interface QuoteUpBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const QuoteUpBroken: React.FC<QuoteUpBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.37 18.14C10.37 19.56 9.31998 20.72 7.78998 20.72H4.57001C3.15001 20.72 1.98999 19.56 1.98999 18.14L1.98999 12.34" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12.35H7.79999C8.75999 12.35 9.52002 12.8 9.96002 13.49" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12.35C2 6.29998 3.13003 5.30003 6.53003 3.28003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.63 12.35H19.43C20.96 12.35 22.01 13.51 22.01 14.93V18.15C22.01 19.57 20.96 20.73 19.43 20.73H16.21C14.79 20.73 13.63 19.57 13.63 18.15V12.35" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.63 12.35C13.63 6.29998 14.76 5.30003 18.16 3.28003" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default QuoteUpBroken;
