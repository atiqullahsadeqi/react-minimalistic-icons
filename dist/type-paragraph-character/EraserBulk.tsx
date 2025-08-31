import React from 'react';

export interface EraserBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const EraserBulk: React.FC<EraserBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M16.19 2H7.82002C4.18002 2 2.01001 4.17 2.01001 7.81V16.18C2.01001 19.82 4.18002 21.99 7.82002 21.99H16.19C19.83 21.99 22 19.82 22 16.18V7.81C22 4.17 19.83 2 16.19 2Z" fill={color}/>
<path d="M13.5799 14.69L11.2599 17.01C10.6199 17.66 9.56993 17.66 8.91993 17.01L6.98994 15.08C6.33994 14.43 6.33994 13.38 6.98994 12.74L9.30993 10.42L13.5799 14.69Z" fill={color}/>
<path opacity="0.6" d="M17.0101 11.26L13.5801 14.69L9.31006 10.42L12.7401 6.99C13.3801 6.34 14.4301 6.34 15.0801 6.99L17.0101 8.92C17.6601 9.57 17.6601 10.62 17.0101 11.26Z" fill={color}/>
</svg>

  );
};

export default EraserBulk;
