import React from 'react';

export interface QuoteUpSquareTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const QuoteUpSquareTwotone: React.FC<QuoteUpSquareTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M16.9999 11.84H14.3199C13.6099 11.84 13.1299 11.3 13.1299 10.65V9.15997C13.1299 8.50997 13.6099 7.96997 14.3199 7.96997H15.8099C16.4599 7.96997 16.9999 8.50997 16.9999 9.15997V11.84Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.9997 11.84C16.9997 14.63 16.4797 15.1 14.9097 16.03" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.8602 11.84H8.18023C7.47023 11.84 6.99023 11.3 6.99023 10.65V9.15997C6.99023 8.50997 7.47023 7.96997 8.18023 7.96997H9.67023C10.3202 7.96997 10.8602 8.50997 10.8602 9.15997V11.84Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.86 11.84C10.86 14.63 10.34 15.1 8.77002 16.03" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>

  );
};

export default QuoteUpSquareTwotone;
