import React from 'react';

export interface LinkBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LinkBulk: React.FC<LinkBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M11 7.5V16.5C11 17.05 10.55 17.5 10 17.5H7.50001C5.98001 17.5 4.61001 16.88 3.61001 15.89C2.67001 14.94 2.06001 13.65 2.00001 12.22C1.88001 9.08 4.62001 6.5 7.77001 6.5H10C10.55 6.5 11 6.95 11 7.5Z" fill={color}/>
<path opacity="0.4" d="M22 11.78C22.13 14.93 19.39 17.5 16.24 17.5H14.01C13.46 17.5 13.01 17.05 13.01 16.5V7.5C13.01 6.95 13.46 6.5 14.01 6.5H16.51C18.03 6.5 19.4 7.12 20.4 8.11C21.33 9.06 21.94 10.35 22 11.78Z" fill={color}/>
<path d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill={color}/>
</svg>

  );
};

export default LinkBulk;
