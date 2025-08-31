import React from 'react';

export interface FingerCricleBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const FingerCricleBroken: React.FC<FingerCricleBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0001 9.12012C12.9101 9.12012 13.6501 9.86014 13.6501 10.7701V13.2401C13.6501 14.1501 12.9101 14.8901 12.0001 14.8901C11.0901 14.8901 10.3501 14.1501 10.3501 13.2401" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
<path d="M16.98 13.4699C16.78 16.0499 14.62 18.0699 12 18.0699C9.24 18.0699 7 15.8299 7 13.0699V10.9299C7 8.16993 9.24 5.92993 12 5.92993C14.59 5.92993 16.72 7.89992 16.97 10.4199" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
</svg>

  );
};

export default FingerCricleBroken;
