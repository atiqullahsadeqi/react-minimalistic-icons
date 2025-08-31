import React from 'react';

export interface CardPosBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CardPosBroken: React.FC<CardPosBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.92993 15.88L15.8799 3.92999" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.1001 18.28L12.3001 17.08" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.79 15.59L16.18 13.2" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.43 8.47998C22.53 10.58 22.52 11.64 20.4 13.76L13.76 20.4C11.64 22.52 10.58 22.53 8.47998 20.43L3.56998 15.52C1.46998 13.42 1.47998 12.36 3.59998 10.24L10.24 3.59998C12.36 1.47998 13.42 1.46998 15.52 3.56998L17.42 5.46998" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 22H22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default CardPosBroken;
