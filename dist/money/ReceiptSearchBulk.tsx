import React from 'react';

export interface ReceiptSearchBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ReceiptSearchBulk: React.FC<ReceiptSearchBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M6.73001 19.7C7.55001 18.82 8.79999 18.89 9.51999 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04999C20.49 3.01999 19.55 2.01001 15.77 2.01001H8.20999C4.42999 2.01001 3.48999 3.01999 3.48999 7.04999V18.31C3.49999 20.97 4.96001 21.59 6.73001 19.7Z" fill={color}/>
<path d="M15.6601 13.47L14.9201 12.73C15.3001 12.15 15.5301 11.45 15.5301 10.7C15.5301 8.66001 13.8701 7 11.8301 7C9.79011 7 8.13013 8.66001 8.13013 10.7C8.13013 12.74 9.79011 14.4 11.8301 14.4C12.5801 14.4 13.2801 14.17 13.8601 13.79L14.6001 14.53C14.7501 14.68 14.9401 14.75 15.1301 14.75C15.3201 14.75 15.5101 14.68 15.6601 14.53C15.9501 14.24 15.9501 13.76 15.6601 13.47Z" fill={color}/>
</svg>

  );
};

export default ReceiptSearchBulk;
