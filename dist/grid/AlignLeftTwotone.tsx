import React from 'react';

export interface AlignLeftTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const AlignLeftTwotone: React.FC<AlignLeftTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M5.09998 19.25H16.9C18.4 19.25 19 18.61 19 17.02V15.98C19 14.39 18.4 13.75 16.9 13.75H5.09998" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M5.09998 5.25H11.9C13.4 5.25 14 5.89 14 7.48V8.52C14 10.11 13.4 10.75 11.9 10.75H5.09998" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 1.98999V21.99" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default AlignLeftTwotone;
