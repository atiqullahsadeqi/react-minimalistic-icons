import React from 'react';

export interface QuoteDownBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const QuoteDownBroken: React.FC<QuoteDownBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.63 5.85998C13.63 4.43998 14.68 3.28003 16.21 3.28003L19.42 3.28003C20.84 3.28003 22 4.43999 22 5.85999L22 11.66" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 11.65L16.2 11.65C15.24 11.65 14.48 11.2 14.04 10.51" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 11.65C22 17.7 20.87 18.7 17.47 20.72" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.37 11.65L4.57 11.65C3.04 11.65 1.99 10.49 1.99 9.07001L1.99001 5.84997C1.99001 4.42997 3.04001 3.27002 4.57001 3.27002L7.8 3.27002C9.22 3.27002 10.38 4.42998 10.38 5.84998L10.38 11.65" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.37 11.65C10.37 17.7 9.24 18.7 5.84 20.72" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default QuoteDownBroken;
