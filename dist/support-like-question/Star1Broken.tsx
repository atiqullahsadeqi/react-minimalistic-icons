import React from 'react';

export interface Star1BrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const Star1Broken: React.FC<Star1BrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3202 11.91C22.4902 10.74 22.1102 9.55999 20.4802 9.27999L17.9302 8.85999C17.5002 8.78999 16.9902 8.41 16.8002 8.02L15.3902 5.19999C14.6302 3.66999 13.3802 3.66999 12.6202 5.19999L11.2102 8.02C11.0202 8.41 10.5102 8.77999 10.0802 8.85999L7.53019 9.27999C5.90019 9.54999 5.5202 10.73 6.6902 11.91L8.68019 13.9C9.01019 14.23 9.20019 14.88 9.09019 15.35L8.52018 17.81C8.07018 19.75 9.1102 20.51 10.8202 19.49L13.2102 18.07C13.6402 17.81 14.3602 17.81 14.7902 18.07L17.1802 19.49C18.8902 20.5 19.9302 19.75 19.4802 17.81L18.9102 15.35" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8 5H2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5 19H2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default Star1Broken;
