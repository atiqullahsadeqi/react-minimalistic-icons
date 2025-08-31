import React from 'react';

export interface LampBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const LampBulk: React.FC<LampBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M18.21 14.69H5.78999C4.12999 14.69 3.12999 13.38 3.56999 11.78L5.76999 3.7C6.01999 2.77 7.02999 2 7.98999 2H16.01C16.97 2 17.98 2.77 18.23 3.7L20.43 11.78C20.87 13.38 19.87 14.69 18.21 14.69Z" fill={color}/>
<path d="M16.75 21.25C16.75 21.66 16.41 22 16 22H8C7.59 22 7.25 21.66 7.25 21.25C7.25 20.84 7.59 20.5 8 20.5H11.25V14.69H12.75V20.5H16C16.41 20.5 16.75 20.84 16.75 21.25Z" fill={color}/>
</svg>

  );
};

export default LampBulk;
