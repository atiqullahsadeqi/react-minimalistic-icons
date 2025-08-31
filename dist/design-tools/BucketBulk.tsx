import React from 'react';

export interface BucketBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const BucketBulk: React.FC<BucketBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3101 11.25C17.3301 11.51 17.2401 11.78 17.0401 11.98L11.0201 18C9.6901 19.33 8.3501 19.33 7.0101 18L3.0001 13.99C2.3201 13.3 1.9801 12.61 2.0001 11.92H2.0701L17.1901 11.26L17.3101 11.25Z" fill={color}/>
<path opacity="0.4" d="M17.04 10.64L9.69 3.28995L8.82 2.41995C8.53 2.12995 8.05 2.12995 7.76 2.41995C7.47 2.70995 7.47 3.18995 7.76 3.47995L8.63 4.34995L3 9.97995C2.36 10.62 2.02 11.27 2 11.92H2.07L17.19 11.26L17.31 11.25C17.3 11.03 17.2 10.8 17.04 10.64Z" fill={color}/>
<path d="M16 22.75H3C2.59 22.75 2.25 22.41 2.25 22C2.25 21.59 2.59 21.25 3 21.25H16C16.41 21.25 16.75 21.59 16.75 22C16.75 22.41 16.41 22.75 16 22.75Z" fill={color}/>
<path d="M19.35 14.78C19.09 14.5 18.61 14.5 18.35 14.78C18.04 15.12 16.5 16.86 16.5 18.17C16.5 19.47 17.55 20.52 18.85 20.52C20.15 20.52 21.2 19.47 21.2 18.17C21.2 16.86 19.66 15.12 19.35 14.78Z" fill={color}/>
</svg>

  );
};

export default BucketBulk;
