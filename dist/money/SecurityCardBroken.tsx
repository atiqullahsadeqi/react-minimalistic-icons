import React from 'react';

export interface SecurityCardBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SecurityCardBroken: React.FC<SecurityCardBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00023 7.14C2.00023 5.92 2.93024 4.57 4.07024 4.14L9.05023 2.26998C9.87023 1.95998 11.2302 1.95998 12.0502 2.26998L17.0202 4.14C17.9702 4.5 18.7802 5.49998 19.0302 6.51998H11.7302C11.5102 6.51998 11.3102 6.52999 11.1202 6.52999C9.27022 6.63999 8.79022 7.31 8.79022 9.42V14.85C8.79022 17.16 9.38022 17.75 11.7302 17.75H17.6502C17.5602 17.83 17.4702 17.9 17.3802 17.98L13.1102 21.18C11.7002 22.23 9.40022 22.23 7.98022 21.18L3.70023 17.98C2.76023 17.28 1.99023 15.73 1.99023 14.56V11.24" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.80029 11.22H22.0003" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.0003 9.42001V14.97C21.9803 17.19 21.3703 17.74 19.0603 17.74H11.7403C9.3903 17.74 8.80029 17.15 8.80029 14.84V9.41C8.80029 7.31 9.28029 6.63999 11.1303 6.51999C11.3203 6.51999 11.5203 6.51001 11.7403 6.51001H19.0603C21.4103 6.52001 22.0003 7.10001 22.0003 9.42001Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.3203 15.26H12.6503" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.75 15.26H18.02" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default SecurityCardBroken;
