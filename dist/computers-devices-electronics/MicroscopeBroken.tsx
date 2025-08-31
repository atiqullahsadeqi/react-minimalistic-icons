import React from 'react';

export interface MicroscopeBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MicroscopeBroken: React.FC<MicroscopeBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.04 4.51999L11.83 6L15.03 10.78L20.69 6.98999C21.26 6.60999 21.41 5.82999 21.03 5.26999L19.21 2.56C18.83 1.99 18.05 1.84 17.49 2.22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.1738 6.47923L7.39616 9.67911L9.95607 13.5013L14.7337 10.3014L12.1738 6.47923Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.83 15.9L9.78 13.26L7.54 9.92001L3.59 12.56C3.13 12.87 3.01 13.49 3.32 13.95L4.45 15.63C4.75 16.08 5.37 16.2 5.83 15.9Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.05 12.2L7.56 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12.2L16.44 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default MicroscopeBroken;
