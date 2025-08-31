import React from 'react';

export interface CropBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CropBulk: React.FC<CropBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M13.9401 4.82999H6.83008C5.73008 4.82999 4.83008 5.72999 4.83008 6.82999V13.94C4.83008 16.83 7.17008 19.17 10.0601 19.17H17.1701C18.2701 19.17 19.1701 18.27 19.1701 17.17V10.06C19.1701 7.16999 16.8301 4.82999 13.9401 4.82999Z" fill={color}/>
<path d="M5.53 2C5.11 2 4.78 2.34 4.78 2.75V4.78H2.75C2.34 4.78 2 5.11 2 5.53C2 5.95 2.34 6.28 2.75 6.28H5.53C5.94 6.28 6.28 5.94 6.28 5.53V2.75C6.28 2.34 5.94 2 5.53 2Z" fill={color}/>
<path d="M21.25 17.72H18.47C18.06 17.72 17.72 18.06 17.72 18.47V21.25C17.72 21.66 18.06 22 18.47 22C18.88 22 19.22 21.66 19.22 21.25V19.22H21.25C21.66 19.22 22 18.88 22 18.47C22 18.06 21.66 17.72 21.25 17.72Z" fill={color}/>
</svg>

  );
};

export default CropBulk;
