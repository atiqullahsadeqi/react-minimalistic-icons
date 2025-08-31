import React from 'react';

export interface QuoteDownSquareBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const QuoteDownSquareBroken: React.FC<QuoteDownSquareBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12.83V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12.16H9.68C10.39 12.16 10.87 12.7 10.87 13.35V14.84C10.87 15.49 10.39 16.03 9.68 16.03H8.19C7.54 16.03 7 15.49 7 14.84V12.16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 12.16C7 9.36997 7.52 8.89997 9.09 7.96997" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.14 12.16H15.82C16.53 12.16 17.01 12.7 17.01 13.35V14.84C17.01 15.49 16.53 16.03 15.82 16.03H14.33C13.68 16.03 13.14 15.49 13.14 14.84V12.16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.14 12.16C13.14 9.36997 13.66 8.89997 15.23 7.96997" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default QuoteDownSquareBroken;
