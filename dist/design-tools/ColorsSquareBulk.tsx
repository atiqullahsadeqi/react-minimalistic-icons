import React from 'react';

export interface ColorsSquareBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ColorsSquareBulk: React.FC<ColorsSquareBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.19 2H7.82001C4.17001 2 2 4.17 2 7.81V16.18C2 19.82 4.17 21.99 7.81 21.99H16.18C19.82 21.99 21.99 19.82 21.99 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill={color}/>
<path opacity="0.6" d="M13.2 14.4C13.2 15.46 12.74 16.42 12 17.08C11.36 17.66 10.52 18 9.59998 18C7.60998 18 6 16.39 6 14.4C6 12.74 7.13002 11.34 8.65002 10.93C9.06002 11.97 9.94999 12.78 11.05 13.08C11.35 13.16 11.67 13.21 12 13.21C12.33 13.21 12.65 13.17 12.95 13.08C13.11 13.48 13.2 13.93 13.2 14.4Z" fill={color}/>
<path d="M15.5999 9.6C15.5999 10.07 15.5099 10.52 15.3499 10.93C14.9399 11.97 14.0499 12.78 12.9499 13.08C12.6499 13.16 12.3299 13.21 11.9999 13.21C11.6699 13.21 11.3499 13.17 11.0499 13.08C9.94987 12.78 9.0599 11.98 8.6499 10.93C8.4899 10.52 8.3999 10.07 8.3999 9.6C8.3999 7.61 10.0099 6 11.9999 6C13.9899 6 15.5999 7.61 15.5999 9.6Z" fill={color}/>
<path opacity="0.4" d="M18 14.4C18 16.39 16.39 18 14.4 18C13.48 18 12.64 17.65 12 17.08C12.74 16.43 13.2 15.47 13.2 14.4C13.2 13.93 13.11 13.48 12.95 13.07C14.05 12.77 14.94 11.97 15.35 10.92C16.87 11.34 18 12.74 18 14.4Z" fill={color}/>
</svg>

  );
};

export default ColorsSquareBulk;
