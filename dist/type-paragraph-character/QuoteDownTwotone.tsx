import React from 'react';

export interface QuoteDownTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const QuoteDownTwotone: React.FC<QuoteDownTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.65H16.2C14.67 11.65 13.62 10.49 13.62 9.07001V5.84998C13.62 4.42998 14.67 3.27002 16.2 3.27002H19.42C20.84 3.27002 22 4.42998 22 5.84998V11.65Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 11.65C22 17.7 20.87 18.7 17.47 20.72" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M10.3702 11.65H4.57023C3.04023 11.65 1.99023 10.49 1.99023 9.07001V5.84998C1.99023 4.42998 3.04023 3.27002 4.57023 3.27002H7.80023C9.22023 3.27002 10.3802 4.42998 10.3802 5.84998V11.65" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.3698 11.65C10.3698 17.7 9.23984 18.7 5.83984 20.72" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
</svg>

  );
};

export default QuoteDownTwotone;
