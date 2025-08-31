import React from 'react';

export interface Paperclip2BrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Paperclip2Broken: React.FC<Paperclip2BrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.76004 8.81L4.55004 10.02C2.21004 12.36 2.21004 16.16 4.55004 18.51" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.33 12.15L9.86005 14.62C8.49005 15.99 8.49005 18.2 9.86005 19.57C11.23 20.94 13.44 20.94 14.81 19.57L18.7 15.68C21.43 12.95 21.43 8.50998 18.7 5.77998C15.97 3.04998 11.53 3.04998 8.80005 5.77998" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default Paperclip2Broken;
