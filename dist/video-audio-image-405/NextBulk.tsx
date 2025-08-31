import React from 'react';

export interface NextBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const NextBulk: React.FC<NextBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M3.76001 7.22005V16.7901C3.76001 18.7501 5.89 19.98 7.59 19L11.74 16.61L15.89 14.21C17.59 13.23 17.59 10.78 15.89 9.80004L11.74 7.40004L7.59 5.01006C5.89 4.03006 3.76001 5.25005 3.76001 7.22005Z" fill={color}/>
<path d="M20.24 18.9301C19.83 18.9301 19.49 18.5901 19.49 18.1801V5.82007C19.49 5.41007 19.83 5.07007 20.24 5.07007C20.65 5.07007 20.99 5.41007 20.99 5.82007V18.1801C20.99 18.5901 20.66 18.9301 20.24 18.9301Z" fill={color}/>
</svg>

  );
};

export default NextBulk;
