import React from 'react';

export interface QuoteUpCircleLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const QuoteUpCircleLinear: React.FC<QuoteUpCircleLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 11.84H14.32C13.61 11.84 13.13 11.3 13.13 10.65V9.15997C13.13 8.50997 13.61 7.96997 14.32 7.96997H15.81C16.46 7.96997 17 8.50997 17 9.15997V11.84Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 11.84C17 14.63 16.48 15.1 14.91 16.03" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.86 11.84H8.17998C7.46998 11.84 6.98999 11.3 6.98999 10.65V9.15997C6.98999 8.50997 7.46998 7.96997 8.17998 7.96997H9.66998C10.32 7.96997 10.86 8.50997 10.86 9.15997V11.84Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.86 11.84C10.86 14.63 10.34 15.1 8.77002 16.03" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default QuoteUpCircleLinear;
