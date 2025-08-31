import React from 'react';

export interface WatchStatusLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const WatchStatusLinear: React.FC<WatchStatusLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 19H15.5C17.83 19 19 17.83 19 15.5V8.5C19 6.17 17.83 5 15.5 5H8.5C6.17 5 5 6.17 5 8.5V15.5C5 17.83 6.17 19 8.5 19Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 2H8" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22H8" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 14V10" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15 14V12" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 14V13" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default WatchStatusLinear;
