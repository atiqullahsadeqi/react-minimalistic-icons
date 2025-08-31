import React from 'react';

export interface BlurLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BlurLinear: React.FC<BlurLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.61 2.21C12.25 1.93 11.7501 1.93 11.3901 2.21C9.49007 3.66 3.88003 8.39 3.91003 13.9C3.91003 18.36 7.54007 22 12.0101 22C16.4801 22 20.11 18.37 20.11 13.91C20.12 8.48 14.5 3.67 12.61 2.21Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M12 2V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18.96L19.7 15.22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 13.96L19.37 10.38" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 8.96001L17.03 6.51001" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default BlurLinear;
