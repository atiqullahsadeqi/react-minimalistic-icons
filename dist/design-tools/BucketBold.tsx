import React from 'react';

export interface BucketBoldProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BucketBold: React.FC<BucketBoldProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0401 10.64L9.6901 3.29L8.8201 2.42C8.5301 2.13 8.0501 2.13 7.7601 2.42C7.4701 2.71 7.4701 3.19 7.7601 3.48L8.6301 4.35L3.0001 9.98C2.3601 10.62 2.0201 11.27 2.0001 11.92C1.9801 12.61 2.3201 13.3 3.0001 13.99L7.0101 18C8.3501 19.33 9.6901 19.33 11.0201 18L17.0401 11.98C17.2401 11.78 17.3301 11.51 17.3101 11.25C17.3001 11.03 17.2001 10.8 17.0401 10.64Z" fill={color}/>
<path d="M16 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H16C16.41 21.25 16.75 21.59 16.75 22C16.75 22.41 16.41 22.75 16 22.75Z" fill={color}/>
<path d="M19.35 14.78C19.09 14.5 18.61 14.5 18.35 14.78C18.04 15.12 16.5 16.85 16.5 18.17C16.5 19.47 17.55 20.52 18.85 20.52C20.15 20.52 21.2 19.47 21.2 18.17C21.2 16.86 19.66 15.12 19.35 14.78Z" fill={color}/>
</svg>

  );
};

export default BucketBold;
