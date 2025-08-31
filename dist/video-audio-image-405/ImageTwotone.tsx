import React from 'react';

export interface ImageTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImageTwotone: React.FC<ImageTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.68 16.9599L18.55 9.64988C17.49 7.16988 15.54 7.06988 14.23 9.42988L12.34 12.8399C11.38 14.5699 9.59 14.7199 8.35 13.1699L8.13 12.8899C6.84 11.2699 5.02 11.4699 4.09 13.3199L2.37 16.7699C1.16 19.1699 2.91 21.9999 5.59 21.9999H18.35C20.95 21.9999 22.7 19.3499 21.68 16.9599Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M6.97 8C8.62686 8 9.97 6.65685 9.97 5C9.97 3.34315 8.62686 2 6.97 2C5.31315 2 3.97 3.34315 3.97 5C3.97 6.65685 5.31315 8 6.97 8Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default ImageTwotone;
