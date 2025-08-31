import React from 'react';

export interface CropBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CropBold: React.FC<CropBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.53 2C5.11 2 4.78 2.34 4.78 2.75V4.78H2.75C2.34 4.78 2 5.11 2 5.53C2 5.95 2.34 6.28 2.75 6.28H5.53C5.94 6.28 6.28 5.94 6.28 5.53V2.75C6.28 2.34 5.94 2 5.53 2Z" fill={color}/>
<path d="M21.25 17.72H18.47C18.06 17.72 17.72 18.06 17.72 18.47V21.25C17.72 21.66 18.06 22 18.47 22C18.88 22 19.22 21.66 19.22 21.25V19.22H21.25C21.66 19.22 22 18.88 22 18.47C22 18.06 21.66 17.72 21.25 17.72Z" fill={color}/>
<path d="M16.7201 18.47C16.7201 17.51 17.5101 16.72 18.4701 16.72H19.1601V10.05C19.1601 7.16001 16.8201 4.82001 13.9301 4.82001H7.28008V5.51001C7.28008 6.47001 6.49008 7.26001 5.53008 7.26001H4.83008V13.93C4.83008 16.82 7.17008 19.16 10.0601 19.16H16.7301V18.47H16.7201Z" fill={color}/>
</svg>

  );
};

export default CropBold;
