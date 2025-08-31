import React from 'react';

export interface CloudBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const CloudBulk: React.FC<CloudBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.48 10.69L2.01001 15.72C2.12001 14.13 3.11001 12.46 5.11001 11.97C4.52001 9.63998 5.02001 7.44998 6.54001 5.85998C8.27001 4.04998 11.03 3.32998 13.41 4.06998C15.6 4.73998 17.14 6.53998 17.69 9.03998C18.78 9.28998 19.75 9.85998 20.48 10.69Z" fill={color}/>
<path opacity="0.4" d="M20.17 18.7399C19.13 19.6899 17.77 20.2199 16.35 20.2199H5.97C3.23 20.0199 2 17.9099 2 16.0299C2 15.9299 2 15.8299 2.01 15.7199L20.48 10.6899C21.05 11.2999 21.48 12.0499 21.74 12.9099C22.4 15.0799 21.8 17.3099 20.17 18.7399Z" fill={color}/>
</svg>

  );
};

export default CloudBulk;
