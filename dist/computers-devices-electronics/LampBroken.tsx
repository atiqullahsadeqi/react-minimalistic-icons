import React from 'react';

export interface LampBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LampBroken: React.FC<LampBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.94 2H7.99001C7.03001 2 6.02001 2.77 5.77001 3.7L3.57001 11.77C3.13001 13.37 4.13001 14.68 5.80001 14.68H18.22C19.88 14.68 20.88 13.37 20.45 11.77L18.25 3.7C17.98 2.77 16.97 2 16.01 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 15V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 22H16" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default LampBroken;
