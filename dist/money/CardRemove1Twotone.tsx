import React from 'react';

export interface CardRemove1TwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CardRemove1Twotone: React.FC<CardRemove1TwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.8999 10.03H21.8999" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.4599 20.53H6.34985C2.79985 20.53 1.8999 19.65 1.8999 16.14V7.92004C1.8999 4.74004 2.63987 3.72004 5.42987 3.56004C5.70987 3.55004 6.01985 3.54004 6.34985 3.54004H17.4599C21.0099 3.54004 21.9099 4.42004 21.9099 7.93004V12.34" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M17.8999 22.03C20.109 22.03 21.8999 20.2392 21.8999 18.03C21.8999 15.8209 20.109 14.03 17.8999 14.03C15.6908 14.03 13.8999 15.8209 13.8999 18.03C13.8999 20.2392 15.6908 22.03 17.8999 22.03Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<g opacity="0.4">
<path d="M18.9698 19.15L16.8599 17.03" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.9501 17.0601L16.8301 19.1701" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<path opacity="0.4" d="M5.8999 16.03H9.8999" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default CardRemove1Twotone;
