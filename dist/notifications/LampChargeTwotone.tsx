import React from 'react';

export interface LampChargeTwotoneProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LampChargeTwotone: React.FC<LampChargeTwotoneProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12.0001 7.89001L10.9301 9.75001C10.6901 10.16 10.8901 10.5 11.3601 10.5H12.6301C13.1101 10.5 13.3001 10.84 13.0601 11.25L12.0001 13.11" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.30011 18.0401V16.8801C6.00011 15.4901 4.11011 12.7801 4.11011 9.90005C4.11011 4.95005 8.66011 1.07005 13.8001 2.19005C16.0601 2.69005 18.0401 4.19005 19.0701 6.26005C21.1601 10.4601 18.9601 14.9201 15.7301 16.8701V18.0301C15.7301 18.3201 15.8401 18.9901 14.7701 18.9901H9.26011C8.16011 19.0001 8.30011 18.5701 8.30011 18.0401Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M8.5 22C10.79 21.35 13.21 21.35 15.5 22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default LampChargeTwotone;
