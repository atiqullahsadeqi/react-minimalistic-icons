import React from 'react';

export interface MedalBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MedalBroken: React.FC<MedalBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.5 3.66C17.88 4.85 18.75 6.58 18.75 8.5C18.75 12.09 15.73 15 12 15C8.27 15 5.25 12.09 5.25 8.5C5.25 4.91 8.27 2 12 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.51999 13.5201L7.51001 20.9001C7.51001 21.8001 8.14001 22.2401 8.92001 21.8701L11.6 20.6001C11.82 20.4901 12.19 20.4901 12.41 20.6001L15.1 21.8701C15.87 22.2301 16.51 21.8001 16.51 20.9001V13.3401" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default MedalBroken;
