import React from 'react';

export interface TriangleBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const TriangleBold: React.FC<TriangleBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2499 3.9001V12.9201C11.2499 13.2501 11.0899 13.5501 10.8199 13.7401L3.60993 18.7901C3.01993 19.2001 2.17993 18.8801 2.04993 18.1701C1.89993 17.3101 2.09993 16.3001 2.69993 15.2101L5.81993 9.6001L8.75993 4.3101C8.98993 3.9001 9.23993 3.5401 9.49993 3.2301C10.0999 2.5301 11.2499 2.9801 11.2499 3.9001Z" fill={color}/>
<path d="M20.39 18.7901L13.18 13.7401C12.91 13.5501 12.75 13.2501 12.75 12.9201V3.9001C12.75 2.9801 13.9 2.5301 14.5 3.2301C14.76 3.5401 15.01 3.9001 15.24 4.3101L18.18 9.6001L21.3 15.2101C21.9 16.3001 22.1 17.3101 21.95 18.1701C21.82 18.8801 20.98 19.2001 20.39 18.7901Z" fill={color}/>
<path d="M5.25994 19.14L11.4099 15.04C11.7399 14.82 12.2799 14.82 12.6099 15.04L18.7599 19.14C20.3899 20.23 20.1199 21.12 18.1599 21.12H5.84994C3.89994 21.11 3.62994 20.22 5.25994 19.14Z" fill={color}/>
</svg>

  );
};

export default TriangleBold;
