import React from 'react';

export interface ReceiptEditBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const ReceiptEditBulk: React.FC<ReceiptEditBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M6.73001 19.7C7.55001 18.82 8.79999 18.89 9.51999 19.85L10.53 21.2C11.34 22.27 12.65 22.27 13.46 21.2L14.47 19.85C15.19 18.89 16.44 18.82 17.26 19.7C19.04 21.6 20.49 20.97 20.49 18.31V7.04999C20.49 3.01999 19.55 2.01001 15.77 2.01001H8.20999C4.42999 2.01001 3.48999 3.01999 3.48999 7.04999V18.31C3.49999 20.97 4.96001 21.59 6.73001 19.7Z" fill={color}/>
<path d="M14.8399 9.98993L14.3399 10.4999H14.3299L11.2999 13.5299C11.1699 13.6599 10.8999 13.7999 10.7099 13.8199L9.35993 14.0199C8.86993 14.0899 8.52995 13.7399 8.59995 13.2599L8.78996 11.8999C8.81996 11.7099 8.94993 11.4499 9.07993 11.3099L12.1199 8.27994L12.6199 7.76993C12.9499 7.43993 13.3199 7.19995 13.7199 7.19995C14.0599 7.19995 14.4299 7.35993 14.8399 7.76993C15.7399 8.66993 15.4499 9.37993 14.8399 9.98993Z" fill={color}/>
</svg>

  );
};

export default ReceiptEditBulk;
