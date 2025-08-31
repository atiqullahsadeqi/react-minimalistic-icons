import React from 'react';

export interface MonitorRecorderLinearProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const MonitorRecorderLinear: React.FC<MonitorRecorderLinearProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.89V12.78C22 16.34 21.11 17.22 17.56 17.22H6.44C2.89 17.22 2 16.33 2 12.78V6.44C2 2.89 2.89 2 6.44 2H8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 17.22V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 13H22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 22H16.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.86 9.36999H13.1C11.72 9.36999 11.26 8.44999 11.26 7.52999V4.00999C11.26 2.90999 12.16 2.00999 13.26 2.00999H17.86C18.88 2.00999 19.7 2.82999 19.7 3.84999V7.52999C19.7 8.54999 18.88 9.36999 17.86 9.36999Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.91 7.92001L19.7 7.07001V4.31001L20.91 3.46001C21.51 3.05001 22 3.30001 22 4.03001V7.36001C22 8.09001 21.51 8.34001 20.91 7.92001Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default MonitorRecorderLinear;
