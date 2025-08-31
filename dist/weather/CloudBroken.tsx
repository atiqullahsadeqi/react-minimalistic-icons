import React from 'react';

export interface CloudBrokenProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CloudBroken: React.FC<CloudBrokenProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.85 9.92001C16.37 9.66001 16.94 9.52001 17.52 9.51001" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.99 3.89999C7.98004 3.56999 3.62004 7.02999 5.59004 12.52" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.26003 12.9301C6.73003 12.6601 6.14003 12.5201 5.54003 12.5201C0.860029 12.8501 0.860029 19.6601 5.54003 19.9901H16.63C17.98 20.0001 19.28 19.5001 20.27 18.5901C23.56 15.7201 21.8 9.95005 17.47 9.40005C17.23 7.94005 16.69 6.79005 15.98 5.93005" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.84 9.84005C16.36 9.58005 16.93 9.44005 17.51 9.43005" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

  );
};

export default CloudBroken;
