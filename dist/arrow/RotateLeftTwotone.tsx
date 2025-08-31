import React from 'react';

export interface RotateLeftTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const RotateLeftTwotone: React.FC<RotateLeftTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9.11008 5.08002C9.98008 4.82002 10.9401 4.65002 12.0001 4.65002C16.7901 4.65002 20.6701 8.53002 20.6701 13.32C20.6701 18.11 16.7901 21.99 12.0001 21.99C7.21008 21.99 3.33008 18.11 3.33008 13.32C3.33008 11.54 3.87008 9.88002 4.79008 8.50002" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.87012 5.32L10.7601 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.87012 5.31995L11.2401 7.77995" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default RotateLeftTwotone;
