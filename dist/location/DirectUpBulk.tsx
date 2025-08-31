import React from 'react';

export interface DirectUpBulkProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

const DirectUpBulk: React.FC<DirectUpBulkProps> = ({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}) => {
  return (
    <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0202 21.2901L13.5402 19.5501C12.5702 19.0701 11.4402 19.0701 10.4702 19.5501L6.99016 21.2901C4.00016 22.7801 0.850157 19.5701 2.41016 16.6201L3.23016 15.0801C3.34016 14.8701 3.52016 14.7001 3.74016 14.6001L16.3802 8.90005C16.9002 8.67005 17.5102 8.88005 17.7702 9.38005L21.5802 16.6201C23.1402 19.5701 20.0002 22.7801 17.0202 21.2901Z" fill={color}/>
<path opacity="0.4" d="M15.6 7.69002L7.31996 11.42C6.38996 11.84 5.44996 10.84 5.92996 9.94002L8.96996 4.17002C10.26 1.72002 13.76 1.72002 15.05 4.17002L16.12 6.21002C16.4 6.76002 16.16 7.44002 15.6 7.69002Z" fill={color}/>
</svg>

  );
};

export default DirectUpBulk;
