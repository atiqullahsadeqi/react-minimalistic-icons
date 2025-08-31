import React from 'react';

export interface TransactionMinusTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TransactionMinusTwotone: React.FC<TransactionMinusTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.72998 19.7C7.54998 18.82 8.79999 18.89 9.51999 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.49 3.01 19.55 2 15.77 2H8.20999C4.42999 2 3.48999 3.01 3.48999 7.04V18.3C3.49999 20.97 4.95998 21.59 6.72998 19.7Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M9.25 10H14.75" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default TransactionMinusTwotone;
