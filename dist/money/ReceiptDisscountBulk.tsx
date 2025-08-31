import React from 'react';

export interface ReceiptDisscountBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ReceiptDisscountBulk: React.FC<ReceiptDisscountBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M6.73 19.7C7.55 18.82 8.8 18.89 9.52 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04C20.5 3.01 19.56 2 15.78 2H8.22C4.44 2 3.5 3.01 3.5 7.04V18.3C3.5 20.97 4.96 21.59 6.73 19.7Z" fill={color}/>
<path d="M15 14C14.44 14 14 13.55 14 13C14 12.45 14.45 12 15 12C15.55 12 16 12.45 16 13C16 13.55 15.56 14 15 14Z" fill={color}/>
<path d="M9 9C8.44 9 8 8.55 8 8C8 7.45 8.45 7 9 7C9.55 7 10 7.45 10 8C10 8.55 9.56 9 9 9Z" fill={color}/>
<path d="M8.63007 14.55C8.44007 14.55 8.25007 14.48 8.10007 14.33C7.81007 14.04 7.81007 13.56 8.10007 13.27L14.8301 6.54001C15.1201 6.25001 15.6001 6.25001 15.8901 6.54001C16.1801 6.83001 16.1801 7.31001 15.8901 7.60001L9.16007 14.33C9.02007 14.48 8.82007 14.55 8.63007 14.55Z" fill={color}/>
</svg>

  );
};

export default ReceiptDisscountBulk;
