import React from 'react';

export interface QuoteDownSquareTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const QuoteDownSquareTwotone: React.FC<QuoteDownSquareTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M7 12.16H9.68C10.39 12.16 10.87 12.7 10.87 13.35V14.84C10.87 15.49 10.39 16.03 9.68 16.03H8.19C7.54 16.03 7 15.49 7 14.84V12.16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12.16C7 9.36997 7.52 8.89997 9.09 7.96997" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.1401 12.16H15.8201C16.5301 12.16 17.0101 12.7 17.0101 13.35V14.84C17.0101 15.49 16.5301 16.03 15.8201 16.03H14.3301C13.6801 16.03 13.1401 15.49 13.1401 14.84V12.16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.1401 12.16C13.1401 9.36997 13.6601 8.89997 15.2301 7.96997" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>

  );
};

export default QuoteDownSquareTwotone;
